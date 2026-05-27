import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Rye, DM_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/shared/i18n/LanguageProvider";
import { LanguagePrompt } from "@/widgets/i18n/LanguagePrompt";

const fontSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const fontVintage = Rye({
  variable: "--font-vintage",
  subsets: ["latin"],
  weight: ["400"],
});

const fontMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Insigne Corpus Tattoo — Leandro",
  description:
    "Insigne Corpus Tattoo — Leandro. Tatuaje profesional y cultura motera. Cotización y portafolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontSerif.variable} ${fontVintage.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#080605] text-[#f5f0e8]">
        <LanguageProvider>
          <div aria-hidden className="ambient-storm">
            <span className="ambient-storm__flash ambient-storm__flash--a" />
            <span className="ambient-storm__flash ambient-storm__flash--b" />
            <span className="ambient-storm__flash ambient-storm__flash--c" />
          </div>
          <div className="relative z-10">{children}</div>
          <LanguagePrompt />
        </LanguageProvider>
      </body>
    </html>
  );
}
