"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGsapScroll() {
  useEffect(() => {
    if (registered) return;
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }, []);
}
