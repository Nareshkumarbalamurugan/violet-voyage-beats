import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { countries } from "@/data/countries";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

function ExplorePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pt-40 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-lavender"
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
          Five destinations, five worlds. Tap any country to step inside its
          flavors, culture, and sound.
        </motion.p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/country/$id"
              params={{ id: c.id }}
              className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-soft"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${c.accent} mix-blend-soft-light opacity-80`} />

              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-lavender">
                  Chapter {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-4xl font-semibold leading-tight">
                  {c.name}
                </h2>
                <p className="mt-2 text-sm text-white/80">{c.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-lavender opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Step inside <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  );
}