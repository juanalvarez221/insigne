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
import { InsigneIntroCarousel } from "@/widgets/home/InsigneIntroCarousel";
import { InsigneWordmark } from "@/widgets/brand/InsigneWordmark";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import { BRAND, whatsappUrl } from "@/shared/config/brand";

type HeroSplashProps = {
  backgroundImageUrl: string;
  backgroundImageUrls?: string[];
  artistName: string;
  subtitle: string;
};

export function HeroSplash({
  backgroundImageUrl,
  backgroundImageUrls,
  artistName,
  subtitle,
}: HeroSplashProps) {
  const { t } = useSiteLanguage();
  const sectionRef = useRef<HTMLElement>(null);
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

  const markY = useTransform(scrollYProgress, [0, 1], [24, 36]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.76, 0.12]);
  const markScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.92, 1.02, 1.14]);
  const markBlur = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.6, 2.8]);
  const markFilter = useMotionTemplate`blur(${markBlur}px)`;
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 52]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 1], [0.88, 0.38]);

  useEffect(() => {
    if (!useHeroCarousel) return;
    const id = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [heroImages.length, useHeroCarousel]);

  return (
    <main className="relative overflow-hidden bg-[#080605] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_540px_at_8%_-8%,rgba(234,88,12,0.2),transparent_60%),radial-gradient(920px_480px_at_95%_6%,rgba(180,83,9,0.16),transparent_62%),radial-gradient(1200px_600px_at_50%_105%,rgba(120,53,15,0.18),transparent_64%)]" />
      <div className="pointer-events-none absolute -left-24 top-[36%] h-64 w-64 rounded-full bg-amber-600/14 blur-[95px] md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -right-16 top-[58%] h-64 w-64 rounded-full bg-orange-500/12 blur-[95px] md:h-[26rem] md:w-[26rem]" />

      <section ref={sectionRef} className="relative h-[112dvh] w-full md:h-[118dvh]">
        <motion.div
          className="sticky top-0 h-[100dvh] overflow-hidden"
          style={{ y: imageY, scale: imageScale, opacity: heroOpacity, filter: heroFilter }}
        >
          <div className="hero-cinematic__backdrop absolute inset-0" aria-hidden />

          <div className="hero-cinematic__stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroImage}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hero-cinematic__frame"
              >
                <div className="hero-cinematic__media">
                  <Image
                    src={currentHeroImage}
                    alt={`${artistName} — retrato profesional`}
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 72rem"
                    className="hero-cinematic__photo"
                  />
                </div>
                <div className="hero-cinematic__vignette absolute inset-0 z-[1]" aria-hidden />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-cinematic__grade absolute inset-0 z-[3]" />
          <div className="hero-cinematic__rays absolute inset-0 z-[3]" />
          <div className="hero-cinematic__grain absolute inset-0 z-[4]" />
        </motion.div>

        <div className="absolute inset-0 z-[4] flex h-[100dvh] w-full flex-col items-center justify-end px-6 pb-16 text-center md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{
              y: markY,
              opacity: markOpacity,
              scale: markScale,
              filter: markFilter,
            }}
            className="z-20 will-change-transform"
          >
            <InsigneWordmark size="hero" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.92, y: 0 }}
            transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
            style={{ y: subtitleY, opacity: subtitleOpacity }}
            className="font-sans mt-3 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-amber-100/85 md:text-[0.8rem] md:tracking-[0.28em]"
          >
            {t("heroSubtitle") ?? subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            style={{ y: subtitleY, opacity: subtitleOpacity }}
            className="font-sans mx-auto mt-3 max-w-md text-[0.72rem] leading-relaxed text-amber-50/80 md:max-w-xl md:text-sm"
          >
            {t("heroMotoLine")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease: "easeOut" }}
            className="mt-6 w-full max-w-[320px] md:mt-7 md:max-w-sm"
          >
            <Link href="/cotizacion" className="btn-brand typo-cta group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 md:py-4">
              {t("heroCta")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mt-3.5 flex flex-col items-center gap-1 md:mt-4"
          >
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-200/25 bg-black/40"
            >
              <ChevronDown className="h-4 w-4 text-amber-100/90" />
            </motion.span>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-amber-100/75 md:text-[11px]">
              {t("heroScroll")}
            </p>
          </motion.div>
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
          <div className="relative z-10">
            <p className="text-accent-muted text-xs font-semibold uppercase tracking-[0.24em]">
              {t("identityTag")}
            </p>
            <h2 className="typo-section mt-2 max-w-4xl">{t("identityTitle")}</h2>
            <p className="typo-body mt-3 max-w-3xl text-zinc-300">{t("identityP1")}</p>
            <p className="typo-body mt-3 max-w-3xl text-zinc-400">{t("identityP2")}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-amber-600/20 bg-amber-950/30 p-4">
                <p className="font-sans text-sm font-semibold text-amber-100">{t("identityCard1Title")}</p>
                <p className="typo-body mt-2 text-sm text-zinc-300">{t("identityCard1Body")}</p>
              </div>
              <div className="rounded-2xl border border-amber-600/20 bg-amber-950/30 p-4">
                <p className="font-sans text-sm font-semibold text-amber-100">{t("identityCard2Title")}</p>
                <p className="typo-body mt-2 text-sm text-zinc-300">{t("identityCard2Body")}</p>
              </div>
              <div className="rounded-2xl border border-amber-600/20 bg-amber-950/30 p-4">
                <p className="font-sans text-sm font-semibold text-amber-100">{t("identityCard3Title")}</p>
                <p className="typo-body mt-2 text-sm text-zinc-300">{t("identityCard3Body")}</p>
              </div>
            </div>

            <InsigneIntroCarousel />
          </div>
        </div>

        <div className="relative mt-8 md:mt-10">
          <div className="pointer-events-none absolute -left-8 -top-4 h-24 w-24 rounded-full bg-amber-600/12 blur-[42px]" />
          <div className="pointer-events-none absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-orange-500/10 blur-[42px]" />
          <ProjectsCarousel />
        </div>
      </motion.section>

      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
        className="pointer-events-none fixed bottom-5 right-4 z-[70] flex flex-col items-center gap-3 md:bottom-6 md:right-5"
        aria-label="Accesos rapidos sociales"
      >
        <motion.a
          href={BRAND.instagram.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Ir al Instagram de ${BRAND.shortName}`}
          animate={{ y: [0, -3, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="pointer-events-auto relative inline-flex h-14 w-14 items-center justify-center rounded-full"
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-amber-400/50 blur-[12px]"
            animate={{ opacity: [0, 0, 0.95, 0, 0, 0.72, 0], scale: [0.88, 0.88, 1.2, 1.24, 0.9, 1.16, 0.9] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.54, 0.58, 0.63, 0.9, 0.94, 1] }}
          />
          <Image
            src="/brand/instagram-bubble-clean.png"
            alt="Instagram"
            width={56}
            height={56}
            className="h-14 w-14 object-contain drop-shadow-[0_14px_28px_rgba(234,88,12,0.38)]"
          />
        </motion.a>

        <motion.a
          href={whatsappUrl(BRAND.whatsapp.quoteMessage)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Hablar por WhatsApp con ${BRAND.shortName}`}
          animate={{ y: [0, -3, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 3.2, delay: 0.45, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="pointer-events-auto relative inline-flex h-14 w-14 items-center justify-center rounded-full"
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-orange-400/45 blur-[12px]"
            animate={{ opacity: [0, 0, 0.92, 0, 0, 0.68, 0], scale: [0.88, 0.88, 1.18, 1.22, 0.9, 1.14, 0.9] }}
            transition={{ duration: 9.1, repeat: Infinity, ease: "easeInOut", delay: 0.6, times: [0, 0.56, 0.6, 0.64, 0.9, 0.95, 1] }}
          />
          <Image
            src="/brand/whatsapp-bubble-clean.png"
            alt="WhatsApp"
            width={56}
            height={56}
            className="h-14 w-14 object-contain drop-shadow-[0_14px_28px_rgba(234,88,12,0.32)]"
          />
        </motion.a>
      </motion.aside>
    </main>
  );
}
