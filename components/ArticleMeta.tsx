type ArticleMetaProps = {
  director: string;
  country: string;
  year: string;
  duration: string;
  releaseNote: string;
  officialSite?: string;
};

export default function ArticleMeta({
  director,
  country,
  year,
  duration,
  releaseNote,
  officialSite,
}: ArticleMetaProps) {
  return (
    <div className="ml-1.5 font-serif">
      <p className="text-[15px]">
        {director}
      </p>

      <p className="mt-1 text-[12px] tracking-[0.08em] text-neutral-500">
        {country}｜{year}｜{duration}分
      </p>

      {releaseNote && (
        <p className="mt-1 text-[11px] text-neutral-400">
          {releaseNote}
        </p>
      )}

      {officialSite && (
        <a
          href={officialSite}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-[11px] tracking-[0.08em] text-neutral-500 underline underline-offset-4 hover:opacity-50"
        >
          OFFICIAL SITE
        </a>
      )}
    </div>
  );
}