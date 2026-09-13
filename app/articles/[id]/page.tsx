import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleMeta from "@/components/ArticleMeta";
import ArticleImage from "@/components/ArticleImage";
import ArticleBody from "@/components/ArticleBody";
import References from "@/components/References";
import Author from "@/components/Author";
import RelatedArticles from "@/components/RelatedArticles";
import { getArticleById, getArticles } from "@/data/articles";

export function generateStaticParams() {
  return getArticles().map((article) => ({ id: article.number.slice(1) }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getArticleById(id);

if (!article) notFound();

  const allArticles = getArticles();
  const relatedArticles = article.related
    .map((number) => allArticles.find((item) => item.number === number))
    .filter((item): item is (typeof allArticles)[number] => item !== undefined);

  return (
    <main><article className="mx-auto max-w-[720px] py-20">
      <Link href="/" className="text-[12px] tracking-[0.12em] text-neutral-400 transition-opacity hover:opacity-50">← CONTRECHAMP</Link>
      <div className="mt-12 flex items-center gap-4 text-[11px] tracking-[0.18em] text-neutral-500"><span>{article.number}</span><span>{article.category}</span><span>{article.date}</span></div>
      <h1 className="mt-5 text-[40px] font-serif tracking-tight leading-[1.25]">{article.title}</h1>
      <h2 className="-ml-1 mt-3 text-[19px] font-serif">『{article.film}』</h2>
      <p className="ml-1.5 mt-2 text-[12px] tracking-[0.08em] text-neutral-400">{article.originalTitle}</p>
      <div className="mt-6"><ArticleMeta director={article.director} country={article.country} year={article.year} duration={article.duration} releaseNote={article.releaseNote} officialSite={article.officialSite} /></div>
      {article.image && <ArticleImage src={article.image} film={article.film} />}
      <hr className="my-14 border-neutral-300" />
      <ArticleBody body={article.body} />
      <div className="mt-10 border-t border-neutral-300 pt-10"><References references={article.references} /><Author name={article.author.name} bio={article.author.bio} /><div className="pb-20"><RelatedArticles articles={relatedArticles} /></div></div>
    </article></main>
  );
}