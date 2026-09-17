import Image from "next/image";
import type { JournalAuthor } from "@/lib/journal";

export function JournalArticleMeta({ date }: { date: string }) {
  return (
    <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[37.5rem] flex-col gap-5 pt-10">
      <div className="h-px w-full bg-border" />
      <span className="text-xs tracking-[0.04em] text-foreground">{date}</span>
    </div>
  );
}

export function JournalArticleAuthorCard({ author }: { author: JournalAuthor }) {
  return (
    <div className="mx-auto mt-10 flex w-[calc(100%-2.5rem)] max-w-[37.5rem] flex-col gap-9 rounded-xl bg-secondary p-6 min-[810px]:p-[2.875rem]">
      <div className="flex flex-col items-start gap-9 min-[810px]:flex-row">
        <div className="relative h-[6.875rem] w-[6.875rem] shrink-0 overflow-hidden rounded-full bg-background">
          <Image
            src={author.image}
            alt={author.name}
            fill
            sizes="110px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="flex w-fit items-center justify-center rounded-full px-3 py-[3px] text-xs tracking-[0.04em] text-foreground">
            Author
          </span>
          <h2 className="font-display text-[1.75rem] leading-[1.1] font-medium tracking-[-0.04em] text-foreground min-[810px]:text-[2.4375rem]">
            {author.name}
          </h2>
        </div>
      </div>

      <p className="text-base leading-[1.3] text-foreground">{author.bio}</p>
    </div>
  );
}
