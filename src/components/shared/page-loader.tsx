"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedName } from "./animated-name";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();

  // Never block inner pages — only intro on home
  useEffect(() => {
    if (pathname !== "/") {
      setLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (reduced || pathname !== "/") {
      setLoading(false);
      return;
    }

    const skip = sessionStorage.getItem("bolex-loaded");
    if (skip) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 120);

    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("bolex-loaded", "1");
      }, 400);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [reduced, pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0B0F19]"
        >
          <AnimatedName className="text-4xl sm:text-6xl" />
          <p className="mt-4 text-sm text-muted-foreground">Initializing experience</p>
          <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#00E5FF]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="mt-2 font-mono text-xs text-[#00E5FF]">
            {Math.min(Math.round(progress), 100)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
