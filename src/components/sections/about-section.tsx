"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { specialties } from "@/data/specialties";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      badge="About"
      title="Engineering at the Speed of AI"
      subtitle="I merge vibe coding energy with production discipline — shipping premium products that feel cinematic and convert."
      className="gradient-mesh"
    >
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            I&apos;m <strong className="text-foreground">BOLEXMAN</strong>, a freelance AI coder who
            specializes in turning ambitious ideas into live products using Cursor, Rork, Lovable,
            Bolt, and Supabase. From AI SaaS dashboards to mobile apps with buttery animations — I
            build experiences that make clients say &quot;wow&quot; on first scroll.
          </p>
        </RevealOnScroll>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {specialties.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass glow-border glow-border-hover group h-full rounded-2xl p-6 transition-shadow"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/20 p-3 text-primary group-hover:bg-[#00E5FF]/20 group-hover:text-[#00E5FF]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
