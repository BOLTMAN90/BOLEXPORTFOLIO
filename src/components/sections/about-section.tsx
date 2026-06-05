"use client";

import Image from "next/image";
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
      <RevealOnScroll>
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex flex-col items-center lg:mx-0"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#00E5FF] to-[#7C3AED] opacity-80"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-[#0B0F19] sm:h-60 sm:w-60">
                <Image
                  src="/images/bolexman-profile.png"
                  alt="BOLEXMAN portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 208px, 240px"
                  priority
                />
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-5 bg-gradient-to-r from-[#7C3AED] via-[#a78bfa] to-[#00E5FF] bg-clip-text text-xl font-bold tracking-wide text-transparent sm:text-2xl"
            >
              BOLEXMAN
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-lg leading-relaxed text-muted-foreground lg:text-left"
          >
            I&apos;m <strong className="text-foreground">BOLEXMAN</strong>, a freelance AI coder who
            specializes in turning ambitious ideas into live products using Cursor, Rork, Lovable,
            Bolt, and Supabase. From AI SaaS dashboards to mobile apps with buttery animations — I
            build experiences that make clients say &quot;wow&quot; on first scroll.
          </motion.p>
        </div>
      </RevealOnScroll>

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
