"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(result.error ?? "Poruka nije poslana. Pokušajte ponovo.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Došlo je do greške. Pokušajte ponovo.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className="block">
        <span className="text-sm font-medium text-ink">Ime i prezime</span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-pool/15 bg-white px-4 py-3 text-ink outline-none focus:border-pool"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-ink">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-pool/15 bg-white px-4 py-3 text-ink outline-none focus:border-pool"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-ink">Poruka</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-pool/15 bg-white px-4 py-3 text-ink outline-none focus:border-pool"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-pool px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "sending" ? "Šaljem…" : "Pošalji poruku"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-pool" role="status">
          Poruka je poslana. Javit ćemo vam se uskoro.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-club-red" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
