"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ProjectsCarousel } from "@/widgets/home/ProjectsCarousel";
import { ConnectSection } from "@/widgets/home/ConnectSection";
import { InsigneWordmark } from "@/widgets/brand/InsigneWordmark";
import { FloatingSocialDock } from "@/widgets/brand/FloatingSocialDock";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import { BRAND, whatsappUrl } from "@/shared/config/brand";

type HeroSplashProps = {
  backgroundImageUrl: string;
  backgroundImageUrls?: string[];
};

export function HeroSplash({
  backgroundImageUrl,
  backgroundImageUrls,
}: HeroSplashProps) {
  const { t } = useSiteLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages =
    backgroundImageUrls && backgroundImageUrls.length > 0
      ? backgroundImageUrls
      : [backgroundImageUrl];
  const useHeroCarousel = heroImages.length > 1;
  const currentHeroImage = heroImages[heroIndex] ?? backgroundImageUrl;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.78, 1], [1, 0.94, 0.72]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], [0, 2.4]);
  const heroFilter = useMotionTemplate`blur(${heroBlur}px)`;

  const markY = useTransform(scrollYProgress, [0, 1], [16, 28]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.82, 0.15]);
  const markScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.96, 1.02, 1.1]);

  useEffect(() => {
    if (!useHeroCarousel) return;
    const id = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [heroImages.length, useHeroCarousel]);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative overflow-hidden bg-[#080605] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_540px_at_8%_-8%,rgba(234,88,12,0.2),transparent_60%),radial-gradient(920px_480px_at_95%_6%,rgba(180,83,9,0.16),transparent_62%),radial-gradient(1200px_600px_at_50%_105%,rgba(120,53,15,0.18),transparent_64%)]" />
      <div className="pointer-events-none absolute -left-24 top-[36%] h-64 w-64 rounded-full bg-amber-600/14 blur-[95px] md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -right-16 top-[58%] h-64 w-64 rounded-full bg-orange-500/12 blur-[95px] md:h-[26rem] md:w-[26rem]" />

      <section ref={sectionRef} className="relative min-h-[100dvh] w-full">
        <motion.div
          className="sticky top-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden"
          style={{ y: imageY, scale: imageScale, opacity: heroOpacity, filter: heroFilter }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="hero-cinematic__media"
            >
              <Image
                src={currentHeroImage}
                alt={t("introPhoto1Alt")}
                fill
                priority
                quality={100}
                sizes="100vw"
                className="hero-cinematic__photo"
              />
            </motion.div>
          </AnimatePresence>

          <div className="hero-cinematic__vignette absolute inset-0 z-[1]" aria-hidden />
          <div className="hero-cinematic__grade absolute inset-0 z-[2]" />
          <div className="hero-cinematic__rays absolute inset-0 z-[2]" />
          <div className="hero-cinematic__grain absolute inset-0 z-[3]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-[4] grid h-[100dvh] min-h-[100svh] w-full grid-rows-[minmax(0,1fr)_auto]">
          <div aria-hidden className="min-h-[30vh] sm:min-h-[34vh] md:min-h-[40vh]" />

          <div className="flex flex-col items-center px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center sm:px-6 sm:pb-12 md:pb-14">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              style={{ y: markY, opacity: markOpacity, scale: markScale }}
              className="z-20 w-full max-w-[min(100%,52rem)] will-change-transform"
            >
              <InsigneWordmark size="hero" variant="minimal" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
              className="pointer-events-auto z-20 mt-6 flex w-full max-w-sm flex-col gap-3 sm:max-w-md sm:flex-row sm:justify-center"
            >
              <Link
                href="/cotizacion"
                className="btn-brand typo-cta group inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 md:py-4"
              >
                {t("heroCtaQuote")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href={whatsappUrl(BRAND.whatsapp.quoteMessage)}
                target="_blank"
                rel="noreferrer"
                className="typo-cta inline-flex flex-1 items-center justify-center rounded-xl border border-amber-200/25 bg-black/45 px-5 py-3.5 text-amber-50 backdrop-blur-sm transition hover:border-amber-400/40 hover:bg-black/55 md:py-4"
              >
                {t("heroCtaWhatsapp")}
              </a>
            </motion.div>

            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              onClick={scrollToPortfolio}
              aria-label={t("heroScrollAria")}
              className="pointer-events-auto mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/25 bg-black/40 transition hover:border-amber-300/40 hover:bg-black/55"
            >
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5 text-amber-100/90" />
              </motion.span>
            </motion.button>
          </div>
        </div>

        <div className="absolute bottom-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-20 mx-auto w-full max-w-6xl px-6 py-14 md:py-20"
      >
        <div className="glass-card relative overflow-hidden rounded-3xl p-5 md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_220px_at_10%_0%,rgba(234,88,12,0.16),transparent_58%),radial-gradient(620px_260px_at_100%_100%,rgba(180,83,9,0.14),transparent_60%)]" />
          <ConnectSection />
        </div>

        <div ref={portfolioRef} className="relative mt-8 md:mt-10">
          <div className="pointer-events-none absolute -left-8 -top-4 h-24 w-24 rounded-full bg-amber-600/12 blur-[42px]" />
          <div className="pointer-events-none absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-orange-500/10 blur-[42px]" />
          <ProjectsCarousel />
        </div>
      </motion.section>

      <FloatingSocialDock />
    </main>
  );
}
