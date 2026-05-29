import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-primary/30 bg-background/50 px-4 py-3 text-base shadow-inner transition-all placeholder:text-muted-foreground focus-visible:border-[#00E5FF]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]/30 focus-visible:shadow-[0_0_24px_-4px_rgba(0,229,255,0.35)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
