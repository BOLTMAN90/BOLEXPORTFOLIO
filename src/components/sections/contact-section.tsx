"use client";

import { useState, type ReactNode, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { socialLinks } from "@/data/social-links";
import { XIcon } from "@/components/shared/brand-icons";
import { siteConfig } from "@/data/site";

function FloatingField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative">
      <Label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3 z-10 text-xs text-muted-foreground transition-all group-focus-within:top-1 group-focus-within:text-[10px] group-focus-within:text-[#00E5FF]"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

function buildGmailComposeUrl(name: string, email: string, message: string) {
  const subject = `Portfolio inquiry from ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    "",
    "---",
    "Sent via BOLEXMAN portfolio contact form",
  ].join("\n");

  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: siteConfig.email,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string).trim();

    const gmailUrl = buildGmailComposeUrl(name, email, message);
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <SectionWrapper
      id="contact"
      badge="Contact"
      title="Let's Build Something Epic"
      subtitle="Ready to ship your next AI product? Drop a message or connect on your favorite platform."
      className="gradient-mesh"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-strong glow-border space-y-6 rounded-3xl p-8"
        >
          <p className="text-sm text-muted-foreground">
            Fill in your details and we&apos;ll open Gmail with your message ready to send to{" "}
            <span className="text-[#00E5FF]">{siteConfig.email}</span>. Hit send in Gmail and
            we&apos;ll continue the conversation there.
          </p>

          <FloatingField id="name" label="Your Name">
            <Input id="name" name="name" required className="pt-6" placeholder=" " />
          </FloatingField>
          <FloatingField id="email" label="Your Email">
            <Input id="email" name="email" type="email" required className="pt-6" placeholder=" " />
          </FloatingField>
          <FloatingField id="message" label="Project Details">
            <Textarea id="message" name="message" required className="min-h-[140px] pt-8" placeholder=" " />
          </FloatingField>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-[#00E5FF]">
              <CheckCircle className="h-4 w-4 shrink-0" />
              Gmail opened — click <strong>Send</strong> in Gmail to deliver your message.
            </p>
          )}

          <MagneticButton>
            <Button type="submit" variant="glow" size="lg" className="w-full">
              {status === "success" ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Gmail Ready — Press Send There
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message via Gmail
                </>
              )}
            </Button>
          </MagneticButton>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold">Connect with BOLEXMAN</h3>
          <p className="mt-3 text-muted-foreground">
            Available for freelance AI development, MVP builds, and premium interactive websites.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glow-border-hover flex flex-col gap-0.5 rounded-xl px-4 py-3 transition hover:text-[#00E5FF]"
              >
                <span className="flex items-center gap-3">
                  {link.brand === "x" ? (
                    <XIcon className="h-5 w-5 text-primary" />
                  ) : (
                    <link.icon className="h-5 w-5 text-primary" />
                  )}
                  <span className="font-medium">{link.label}</span>
                </span>
                {link.subtitle && (
                  <span className="pl-8 text-xs text-muted-foreground">{link.subtitle}</span>
                )}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
