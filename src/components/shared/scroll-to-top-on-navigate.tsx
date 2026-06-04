"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenisControl } from "@/context/lenis-context";

/** Reset scroll on route change — Lenis keeps the previous page's scroll position otherwise. */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const { lenisRef } = useLenisControl();

  useLayoutEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.start();
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, lenisRef]);

  return null;
}
