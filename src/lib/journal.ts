import fs from "fs";
import path from "path";
import matter from "gray-matter";

const JOURNAL_DIR = path.join(process.cwd(), "content", "journal");

export interface JournalAuthor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  subtitle: string;
  minRead: string;
  date: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  author: JournalAuthor;
  content: string;
}

export function getJournalPost(slug: string): JournalPost {
  const filePath = path.join(JOURNAL_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    subtitle: data.subtitle,
    minRead: data.minRead,
    date: data.date,
    heroImage: data.heroImage,
    heroImageAlt: data.heroImageAlt,
    intro: data.intro,
    author: data.author,
    content: content.trim(),
  };
}
