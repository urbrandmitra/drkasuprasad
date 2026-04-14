import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.drkasuprasad.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/biography/`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/clinical-contributions/`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/recognition-impact/`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/publications/`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
