"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { projectLinkLabel, projectPreviewHref } from "@/lib/projects";

export function PhoneScreenshot({
  src,
  alt,
  href,
  hoverLabel,
}: {
  src: string;
  alt: string;
  href: string;
  hoverLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[2.5rem]"
      aria-label={`${alt} — ${hoverLabel}`}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto h-[360px] w-[180px] rounded-[2.5rem] border-4 border-white/20 bg-black/90 p-2 shadow-xl shadow-primary/20 transition-shadow group-hover:shadow-[0_0_40px_-8px_rgba(0,229,255,0.4)] sm:h-[400px] sm:w-[200px]"
      >
        <div className="absolute left-1/2 top-2.5 z-10 h-1 w-12 -translate-x-1/2 rounded-full bg-white/30" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="200px"
          />
        </div>
        <span className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#00E5FF]/90 px-2.5 py-0.5 text-[9px] font-semibold text-[#0B0F19] opacity-0 transition-opacity group-hover:opacity-100">
          {hoverLabel}
        </span>
      </motion.div>
    </a>
  );
}

export function WebScreenshot({
  src,
  alt,
  href,
  hoverLabel,
  siteLabel,
}: {
  src: string;
  alt: string;
  href: string;
  hoverLabel: string;
  siteLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
      aria-label={`${alt} — ${hoverLabel}`}
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.35 }}
        className="relative overflow-hidden rounded-xl border border-white/15 bg-[#1a1f2e] shadow-xl transition-shadow group-hover:shadow-[0_0_40px_-8px_rgba(0,229,255,0.35)]"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#0f1419] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-1 flex-1 truncate text-center text-[10px] text-muted-foreground">
            {siteLabel}
          </span>
        </div>
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <span className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#00E5FF]/90 px-3 py-1 text-[10px] font-semibold text-[#0B0F19] opacity-0 transition-opacity group-hover:opacity-100">
          {hoverLabel}
        </span>
      </motion.div>
    </a>
  );
}

export function ProjectMedia({ project }: { project: Project }) {
  const href = projectPreviewHref(project);
  const label = projectLinkLabel(project);
  const shots = project.screenshots ?? [project.image];
  const isMobile = project.type === "mobile";

  if (isMobile) {
    return (
      <div className="flex flex-wrap items-end justify-center gap-6 sm:gap-8">
        {shots.map((src, i) => (
          <PhoneScreenshot
            key={src}
            src={src}
            alt={`${project.name} screen ${i + 1}`}
            href={href}
            hoverLabel={label}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {shots.map((src) => (
        <WebScreenshot
          key={src}
          src={src}
          alt={`${project.name} website`}
          href={href}
          hoverLabel={label}
          siteLabel={
            project.liveUrl
              ? new URL(project.liveUrl).hostname.replace(/^www\./, "")
              : project.name.toLowerCase()
          }
        />
      ))}
    </div>
  );
}
