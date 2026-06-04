"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { ProjectMedia } from "@/components/sections/project-media";
import { ProjectDownloadButtons } from "@/components/sections/project-download-buttons";
import type { Project } from "@/data/projects";
import { projectPreviewHref } from "@/lib/projects";

export function ProjectDetailSection({ project }: { project: Project }) {
  const previewHref = projectPreviewHref(project);

  return (
    <SectionWrapper
      badge="Project"
      title={project.name}
      subtitle={project.category}
      className="overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-[#00E5FF]"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <article className="glass glow-border overflow-hidden rounded-3xl">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-10">
              <div className="flex flex-col justify-center">
                <Badge variant="glow" className="mb-4 w-fit">
                  {project.category}
                </Badge>
                <h2 className="text-2xl font-bold sm:text-3xl">{project.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ProjectDownloadButtons project={project} />

                <p className="mt-4 text-xs text-muted-foreground">
                  {project.liveUrl ? (
                    <>
                      Tap the preview → opens{" "}
                      <a
                        href={previewHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00E5FF] hover:underline"
                      >
                        {new URL(project.liveUrl).hostname.replace(/^www\./, "")}
                      </a>
                    </>
                  ) : (
                    <>Tap a screenshot to open the app store</>
                  )}
                  {project.appStoreUrl && project.playStoreUrl && (
                    <> · Use the buttons above for App Store or Google Play</>
                  )}
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <ProjectMedia project={project} />
              </div>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}
