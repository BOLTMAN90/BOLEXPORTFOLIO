import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export const metadata: Metadata = {
  title: "Testimonials | BOLEXMAN",
  description: "Client reviews from founders and teams shipping AI products.",
};

export default function TestimonialsPage() {
  return (
    <PageShell>
      <TestimonialsSection />
    </PageShell>
  );
}
