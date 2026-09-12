import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Article = {
  number: string;
  published: boolean;
  category: string;
  date: string;
  title: string;
  film: string;
  originalTitle: string;
  director: string;
  country: string;
  year: string;
  releaseNote: string;
  duration: string;
  image?: string;
  officialSite?: string;
  themes: string[];
  body: BodyBlock[];
  references: string[];
  author: { name: string; bio: string };
  related: string[];
};

const articlesDirectory = path.join(process.cwd(), "content", "articles");

function stringValue(value: unknown): string {
  return typeof value === "string" || typeof value === "number" ? String(value) : "";
}

function stringList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function parseBody(content: string): BodyBlock[] {
  const blocks: BodyBlock[] = [];
  let paragraphLines: string[] = [];

  const flushParagraph = () => {
    const text = paragraphLines.join(" ").trim();
    if (text) blocks.push({ type: "paragraph", text });
    paragraphLines = [];
  };

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      blocks.push({ type: "heading", text: trimmed.replace(/^##\s+/, "") });
      continue;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      blocks.push({ type: "quote", text: trimmed.replace(/^>\s+/, "") });
      continue;
    }

    const image = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      flushParagraph();
      blocks.push({ type: "image", alt: image[1], src: image[2] });
      continue;
    }

    paragraphLines.push(trimmed);
  }

  flushParagraph();
  return blocks;
}

function sortNewestFirst(a: Article, b: Article) {
  return Number(b.number.replace(/^#/, "")) - Number(a.number.replace(/^#/, ""));
}

export function getArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const source = fs.readFileSync(path.join(articlesDirectory, fileName), "utf8");
      const { data, content } = matter(source);
      const author = data.author && typeof data.author === "object" ? data.author : {};

      return {
        number: stringValue(data.number),
        // published を書かない記事は公開。false の記事だけ下書きとして除外する。
        published: data.published !== false,
        category: stringValue(data.category),
        date: stringValue(data.date),
        title: stringValue(data.title),
        film: stringValue(data.film),
        originalTitle: stringValue(data.originalTitle),
        director: stringValue(data.director),
        country: stringValue(data.country),
        year: stringValue(data.year),
        releaseNote: stringValue(data.releaseNote),
        duration: stringValue(data.duration),
        image: stringValue(data.image) || undefined,
        officialSite: stringValue(data.officialSite) || undefined,
        themes: stringList(data.themes),
        body: parseBody(content),
        references: stringList(data.references),
        author: {
          name: stringValue(author.name) || "著者名",
          bio: stringValue(author.bio) || "映画について批評を書いています。",
        },
        related: stringList(data.related),
      } satisfies Article;
    })
    .filter((article) => article.number && article.published)
    .sort(sortNewestFirst);
}

export function getArticleById(id: string): Article | undefined {
  return getArticles().find((article) => article.number === `#${id}`);
}