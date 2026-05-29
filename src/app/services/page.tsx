import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ServicesSection } from "@/components/sections/services-section";

export const metadata: Metadata = {
  title: "Services | BOLEXMAN",
  description: "AI web apps, mobile development, Supabase, automation, WebGL, and MVP services.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesSection />
    </PageShell>
  );
}
