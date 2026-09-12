import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/data/articles";

export default function LatestPage() {
  const articles = getArticles();

  return (
    <main><section className="mx-auto max-w-[1200px] px-8 pt-28 pb-24"><div className="max-w-[1040px]">
      <div className="border-b border-neutral-300 pb-8"><p className="text-xs tracking-[0.2em] text-neutral-500">LATEST</p><h1 className="mt-5 font-serif text-3xl tracking-tight">最新の記事</h1><p className="mt-3 max-w-[560px] text-sm leading-[1.9] text-neutral-500">CONTRECHAMPに掲載された最新の批評。</p></div>
      <div className="mt-14">{articles.map((article) => <ArticleCard key={article.number} href={`/articles/${article.number.slice(1)}`} number={article.number} category={article.category} date={article.date} title={article.title} film={article.film} director={article.director} country={article.country} year={article.year} duration={article.duration} author={article.author.name} />)}</div>
    </div></section></main>
  );
}