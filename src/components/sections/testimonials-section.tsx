"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { testimonials } from "@/data/testimonials";

const duplicated = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      badge="Testimonials"
      title="What Clients Say"
      subtitle="Trusted by founders and teams shipping AI products worldwide."
      className="overflow-hidden"
    >
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee gap-6 py-4 hover:[animation-play-state:paused]">
          {duplicated.map((t, i) => (
            <motion.article
              key={`${t.id}-${i}`}
              whileHover={{ y: -6 }}
              className="glass-strong glow-border min-w-[320px] max-w-[380px] flex-shrink-0 rounded-2xl p-6 sm:min-w-[360px]"
            >
              <Quote className="mb-3 h-8 w-8 text-primary/60" />
              <p className="text-sm leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#00E5FF] text-[#00E5FF]" />
                ))}
              </div>
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="font-semibold">{t.author}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
