import type { MetadataRoute } from "next";
import { getArticles } from "@/data/articles";

const baseUrl =
  "https://contrecamp-e18gvas07-hhu4.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles();

  const staticPages = [
    "",
    "/latest",
    "/archive",
    "/theme",
    "/about",
    "/contribution",
  ];

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.number.slice(1)}`,
    lastModified: article.date
      ? new Date(article.date.replace(/\./g, "-"))
      : new Date(),
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),

    ...articlePages,
  ];
}