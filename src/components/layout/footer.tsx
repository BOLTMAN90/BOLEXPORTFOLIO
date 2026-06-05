"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedName } from "@/components/shared/animated-name";
import { socialLinks } from "@/data/social-links";
import { XIcon } from "@/components/shared/brand-icons";
import { siteConfig } from "@/data/site";

const footerSocialLinks = socialLinks.filter((link) => link.label !== "Portfolio");

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-[#0B0F19] px-4 py-16 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#00E5FF]/40"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <Link href="/">
              <AnimatedName className="text-2xl" />
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              AI Coding Engineer & Vibe Coder — building the future, one prompt at a time.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-sm text-[#00E5FF] hover:underline"
            >
              {siteConfig.email}
            </a>
            <p className="mt-6 text-xs text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground md:justify-end">
              {siteConfig.nav.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[#00E5FF]">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              {footerSocialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  title={link.subtitle ? `${link.label} — ${link.subtitle}` : link.label}
                  aria-label={link.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass glow-border-hover flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-[#00E5FF]"
                >
                  {link.brand === "x" ? (
                    <XIcon className="h-5 w-5" />
                  ) : (
                    <link.icon className="h-5 w-5" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
