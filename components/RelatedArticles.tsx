import Link from "next/link";

type RelatedArticle = {
  number: string;
  title: string;
  film: string;
};

type RelatedArticlesProps = {
  articles: RelatedArticle[];
};

export default function RelatedArticles({
  articles,
}: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-10 border-t border-neutral-300 pt-6">
      <p className="text-[10px] tracking-[0.2em] text-neutral-400">
        RELATED ARTICLES
      </p>

      <div className="mt-6">
        {articles.map((article) => (
          <Link
            key={article.number}
            href={`/articles/${article.number.slice(1)}`}
            className="block border-b border-neutral-200 py-5 transition-opacity hover:opacity-50"
          >
            <p className="text-[10px] tracking-[0.15em] text-neutral-400">
              {article.number}
            </p>

            <h3 className="mt-2 text-[16px] font-serif">
              {article.title}
            </h3>

            <p className="mt-1 text-[12px] text-neutral-500">
              『{article.film}』
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}