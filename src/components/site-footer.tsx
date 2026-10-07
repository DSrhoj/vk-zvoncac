import Image from "next/image";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-deep px-6 py-8 text-sm text-sky">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.svg"
            alt=""
            width={56}
            height={56}
            className="size-14"
          />
          <p>{siteConfig.fullName}</p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <p className="text-xs tracking-[0.18em] text-sand uppercase">
            Kontakt
          </p>
          <a href={siteConfig.phoneHref} className="transition hover:text-white">
            {siteConfig.phone}
          </a>
          <a href={siteConfig.emailHref} className="transition hover:text-white">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
