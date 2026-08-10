"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BODY_THEME } from "@/lib/pageThemes";

// Handles client-side route changes (next/link navigation). The initial
// load is handled by a synchronous inline script in layout.tsx instead,
// since this effect runs after first paint and would otherwise flash the
// wrong theme briefly on a hard navigation/refresh.
export default function BodyThemeClass() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.className = BODY_THEME[pathname] ?? "";
  }, [pathname]);

  return null;
}
