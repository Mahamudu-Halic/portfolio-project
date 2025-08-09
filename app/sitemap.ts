import { MetadataRoute } from "next";

export default function siteMap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mahamuduhalic.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://mahamuduhalic.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://mahamuduhalic.vercel.app/projects",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
