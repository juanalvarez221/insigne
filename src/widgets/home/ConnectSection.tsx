"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, HandMetal, MessageCircle, Sparkles } from "lucide-react";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import { BRAND } from "@/shared/config/brand";
import { InsigneIntroCarousel } from "@/widgets/home/InsigneIntroCarousel";
import { cn } from "@/shared/lib/cn";

const TAB_ICONS = [Sparkles, HandMetal, Flame, MessageCircle] as const;

export function ConnectSection() {
  const { t } = useSiteLanguage();
  const tabs = [
    { key: "artist", label: t("connectTab1"), text: t("connectTab1Text") },
    { key: "process", label: t("connectTab2"), text: t("connectTab2Text") },
    { key: "passion", label: t("connectTab3"), text: t("connectTab3Text") },
    { key: "start", label: t("connectTab4"), text: t("connectTab4Text") },
  ] as const;

  const [active, setActive] = useState(0);

  return (
    <div className="relative z-10">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-accent-muted text-xs font-semibold uppercase tracking-[0.28em]">
          {t("connectTag")}
        </p>
        <span className="rounded-full border border-amber-500/25 bg-amber-950/40 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-amber-200/85">
          {BRAND.location}
        </span>
      </div>
      <h2 className="typo-section mt-3 max-w-2xl leading-[1.08]">{t("connectHeadline")}</h2>
      <p className="font-serif mt-3 max-w-2xl text-base leading-relaxed text-amber-100/85 md:text-lg">
        {t("connectLeadline")}
      </p>
      <p className="typo-body mt-2 text-sm text-zinc-500">{t("connectHint")}</p>

      <div
        className="mt-6 flex flex-wrap gap-2"
        role="tablist"
        aria-label={t("connectHeadline")}
      >
        {tabs.map((tab, i) => {
          const Icon = TAB_ICONS[i];
          const selected = active === i;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={cn(
                "relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-left transition",
                selected
                  ? "border-amber-500/50 text-amber-50"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-amber-600/30 hover:text-zinc-200",
              )}
            >
              {selected ? (
                <motion.span
                  layoutId="connect-tab-bg"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-950/90 to-orange-950/70"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <Icon className="relative z-10 h-4 w-4 shrink-0 text-amber-400/90" aria-hidden />
              <span className="relative z-10 font-sans text-xs font-semibold uppercase tracking-[0.14em]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 min-h-[6.5rem] rounded-2xl border border-amber-600/15 bg-amber-950/20 px-5 py-4 md:min-h-[5.5rem] md:px-6 md:py-5">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="font-sans text-base leading-relaxed text-zinc-100 md:text-lg"
          >
            {tabs[active]?.text}
          </motion.p>
        </AnimatePresence>
      </div>

      <InsigneIntroCarousel />
    </div>
  );
}
