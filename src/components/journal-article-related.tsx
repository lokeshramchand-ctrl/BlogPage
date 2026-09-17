import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { getAllJournalPosts } from "@/lib/journal";

interface RelatedPost {
  slug: string;
  date: string;
  title: string;
  image: string;
  alt: string;
}

function RelatedCard({ post }: { post: RelatedPost }) {
  return (
    <Link href={`/journal/${post.slug}`} className="group flex flex-col gap-6">
      <div className="relative aspect-[438/530] w-full overflow-hidden rounded-xl bg-secondary">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(min-width: 1200px) 33vw, (min-width: 810px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-xl opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white">
            <ArrowUpRightIcon className="h-[35px] w-[35px] text-foreground" />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-xs tracking-[0.04em] text-foreground">{post.date}</span>
        <h3 className="font-display text-2xl leading-[1.2] font-medium tracking-[-0.02em] text-foreground min-[1200px]:text-[1.875rem]">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

export function JournalArticleRelated({ currentSlug }: { currentSlug: string }) {
  const relatedPosts: RelatedPost[] = getAllJournalPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      date: post.date,
      title: post.title,
      image: post.heroImage,
      alt: post.heroImageAlt,
    }));

  return (
    <section className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[95rem] flex-col gap-14 pt-24 pb-14 min-[1200px]:w-[calc(100%-4.875rem)] min-[1200px]:pt-40">
      <div className="flex flex-col gap-5 min-[1200px]:flex-row min-[1200px]:items-end min-[1200px]:justify-between">
        <div className="flex flex-col gap-5">
          <span className="flex w-fit items-center rounded-full bg-secondary px-3 py-[3px] text-xs tracking-[0.04em] text-foreground">
            Suggested
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-4xl leading-[1.1] font-medium tracking-[-0.04em] text-foreground min-[1200px]:text-[2.9375rem]">
              Continue Reading
            </h2>
            <p className="text-base text-foreground">
              More articles you may find useful, carefully selected from our journal
            </p>
          </div>
        </div>

        <Link
          href="/journal"
          className="flex items-center gap-2 text-xl text-foreground underline-offset-4 hover:underline"
        >
          All Journals
          <ArrowUpRightIcon className="h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-14 min-[810px]:grid-cols-2 min-[1200px]:grid-cols-3">
        {relatedPosts.map((post) => (
          <RelatedCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
