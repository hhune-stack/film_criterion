import Image from "next/image";

type ArticleImageProps = {
  src: string;
  film: string;
};

export default function ArticleImage({
  src,
  film,
}: ArticleImageProps) {
  return (
    <div className="mx-auto max-w-[520px]">
      <Image
        src={src}
        alt={`『${film}』の画像`}
        width={1200}
        height={800}
        className="mx-auto h-auto w-full max-w-[360px]"
      />
    </div>
  );
}