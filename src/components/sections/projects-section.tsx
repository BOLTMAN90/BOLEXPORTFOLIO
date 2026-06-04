"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      badge="Projects"
      title="Featured Builds"
      subtitle="Each project has its own page with live previews — select one to explore."
      className="overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.id} delay={i * 0.08}>
            <Link href={`/projects/${project.id}`} className="group block h-full">
              <motion.article
                whileHover={{ y: -6 }}
                className="glass glow-border glow-border-hover flex h-full flex-col overflow-hidden rounded-2xl transition"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />
                  <Badge variant="glow" className="absolute left-4 top-4">
                    {project.category}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold group-hover:text-[#00E5FF]">
                    {project.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    View project
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.article>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
