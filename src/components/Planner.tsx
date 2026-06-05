import { motion } from "framer-motion";

export function Planner() {
  return (
    <section id="plan" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-lavender"
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
          Tell us a destination, a budget, and a feeling. We'll craft a
          day-by-day itinerary scored with the perfect local soundtrack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-14 max-w-3xl glass rounded-3xl p-2 shadow-glow"
        >
          <div className="grid sm:grid-cols-3 gap-2">
            <input
              placeholder="Where to?"
              className="bg-white/5 rounded-2xl px-4 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              placeholder="Days"
              className="bg-white/5 rounded-2xl px-4 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              placeholder="Budget"
              className="bg-white/5 rounded-2xl px-4 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="mt-2 w-full rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground hover:scale-[1.01] transition-transform">
            Compose my journey →
          </button>
        </motion.div>
      </div>
    </section>
  );
}