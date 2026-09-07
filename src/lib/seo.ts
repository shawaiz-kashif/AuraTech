import type { Metadata } from "next";

const SITE_NAME = "AuraTech";
const SITE_URL = "https://auratech-solutions.com";

// Builds a page's metadata (title/description + matching OpenGraph/Twitter
// tags) so every route gets a unique, real title instead of inheriting the
// root layout's default for every page.
export function pageMetadata({
  title: shortTitle,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const title = `${shortTitle} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: ["/AuraTechlogo.png"],
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/AuraTechlogo.png"],
    },
  };
}

export { SITE_NAME, SITE_URL };
