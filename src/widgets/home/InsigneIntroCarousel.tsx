"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";

export function InsigneIntroCarousel() {
  const { language } = useSiteLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const photos =
    language === "en"
      ? [
          {
            src: "/brand/leandro-hero.png",
            alt: "Leandro portrait",
            title: "Real identity",
            caption: "Street energy, precision, and visual storytelling.",
          },
          {
            src: "/brand/wordmark-insigne.png",
            alt: "Insigne Corpus logo",
            title: "Insigne Corpus",
            caption: "Professional tattoo studio with classic character.",
          },
          {
            src: "/brand/leandro-tatuando.png",
            alt: "Leandro tattooing",
            title: "Technique and presence",
            caption: "Every piece is built with concept, structure, and detail.",
          },
        ]
      : [
          {
            src: "/brand/leandro-hero.png",
            alt: "Retrato de Leandro",
            title: "Identidad real",
            caption: "Leandro fusiona calle, tecnica limpia y narrativa visual.",
          },
          {
            src: "/brand/wordmark-insigne.png",
            alt: "Logo Insigne Corpus",
            title: "Insigne Corpus",
            caption: "Estudio de tatuaje profesional con estetica clasica.",
          },
          {
            src: "/brand/leandro-tatuando.png",
            alt: "Leandro tatuando",
            title: "Tecnica y presencia",
            caption: "Cada pieza se plantea con concepto, estructura y detalle.",
          },
        ];
  const track = [...photos, ...photos];

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    let frameId = 0;
    const speed = 0.45;

    const tick = () => {
      const limit = node.scrollWidth / 2;
      if (!isInteracting) {
        node.scrollLeft += speed;
        if (node.scrollLeft >= limit) node.scrollLeft -= limit;
      }
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInteracting]);

  return (
    <div className="mt-6">
      <div
        ref={scrollerRef}
        className="relative overflow-x-auto rounded-3xl border border-white/10 bg-black/40 p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseDown={() => setIsInteracting(true)}
        onMouseUp={() => setIsInteracting(false)}
        onMouseLeave={() => setIsInteracting(false)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-black/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-black/90 to-transparent" />
        <div className="flex w-max gap-3">
          {track.map((item, i) => (
            <article
              key={`${item.src}-${i}`}
              className="group relative h-72 w-52 overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-80 sm:w-60 md:h-[26rem] md:w-72"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={100}
                sizes="(max-width: 768px) 220px, 288px"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                <p className="typo-subtitle text-base text-zinc-50">{item.title}</p>
                <p className="typo-body mt-1 text-sm text-zinc-200/90">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
