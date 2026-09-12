import Link from "next/link";

type ArticleCardProps = {
  href: string;
  number: string;
  category: string;
  date: string;
  title: string;
  film: string;
  director: string;
  country: string;
  year: string;
  duration: string;
  author?: string;
  featured?: boolean;
};

export default function ArticleCard({
  href,
  number,
  category,
  date,
  title,
  film,
  director,
  country,
  year,
  duration,
  author,
  featured = false,
}: ArticleCardProps) {
  return (
    <article className={featured ? "pt-10 pb-9" : "pt-8"}>
      <Link
        href={href}
        className="relative block border-b border-neutral-200/70 pb-5.5 transition-opacity hover:opacity-60"
      >
<div className="flex items-center text-[11px] tracking-[0.22em] text-neutral-600">
  <span>{number}</span>

  <span className="ml-5">
    {category}
  </span>

  <span className="ml-5">
    {date}
  </span>
</div>

        <h2
          className={
featured
  ? "mt-3 text-[24px] font-serif tracking-tight"
  : "mt-3 text-[21px] font-serif tracking-tight"
          }
        >
          {title}
        </h2>

        <p className="mt-2 text-sm text-neutral-600">
          『{film}』
        </p>

        <div className="mt-5 text-[13px] leading-[1.7] text-neutral-600">
          <p>{director}</p>

          <p>
            {country}｜{year}｜{duration}分
          </p>
        </div>

        {author && (
          <span className="absolute right-0 bottom-[1.8rem] text-xs text-neutral-600">
            {author}
          </span>
        )}
      </Link>
    </article>
  );
}