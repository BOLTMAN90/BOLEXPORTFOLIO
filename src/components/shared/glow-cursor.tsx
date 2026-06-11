"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useDevicePreview } from "@/context/device-preview-context";

export function GlowCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();
  const { isSimulated } = useDevicePreview();

  useEffect(() => {
    if (!isDesktop || reduced) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop, reduced]);

  if (!isDesktop || reduced || isSimulated) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00E5FF]/50 mix-blend-screen"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9997] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/20 blur-3xl"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
