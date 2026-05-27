"use client";

import Image from "next/image";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import { HorizontalCarousel } from "@/shared/ui/HorizontalCarousel";

export function InsigneIntroCarousel() {
  const { t } = useSiteLanguage();

  const photos = [
    {
      src: "/brand/leandro-hero.png",
      alt: t("introPhoto1Alt"),
      title: t("introPhoto1Title"),
      caption: t("introPhoto1Caption"),
    },
    {
      src: "/brand/leandro-tatuando.png",
      alt: t("introPhoto2Alt"),
      title: t("introPhoto2Title"),
      caption: t("introPhoto2Caption"),
    },
  ];

  return (
    <HorizontalCarousel
      itemCount={photos.length}
      ariaLabel={t("identityTag")}
      autoPlayMs={6000}
      className="mt-6"
      viewportClassName="rounded-3xl border border-white/10 bg-black/40 p-3"
    >
      <div className="carousel-track flex w-max gap-3">
        {photos.map((item) => (
          <article
            key={item.src}
            className="carousel-slide group relative h-72 w-[min(82vw,16rem)] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-80 sm:w-60 md:h-[26rem] md:w-72"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              quality={100}
              sizes="(max-width: 768px) 82vw, 288px"
              className="pointer-events-none object-cover object-center transition duration-500 group-hover:scale-105"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-4">
              <p className="typo-subtitle text-base text-zinc-50">{item.title}</p>
              <p className="typo-body mt-1 text-sm text-zinc-200/90">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </HorizontalCarousel>
  );
}
