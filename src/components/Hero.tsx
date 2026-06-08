import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Search, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { countries } from "@/data/countries";

/* ── Cycling headline words ───────────────────────────────────── */
const WORDS = ["Wonders.", "Flavors.", "Cultures.", "Stories.", "Adventures."];

function CyclingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block overflow-hidden" style={{ minWidth: "6ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%",   opacity: 1 }}
          exit={{   y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-gradient-gold"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ── Floating particle ────────────────────────────────────────── */
function Particle({ delay, color }: { delay: number; color: string }) {
  const x = Math.random() * 100;
  const dur = 12 + Math.random() * 10;
  const size = 1.5 + Math.random() * 2.5;
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        left: `${x}%`,
        bottom: "-5%",
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 3}px ${color}`,
      }}
      animate={{
        y: [0, -(500 + Math.random() * 400)],
        x: [0, (Math.random() - 0.5) * 120],
        opacity: [0, 0.8, 0.8, 0],
        scale: [0.5, 1.2, 0.8, 0],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "easeOut",
        repeatDelay: Math.random() * 5,
      }}
    />
  );
}

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  delay: i * 0.7,
  color: i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#a78bfa" : "#34d399",
}));

/* ── Hero ─────────────────────────────────────────────────────── */
export function Hero() {
  const navigate  = useNavigate();
  const [q, setQ] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgY    = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term  = q.trim().toLowerCase();
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
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: imgY }}
      >
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="h-[110%] w-full object-cover opacity-65"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/85" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <Particle key={i} delay={p.delay} color={p.color} />
        ))}
      </div>

      {/* Animated orbs */}
      {[
        { className: "absolute -left-52 top-1/3 h-[32rem] w-[32rem]", color: "bg-primary/25", dur: 10, amp: 35 },
        { className: "absolute -right-44 bottom-1/4 h-[38rem] w-[38rem]", color: "bg-royal/35", dur: 13, amp: -45 },
        { className: "absolute left-1/3 top-0 h-72 w-[65vw]", color: "bg-accent/12", dur: 8, amp: 0 },
        { className: "absolute right-1/3 bottom-0 h-64 w-[50vw]", color: "bg-violet-600/10", dur: 11, amp: 0 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`${orb.className} rounded-full ${orb.color} blur-[110px]`}
          animate={{ y: [0, orb.amp, 0], scale: [1, 1.07, 1] }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
        />
      ))}

      {/* Content — fades out on scroll */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 22, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs uppercase tracking-[0.28em] text-gold"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-gold"
            animate={{ scale: [1, 1.8, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          A new way to experience the world
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] text-gradient-violet"
        >
          Discover<br />World&nbsp;<CyclingWord />
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground"
        >
          Immerse yourself in destinations through experiences, flavors,
          cultures, and sounds — all in one place.
        </motion.p>

        {/* Search */}
        <motion.form
          onSubmit={onSearch}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.8 }}
          className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full glass px-2 py-2 shadow-glow ring-1 ring-sky-500/20 focus-within:ring-sky-400/50 transition-shadow"
        >
          <Search className="ml-3 h-4 w-4 text-muted-foreground flex-shrink-0" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a country or city…"
            className="w-full bg-transparent px-1 text-sm placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 flex-shrink-0"
          >
            Go
          </motion.button>
        </motion.form>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/explore"
              className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90"
            >
              Start Exploring
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/globe"
              className="inline-flex items-center justify-center rounded-full glass px-8 py-4 text-sm font-semibold hover:bg-white/10 transition-colors gap-2"
            >
              🌍 View Globe
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground/70"
        >
          {[
            { val: "5", label: "Destinations" },
            { val: "50+", label: "Local foods" },
            { val: "∞",   label: "Stories" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-2xl font-semibold text-foreground">{s.val}</span>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
