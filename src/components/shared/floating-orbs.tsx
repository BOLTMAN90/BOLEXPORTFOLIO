"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: 280, x: "10%", y: "20%", color: "rgba(124,58,237,0.25)", delay: 0 },
  { size: 200, x: "75%", y: "15%", color: "rgba(0,229,255,0.15)", delay: 1 },
  { size: 320, x: "60%", y: "60%", color: "rgba(124,58,237,0.18)", delay: 2 },
  { size: 160, x: "20%", y: "70%", color: "rgba(0,229,255,0.12)", delay: 0.5 },
];

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
