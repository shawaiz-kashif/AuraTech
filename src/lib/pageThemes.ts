// Original template pages carry different body classes per page (dark vs
// light theme). Shared by the inline anti-FOUC script (layout.tsx) and the
// client-side route-change handler (BodyThemeClass.tsx).
export const BODY_THEME: Record<string, string> = {
  "/": "",
  "/app-development": "",
  "/web-development": "",
  "/software-development": "",
  "/portfolio/edi-integration": "",
  "/portfolio/wims-warehouse-management": "",
  "/portfolio/greenline-rentals": "",
  "/portfolio/procuretopay": "",
  "/portfolio/drop-pipeline": "",
  "/portfolio/inventus": "",
  "/portfolio/quickmart": "",
  "/portfolio/fault-desk": "",
  "/portfolio/solesavvy": "",
  "/portfolio/grocery-rbac-dashboard": "",
  "/about": "",
  "/contact": "",
};
