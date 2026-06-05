import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CountryStory } from "@/components/CountryStory";
import { Planner } from "@/components/Planner";
import { Footer } from "@/components/Footer";
import { countries } from "@/data/countries";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Violet Voyage — Travel Beyond Borders" },
      { name: "description", content: "Discover destinations through experiences, flavors, cultures, and sounds. A cinematic travel platform." },
      { property: "og:title", content: "Violet Voyage — Travel Beyond Borders" },
      { property: "og:description", content: "Discover destinations through experiences, flavors, cultures, and sounds." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground" id="destinations">
      <Navbar />
      <Hero />
      {countries.map((c, i) => (
        <CountryStory key={c.id} country={c} index={i} />
      ))}
      <Planner />
      <Footer />
    </main>
  );
}
