import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, Wallet, CalendarDays } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { countries } from "@/data/countries";

export function Planner() {
  const [where, setWhere] = useState("");
  const [days, setDays] = useState("5");
  const [vibe, setVibe] = useState("Culture");
  const [plan, setPlan] = useState<{ country: typeof countries[number]; itinerary: string[] } | null>(null);

  const generate = () => {
    const q = where.trim().toLowerCase();
    const match =
      countries.find((c) => c.name.toLowerCase().includes(q) || c.cities.some((ct) => ct.toLowerCase().includes(q))) ??
      countries[Math.floor(Math.random() * countries.length)];

    const n = Math.max(1, Math.min(7, parseInt(days) || 5));
    const blocks = [
      `Arrive in ${match.cities[0]} — settle in, sunset stroll & first local bite.`,
      `Explore ${match.attractions[0]?.name}. Taste ${match.foods[0]?.name} for lunch.`,
      `${vibe} day: ${match.attractions[1]?.name ?? match.cities[1]} + ${match.foods[1]?.name}.`,
      `Day trip to ${match.cities[2] ?? match.cities[0]}, soundtrack of ${match.music[0]?.genre}.`,
      `Hidden gems: ${match.attractions[3]?.name ?? "local markets"} & street food crawl.`,
      `Relaxed morning, ${match.foods[3]?.name}, souvenir & café hopping.`,
      `Farewell ${match.name} — final views and ${match.music[1]?.genre} send-off.`,
    ];
    setPlan({ country: match, itinerary: blocks.slice(0, n) });
  };

  return (
    <section id="plan" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-gold"
        >
          AI Travel Planner
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-semibold text-gradient-violet"
        >
          Your journey,<br />composed in seconds.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Tell us a destination, the days, and a feeling. We'll craft a day-by-day
          itinerary scored with the perfect local soundtrack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl glass rounded-3xl p-2 shadow-glow"
        >
          <div className="grid gap-2 sm:grid-cols-3">
            <input
              value={where}
              onChange={(e) => setWhere(e.target.value)}
              placeholder="Where to? (e.g. Japan)"
              className="rounded-2xl bg-white/5 px-4 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Days"
              type="number"
              min={1}
              max={7}
              className="rounded-2xl bg-white/5 px-4 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
              className="rounded-2xl bg-white/5 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary [&>option]:bg-background"
            >
              {["Culture", "Food", "Adventure", "Relaxation", "Nightlife"].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>
          <button
            onClick={generate}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground hover:scale-[1.01] transition-transform"
          >
            <Sparkles className="h-4 w-4" /> Compose my journey
          </button>
        </motion.div>

        <AnimatePresence>
          {plan && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mx-auto mt-8 max-w-3xl glass rounded-3xl p-6 text-left shadow-soft"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{plan.country.flag}</span>
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.country.name}</h3>
                    <p className="text-sm text-gold">{plan.country.tagline}</p>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="glass inline-flex items-center gap-1 rounded-full px-3 py-1.5">
                    <CalendarDays className="h-3.5 w-3.5" /> {plan.itinerary.length} days
                  </span>
                  <span className="glass inline-flex items-center gap-1 rounded-full px-3 py-1.5">
                    <Wallet className="h-3.5 w-3.5" /> {plan.country.budget}
                  </span>
                </div>
              </div>

              <ol className="space-y-3">
                {plan.itinerary.map((d, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 rounded-2xl bg-white/5 p-4"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground/90">{d}</p>
                  </motion.li>
                ))}
              </ol>

              <Link
                to="/country/$id"
                params={{ id: plan.country.id }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Explore {plan.country.name} →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
