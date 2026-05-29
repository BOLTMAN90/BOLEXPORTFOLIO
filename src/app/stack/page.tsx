import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export const metadata: Metadata = {
  title: "Tech Stack | BOLEXMAN",
  description: "Tools and frameworks: Cursor, Supabase, Next.js, Three.js, OpenAI, and more.",
};

export default function StackPage() {
  return (
    <PageShell>
      <TechStackSection />
    </PageShell>
  );
}
