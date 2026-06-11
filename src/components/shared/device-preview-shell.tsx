"use client";

import type { ReactNode } from "react";
import { useDevicePreview } from "@/context/device-preview-context";
import { DevicePreviewSwitcher } from "@/components/shared/device-preview-switcher";
import { cn } from "@/lib/utils";

function DeviceFrame({ mode, children }: { mode: "tablet" | "mobile"; children: ReactNode }) {
  const isMobile = mode === "mobile";

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden bg-[#0B0F19] shadow-2xl shadow-black/50 transition-all duration-500",
        isMobile
          ? "w-[390px] rounded-[2.75rem] border-[10px] border-white/10"
          : "w-[820px] max-w-[calc(100vw-2rem)] rounded-[1.25rem] border-[8px] border-white/10"
      )}
    >
      {isMobile && (
        <div className="absolute left-1/2 top-3 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black/80" />
      )}
      {!isMobile && (
        <div className="flex items-center justify-center border-b border-white/10 bg-[#0f1419] py-2">
          <div className="h-1 w-1 rounded-full bg-white/20" />
        </div>
      )}
      <div
        data-device-scroll
        className={cn(
          "overflow-x-hidden overflow-y-auto overscroll-contain bg-background",
          isMobile ? "max-h-[min(844px,80vh)] min-h-[min(844px,80vh)]" : "max-h-[min(1100px,82vh)] min-h-[min(1100px,82vh)]"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function DevicePreviewShell({ children }: { children: ReactNode }) {
  const { mode, isSimulated } = useDevicePreview();
  const frameMode = mode === "desktop" ? null : mode;

  if (!isSimulated || !frameMode) {
    return (
      <>
        {children}
        <DevicePreviewSwitcher />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#050810]">
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(124,58,237,0.25) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="relative flex min-h-screen flex-col items-center px-4 pb-28 pt-8">
        <p className="mb-6 text-center text-xs text-muted-foreground">
          Previewing portfolio as{" "}
          <span className="font-medium text-[#00E5FF]">
            {mode === "mobile" ? "Mobile" : "iPad"}
          </span>
          {" · "}
          {mode === "mobile" ? "390px" : "820px"} width
        </p>
        <DeviceFrame mode={frameMode}>
          {children}
        </DeviceFrame>
      </div>
      <DevicePreviewSwitcher />
    </div>
  );
}
