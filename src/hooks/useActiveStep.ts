"use client";

import { useEffect, useRef, useState } from "react";

// Tracks which of N step elements currently sits closest to the vertical
// center of the viewport, for a sticky-left/reveal-right scrollytelling
// layout. Returns a ref-setter to attach to each step and the active index.
export function useActiveStep(count: number) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    refs.current.slice(0, count).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [count]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  };

  return { active, setRef };
}
