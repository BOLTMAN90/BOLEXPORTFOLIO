"use client";

import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import { useDevicePreview, type DevicePreviewMode } from "@/context/device-preview-context";
import { cn } from "@/lib/utils";

const options: { mode: DevicePreviewMode; label: string; icon: typeof Monitor }[] = [
  { mode: "desktop", label: "Desktop", icon: Monitor },
  { mode: "tablet", label: "iPad", icon: Tablet },
  { mode: "mobile", label: "Mobile", icon: Smartphone },
];

export function DevicePreviewSwitcher() {
  const { mode, setMode, isEmbedded } = useDevicePreview();

  if (isEmbedded) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="z-[110]"
      role="toolbar"
      aria-label="Preview device size"
    >
      <div className="glass-strong glow-border flex items-center gap-1 rounded-full p-1.5 shadow-xl shadow-primary/10">
        <span className="hidden px-2 text-[10px] font-medium uppercase tracking-widest text-muted-foreground sm:inline">
          View as
        </span>
        {options.map(({ mode: optionMode, label, icon: Icon }) => {
          const active = mode === optionMode;
          return (
            <button
              key={optionMode}
              type="button"
              onClick={() => setMode(optionMode)}
              aria-pressed={active}
              aria-label={`${label} view`}
              title={label}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-all",
                active
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
