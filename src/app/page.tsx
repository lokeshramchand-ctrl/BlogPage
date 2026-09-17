import { Header } from "@/components/header";
import { BlogList } from "@/components/blog-list";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <Header />

      <main className="flex-1 pb-14 pt-14 md:pt-20">
        <div className="mx-auto w-[calc(100%-3.5rem)] max-w-[80rem]">
          <h1 className="mb-4 font-heading text-4xl font-semibold tracking-tight text-foreground">
            Blog
          </h1>
          <p className="mb-8 text-sm text-muted-foreground">
            Icon design and Nucleo product updates.
          </p>

          <BlogList />
        </div>
      </main>

      <CtaBanner />

      <Footer />
    </div>
  );
}
