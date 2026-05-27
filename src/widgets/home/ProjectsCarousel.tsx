"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import { BRAND, whatsappUrl } from "@/shared/config/brand";
import { HorizontalCarousel, useCarouselIndex } from "@/shared/ui/HorizontalCarousel";

const REELS = [
  { kind: "video" as const, src: "/reels/proyecto-1.mp4" },
  { kind: "video" as const, src: "/reels/proyecto-2.mp4" },
  { kind: "video" as const, src: "/reels/proyecto-3.mp4" },
  { kind: "video" as const, src: "/reels/proyecto-4.mp4" },
  { kind: "video" as const, src: "/reels/proyecto-5.mp4" },
  { kind: "video" as const, src: "/reels/proyecto-6.mp4" },
];

function ProjectSlide({ src, index, title }: { src: string; index: number; title: string }) {
  const activeIndex = useCarouselIndex();
  const isActive = activeIndex === index;

  return (
    <article
      className={`carousel-slide relative w-[min(88vw,22rem)] shrink-0 snap-start overflow-hidden rounded-3xl border bg-black/60 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.9)] transition duration-300 sm:w-[min(62vw,20rem)] md:w-[min(44vw,18rem)] lg:w-[min(30vw,16rem)] ${
        isActive ? "border-amber-500/35 scale-[1.02]" : "border-white/10"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <div className="relative aspect-[9/16] max-h-[74dvh] md:max-h-[80dvh]">
        <ProjectVideo src={src} title={title} isActive={isActive} />
      </div>
    </article>
  );
}

function ProjectVideo({ src, title, isActive }: { src: string; title: string; isActive: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (isActive) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={ref}
      title={title}
      src={src}
      className="pointer-events-none h-full w-full select-none object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
    />
  );
}

export function ProjectsCarousel() {
  const { t } = useSiteLanguage();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/65 p-5 md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_220px_at_15%_0%,rgba(251,146,60,0.28),transparent_58%),radial-gradient(700px_280px_at_95%_100%,rgba(180,83,9,0.18),transparent_60%)]" />

      <div className="relative z-10 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/80">
            {t("projectsTag")}
          </p>
          <h3 className="typo-section mt-1 text-[1.85rem] md:text-[2.35rem]">{t("projectsTitle")}</h3>
        </div>
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-zinc-500">{t("projectsHint")}</p>
      </div>

      <HorizontalCarousel
        itemCount={REELS.length}
        ariaLabel={t("projectsTitle")}
        autoPlayMs={7000}
        className="relative z-10 mt-5"
        viewportClassName="rounded-3xl border border-white/10 bg-black/45 p-3"
      >
        <div className="carousel-track flex w-max gap-4">
          {REELS.map((reel, i) => (
            <ProjectSlide
              key={reel.src}
              src={reel.src}
              index={i}
              title={`Proyecto ${i + 1} — ${BRAND.shortName}`}
            />
          ))}
        </div>
      </HorizontalCarousel>

      <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/cotizacion"
          className="typo-cta inline-flex flex-1 items-center justify-center rounded-xl border border-amber-600/35 bg-gradient-to-r from-amber-800 to-orange-600 px-5 py-3.5 text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(234,88,12,0.35)]"
        >
          {t("projectsCta1")}
        </Link>
        <a
          href={whatsappUrl(BRAND.whatsapp.quoteMessage)}
          target="_blank"
          rel="noreferrer"
          className="typo-cta inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-zinc-100 transition hover:bg-white/10"
        >
          {t("projectsCta2")}
        </a>
      </div>
    </section>
  );
}
