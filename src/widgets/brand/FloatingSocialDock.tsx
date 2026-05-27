"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND, BRAND_ASSETS, whatsappUrl } from "@/shared/config/brand";
import { cn } from "@/shared/lib/cn";

type FloatingSocialDockProps = {
  className?: string;
  whatsappMessage?: string;
  size?: "md" | "lg";
};

function SocialFab({
  href,
  label,
  iconSrc,
  iconAlt,
  size,
}: {
  href: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  size: "md" | "lg";
}) {
  const shell = size === "lg" ? "h-[3.25rem] w-[3.25rem]" : "h-12 w-12";
  const icon = size === "lg" ? 30 : 26;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={{ y: -3, scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "pointer-events-auto group relative inline-flex items-center justify-center rounded-full",
        shell,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/25 to-orange-600/10 opacity-0 blur-md transition duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-full border border-amber-500/25 bg-black/50 shadow-[0_8px_28px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-300",
          "group-hover:border-amber-400/45 group-hover:bg-black/60 group-hover:shadow-[0_12px_32px_rgba(234,88,12,0.28)]",
        )}
      />
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={icon}
        height={icon}
        className="relative z-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
      />
    </motion.a>
  );
}

/** Botones flotantes Instagram + WhatsApp — iconos naranja de marca */
export function FloatingSocialDock({
  className,
  whatsappMessage = BRAND.whatsapp.quoteMessage,
  size = "lg",
}: FloatingSocialDockProps) {
  return (
    <aside
      className={cn(
        "pointer-events-none fixed bottom-5 right-4 z-[70] flex flex-col items-center gap-3 md:bottom-6 md:right-5",
        className,
      )}
      aria-label="Redes sociales"
    >
      <SocialFab
        href={BRAND.instagram.url}
        label={`Ir al Instagram de ${BRAND.shortName}`}
        iconSrc={BRAND_ASSETS.instagramIcon}
        iconAlt="Instagram"
        size={size}
      />
      <SocialFab
        href={whatsappUrl(whatsappMessage)}
        label={`Hablar por WhatsApp con ${BRAND.shortName}`}
        iconSrc={BRAND_ASSETS.whatsappIcon}
        iconAlt="WhatsApp"
        size={size}
      />
    </aside>
  );
}
