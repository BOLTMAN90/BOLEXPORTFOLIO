"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { techStack } from "@/data/tech-stack";

function TechLogo({ name, slug }: { name: string; slug: string }) {
  return (
    <div className="glass glow-border-hover mx-3 flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center gap-2 rounded-2xl transition hover:scale-110 sm:h-24 sm:w-24">
      <Image
        src={`https://cdn.simpleicons.org/${slug}/7C3AED`}
        alt={name}
        width={36}
        height={36}
        className="opacity-90 transition hover:opacity-100"
      />
      <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">{name}</span>
    </div>
  );
}

export function TechStackSection() {
  const items = [...techStack, ...techStack];

  return (
    <SectionWrapper
      id="stack"
      badge="Tech Stack"
      title="Tools I Ship With"
      subtitle="From vibe coding platforms to production frameworks — the full AI builder arsenal."
      className="overflow-hidden"
    >
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee gap-0 py-4 hover:[animation-play-state:paused]">
          {items.map((tech, i) => (
            <TechLogo key={`${tech.slug}-${i}`} name={tech.name} slug={tech.slug} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
