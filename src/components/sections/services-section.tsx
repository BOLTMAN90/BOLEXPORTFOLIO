"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      badge="Services"
      title="Premium AI Development Services"
      subtitle="End-to-end delivery for founders, agencies, and teams who need speed without sacrificing quality."
    >
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service, i) => (
          <RevealOnScroll key={service.title} delay={(i % 6) * 0.06}>
            <motion.article
              whileHover={{ y: -8 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-primary/20 bg-card/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#00E5FF]/50 hover:shadow-[0_0_40px_-8px_rgba(124,58,237,0.5)]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition group-hover:bg-[#00E5FF]/20" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl border border-primary/30 bg-primary/10 p-3 text-primary transition group-hover:border-[#00E5FF]/40 group-hover:text-[#00E5FF]">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.article>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
