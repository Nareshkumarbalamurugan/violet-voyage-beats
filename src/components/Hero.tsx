import { motion } from "framer-motion";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { countries } from "@/data/countries";

export function Hero() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim().toLowerCase();
    const match = countries.find(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.cities.some((ct) => ct.toLowerCase().includes(term))
    );
    if (match) navigate({ to: "/country/$id", params: { id: match.id } });
    else navigate({ to: "/explore" });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80" />

      {/* Floating orbs — sky blue + deep blue */}
      <motion.div
        aria-hidden
        className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[100px]"
        animate={{ y: [0, 30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-40 bottom-1/4 h-[32rem] w-[32rem] rounded-full bg-royal/30 blur-[120px]"
        animate={{ y: [0, -40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-0 h-64 w-[60vw] -translate-x-1/2 rounded-full bg-accent/15 blur-[80px]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold"
        >
          <span className="h-1.5 w-1.5 animate-gold-pulse rounded-full bg-gold" />
          A new way to experience the world
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] text-gradient-violet"
        >
          Travel Beyond<br />Borders.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground"
        >
          Discover the world's destinations through experiences, flavors,
          cultures, and sounds.
        </motion.p>

        <motion.form
          onSubmit={onSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="glass mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full p-1.5 shadow-glow"
        >
          <Search className="ml-3 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a country or city…"
            className="w-full bg-transparent px-1 text-sm placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Go
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/explore"
            className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Start Exploring
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="#plan"
            className="inline-flex items-center justify-center rounded-full glass px-8 py-4 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Plan My Journey
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-lavender to-transparent"
        />
      </motion.div>
    </section>
  );
}