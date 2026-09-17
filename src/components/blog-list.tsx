import { posts } from "@/data/posts";

export function BlogList() {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <a
          key={post.href}
          href={post.href}
          className="group relative grid grid-cols-12 items-center gap-4 py-4 no-underline after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-foreground/10 after:transition-opacity after:duration-200 hover:after:opacity-0"
        >
          <span
            aria-hidden
            className="absolute -inset-y-px -inset-x-4 -z-10 rounded-2xl bg-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
          <time className="col-span-3 block text-sm text-muted-foreground sm:col-span-2">
            {post.date}
          </time>
          <h2 className="col-span-9 font-heading text-lg font-semibold text-foreground underline decoration-transparent underline-offset-2 transition-colors group-hover:decoration-foreground sm:col-span-8 md:text-[25px]">
            {post.title}
          </h2>
          <span className="col-span-12 mt-2 whitespace-nowrap text-right text-sm font-medium text-foreground sm:col-span-2 sm:mt-0">
            Read more →
          </span>
        </a>
      ))}
    </div>
  );
}
