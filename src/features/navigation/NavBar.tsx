"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Image as ImageIcon,
  Sparkles,
  MessageCircle,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/shared/lib/cn";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";
import type { SiteCopyKey } from "@/shared/i18n/siteLanguage";

const items: { href: string; labelKey: SiteCopyKey; icon: typeof Home }[] = [
  { href: "/", labelKey: "navHome", icon: Home },
  { href: "/admin", labelKey: "navAdmin", icon: LayoutDashboard },
  { href: "/proyectos", labelKey: "navProjects", icon: ImageIcon },
  { href: "/cotizacion", labelKey: "navQuote", icon: Sparkles },
  { href: "/contacto", labelKey: "navContact", icon: MessageCircle },
];

export function NavBar() {
  const pathname = usePathname();
  const { t } = useSiteLanguage();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto w-full max-w-md px-4 pb-4">
        <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_20px_50px_-35px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-5">
            {items.map((it) => {
              const active = pathname === it.href;
              const Icon = it.icon;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 px-2 py-3 text-[11px] font-semibold tracking-wide transition",
                    active ? "text-amber-200" : "text-zinc-300 hover:text-zinc-50",
                  )}
                >
                  <span
                    className={cn(
                      "relative flex h-9 w-9 items-center justify-center rounded-xl border transition",
                      active
                        ? "border-amber-600/30 bg-amber-700/15"
                        : "border-white/10 bg-white/5",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {active ? (
                      <span className="absolute -bottom-1 h-1 w-6 rounded-full bg-amber-600/70 blur-[0.5px]" />
                    ) : null}
                  </span>
                  <span className="leading-none">{t(it.labelKey)}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

