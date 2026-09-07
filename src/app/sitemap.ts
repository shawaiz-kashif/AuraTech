import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/web-development`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/app-development`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/software-development`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const portfolioSlugs = [
    "edi-integration",
    "wims-warehouse-management",
    "greenline-rentals",
    "procuretopay",
    "drop-pipeline",
    "inventus",
    "quickmart",
    "fault-desk",
    "solesavvy",
    "grocery-rbac-dashboard",
  ];

  const portfolioPages: MetadataRoute.Sitemap = portfolioSlugs.map((slug) => ({
    url: `${SITE_URL}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...mainPages, ...portfolioPages];
}
