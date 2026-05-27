"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import { HorizontalCarousel, useCarouselIndex } from "@/shared/ui/HorizontalCarousel";
import { cn } from "@/shared/lib/cn";

function IntroSlide({
  src,
  alt,
  label,
  index,
}: {
  src: string;
  alt: string;
  label: string;
  index: number;
}) {
  const activeIndex = useCarouselIndex();
  const isActive = activeIndex === index;

  return (
    <article
      className={cn(
        "carousel-slide group relative h-72 w-[min(82vw,16rem)] shrink-0 snap-start overflow-hidden rounded-2xl border bg-black/40 transition duration-300 sm:h-80 sm:w-60 md:h-[26rem] md:w-72",
        isActive
          ? "scale-[1.02] border-amber-500/40 shadow-[0_0_32px_rgba(234,88,12,0.2)]"
          : "border-white/10 opacity-90",
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={100}
        sizes="(max-width: 768px) 82vw, 288px"
        className="pointer-events-none object-cover object-center transition duration-500 group-hover:scale-105"
        draggable={false}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-t transition duration-300",
          isActive ? "from-black/70 via-black/15 to-transparent" : "from-black/50 via-transparent to-transparent",
        )}
      />
      <motion.p
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 6 }}
        className="absolute inset-x-0 bottom-0 z-10 p-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-amber-100"
      >
        {label}
      </motion.p>
    </article>
  );
}

export function InsigneIntroCarousel() {
  const { t } = useSiteLanguage();

  const photos = [
    {
      src: "/brand/leandro-hero.png",
      alt: t("introPhoto1Alt"),
      label: t("introPhoto1Label"),
    },
    {
      src: "/brand/leandro-tatuando.png",
      alt: t("introPhoto2Alt"),
      label: t("introPhoto2Label"),
    },
  ];

  return (
    <HorizontalCarousel
      itemCount={photos.length}
      ariaLabel={t("introCarouselAria")}
      autoPlayMs={5500}
      className="mt-6"
      viewportClassName="rounded-3xl border border-white/10 bg-black/40 p-3"
    >
      <div className="carousel-track flex w-max gap-3">
        {photos.map((item, i) => (
          <IntroSlide key={item.src} src={item.src} alt={item.alt} label={item.label} index={i} />
        ))}
      </div>
    </HorizontalCarousel>
  );
}
