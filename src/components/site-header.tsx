"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-20 bg-pool/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#pocetak"
          className="flex items-center gap-3 text-white uppercase"
          onClick={closeMenu}
        >
          <Image
            src="/logo/logo.svg"
            alt=""
            width={64}
            height={64}
            className="size-14 shrink-0 sm:size-16"
            priority
          />
          <span className="text-xl font-bold tracking-[0.12em] sm:text-2xl">
            {siteConfig.name}
          </span>
        </a>

        <nav
          aria-label="Glavna navigacija"
          className="hidden items-center gap-5 text-sm text-white/80 md:flex"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block size-5" aria-hidden>
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition ${
                open ? "top-2 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute top-2 left-0 block h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition ${
                open ? "top-2 -rotate-45" : "top-3.5"
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobilna navigacija"
        className={`border-t border-white/10 md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto flex max-w-5xl flex-col px-6 py-3">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-3 text-base text-white/90 transition hover:text-white"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
