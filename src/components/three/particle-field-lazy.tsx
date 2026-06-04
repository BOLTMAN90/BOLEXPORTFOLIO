"use client";

import { Component, type ReactNode } from "react";
import dynamic from "next/dynamic";

function WebGLFallback() {
  return <div className="absolute inset-0 -z-10 gradient-mesh opacity-60" aria-hidden />;
}

class WebGLErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <WebGLFallback />;
    return this.props.children;
  }
}

const ParticleField = dynamic(
  () => import("./particle-field").then((m) => m.ParticleField),
  {
    ssr: false,
    loading: () => <WebGLFallback />,
  }
);

export function ParticleFieldLazy() {
  return (
    <WebGLErrorBoundary>
      <ParticleField />
    </WebGLErrorBoundary>
  );
}
