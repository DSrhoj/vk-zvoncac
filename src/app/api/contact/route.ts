import { Resend } from "resend";
import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Molimo ispunite sva polja." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Unesite ispravan email." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !to) {
      return NextResponse.json(
        {
          error:
            "Slanje emaila nije još konfigurirano. Postavite RESEND_API_KEY i CONTACT_TO_EMAIL na Vercelu.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "VK Zvončac <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Poruka s weba — ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            error.message ||
            "Poruka nije poslana. Provjerite Resend postavke (to/from adresa).",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Došlo je do greške na serveru." },
      { status: 500 },
    );
  }
}
