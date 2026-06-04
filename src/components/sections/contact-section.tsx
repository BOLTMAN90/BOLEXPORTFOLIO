"use client";

import { useState, type ReactNode, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { socialLinks } from "@/data/social-links";
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

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
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
          <FloatingField id="name" label="Your Name">
            <Input id="name" name="name" required className="pt-6" placeholder=" " disabled={status === "loading"} />
          </FloatingField>
          <FloatingField id="email" label="Your Email">
            <Input id="email" name="email" type="email" required className="pt-6" placeholder=" " disabled={status === "loading"} />
          </FloatingField>
          <FloatingField id="message" label="Project Details">
            <Textarea id="message" name="message" required className="min-h-[140px] pt-8" placeholder=" " disabled={status === "loading"} />
          </FloatingField>

          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {errorMsg}{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                Email me directly
              </a>
            </p>
          )}

          <MagneticButton>
            <Button type="submit" variant="glow" size="lg" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
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
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 text-lg font-medium text-[#00E5FF] hover:underline"
          >
            {siteConfig.email}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            GitHub:{" "}
            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00E5FF] hover:underline"
            >
              {siteConfig.github.username}
            </a>
            {" · "}
            Discord:{" "}
            <a
              href={siteConfig.discord.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00E5FF] hover:underline"
            >
              {siteConfig.discord.username}
            </a>
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
                  <link.icon className="h-5 w-5 text-primary" />
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
