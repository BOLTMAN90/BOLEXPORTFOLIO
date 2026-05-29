"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const pages = [
  {
    href: "/about",
    title: "About",
    description: "AI coding, vibe coding, and full-stack specialties.",
  },
  {
    href: "/services",
    title: "Services",
    description: "Web, mobile, SaaS, automation, and WebGL development.",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Cinematic showcase of AI SaaS, mobile, and startup builds.",
  },
  {
    href: "/stack",
    title: "Tech Stack",
    description: "Cursor, Supabase, Next.js, Three.js, and AI tools.",
  },
  {
    href: "/process",
    title: "Process",
    description: "From idea to deployment with an AI-native workflow.",
  },
  {
    href: "/testimonials",
    title: "Testimonials",
    description: "What founders and teams say about working with me.",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Hire me for your next AI product or MVP.",
  },
];

export function HomeOverview() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              Explore
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">Navigate the Portfolio</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Each section lives on its own page — dive into services, projects, process, and more.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, i) => (
            <RevealOnScroll key={page.href} delay={i * 0.05}>
              <Link href={page.href} className="group block h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  className="glass glow-border glow-border-hover flex h-full flex-col rounded-2xl p-6 transition"
                >
                  <h3 className="text-xl font-semibold group-hover:text-[#00E5FF]">
                    {page.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{page.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    View page
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </motion.article>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
