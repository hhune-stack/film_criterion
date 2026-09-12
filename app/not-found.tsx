import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-8 pt-40 pb-32">
        <div className="max-w-[1040px]">
          <p className="text-[11px] tracking-[0.28em] text-neutral-500">
            404
          </p>

          <h1 className="mt-5 font-serif text-[32px] tracking-tight">
            ページが見つかりません
          </h1>

          <p className="mt-5 max-w-[520px] text-sm leading-[1.9] text-neutral-500">
            お探しのページは存在しないか、
            移動または削除された可能性があります。
          </p>

          <Link
            href="/"
            className="mt-8 inline-block text-xs tracking-[0.15em] text-neutral-500 underline underline-offset-4 transition-opacity hover:opacity-50"
          >
            BACK TO HOME
          </Link>
        </div>
      </section>
    </main>
  );
}