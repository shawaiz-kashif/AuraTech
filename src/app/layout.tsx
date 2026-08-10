import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Preloader from "@/components/Preloader";
import BodyThemeClass from "@/components/BodyThemeClass";
import { BODY_THEME } from "@/lib/pageThemes";

export const metadata: Metadata = {
  title: "AuraTech - Software & Hardware Solutions",
  description: "AuraTech Software & Hardware Solutions",
  keywords: "Software Solutions, Hardware Solutions, App Development, Web Design",
  manifest: "/site.webmanifest",
  // favicon.ico and apple-icon.png in src/app are picked up automatically
  // by Next.js's file-based icon convention.
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#e8f1ff" />
        <link href="/css/preloader.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/plugin.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link href="/css/overrides.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <script
          // Sets the correct per-page theme class before first paint, so a
          // hard navigation/refresh never flashes the wrong theme (light vs
          // dark) while waiting for React to hydrate. Client-side route
          // changes are handled by BodyThemeClass instead.
          dangerouslySetInnerHTML={{
            __html: `document.body.className = (${JSON.stringify(
              BODY_THEME
            )})[location.pathname] || "";`,
          }}
        />
        <BodyThemeClass />
        <Preloader />
        {children}
        <Script src="/js/modernizr-3.5.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-3.6.0.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/app.bundle.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
