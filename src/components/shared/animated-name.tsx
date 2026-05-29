"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

const COLORS = ["#7C3AED", "#00E5FF", "#a78bfa", "#c084fc", "#22d3ee", "#818cf8"];

export function AnimatedName({ className = "" }: { className?: string }) {
  const letters = siteConfig.name.split("");

  return (
    <span className={`inline-flex ${className}`} aria-label={siteConfig.name}>
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          className="inline-block font-bold tracking-tight"
          animate={{
            color: [COLORS[i % COLORS.length], COLORS[(i + 2) % COLORS.length], COLORS[(i + 4) % COLORS.length]],
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3 + i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          whileHover={{
            scale: 1.15,
            textShadow: "0 0 24px rgba(0,229,255,0.8)",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
