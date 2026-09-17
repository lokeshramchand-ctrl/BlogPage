import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const proseHeading2 = "font-display text-[1.875rem] leading-[1.1] font-medium tracking-[-0.04em] text-foreground min-[1200px]:text-[2.4375rem] mt-10 scroll-mt-24";
const proseHeading3 = "font-display text-[1.375rem] leading-[1.2] font-medium tracking-[-0.02em] text-foreground min-[810px]:text-[1.75rem] min-[1200px]:text-[1.875rem] mt-10 scroll-mt-24";
const proseParagraph = "mt-4 text-lg leading-[1.3] text-muted-foreground min-[810px]:text-xl";
const proseList = "mt-5 flex flex-col gap-0 text-lg leading-[1.3] text-muted-foreground min-[810px]:text-xl";

const components: Components = {
  h1: ({ id, children }) => <h2 id={id} className={proseHeading2}>{children}</h2>,
  h2: ({ id, children }) => <h2 id={id} className={proseHeading2}>{children}</h2>,
  h3: ({ id, children }) => <h3 id={id} className={proseHeading3}>{children}</h3>,
  p: ({ children }) => <p className={proseParagraph}>{children}</p>,
  ul: ({ children }) => <ul className={proseList}>{children}</ul>,
  ol: ({ children }) => <ol className={`${proseList} list-decimal pl-5`}>{children}</ol>,
  li: ({ children }) => (
    <li className="flex gap-2">
      <span className="select-none">•</span>
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("#") ? undefined : "_blank"}
      rel={href?.startsWith("#") ? undefined : "noopener noreferrer"}
      className="text-foreground underline underline-offset-4 hover:text-muted-foreground"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="mt-10 border-border" />,
  blockquote: ({ children }) => (
    <blockquote className="mt-5 border-l-2 border-border pl-5 text-lg leading-[1.3] text-muted-foreground italic min-[810px]:text-xl">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
          {children}
        </code>
      );
    }
    return <code className={`${className ?? ""} font-mono text-sm`}>{children}</code>;
  },
  pre: ({ children }) => (
    <pre className="mt-5 overflow-x-auto rounded-lg bg-secondary p-4 leading-relaxed">{children}</pre>
  ),
  table: ({ children }) => (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-base text-muted-foreground min-[810px]:text-lg">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-border text-foreground">{children}</thead>,
  th: ({ children }) => <th className="px-3 py-2 font-semibold">{children}</th>,
  td: ({ children }) => <td className="border-b border-border px-3 py-2">{children}</td>,
};

interface JournalArticleBodyProps {
  intro: string;
  content: string;
}

export function JournalArticleBody({ intro, content }: JournalArticleBodyProps) {
  return (
    <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[42.5rem] flex-col">
      <h2 className="font-display text-[1.875rem] leading-[1.1] font-medium tracking-[-0.04em] text-foreground min-[1200px]:text-[2.4375rem]">
        {intro}
      </h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
