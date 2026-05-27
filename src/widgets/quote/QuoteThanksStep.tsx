"use client";

import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";
import { QuoteShell } from "@/widgets/quote/QuoteShell";
import { SocialIcon } from "@/widgets/brand/SocialIcon";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import { BRAND, whatsappUrl } from "@/shared/config/brand";

export function QuoteThanksStep() {
  const { t } = useSiteLanguage();

  return (
    <QuoteShell>
      <section className="relative mx-auto max-w-3xl">
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-orange-600/20 blur-[80px]" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-amber-700/20 blur-[80px]" />

        <article className="glass-card relative overflow-hidden rounded-3xl border border-amber-500/20 p-6 text-center md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(520px_220px_at_50%_0%,rgba(234,88,12,0.14),transparent_65%)]" />

          <div className="relative z-10">
            <p className="typo-tech inline-flex items-center gap-2 uppercase tracking-[0.16em] text-amber-200/90">
              <Heart className="h-4 w-4 text-amber-300" />
              {t("quoteThanksTag")}
            </p>

            <h1 className="typo-section mt-3 text-[2rem] leading-[1.05] md:text-[2.8rem]">
              {t("quoteThanksTitle")}
            </h1>

            <p className="typo-body mx-auto mt-4 max-w-2xl text-zinc-200">{t("quoteThanksBody")}</p>
            <p className="typo-tech mx-auto mt-3 max-w-2xl text-zinc-400">{t("quoteThanksDataSaved")}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <a
                href={BRAND.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-800 to-orange-600 px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(234,88,12,0.4)]"
              >
                <SocialIcon kind="instagram" size={22} />
                {t("quoteThanksInstagramCta")}
                <ExternalLink className="h-4 w-4 opacity-80" />
              </a>

              <Link
                href="/cotizacion"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-100 transition hover:bg-white/10"
              >
                {t("quoteThanksNewQuoteCta")}
              </Link>

              <a
                href={whatsappUrl(BRAND.whatsapp.thanksMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-amber-500/25 bg-black/40 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-amber-50 transition hover:border-amber-400/40 hover:bg-black/55"
              >
                <SocialIcon kind="whatsapp" size={22} />
                {t("quoteThanksWhatsappCta")}
              </a>
            </div>
          </div>
        </article>
      </section>
    </QuoteShell>
  );
}
