import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = {
  title: "Projects | BOLEXMAN",
  description: "AI SaaS dashboards, mobile apps, and interactive startup projects.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <ProjectsSection />
    </PageShell>
  );
}
