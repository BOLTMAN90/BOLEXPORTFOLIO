"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import type Lenis from "lenis";

type LenisContextValue = {
  lenisRef: React.RefObject<Lenis | null>;
  setScrollLocked: (locked: boolean) => void;
};

const LenisContext = createContext<LenisContextValue | null>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  const setScrollLocked = (locked: boolean) => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (locked) lenis.stop();
    else lenis.start();
  };

  return (
    <LenisContext.Provider value={{ lenisRef, setScrollLocked }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenisControl() {
  const ctx = useContext(LenisContext);
  if (!ctx) {
    throw new Error("useLenisControl must be used within LenisProvider");
  }
  return ctx;
}
