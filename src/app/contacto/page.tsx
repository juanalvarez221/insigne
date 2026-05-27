"use client";

import Image from "next/image";
import { AppShell } from "@/widgets/layout/AppShell";
import { Card } from "@/shared/ui/Card";
import { BRAND, BRAND_ASSETS, whatsappUrl } from "@/shared/config/brand";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";

function ContactChannel({
  title,
  description,
  href,
  cta,
  iconSrc,
  iconAlt,
}: {
  title: string;
  description: string;
  href: string;
  cta: string;
  iconSrc: string;
  iconAlt: string;
}) {
  return (
    <Card>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-950/40">
            <Image src={iconSrc} alt={iconAlt} width={26} height={26} className="object-contain" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-zinc-50">{title}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">{description}</p>
          </div>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="typo-cta mt-4 inline-flex w-full items-center justify-center rounded-xl border border-amber-600/35 bg-gradient-to-r from-amber-900/90 to-orange-700 px-4 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]"
        >
          {cta}
        </a>
      </div>
    </Card>
  );
}

export default function ContactoPage() {
  const { t } = useSiteLanguage();

  return (
    <AppShell>
      <header>
        <p className="text-xs font-semibold tracking-[0.18em] text-amber-200/70 uppercase">
          {t("contactTag")}
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-50">{t("contactTitle")}</h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t("contactLead")}</p>
      </header>

      <div className="mt-5 grid gap-3">
        <ContactChannel
          title={t("contactWhatsappTitle")}
          description={t("contactWhatsappDesc")}
          href={whatsappUrl(BRAND.whatsapp.quoteMessage)}
          cta={t("contactWhatsappCta")}
          iconSrc={BRAND_ASSETS.whatsappIcon}
          iconAlt="WhatsApp"
        />

        <ContactChannel
          title={t("contactInstagramTitle")}
          description={t("contactInstagramDesc")}
          href={BRAND.instagram.url}
          cta={t("contactInstagramCta")}
          iconSrc={BRAND_ASSETS.instagramIcon}
          iconAlt="Instagram"
        />

        <Card>
          <div className="p-4">
            <p className="text-sm font-semibold text-zinc-50">{t("contactLocationTitle")}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">{BRAND.location}</p>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
