import ReactMarkdown, { type Components } from "react-markdown";

const proseHeading2 = "font-display text-[1.875rem] leading-[1.1] font-medium tracking-[-0.04em] text-foreground min-[1200px]:text-[2.4375rem] mt-10";
const proseHeading3 = "font-display text-[1.375rem] leading-[1.2] font-medium tracking-[-0.02em] text-foreground min-[810px]:text-[1.75rem] min-[1200px]:text-[1.875rem] mt-10";
const proseParagraph = "mt-4 text-lg leading-[1.3] text-muted-foreground min-[810px]:text-xl";
const proseList = "mt-5 flex flex-col gap-0 text-lg leading-[1.3] text-muted-foreground min-[810px]:text-xl";

const components: Components = {
  h2: ({ children }) => <h2 className={proseHeading2}>{children}</h2>,
  h3: ({ children }) => <h3 className={proseHeading3}>{children}</h3>,
  p: ({ children }) => <p className={proseParagraph}>{children}</p>,
  ul: ({ children }) => <ul className={proseList}>{children}</ul>,
  li: ({ children }) => (
    <li className="flex gap-2">
      <span className="select-none">•</span>
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
};

interface JournalArticleBodyProps {
  intro: string;
  content: string;
}

export function JournalArticleBody({ intro, content }: JournalArticleBodyProps) {
  return (
    <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[37.5rem] flex-col">
      <h2 className="font-display text-[1.875rem] leading-[1.1] font-medium tracking-[-0.04em] text-foreground min-[1200px]:text-[2.4375rem]">
        {intro}
      </h2>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
