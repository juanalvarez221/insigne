"use client";

import Image from "next/image";
import { BRAND_ASSETS } from "@/shared/config/brand";
import { cn } from "@/shared/lib/cn";

type SocialIconKind = "instagram" | "whatsapp";

const ICONS: Record<SocialIconKind, { src: string; alt: string }> = {
  instagram: { src: BRAND_ASSETS.instagramIcon, alt: "Instagram" },
  whatsapp: { src: BRAND_ASSETS.whatsappIcon, alt: "WhatsApp" },
};

type SocialIconProps = {
  kind: SocialIconKind;
  size?: number;
  className?: string;
};

/** Icono social naranja sin fondo — para CTAs inline */
export function SocialIcon({ kind, size = 24, className }: SocialIconProps) {
  const { src, alt } = ICONS[kind];
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
