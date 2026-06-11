import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = {
  title: "Projects | BOLEXMAN",
  description: "FlowCoach AI, URUNN, BOLEX Hospitality, and Assistant App Builder — projects built by BOLEXMAN.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <ProjectsSection />
    </PageShell>
  );
}
