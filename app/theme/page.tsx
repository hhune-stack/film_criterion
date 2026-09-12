import Link from "next/link";
import { getArticles } from "@/data/articles";

export default function ThemePage() {
  const articles = getArticles();
  const themes = Array.from(new Set(articles.flatMap((article) => article.themes)));

  return (
    <main><section className="mx-auto max-w-[1200px] px-8 pt-28 pb-24"><div className="max-w-[1040px]">
      <div className="border-b border-neutral-300 pb-8"><p className="text-xs tracking-[0.2em] text-neutral-500">THEME INDEX</p><h1 className="mt-5 font-serif text-3xl tracking-tight">映画をめぐる主題</h1><p className="mt-3 max-w-[560px] text-sm leading-[1.9] text-neutral-500">映画から広がるいくつかの主題。作品や批評を横断して読むための索引です。</p></div>
      <div className="mt-14 grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3">{themes.map((theme) => <Link key={theme} href={`/theme/${encodeURIComponent(theme)}`} className="group border-b border-neutral-300 pb-4 transition-opacity hover:opacity-50"><div className="flex items-baseline justify-between"><span className="font-serif text-[18px] tracking-tight">{theme}</span><span className="text-xs text-neutral-400">{articles.filter((article) => article.themes.includes(theme)).length}</span></div></Link>)}</div>
    </div></section></main>
  );
}