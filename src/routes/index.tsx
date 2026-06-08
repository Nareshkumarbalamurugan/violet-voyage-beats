import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
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

/* ─── Globe Teaser ──────────────────────────────────────────── */
function GlobeTeaser() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.20 0.08 240 / 0.4), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sky-400">
              <Globe className="h-3.5 w-3.5" />
              Interactive World Globe
            </p>
            <h2 className="text-5xl font-semibold leading-[1.05] md:text-6xl text-gradient-gold">
              Spin the<br />World.
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Our 3D globe maps every destination with glowing markers. Click any
              country to instantly dive into its sights, foods, and culture.
            </p>

            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "🌍 Real-time globe rotation",
                "📍 Clickable country markers",
                "🌙 Night Earth view",
                "✈️ Instant country detail",
              ].map((f) => (
                <span
                  key={f}
                  className="glass rounded-full px-4 py-2 text-sm text-foreground"
                >
                  {f}
                </span>
              ))}
            </div>

            <Link
              to="/globe"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Launch Globe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: Preview graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Animated ring backdrop */}
            <div className="absolute h-80 w-80 rounded-full border border-sky-400/20 animate-[spin_18s_linear_infinite]" />
            <div className="absolute h-64 w-64 rounded-full border border-primary/30 animate-[spin_12s_linear_infinite_reverse]" />
            <div className="absolute h-48 w-48 rounded-full border border-sky-300/20 animate-[spin_8s_linear_infinite]" />

            {/* Globe icon */}
            <div
              className="glass relative flex h-40 w-40 items-center justify-center rounded-full shadow-glow"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, oklch(0.35 0.10 240), oklch(0.12 0.05 240))",
              }}
            >
              <Globe className="h-16 w-16 text-sky-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
            </div>

            {/* Floating country pins */}
            {[
              { flag: "🇯🇵", label: "Japan", x: "80%", y: "12%" },
              { flag: "🇫🇷", label: "France", x: "-8%", y: "22%" },
              { flag: "🇮🇹", label: "Italy", x: "5%", y: "72%" },
              { flag: "🇰🇷", label: "Korea", x: "82%", y: "68%" },
              { flag: "🇧🇷", label: "Brazil", x: "40%", y: "90%" },
            ].map((pin, i) => (
              <motion.div
                key={pin.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 300 }}
                animate={{ y: [0, -5, 0] }}
                // @ts-ignore
                style={{ left: pin.x, top: pin.y }}
                className="absolute"
              >
                <div className="flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium shadow-soft whitespace-nowrap">
                  <span>{pin.flag}</span>
                  <span>{pin.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative bg-background text-foreground" id="destinations">
      <Navbar />
      <Hero />
      {countries.map((c, i) => (
        <CountryStory key={c.id} country={c} index={i} />
      ))}
      <GlobeTeaser />
      <Planner />
      <Footer />
    </main>
  );
}
