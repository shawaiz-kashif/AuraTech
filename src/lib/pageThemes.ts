// Original template pages carry different body classes per page (dark vs
// light theme). Shared by the inline anti-FOUC script (layout.tsx) and the
// client-side route-change handler (BodyThemeClass.tsx).
export const BODY_THEME: Record<string, string> = {
  "/": "dark-deep dark-bg",
  "/app-development": "",
};
