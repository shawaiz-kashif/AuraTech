"use client";

import { useEffect, type RefObject } from "react";

type OwlOptions = Record<string, unknown>;

declare global {
  interface Window {
    jQuery?: ((selector: unknown) => JQueryLike) & { fn?: { owlCarousel?: unknown } };
  }
}

interface JQueryLike {
  owlCarousel: (options?: OwlOptions) => JQueryLike;
  trigger: (event: string) => JQueryLike;
  data: (key: string) => unknown;
}

/**
 * Initializes owl.carousel on the given ref directly from React instead of
 * relying on the vendor script's `$(window).on('load', ...)` binding.
 *
 * That binding is unreliable here for two independent reasons: (1) in a
 * Next.js hydration flow, `window.load` can fire before main.js even
 * attaches its listener, silently dropping the init; (2) owl.carousel 2.x
 * throws internally when item count exactly equals the visible-items count
 * with `loop: true` (hits this on the 3-card services carousel), which
 * leaves the element stuck `display:none` with no `.owl-loaded` class.
 * Calling it ourselves on mount removes both failure modes.
 */
export function useOwlCarousel(ref: RefObject<HTMLElement | null>, options: OwlOptions) {
  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const tryInit = () => {
      if (cancelled) return;
      const $ = window.jQuery;
      if (!$ || !$.fn?.owlCarousel) {
        if (attempts++ < 50) setTimeout(tryInit, 100);
        return;
      }
      const el = ref.current;
      if (!el) return;
      const $el = $(el) as unknown as JQueryLike;
      if ($el.data("owl.carousel")) return; // already initialized
      $el.owlCarousel(options);
    };

    tryInit();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
