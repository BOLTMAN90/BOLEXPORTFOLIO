import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ProcessSection } from "@/components/sections/process-section";

export const metadata: Metadata = {
  title: "Process | BOLEXMAN",
  description: "AI-native workflow from idea to deployment.",
};

export default function ProcessPage() {
  return (
    <PageShell>
      <ProcessSection />
    </PageShell>
  );
}
