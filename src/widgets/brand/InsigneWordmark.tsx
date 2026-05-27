"use client";

import { cn } from "@/shared/lib/cn";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";

type InsigneWordmarkProps = {
  className?: string;
  size?: "hero" | "compact";
  /** Banner: solo nombre de marca */
  variant?: "full" | "minimal";
};

/** Wordmark tipográfico Victorian / Circus con textura distressed */
export function InsigneWordmark({
  className,
  size = "hero",
  variant = "full",
}: InsigneWordmarkProps) {
  const { t } = useSiteLanguage();
  const isHero = size === "hero";
  const minimal = variant === "minimal";

  return (
    <div
      className={cn(
        "wordmark-vintage relative select-none text-center",
        isHero ? "max-w-[min(92vw,52rem)]" : "max-w-md",
        className,
      )}
      aria-label="Insigne Corpus Tattoo"
    >
      {!minimal ? (
        <p
          className={cn(
            "wordmark-vintage__eyebrow font-sans font-semibold uppercase tracking-[0.42em] text-amber-200/75",
            isHero ? "text-[0.52rem] md:text-[0.62rem]" : "text-[0.48rem]",
          )}
        >
          {t("wordmarkEyebrow")}
        </p>
      ) : null}

      <h1
        className={cn(
          "wordmark-vintage__title font-vintage uppercase leading-[0.88] text-[#f4e8d4]",
          minimal && isHero
            ? "text-[2.6rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[5.6rem]"
            : isHero
              ? "mt-2 text-[2.35rem] sm:text-[3.1rem] md:text-[4.6rem] lg:text-[5.2rem]"
              : "mt-1 text-[1.85rem] sm:text-[2.4rem]",
          !minimal && isHero && "mt-2",
        )}
      >
        <span className="wordmark-vintage__line block">Insigne</span>
        <span className="wordmark-vintage__line block text-[0.92em] text-[#e8c9a0]">Corpus</span>
      </h1>

      <p
        className={cn(
          "wordmark-vintage__tattoo font-vintage uppercase tracking-[0.28em] text-amber-400/95",
          minimal && isHero
            ? "mt-1.5 text-[1.15rem] md:text-[1.45rem]"
            : isHero
              ? "mt-1 text-[1.05rem] md:text-[1.35rem]"
              : "mt-1 text-[0.95rem]",
        )}
      >
        Tattoo
      </p>

      {!minimal ? (
        <div className="wordmark-vintage__ornament mx-auto mt-3 flex items-center justify-center gap-3 opacity-80">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-600/70 md:w-16" />
          <span className="font-serif text-[0.65rem] uppercase tracking-[0.35em] text-amber-300/60 md:text-xs">
            {t("wordmarkOrnament")}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-600/70 md:w-16" />
        </div>
      ) : null}
    </div>
  );
}
