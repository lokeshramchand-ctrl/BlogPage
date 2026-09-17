import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JournalArticleHero } from "@/components/journal-article-hero";
import { JournalArticleByline } from "@/components/journal-article-byline";
import { JournalArticleBody } from "@/components/journal-article-body";
import { JournalArticleMeta, JournalArticleAuthorCard } from "@/components/journal-article-author-card";
import { JournalArticleRelated } from "@/components/journal-article-related";
import { getJournalPost, getJournalSlugs } from "@/lib/journal";

interface JournalArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: JournalArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getJournalSlugs().includes(slug)) return {};

  const post = getJournalPost(slug);
  return {
    title: `${post.title} - orchid`,
    description: post.subtitle,
  };
}

export default async function JournalArticlePage({ params }: JournalArticlePageProps) {
  const { slug } = await params;
  if (!getJournalSlugs().includes(slug)) notFound();

  const post = getJournalPost(slug);

  return (
    <div className="flex min-h-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col gap-14 pt-4 pb-14 min-[1200px]:gap-[3.75rem] min-[1200px]:pt-8">
          <JournalArticleHero
            minRead={post.minRead}
            title={post.title}
            subtitle={post.subtitle}
            heroImage={post.heroImage}
            heroImageAlt={post.heroImageAlt}
          />
          <div className="flex flex-col gap-0">
            <JournalArticleByline author={post.author} />
            <div className="pt-14">
              <JournalArticleBody intro={post.intro} content={post.content} />
              <JournalArticleMeta date={post.date} />
              <JournalArticleAuthorCard author={post.author} />
            </div>
          </div>
        </div>
        <JournalArticleRelated currentSlug={post.slug} />
      </main>
      <Footer />
    </div>
  );
}
