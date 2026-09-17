import Image from "next/image";

interface JournalArticleHeroProps {
  minRead: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
}

export function JournalArticleHero({
  minRead,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
}: JournalArticleHeroProps) {
  return (
    <header className="flex flex-col items-center gap-8">
      <div className="flex w-full max-w-[31rem] flex-col items-center gap-[18px] px-5 text-center min-[810px]:px-0">
        <span className="flex items-center justify-center rounded-full bg-secondary px-3 py-[3px] text-xs tracking-[0.04em] text-foreground">
          {minRead}
        </span>
        <div className="flex flex-col gap-[18px]">
          <h1 className="font-display text-[2.6875rem] leading-[1.1] font-semibold tracking-[-0.04em] text-foreground min-[810px]:text-[3.125rem] min-[1200px]:text-[3.9375rem]">
            {title}
          </h1>
          <p className="text-lg leading-[1.3] text-muted-foreground min-[810px]:text-xl">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="relative aspect-[7/9] w-[calc(100%-2.5rem)] max-w-[95rem] overflow-hidden rounded-xl bg-secondary min-[810px]:aspect-[5/3] min-[1200px]:aspect-[2/1] min-[1200px]:w-[calc(100%-4.875rem)]">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          sizes="(min-width: 1200px) calc(100vw - 78px), calc(100vw - 40px)"
          className="object-cover"
        />
      </div>
    </header>
  );
}
