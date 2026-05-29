"use client";

import dynamic from "next/dynamic";

export const ParticleFieldLazy = dynamic(
  () => import("./particle-field").then((m) => m.ParticleField),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 -z-10 gradient-mesh animate-pulse opacity-50" />
    ),
  }
);
