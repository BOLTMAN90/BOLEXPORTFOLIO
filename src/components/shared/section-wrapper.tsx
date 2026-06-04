"use client";

import { ReactNode, useRef, useState, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function SectionWrapper({
  id,
  children,
  className,
  title,
  subtitle,
  badge,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const [visibleOnMount, setVisibleOnMount] = useState(false);

  useLayoutEffect(() => {
    setVisibleOnMount(false);
    const el = ref.current;
    if (el && isInViewport(el)) {
      setVisibleOnMount(true);
    }
  }, [pathname]);

  const shouldShow = inView || visibleOnMount;

  return (
    <section id={id} ref={ref} className={cn("section-padding relative", className)}>
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {badge && (
            <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
