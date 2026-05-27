"use client";

import { createContext, useContext, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import { useHorizontalCarousel } from "@/shared/hooks/useHorizontalCarousel";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";

export const CarouselIndexContext = createContext(0);

export function useCarouselIndex() {
  return useContext(CarouselIndexContext);
}

type HorizontalCarouselProps = {
  itemCount: number;
  children: React.ReactNode;
  className?: string;
  viewportClassName?: string;
  autoPlayMs?: number;
  showDots?: boolean;
  showArrows?: boolean;
  showPlayToggle?: boolean;
  ariaLabel: string;
};

export function HorizontalCarousel({
  itemCount,
  children,
  className,
  viewportClassName,
  autoPlayMs = 5500,
  showDots = true,
  showArrows = true,
  showPlayToggle = true,
  ariaLabel,
}: HorizontalCarouselProps) {
  const { t } = useSiteLanguage();
  const [hovering, setHovering] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const paused = hovering || userPaused;

  const {
    viewportRef,
    activeIndex,
    isDragging,
    goNext,
    goPrev,
    scrollToIndex,
    handlers,
  } = useHorizontalCarousel({
    itemCount,
    autoPlayMs,
    loop: true,
    paused,
  });

  return (
    <CarouselIndexContext.Provider value={activeIndex}>
    <div
      className={cn("group/carousel relative", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {showArrows && itemCount > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label={t("carouselPrev")}
            className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-amber-50 shadow-lg backdrop-blur-md transition hover:border-amber-500/40 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 md:left-4 md:h-11 md:w-11 max-md:opacity-90 md:opacity-0 md:group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={t("carouselNext")}
            className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-amber-50 shadow-lg backdrop-blur-md transition hover:border-amber-500/40 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 md:right-4 md:h-11 md:w-11 max-md:opacity-90 md:opacity-0 md:group-hover/carousel:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="pointer-events-none absolute inset-y-3 left-0 z-20 w-8 bg-gradient-to-r from-black/80 to-transparent md:w-12" />
      <div className="pointer-events-none absolute inset-y-3 right-0 z-20 w-8 bg-gradient-to-l from-black/80 to-transparent md:w-12" />

      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            goPrev();
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            goNext();
          }
        }}
        className={cn(
          "carousel-viewport relative overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          isDragging ? "cursor-grabbing select-none" : "cursor-grab",
          viewportClassName,
        )}
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        {...handlers}
      >
        {children}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        {showDots && itemCount > 1 ? (
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label={ariaLabel}>
            {Array.from({ length: itemCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={t("carouselSlide").replace("{n}", String(i + 1)).replace("{total}", String(itemCount))}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  activeIndex === i
                    ? "w-7 bg-amber-500"
                    : "w-2 bg-white/25 hover:bg-amber-400/60",
                )}
              />
            ))}
          </div>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-2">
          {showPlayToggle && itemCount > 1 && autoPlayMs > 0 && (
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? t("carouselPlay") : t("carouselPause")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-black/40 text-amber-100/90 transition hover:border-amber-500/35 hover:bg-black/60"
            >
              {userPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          )}
          <p className="typo-tech hidden text-[10px] uppercase tracking-[0.14em] text-zinc-500 sm:block">
            {t("carouselHint")}
          </p>
        </div>
      </div>
    </div>
    </CarouselIndexContext.Provider>
  );
}
