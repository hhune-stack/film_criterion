import Image from "next/image";

type BodyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

type ArticleBodyProps = {
  body: BodyBlock[];
};

export default function ArticleBody({
  body,
}: ArticleBodyProps) {
  return (
    <div className="max-w-[660px] border-t border-neutral-200 pt-10">
      {body.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h3
              key={index}
              className="mt-20 mb-6 text-[20px] font-serif tracking-tight"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="my-12 border-l border-neutral-300 pl-6 text-[15px] leading-[2] font-serif text-neutral-600"
            >
              {block.text}
            </blockquote>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={index} className="my-14">
              <Image
                src={block.src}
                alt={block.alt}
                width={1200}
                height={800}
                className="mx-auto h-auto w-full max-w-[360px]"
              />

              {block.caption && (
                <figcaption className="mt-3 text-[11px] leading-5 text-neutral-400">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        return (
          <p
            key={index}
            className="mb-8 text-[15px] leading-[2] font-serif"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}