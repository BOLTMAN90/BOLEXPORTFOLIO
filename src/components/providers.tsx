"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { LenisProvider, useLenisControl } from "@/context/lenis-context";
import { DevicePreviewProvider, useDevicePreview } from "@/context/device-preview-context";
import { ScrollToTopOnNavigate } from "@/components/shared/scroll-to-top-on-navigate";

function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const { isSimulated } = useDevicePreview();
  const { lenisRef } = useLenisControl();

  useEffect(() => {
    if (reduced || isSimulated) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, [reduced, isSimulated, lenisRef]);

  return (
    <>
      <ScrollToTopOnNavigate />
      {children}
    </>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
      <LenisProvider>
        <DevicePreviewProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </DevicePreviewProvider>
      </LenisProvider>
    </ThemeProvider>
  );
}
