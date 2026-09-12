type AuthorProps = {
  name: string;
  bio: string;
};

export default function Author({
  name,
  bio,
}: AuthorProps) {
  return (
    <section className="mt-10 border-t border-neutral-300 pt-6">
      <p className="text-[10px] tracking-[0.2em] text-neutral-400">
        AUTHOR
      </p>

      <div className="mt-5">
        <p className="text-[15px] font-serif">
          {name}
        </p>

        <p className="mt-2 text-[12px] leading-6 text-neutral-500">
          {bio}
        </p>
      </div>
    </section>
  );
}