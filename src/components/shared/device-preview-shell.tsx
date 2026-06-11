"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useDevicePreview } from "@/context/device-preview-context";
import { DevicePreviewSwitcher } from "@/components/shared/device-preview-switcher";
import { cn } from "@/lib/utils";

const DEVICE_SPECS = {
  mobile: { width: 390, height: 844, label: "Mobile" },
  tablet: { width: 820, height: 1024, label: "iPad" },
} as const;

function useFrameScale(frameWidth: number) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const maxWidth = window.innerWidth - 48;
      setScale(Math.min(1, maxWidth / frameWidth));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [frameWidth]);

  return scale;
}

function DevicePreviewOverlay({ mode }: { mode: "tablet" | "mobile" }) {
  const pathname = usePathname();
  const spec = DEVICE_SPECS[mode];
  const scale = useFrameScale(spec.width);
  const [frameHeight, setFrameHeight] = useState<number>(spec.height);

  useEffect(() => {
    const update = () => {
      setFrameHeight(
        Math.min(spec.height, Math.max(480, Math.round((window.innerHeight - 160) / scale)))
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [spec.height, scale]);

  const iframeSrc = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}${pathname}${window.location.search}`;
  }, [pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#050810]">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(124,58,237,0.3) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex shrink-0 flex-col items-center gap-2 px-4 pb-3 pt-5">
        <p className="text-center text-xs text-muted-foreground">
          Previewing as{" "}
          <span className="font-medium text-[#00E5FF]">{spec.label}</span>
          <span className="text-muted-foreground/70"> · {spec.width}px wide</span>
        </p>
        <DevicePreviewSwitcher />
      </div>

      <div className="relative z-10 flex flex-1 items-start justify-center overflow-hidden px-4 pb-6">
        <div
          className="origin-top transition-transform duration-300"
          style={{
            transform: `scale(${scale})`,
            width: spec.width,
            height: frameHeight,
          }}
        >
          <div
            className={cn(
              "flex h-full w-full flex-col overflow-hidden bg-[#0B0F19] shadow-2xl shadow-black/60",
              mode === "mobile"
                ? "rounded-[2.75rem] border-[10px] border-white/10"
                : "rounded-[1.25rem] border-[8px] border-white/10"
            )}
          >
            {mode === "mobile" && (
              <div className="relative z-10 flex h-7 shrink-0 items-center justify-center bg-[#0B0F19]">
                <div className="h-[22px] w-[90px] rounded-full bg-black/90" />
              </div>
            )}
            {mode === "tablet" && (
              <div className="flex h-6 shrink-0 items-center justify-center border-b border-white/10 bg-[#0f1419]">
                <div className="h-1 w-1 rounded-full bg-white/25" />
              </div>
            )}
            <iframe
              key={`${mode}-${iframeSrc}`}
              src={iframeSrc}
              title={`Portfolio ${spec.label} preview`}
              className="min-h-0 w-full flex-1 border-0 bg-background"
              style={{ colorScheme: "dark" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DevicePreviewShell({ children }: { children: ReactNode }) {
  const { mode, isSimulated, isEmbedded } = useDevicePreview();
  const frameMode = mode === "desktop" ? null : mode;

  if (isEmbedded) {
    return <>{children}</>;
  }

  if (isSimulated && frameMode) {
    return <DevicePreviewOverlay mode={frameMode} />;
  }

  return (
    <>
      {children}
      <DevicePreviewSwitcher />
    </>
  );
}
