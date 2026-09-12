import ArchiveItem from "@/components/ArchiveItem";
import { getArticles } from "@/data/articles";
import Link from "next/link";

export default function BackNumberPage() {
  const articles = getArticles();

  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-8 pt-28 pb-24">
        <div className="max-w-[1040px]">

          {/* Back to Archive */}
          <Link
            href="/archive"
            className="text-[12px] tracking-[0.12em] text-neutral-400 transition-opacity hover:opacity-50"
          >
            ← ARCHIVE
          </Link>

          {/* Page Header */}
          <div className="mt-10 border-b border-neutral-300 pb-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              ARCHIVE
            </p>

            <h1 className="mt-4 font-serif text-[40px] tracking-tight">
              #0001–#0003
            </h1>

            <p className="mt-3 text-[13px] leading-[1.9] text-neutral-500">
              この期間に掲載された批評。
            </p>
          </div>

          {/* Articles */}
          <div className="mt-14">
            {articles.map((article) => (
              <ArchiveItem
                key={article.number}
                href={`/articles/${article.number.slice(1)}`}
                number={article.number}
                date={article.date}
                title={article.title}
                film={article.film}
                director={article.director}
                country={article.country}
                year={article.year}
                duration={article.duration}
                author={article.author.name}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
