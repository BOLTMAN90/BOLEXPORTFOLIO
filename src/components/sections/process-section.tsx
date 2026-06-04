"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { processSteps } from "@/data/process";
import { useGsapScroll } from "@/hooks/use-gsap-scroll";

export function ProcessSection() {
  useGsapScroll();
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      id="process"
      badge="Process"
      title="From Idea to Deployment"
      subtitle="A proven AI-native workflow that ships premium products at startup speed."
      className="gradient-mesh"
    >
      {/* Mobile: horizontal scroll timeline */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {processSteps.map((step, i) => (
            <RevealOnScroll key={step.title} delay={i * 0.04} className="snap-center">
              <div className="glass glow-border min-w-[280px] max-w-[300px] flex-shrink-0 rounded-2xl p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-[#00E5FF]">Step {step.step}</span>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Desktop: vertical timeline with GSAP line */}
      <div ref={sectionRef} className="relative mx-auto hidden max-w-2xl pl-14 md:block md:pl-0">
        <div
          ref={lineRef}
          className="absolute left-6 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-[#7C3AED] via-[#00E5FF] to-[#7C3AED] md:left-8"
        />

        <div className="space-y-10">
          {processSteps.map((step, i) => (
            <RevealOnScroll key={step.title} delay={i * 0.06}>
              <div className="relative">
                <div className="absolute -left-14 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background md:-left-16">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="glass glow-border rounded-2xl p-6 md:ml-4">
                  <span className="font-mono text-xs text-[#00E5FF]">Step {step.step}</span>
                  <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
