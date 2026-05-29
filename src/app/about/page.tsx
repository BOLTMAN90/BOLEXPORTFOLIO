import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { AboutSection } from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About | BOLEXMAN",
  description: "AI coding engineer specializing in vibe coding, SaaS, mobile, and premium web experiences.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
    </PageShell>
  );
}
