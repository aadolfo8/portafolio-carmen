import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://carmenpuche.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1, changeFrequency: "monthly", alternates: { languages: { es: siteUrl, en: `${siteUrl}/en` } } },
    { url: `${siteUrl}/en`, priority: 0.9, changeFrequency: "monthly", alternates: { languages: { es: siteUrl, en: `${siteUrl}/en` } } },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.id}`,
      priority: 0.7,
      changeFrequency: "yearly" as const,
    })),
  ];
}
