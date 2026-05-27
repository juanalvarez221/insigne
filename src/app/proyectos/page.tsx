"use client";

import { AppShell } from "@/widgets/layout/AppShell";
import { ProjectsCarousel } from "@/widgets/home/ProjectsCarousel";
import { useSiteLanguage } from "@/shared/i18n/LanguageProvider";

export default function ProyectosPage() {
  const { t } = useSiteLanguage();

  return (
    <AppShell>
      <header>
        <p className="text-xs font-semibold tracking-[0.18em] text-amber-200/70 uppercase">
          {t("projectsTag")}
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-50">{t("projectsTitle")}</h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t("projectsPageLead")}</p>
      </header>

      <div className="mt-6">
        <ProjectsCarousel />
      </div>
    </AppShell>
  );
}
