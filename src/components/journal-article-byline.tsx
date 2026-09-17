import Image from "next/image";
import { LinkedinIcon, ShareIcon, XLogoIcon } from "@/components/icons";
import type { JournalAuthor } from "@/lib/journal";

const socialIcons = [
  { label: "X", icon: XLogoIcon, href: "https://x.com/" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/" },
  { label: "Share", icon: ShareIcon, href: "#" },
];

interface JournalArticleBylineProps {
  author: JournalAuthor;
}

export function JournalArticleByline({ author }: JournalArticleBylineProps) {
  return (
    <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[37.5rem] flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full bg-secondary">
            <Image
              src={author.image}
              alt={author.name}
              fill
              sizes="60px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-foreground">{author.name}</span>
            <span className="text-[0.8125rem] text-muted-foreground">{author.role}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {socialIcons.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-border" />
    </div>
  );
}
