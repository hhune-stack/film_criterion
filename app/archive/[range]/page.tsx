import Link from "next/link";
import ArchiveItem from "@/components/ArchiveItem";
import { getArticles } from "@/data/articles";

export default async function ArchiveRangePage({
  params,
}: {
  params: Promise<{ range: string }>;
}) {
  const { range } = await params;

  const [startText, endText] = range.split("-");
  const start = Number(startText);
  const end = Number(endText);

  const rangeArticles = getArticles()
    .filter((article) => {
      const number = Number(article.number.slice(1));
      return number >= start && number <= end;
    })
    .sort(
      (a, b) => Number(a.number.slice(1)) - Number(b.number.slice(1))
    );

  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-8 pt-28 pb-24">
        <div className="max-w-[1040px]">
          <Link
            href="/archive"
            className="text-[12px] tracking-[0.12em] text-neutral-400 transition-opacity hover:opacity-50"
          >
            ← ARCHIVE
          </Link>

          <div className="border-b border-neutral-300 pb-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              ARCHIVE
            </p>

            <h1 className="mt-4 text-[40px] font-serif tracking-tight">
              #{String(start).padStart(4, "0")}–#
              {String(end).padStart(4, "0")}
            </h1>

            <p className="mt-2 text-[12px] text-neutral-500">
              この期間に掲載された批評
            </p>
          </div>

          <div className="mt-14">
            {rangeArticles.map((article) => (
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