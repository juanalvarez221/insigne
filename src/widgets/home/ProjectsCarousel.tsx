"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import { BRAND } from "@/shared/config/brand";

const REELS = [
  { kind: "video", src: "/reels/insigne-reel-1.mp4" },
  { kind: "video", src: "/reels/insigne-reel-2.mp4" },
  { kind: "video", src: "/reels/insigne-reel-3.mp4" },
  { kind: "video", src: "/reels/insigne-reel-4.mp4" },
  { kind: "video", src: "/reels/insigne-reel-5.mp4" },
  { kind: "video", src: "/reels/insigne-reel-6.mp4" },
  { kind: "video", src: "/reels/insigne-estudio.mp4" },
  { kind: "video", src: "/reels/insigne-proceso.mp4" },
] as const;

export function ProjectsCarousel() {
  const { t } = useSiteLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  // Mantener loop continuo con menor carga de decodificación simultánea.
  const reelTrack = [...REELS, ...REELS];

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    let frameId = 0;
    const speedPxPerSecond = 34;
    let current = node.scrollLeft;
    let last = performance.now();

    const tick = () => {
      const limit = node.scrollWidth / 2;
      if (!isInteracting) {
        const now = performance.now();
        const deltaSeconds = (now - last) / 1000;
        last = now;

        current += speedPxPerSecond * deltaSeconds;
        if (limit > 0 && current >= limit) current -= limit;
        node.scrollLeft = current;
      } else {
        current = node.scrollLeft;
        last = performance.now();
      }
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInteracting]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/65 p-5 md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_220px_at_15%_0%,rgba(251,146,60,0.28),transparent_58%),radial-gradient(700px_280px_at_95%_100%,rgba(124,58,237,0.2),transparent_60%)]" />

      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/80">
          {t("projectsTag")}
        </p>
        <h3 className="typo-section mt-2 text-[2rem] md:text-[2.5rem]">
          {t("projectsTitle")}
        </h3>
        <p className="typo-body mt-3 max-w-3xl">
          {t("projectsBody")}
        </p>
      </div>

      <div
        ref={scrollerRef}
        className="relative mt-6 overflow-x-auto rounded-3xl border border-white/10 bg-black/45 p-3 [scrollbar-width:none] touch-pan-x [&::-webkit-scrollbar]:hidden"
        onMouseDown={() => setIsInteracting(true)}
        onMouseUp={() => setIsInteracting(false)}
        onMouseLeave={() => setIsInteracting(false)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        onTouchCancel={() => setIsInteracting(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-black/85 to-transparent md:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-black/85 to-transparent md:w-16" />

        <div className="flex w-max transform-gpu gap-4 will-change-transform">
          {reelTrack.map((reel, i) => (
            <article
              key={`${reel.src}-${i}`}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.9)]"
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="relative h-[74dvh] w-[82vw] sm:w-[62vw] md:h-[80dvh] md:w-[44vw] lg:w-[30vw]">
                {reel.kind === "video" ? (
                  <video
                    title={`Reel ${i + 1} de ${BRAND.shortName}`}
                    src={reel.src}
                    className="pointer-events-none h-full w-full select-none object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                  />
                ) : (
                  <Image
                    src={reel.src}
                    alt={`Proyecto ${i + 1} de ${BRAND.shortName}`}
                    fill
                    quality={92}
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 44vw, 30vw"
                    className="pointer-events-none h-full w-full select-none object-cover"
                    draggable={false}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-2xl border border-amber-500/20 bg-[radial-gradient(560px_220px_at_8%_0%,rgba(251,146,60,0.24),transparent_62%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_30%),#0d0d10] p-5 md:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_180px_at_100%_100%,rgba(124,58,237,0.18),transparent_64%)]" />
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
            {t("projectsCtaTag")}
          </p>
          <h4 className="typo-section mt-2 text-[1.6rem] md:text-[2rem]">
            {t("projectsCtaTitle")}
          </h4>
          <p className="typo-body mt-3 max-w-2xl">
            {t("projectsCtaBody")}
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <p className="typo-tech text-zinc-200">Estimación por sesiones</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <p className="typo-tech text-zinc-200">Rango de inversión claro</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <p className="typo-tech text-zinc-200">Respuesta personalizada</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cotizacion"
              className="typo-cta inline-flex items-center justify-center rounded-xl border border-amber-600/35 bg-gradient-to-r from-amber-800 to-orange-600 px-5 py-3.5 text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(234,88,12,0.35)]"
            >
              {t("projectsCta1")}
            </Link>
            <Link
              href="/contacto"
              className="typo-cta inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-zinc-100 transition hover:bg-white/10"
            >
              {t("projectsCta2")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

