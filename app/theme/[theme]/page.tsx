import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/data/articles";

export default async function ThemeDetailPage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params;
  const decodedTheme = decodeURIComponent(theme);
  const articles = getArticles();
  const themeArticles = articles.filter((article) => article.themes.includes(decodedTheme));

  return (
    <main><section className="mx-auto max-w-[1200px] px-8 pt-28 pb-24"><div className="max-w-[1040px]">
      <div className="border-b border-neutral-300 pb-8"><p className="text-[11px] tracking-[0.2em] text-neutral-400">THEME</p><h1 className="mt-4 text-[40px] font-serif tracking-tight">{decodedTheme}</h1><p className="mt-4 text-[14px] text-neutral-500">{themeArticles.length}本の記事</p></div>
      <div className="mt-14">{themeArticles.map((article) => <ArticleCard key={article.number} href={`/articles/${article.number.slice(1)}`} number={article.number} category={article.category} date={article.date} title={article.title} film={article.film} director={article.director} country={article.country} year={article.year} duration={article.duration} author={article.author.name} />)}</div>
    </div></section></main>
  );
}