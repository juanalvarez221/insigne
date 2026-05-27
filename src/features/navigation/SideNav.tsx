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
import { BRAND } from "@/shared/config/brand";

const items = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/admin", label: "Dash", icon: LayoutDashboard },
  { href: "/proyectos", label: "Proyectos", icon: ImageIcon },
  { href: "/cotizacion", label: "Cotización", icon: Sparkles },
  { href: "/contacto", label: "Contacto", icon: MessageCircle },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block lg:sticky lg:top-0 lg:h-dvh">
      <div className="h-full w-[280px] p-6">
        <div className="app-surface noise h-full rounded-3xl p-5">
          <div className="flex items-center justify-between">
            <div className="leading-none">
              <p className="text-display text-5xl">INS</p>
              <p className="-mt-2 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                {BRAND.shortName} Corpus
              </p>
            </div>
            <div className="h-11 w-11 rounded-full border border-white/10 bg-white/5" />
          </div>

          <div className="mt-8 grid gap-1">
            {items.map((it) => {
              const active = pathname === it.href;
              const Icon = it.icon;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-sm font-semibold transition",
                    active
                      ? "border-amber-600/30 bg-amber-700/10 text-amber-50"
                      : "border-transparent bg-transparent text-zinc-200 hover:border-white/10 hover:bg-white/5",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl border transition",
                      active
                        ? "border-amber-600/30 bg-amber-700/15"
                        : "border-white/10 bg-white/5 group-hover:bg-white/7",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">{it.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6">
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-amber-200/70 uppercase">
                Estilo
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-50">
                Realismo oscuro & blackwork
              </p>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                Prototipo UI premium. Listo para integrar imágenes reales del
                portafolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

