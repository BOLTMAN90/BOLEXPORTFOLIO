"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type DevicePreviewMode = "desktop" | "tablet" | "mobile";

interface DevicePreviewContextValue {
  mode: DevicePreviewMode;
  setMode: (mode: DevicePreviewMode) => void;
  isSimulated: boolean;
}

const DevicePreviewContext = createContext<DevicePreviewContextValue | null>(null);

const STORAGE_KEY = "bolex-device-preview";

export function DevicePreviewProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<DevicePreviewMode>("desktop");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
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
    isSimulated: hydrated && mode !== "desktop",
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
