import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JournalGrid } from "@/components/journal-grid";
import { Footer } from "@/components/footer";

export default function JournalPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <JournalGrid />
      </main>
      <Footer />
    </div>
  );
}
