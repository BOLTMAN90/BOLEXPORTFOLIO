"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatedName } from "@/components/shared/animated-name";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { useLenisControl } from "@/context/lenis-context";
import { useDevicePreview } from "@/context/device-preview-context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { setScrollLocked } = useLenisControl();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { isSimulated } = useDevicePreview();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isSimulated) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isSimulated]);

  useEffect(() => {
    setOpen(false);
    setScrollLocked(false);
  }, [pathname, setScrollLocked]);

  useEffect(() => {
    setScrollLocked(open);
  }, [open, setScrollLocked]);

  return (
    <header
      className={cn(
        "z-50 transition-all duration-500",
        isSimulated ? "sticky top-0" : "fixed top-0 left-0 right-0",
        scrolled || isSimulated
          ? "glass-strong py-3 shadow-lg shadow-primary/5"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl sm:text-2xl">
          <AnimatedName />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-[#00E5FF]",
                  pathname === item.href
                    ? "font-medium text-[#00E5FF]"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => {
                document.documentElement.classList.add("transitioning");
                setTheme(theme === "dark" ? "light" : "dark");
                setTimeout(() => document.documentElement.classList.remove("transitioning"), 500);
              }}
              className="glass rounded-lg p-2 text-muted-foreground hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <Link
            href="/contact"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:shadow-primary/50 sm:inline-block"
          >
            Hire Me
          </Link>
          <button
            type="button"
            className="glass rounded-lg p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong border-t border-white/10 lg:hidden"
          >
            <ul className="flex flex-col gap-4 p-6">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-lg",
                      pathname === item.href ? "text-[#00E5FF]" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
