import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          id="pocetak"
          className="relative h-[36vh] min-h-[240px] max-h-[380px] w-full overflow-hidden bg-pool"
        >
          <Image
            src="/images/banner.png"
            alt="VK Zvončac"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-pool/80 via-transparent to-transparent px-6 pb-6 sm:pb-8">
            <div className="mx-auto w-full max-w-5xl">
              <p className="text-xs tracking-[0.28em] text-sand uppercase sm:text-sm">
                od {siteConfig.founded}.
              </p>
              <h1 className="font-display mt-2 max-w-3xl text-4xl leading-[0.95] font-medium text-white sm:text-5xl">
                VK Zvončac
              </h1>
              <p className="mt-3 max-w-xl text-base text-white/90 sm:text-lg">
                Vaterpolski klub s bazena na Zvončacu.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#raspored"
                  className="rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-ink"
                >
                  Raspored treninga
                </a>
                <a
                  href="#clanstvo"
                  className="rounded-full border border-sky/60 bg-sky/15 px-5 py-2.5 text-sm text-white"
                >
                  Postani član
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="raspored"
          className="mx-auto max-w-5xl px-6 py-20 sm:py-24"
        >
          <p className="text-sm tracking-[0.22em] text-pool uppercase">
            Treninzi
          </p>
          <h2 className="font-display mt-3 text-4xl font-medium sm:text-5xl">
            Raspored treninga
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-ink/80">
            {siteConfig.training.membersNote}
          </p>

          <ul className="mt-10 divide-y divide-pool/10 overflow-hidden rounded-2xl border border-pool/10 bg-white">
            {siteConfig.training.days.map((item) => (
              <li
                key={item.day}
                className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-lg font-semibold text-pool">
                  {item.day}
                </span>
                <span className="text-lg text-ink/80">{item.time}</span>
              </li>
            ))}
          </ul>

          <div
            id="lokacija"
            className="mt-14 grid gap-8 border-t border-pool/10 pt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-12"
          >
            <div className="flex flex-col justify-center">
              <div className="mb-5 h-px w-12 bg-sand" />
              <p className="text-sm tracking-[0.22em] text-pool uppercase">
                Lokacija
              </p>
              <h3 className="font-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Bazen Zvončac, Split
              </h3>
              <p className="mt-5 text-xl font-medium text-pool">
                {siteConfig.address}
              </p>
              <p className="mt-1 text-base text-ink/60">
                {siteConfig.city}, {siteConfig.country}
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                {siteConfig.training.venueNote}
              </p>
              <a
                href={siteConfig.mapUrl}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-pool underline decoration-sand decoration-2 underline-offset-4 transition hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                Otvori u Google Kartama
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="overflow-hidden rounded-xl bg-sky/25 ring-1 ring-pool/10">
              <iframe
                title="Karta — Sustjepanski put 23, Split"
                src={siteConfig.mapEmbedUrl}
                className="h-72 w-full border-0 grayscale-[20%] contrast-[1.05] sm:h-full sm:min-h-[22rem]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="clanstvo" className="bg-pool text-white">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <p className="text-sm tracking-[0.22em] text-sand uppercase">
              Članstvo
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium sm:text-5xl">
              Postani član
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sky">
              {siteConfig.membershipInvite}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#raspored"
                className="rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-ink"
              >
                Pogledaj raspored
              </a>
              <a
                href="#kontakt"
                className="rounded-full border border-sky/50 px-5 py-2.5 text-sm text-white"
              >
                Pošalji upit
              </a>
            </div>
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm tracking-[0.22em] text-pool uppercase">
                Kontakt
              </p>
              <h2 className="font-display mt-3 text-4xl font-medium sm:text-5xl">
                Pošaljite nam poruku
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/80">
                Imate pitanje o treninzima ili članstvu? Nazovite nas, pošaljite
                e-mail ili ispunite formu.
              </p>

              <dl className="mt-10 space-y-5">
                <div>
                  <dt className="text-sm tracking-[0.18em] text-pool/70 uppercase">
                    Telefon
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={siteConfig.phoneHref}
                      className="text-xl font-semibold text-ink transition hover:text-pool"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm tracking-[0.18em] text-pool/70 uppercase">
                    E-mail
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={siteConfig.emailHref}
                      className="text-xl font-semibold text-ink transition hover:text-pool"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-pool/10 bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
