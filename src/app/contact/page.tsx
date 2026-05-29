import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact | BOLEXMAN",
  description: "Get in touch for AI development, MVP builds, and freelance projects.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
