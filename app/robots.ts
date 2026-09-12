import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
      "https://contrecamp-e18gvas07-hhu4.vercel.app/sitemap.xml",
  };
}