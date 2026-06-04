"use client";

import { ReactNode, useRef, useState, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const [visibleOnMount, setVisibleOnMount] = useState(false);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    setVisibleOnMount(false);
    const el = ref.current;
    if (el && isInViewport(el)) {
      setVisibleOnMount(true);
    }
  }, [pathname]);

  const offset = {
    up: { y: 48, x: 0 },
    left: { y: 0, x: -48 },
    right: { y: 0, x: 48 },
  }[direction];

  const shouldShow = inView || visibleOnMount;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={shouldShow ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
