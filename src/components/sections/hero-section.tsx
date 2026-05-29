"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedName } from "@/components/shared/animated-name";
import { TypingEffect } from "@/components/shared/typing-effect";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { FloatingOrbs } from "@/components/shared/floating-orbs";
import { ParticleFieldLazy } from "@/components/three/particle-field-lazy";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 sm:px-6"
    >
      <ParticleFieldLazy />
      <FloatingOrbs />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F19]/40 to-[#0B0F19]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.p variants={item} className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00E5FF]">
          Welcome to the future
        </motion.p>

        <motion.div variants={item} className="mb-6">
          <AnimatedName className="text-5xl sm:text-7xl lg:text-8xl" />
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="gradient-text">AI Coding Engineer</span>
          <br />
          <span className="text-foreground">& Vibe Coder</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          I build AI-powered web apps, mobile apps, SaaS products, automations, and modern user
          experiences using cutting-edge AI tools.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex justify-center">
          <TypingEffect />
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton href="/projects">
            <Button variant="glow" size="lg" className="min-w-[180px]">
              View Projects
            </Button>
          </MagneticButton>
          <MagneticButton href="/contact">
            <Button variant="outline" size="lg" className="min-w-[180px] border-primary/50">
              Hire Me
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="/about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
        aria-label="Go to About page"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
