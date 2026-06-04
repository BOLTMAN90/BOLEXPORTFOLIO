"use client";

import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

export function ProjectDownloadButtons({ project }: { project: Project }) {
  const hasWebsite = Boolean(project.liveUrl);
  const hasAppStore = Boolean(project.appStoreUrl);
  const hasPlayStore = Boolean(project.playStoreUrl);

  return (
    <div className="mt-8 flex flex-col gap-3">
      {hasWebsite && (
        <Button variant="glow" size="lg" className="w-full sm:w-auto" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Globe className="h-4 w-4" />
            Visit Website
            <ExternalLink className="h-4 w-4 opacity-70" />
          </a>
        </Button>
      )}
      {(hasAppStore || hasPlayStore) && (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {hasAppStore && (
            <Button
              variant={hasWebsite ? "outline" : "glow"}
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                <Smartphone className="h-4 w-4" />
                App Store
                <ExternalLink className="h-4 w-4 opacity-70" />
              </a>
            </Button>
          )}
          {hasPlayStore && (
            <Button
              variant={hasWebsite || hasAppStore ? "outline" : "glow"}
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                <Smartphone className="h-4 w-4" />
                Google Play
                <ExternalLink className="h-4 w-4 opacity-70" />
              </a>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
