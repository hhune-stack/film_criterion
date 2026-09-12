import Link from "next/link";

type ArchiveItemProps = {
  href: string;
  number: string;
  date: string;
  title: string;
  film: string;
  director: string;
  country: string;
  year: string;
  duration: string;
  author?: string;
};

export default function ArchiveItem({
  href,
  number,
  date,
  title,
  film,
  director,
  country,
  year,
  duration,
  author,
}: ArchiveItemProps) {
  return (
    <Link
      href={href}
      className="group block border-b border-neutral-300 py-5 transition-opacity hover:opacity-60"
    >
      <div className="grid grid-cols-[52px_1fr_auto] gap-x-6 gap-y-2 md:grid-cols-[52px_1fr_auto_auto_auto] md:items-center">

        <span className="tracking-[0.08em] text-[12px] text-neutral-400">
          {number}
        </span>

        <div className="min-w-0">
          <p className="font-serif text-[15px]">
            {title}
          </p>

          <p className="mt-1 text-[12px] text-neutral-500">
            『{film}』
          </p>
        </div>

        <span className="hidden shrink-0 text-[12px] text-neutral-500 md:block">
          {director}
        </span>

        <span className="hidden shrink-0 text-[12px] text-neutral-500 md:block">
          {country}｜{year}｜{duration}分
        </span>

        <span className="col-start-2 text-[11px] text-neutral-400 md:col-auto md:w-[72px] md:text-right">
          {author}
        </span>

      </div>
    </Link>
  );
}