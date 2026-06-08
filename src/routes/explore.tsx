import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { countries } from "@/data/countries";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { CountryCard } from "@/components/CountryCard";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Destinations — Violet Voyage" },
      {
        name: "description",
        content:
          "Browse curated destinations and step into each country through landscape, flavor, and sound.",
      },
    ],
  }),
  component: ExplorePage,
});

const regions = ["All", ...Array.from(new Set(countries.map((c) => c.region)))];
const budgets = ["All", "$", "$$", "$$$"];

function ExplorePage() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [budget, setBudget] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countries.filter((c) => {
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.cities.some((city) => city.toLowerCase().includes(q)) ||
        c.tagline.toLowerCase().includes(q);
      const matchesRegion = region === "All" || c.region === region;
      const matchesBudget = budget === "All" || c.budget === budget;
      return matchesQuery && matchesRegion && matchesBudget;
    });
  }, [query, region, budget]);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="absolute left-6 top-24 z-20">
        <BackButton label="Home" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pt-40 pb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-gold"
        >
          Explore
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-5xl md:text-7xl font-semibold leading-[0.95] text-gradient-violet"
        >
          Choose your next chapter.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          Five destinations, five worlds. Search, filter, and tap any country to
          step inside its flavors, culture, and sound.
        </motion.p>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-10 flex flex-col gap-4 md:flex-row md:items-center"
        >
          <div className="glass flex flex-1 items-center gap-3 rounded-full px-5 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search countries or cities…"
              className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                  region === r
                    ? "border-primary/50 bg-primary/30 text-foreground"
                    : "border-white/10 text-muted-foreground hover:bg-white/5"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Budget</span>
          {budgets.map((b) => (
            <button
              key={b}
              onClick={() => setBudget(b)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                budget === b
                  ? "border-gold/50 bg-gold/20 text-foreground"
                  : "border-white/10 text-muted-foreground hover:bg-white/5"
              }`}
            >
              {b === "All" ? "All" : b}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {results.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No destinations match your search yet. Try a different filter.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((c, i) => (
              <CountryCard key={c.id} country={c} index={i} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
