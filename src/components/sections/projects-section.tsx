"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Smartphone } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  return (
    <motion.div
      layout
      className={cn(
        "relative w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/30 bg-card/80 backdrop-blur-2xl transition-shadow duration-500",
        active && "glow-border shadow-[0_0_60px_-12px_rgba(124,58,237,0.6)]"
      )}
      whileHover={active ? { scale: 1.01 } : undefined}
    >
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={active}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent lg:bg-gradient-to-r" />
          {project.type === "mobile" && (
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative h-[280px] w-[140px] rounded-[2rem] border-4 border-white/20 bg-black/80 p-2 shadow-2xl sm:h-[320px] sm:w-[160px]">
                <div className="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-full bg-white/30" />
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                  <Image src={project.image} alt="" fill className="object-cover" sizes="160px" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <Badge variant="glow" className="mb-3 w-fit">
            {project.category}
          </Badge>
          <h3 className="text-2xl font-bold sm:text-3xl">{project.name}</h3>
          <p className="mt-3 text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.type === "web" && project.liveUrl && (
              <Button variant="glow" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit Website
                </a>
              </Button>
            )}
            {project.type === "mobile" && (
              <>
                {project.appStoreUrl && (
                  <Button variant="glow" asChild>
                    <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="h-4 w-4" />
                      App Store
                    </a>
                  </Button>
                )}
                {project.playStoreUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      Play Store
                    </a>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
  const rotateY = useTransform(dragX, [-200, 200], [-8, 8]);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <SectionWrapper
      id="projects"
      badge="Projects"
      title="Cinematic Project Showcase"
      subtitle="AI SaaS, mobile apps, and interactive experiences — crafted for modern startups."
      className="overflow-hidden"
    >
      <div ref={containerRef} className="relative mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" onClick={prev} aria-label="Previous project">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"
                )}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={next} aria-label="Next project">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <motion.div
          style={{ rotateY, perspective: 1200 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) next();
            else if (info.offset.x > 80) prev();
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[index].id}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={projects[index]} active />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 hidden gap-4 overflow-x-auto pb-4 lg:flex">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setIndex(i)}
              whileHover={{ y: -4 }}
              className={cn(
                "glass min-w-[200px] flex-shrink-0 rounded-xl p-3 text-left transition",
                i === index && "ring-2 ring-[#00E5FF]/50"
              )}
            >
              <div className="relative mb-2 h-24 w-full overflow-hidden rounded-lg">
                <Image src={p.image} alt="" fill className="object-cover" sizes="200px" />
              </div>
              <p className="text-sm font-medium">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.category}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
