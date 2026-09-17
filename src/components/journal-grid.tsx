import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { getAllJournalPosts } from "@/lib/journal";

interface JournalCardPost {
  slug: string;
  minRead: string;
  title: string;
  image: string;
  alt: string;
}

function JournalCard({ post }: { post: JournalCardPost }) {
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
        <span className="text-xs tracking-[0.04em] text-foreground">{post.minRead}</span>
        <h3 className="font-display text-2xl leading-[1.2] font-medium tracking-[-0.02em] text-foreground min-[1200px]:text-[1.875rem]">
          {post.title}
        </h3>
        <span className="flex items-center gap-0.5">
          <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-foreground" />
          <span className="h-[3px] w-[25px] rounded-full bg-foreground transition-all duration-300 ease-out group-hover:w-full" />
        </span>
      </div>
    </Link>
  );
}

export function JournalGrid() {
  const posts = getAllJournalPosts().map((post) => ({
    slug: post.slug,
    minRead: post.minRead,
    title: post.title,
    image: post.heroImage,
    alt: post.heroImageAlt,
  }));

  return (
    <section className="mx-auto grid w-[calc(100%-4.875rem)] max-w-[95rem] grid-cols-1 gap-x-6 gap-y-14 pb-24 min-[810px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1200px]:gap-y-[5.3125rem]">
      {posts.map((post) => (
        <JournalCard key={post.slug} post={post} />
      ))}
    </section>
  );
}
