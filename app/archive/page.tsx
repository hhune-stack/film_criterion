import ArchiveItem from "@/components/ArchiveItem";
import { getArticles } from "@/data/articles";

export default function ArchivePage() {
  const articles = [...getArticles()].sort((a, b) => Number(a.number.slice(1)) - Number(b.number.slice(1)));

  return (
    <main><section className="mx-auto max-w-[1200px] px-8 pt-28 pb-24"><div className="max-w-[1040px]">
      <div className="border-b border-neutral-300 pb-8"><p className="text-[11px] tracking-[0.2em] text-neutral-400">ARCHIVE</p><h1 className="mt-4 text-[40px] font-serif tracking-tight">Archive</h1><p className="mt-4 max-w-[560px] text-[14px] leading-[1.9] text-neutral-500">これまでに掲載された批評。新作と旧作を分けず、映画について考えるための文章を収録しています。</p></div>
      <div className="mt-14">{articles.map((article) => <ArchiveItem key={article.number} href={`/articles/${article.number.slice(1)}`} number={article.number} date={article.date} title={article.title} film={article.film} director={article.director} country={article.country} year={article.year} duration={article.duration} author={article.author.name} />)}</div>
    </div></section></main>
  );
}