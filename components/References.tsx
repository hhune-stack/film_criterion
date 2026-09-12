type ReferencesProps = {
  references: string[];
};

export default function References({
  references,
}: ReferencesProps) {
  if (references.length === 0) {
    return null;
  }

  return (
    <section className="mt-10 border-t border-neutral-300 pt-6">
      <p className="text-[10px] tracking-[0.2em] text-neutral-400">
        REFERENCES
      </p>

      <ul className="mt-5 space-y-3">
        {references.map((reference, index) => (
          <li
            key={index}
            className="text-[12px] leading-6 text-neutral-500"
          >
            {reference}
          </li>
        ))}
      </ul>
    </section>
  );
}