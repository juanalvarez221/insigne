"use client";

import { cn } from "@/shared/lib/cn";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";

type InsigneWordmarkProps = {
  className?: string;
  size?: "hero" | "compact";
};

/** Wordmark tipográfico Victorian / Circus con textura distressed */
export function InsigneWordmark({ className, size = "hero" }: InsigneWordmarkProps) {
  const { t } = useSiteLanguage();
  const isHero = size === "hero";

  return (
    <div
      className={cn(
        "wordmark-vintage relative select-none text-center",
        isHero ? "max-w-[min(92vw,52rem)]" : "max-w-md",
        className,
      )}
      aria-label="Insigne Corpus Tattoo"
    >
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
        <defs>
          <filter id="insigne-distress" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              seed="12"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.8" xChannelSelector="R" />
          </filter>
          <filter id="insigne-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" result="g" />
            <feColorMatrix type="saturate" values="0" in="g" result="gray" />
            <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
          </filter>
        </defs>
      </svg>

      <p
        className={cn(
          "wordmark-vintage__eyebrow font-sans font-semibold uppercase tracking-[0.42em] text-amber-200/75",
          isHero ? "text-[0.52rem] md:text-[0.62rem]" : "text-[0.48rem]",
        )}
      >
        {t("wordmarkEyebrow")}
      </p>

      <h1
        className={cn(
          "wordmark-vintage__title font-vintage uppercase leading-[0.88] text-[#f4e8d4]",
          isHero
            ? "mt-2 text-[2.35rem] sm:text-[3.1rem] md:text-[4.6rem] lg:text-[5.2rem]"
            : "mt-1 text-[1.85rem] sm:text-[2.4rem]",
        )}
      >
        <span className="wordmark-vintage__line block">Insigne</span>
        <span className="wordmark-vintage__line block text-[0.92em] text-[#e8c9a0]">Corpus</span>
      </h1>

      <p
        className={cn(
          "wordmark-vintage__tattoo font-vintage mt-1 uppercase tracking-[0.28em] text-amber-400/95",
          isHero ? "text-[1.05rem] md:text-[1.35rem]" : "text-[0.95rem]",
        )}
      >
        Tattoo
      </p>

      <div className="wordmark-vintage__ornament mx-auto mt-3 flex items-center justify-center gap-3 opacity-80">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-600/70 md:w-16" />
        <span className="font-serif text-[0.65rem] uppercase tracking-[0.35em] text-amber-300/60 md:text-xs">
          {t("wordmarkOrnament")}
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-600/70 md:w-16" />
      </div>
    </div>
  );
}
