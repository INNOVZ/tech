import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
