import Image from "next/image";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-pool/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#pocetak"
          className="flex items-center gap-3 text-white uppercase"
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
        <nav aria-label="Glavna navigacija" className="flex items-center gap-4 text-sm text-white/80 sm:gap-5">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
