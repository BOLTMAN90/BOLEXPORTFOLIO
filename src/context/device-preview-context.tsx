"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type DevicePreviewMode = "desktop" | "tablet" | "mobile";

interface DevicePreviewContextValue {
  mode: DevicePreviewMode;
  setMode: (mode: DevicePreviewMode) => void;
  isSimulated: boolean;
  /** True when this page is rendered inside the preview iframe */
  isEmbedded: boolean;
}

const DevicePreviewContext = createContext<DevicePreviewContextValue | null>(null);

const STORAGE_KEY = "bolex-device-preview";

export function DevicePreviewProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<DevicePreviewMode>("desktop");
  const [hydrated, setHydrated] = useState(false);
  const [isEmbedded, setIsEmbedded] = useState(false);

  useEffect(() => {
    setIsEmbedded(window.self !== window.top);
    const saved = sessionStorage.getItem(STORAGE_KEY) as DevicePreviewMode | null;
    if (saved === "desktop" || saved === "tablet" || saved === "mobile") {
      setModeState(saved);
    }
    setHydrated(true);
  }, []);

  const setMode = (next: DevicePreviewMode) => {
    setModeState(next);
    sessionStorage.setItem(STORAGE_KEY, next);
  };

  const value: DevicePreviewContextValue = {
    mode: hydrated ? mode : "desktop",
    setMode,
    isSimulated: hydrated && !isEmbedded && mode !== "desktop",
    isEmbedded,
  };

  return (
    <DevicePreviewContext.Provider value={value}>{children}</DevicePreviewContext.Provider>
  );
}

export function useDevicePreview() {
  const ctx = useContext(DevicePreviewContext);
  if (!ctx) {
    throw new Error("useDevicePreview must be used within DevicePreviewProvider");
  }
  return ctx;
}
