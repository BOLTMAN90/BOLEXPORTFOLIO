"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

export function TypingEffect() {
  const words = siteConfig.typingWords;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2800);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <div className="flex items-center gap-2 text-lg sm:text-xl">
      <span className="text-muted-foreground">Building with</span>
      <span className="relative inline-block min-w-[140px] font-semibold text-[#00E5FF] sm:min-w-[180px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="absolute left-0 inline-block"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
        <span className="invisible">{words[0]}</span>
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="ml-1 inline-block h-5 w-0.5 bg-[#00E5FF]"
      />
    </div>
  );
}
