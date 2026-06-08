import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Clock,
  MapPin,
  Ticket,
  Sparkles,
  Landmark,
  Languages,
  Coins,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { countries } from "@/data/countries";
import type { Food } from "@/data/countries";
import { MusicPlatforms } from "@/components/MusicPlatforms";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { Stars } from "@/components/Stars";

export const Route = createFileRoute("/country/$id")({
  loader: ({ params }) => {
    const country = countries.find((c) => c.id === params.id);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.country.name ?? "Country"} — Violet Voyage` },
      {
        name: "description",
        content: loaderData?.country.tagline ?? "Explore destinations.",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background text-foreground">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Destination not found</h1>
        <Link to="/" className="mt-6 inline-block text-gold underline">
          Back home
        </Link>
      </div>
    </div>
  ),
  component: CountryPage,
});

const TABS = ["Food", "Music", "Attractions", "Culture"] as const;
type Tab = (typeof TABS)[number];

function CountryPage() {
  const { country } = Route.useLoaderData();
  const [tab, setTab] = useState<Tab>("Food");

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="absolute left-6 top-24 z-20">
        <BackButton />
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden">
        <motion.img
          src={country.image}
          alt={country.name}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className={`absolute inset-0 bg-gradient-to-tr ${country.accent} mix-blend-soft-light`} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold"
          >
            <span className="text-2xl">{country.flag}</span> Destination · {country.region}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-9xl font-semibold leading-[0.9]"
          >
            {country.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-2xl text-2xl md:text-3xl text-gradient-violet font-display"
          >
            {country.tagline}
          </motion.p>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Fact icon={<Stars value={country.rating} />} />
            <Fact icon={<Calendar className="h-4 w-4 text-gold" />} label={country.bestSeason} />
            <Fact icon={<Coins className="h-4 w-4 text-gold" />} label={`${country.budget} · ${country.budgetLabel}`} />
            <Fact icon={<ShieldCheck className="h-4 w-4 text-emerald-400" />} label={`Safety ${country.safety}`} />
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-20 text-center">
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-serif">
          {country.description}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {country.cities.map((city) => (
            <span key={city} className="glass rounded-full px-4 py-1.5 text-sm">
              <MapPin className="mr-1.5 inline h-3 w-3 text-gold" />
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="sticky top-20 z-30 mb-10 flex justify-center">
          <div className="glass flex gap-1 rounded-full p-1.5 shadow-soft">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative rounded-full px-5 py-2 text-sm transition-colors ${
                  tab === t ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-glow"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === "Food" && <FoodTab country={country} />}
        {tab === "Music" && (
          <div className="mx-auto max-w-2xl">
            <MusicPlatforms countryName={country.name} music={country.music} />
          </div>
        )}
        {tab === "Attractions" && <AttractionsTab country={country} />}
        {tab === "Culture" && <CultureTab country={country} />}
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm hover:bg-white/10 transition-colors"
        >
          <span>←</span> All destinations
        </Link>
      </div>

      <Footer />
    </main>
  );
}

function Fact({ icon, label }: { icon: React.ReactNode; label?: string }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
      {icon}
      {label && <span className="text-foreground/90">{label}</span>}
    </span>
  );
}

function FoodTab({ country }: { country: (typeof countries)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {country.foods.map((f: Food) => (
        <Link
          key={f.id}
          to="/country/$id/food/$foodId"
          params={{ id: country.id, foodId: f.id }}
          className="card-lift group glass relative block overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={f.image}
              alt={f.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
            <span
              className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium ${
                f.diet === "Vegetarian"
                  ? "bg-emerald-500/80 text-white"
                  : f.diet === "Non-Vegetarian"
                  ? "bg-rose-500/80 text-white"
                  : "bg-amber-500/80 text-black"
              }`}
            >
              {f.diet === "Vegetarian" ? "Veg" : f.diet === "Non-Vegetarian" ? "Non-Veg" : "Both"}
            </span>
          </div>
          <div className="p-4">
            <p className="text-base font-semibold">{f.name}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{f.specialty}</p>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>{f.priceRange}</span>
              <span>{"🌶️".repeat(Math.max(1, f.spice)) || "—"}</span>
            </div>
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

function AttractionsTab({ country }: { country: (typeof countries)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-2"
    >
      {country.attractions.map((at) => (
        <div key={at.name} className="card-lift glass overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={at.image}
              alt={at.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
              <div>
                <span className="rounded-full bg-primary/40 px-2.5 py-1 text-[10px] uppercase tracking-wider">
                  {at.category}
                </span>
                <h3 className="mt-2 text-2xl font-semibold">{at.name}</h3>
              </div>
              {at.unesco && (
                <span className="rounded-full bg-gold/30 px-2.5 py-1 text-[10px] font-semibold text-gold">
                  UNESCO
                </span>
              )}
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-muted-foreground">{at.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <Info icon={<MapPin className="h-3.5 w-3.5" />} text={at.location} />
              <Info icon={<Ticket className="h-3.5 w-3.5" />} text={at.ticket} />
              <Info icon={<Clock className="h-3.5 w-3.5" />} text={at.hours} />
              <Info icon={<Sparkles className="h-3.5 w-3.5" />} text={`Best: ${at.bestTime}`} />
            </div>
            <p className="mt-3 rounded-2xl bg-white/5 p-3 text-xs text-foreground/80">
              💡 {at.tip}
            </p>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(
                at.name + " " + at.location
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs text-gold hover:underline"
            >
              <MapPin className="h-3 w-3" /> Open in Google Maps →
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function CultureTab({ country }: { country: (typeof countries)[number] }) {
  const c = country.culture;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <CultureCard icon={<Languages className="h-4 w-4" />} title="Language & Greeting">
        <p>{c.language}</p>
        <p className="mt-1 text-gold">“{c.greeting}”</p>
      </CultureCard>
      <CultureCard icon={<Landmark className="h-4 w-4" />} title="Festivals">
        <ul className="space-y-1">
          {c.festivals.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      </CultureCard>
      <CultureCard icon={<Coins className="h-4 w-4" />} title="Currency & Religion">
        <p>{c.currency}</p>
        <p className="mt-1 text-muted-foreground">{c.religion}</p>
      </CultureCard>
      <CultureCard icon={<Sparkles className="h-4 w-4" />} title="Etiquette">
        <ul className="space-y-1">
          {c.etiquette.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      </CultureCard>
      <CultureCard icon={<Sparkles className="h-4 w-4" />} title="Local Customs">
        <ul className="space-y-1">
          {c.customs.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      </CultureCard>
      <CultureCard icon={<Calendar className="h-4 w-4" />} title="Clothing & Holidays">
        <p>{c.clothing}</p>
        <p className="mt-2 text-muted-foreground">{c.holidays.join(" · ")}</p>
      </CultureCard>
    </motion.div>
  );
}

function CultureCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-lift glass rounded-3xl p-6">
      <div className="mb-3 flex items-center gap-2 text-gold">
        {icon}
        <h3 className="text-sm uppercase tracking-[0.15em]">{title}</h3>
      </div>
      <div className="text-sm text-foreground/90">{children}</div>
    </div>
  );
}

function Info({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
      <span className="text-gold">{icon}</span>
      {text}
    </span>
  );
}
