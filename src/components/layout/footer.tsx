"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedName } from "@/components/shared/animated-name";
import { siteConfig } from "@/data/site";

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
        <div className="text-center md:text-left">
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
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.nav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#00E5FF]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
