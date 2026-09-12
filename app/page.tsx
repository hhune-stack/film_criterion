import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import { getArticles } from "@/data/articles";

export default function Home() {
  const latestArticles = getArticles().slice(0, 3);

  return (
    <>
      <Intro />
      <main>
        <Hero />
        <section className="mx-auto max-w-[1200px] px-8 pb-20">
          <div className="max-w-[1040px]">
            <div className="pt-2"><p className="text-[11px] tracking-[0.28em] text-neutral-500">LATEST</p></div>
            <div className="mt-4">
              {latestArticles.map((article, index) => (
                <div key={article.number} className={index === 0 ? "mb-8" : ""}>
                  <ArticleCard href={`/articles/${article.number.slice(1)}`} number={article.number} category={article.category} date={article.date} title={article.title} film={article.film} director={article.director} country={article.country} year={article.year} duration={article.duration} author={article.author.name} featured={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contribution" className="mx-auto max-w-[1200px] px-8 pb-24">
          <div className="max-w-[1040px] border-t border-neutral-300 pt-6">
            <p className="text-xs tracking-[0.2em] text-neutral-500">CONTRIBUTION</p>
            <div className="mt-8 max-w-[640px]">
              <h2 className="font-serif text-2xl tracking-tight">寄稿について</h2>
              <p className="mt-5 text-sm leading-[1.9] text-neutral-600">CONTRECHAMPでは、映画について考える文章を募集しています。映画をめぐる批評、エッセイ、対話など、映画から世界へ向けて思考を開く文章をお待ちしています。</p>
              <Link href="/contribution" className="mt-6 inline-block text-xs tracking-[0.15em] text-neutral-500 underline underline-offset-4 transition-opacity hover:opacity-50">READ MORE</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}