import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Users, Compass, Star, Heart, Camera } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const stats = [
  { value: "50+", label: "Destinations" },
  { value: "200+", label: "Cultural Experiences" },
  { value: "1,200+", label: "Travel Stories" },
  { value: "98%", label: "Happy Travellers" },
];

const team = [
  { name: "Krishna Sangavi", role: "Founder & Developer", avatar: "K", bio: "Full-stack developer and avid traveller with a passion for building beautiful digital experiences." },
  { name: "Aria Nakamura", role: "Head of Curation", avatar: "A", bio: "Former travel journalist who curated cultural guides for 35 countries across 4 continents." },
  { name: "Rohan Iyer", role: "Design Lead", avatar: "R", bio: "Award-winning product designer obsessed with motion, typography, and luxury UI craft." },
];

const values = [
  { icon: Globe, title: "Authentic Discovery", desc: "We go beyond tourist trails to surface the soul of every destination." },
  { icon: Heart, title: "Cultural Respect", desc: "Every story we tell honours the local people, traditions, and ecosystems." },
  { icon: Compass, title: "Curated Precision", desc: "Each recommendation is hand-picked by our editorial team and local experts." },
  { icon: Camera, title: "Cinematic Storytelling", desc: "We believe travel is an art form best told through vivid, immersive visuals." },
];

function AboutPage() {
  return (
    <main className="min-h-screen pb-24 pt-32">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-gold"
        >
          Our Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-semibold text-gradient-gold"
        >
          Travel beyond<br />the ordinary.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Violet Voyage was born from a simple belief — every corner of this world holds a story
          worth experiencing. We are a curated travel platform that blends culture, cuisine,
          music, and memories into one seamless journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/explore"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Start Exploring
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-6 text-center shadow-soft"
            >
              <p className="text-4xl font-semibold text-gradient-gold">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold"
        >
          What we stand for
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-6 shadow-soft"
            >
              <v.icon className="mb-4 h-7 w-7 text-gold" />
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold"
        >
          The team behind the voyage
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass rounded-3xl p-6 text-center shadow-soft"
            >
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {m.avatar}
              </div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-xs text-gold">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          Developer: <span className="text-gold font-medium">Krishna Sangavi</span>
        </motion.p>
      </section>

      {/* Mission quote */}
      <section className="mx-auto mt-24 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 shadow-glow"
        >
          <Star className="mx-auto mb-6 h-8 w-8 text-gold" />
          <blockquote className="text-2xl font-medium leading-relaxed text-foreground/90">
            "The world is not a problem to be solved; it is a living being to which we belong.
            The world is part of our own self and we are a part of its suffering wholeness."
          </blockquote>
          <p className="mt-4 text-sm text-gold">— Llewelyn Vaughan-Lee</p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold">Ready to explore?</h2>
        <p className="mt-3 text-muted-foreground">
          Discover destinations, plan your journey, and collect memories that last a lifetime.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/explore"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Browse Destinations
          </Link>
          <Link
            to="/journey"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium transition-colors hover:bg-white/5"
          >
            My Journey Diary
          </Link>
        </div>
      </section>
    </main>
  );
}
