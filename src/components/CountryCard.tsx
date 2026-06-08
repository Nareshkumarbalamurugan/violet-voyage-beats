import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import type { Country } from "@/data/countries";
import { Stars } from "./Stars";

export function CountryCard({ country, index = 0 }: { country: Country; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to="/country/$id"
        params={{ id: country.id }}
        className="card-lift group relative block overflow-hidden rounded-3xl border border-white/10 shadow-soft"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={country.image}
            alt={country.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-tr ${country.accent} mix-blend-soft-light opacity-70`} />

          {/* Top row */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="glass flex items-center gap-1.5 rounded-full px-3 py-1 text-xs">
              <span className="text-base leading-none">{country.flag}</span>
              {country.region}
            </span>
            <span className="glass rounded-full px-3 py-1 text-xs font-semibold">
              {country.budget}
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="mb-2 flex items-center justify-between">
              <Stars value={country.rating} />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                {country.budgetLabel}
              </span>
            </div>
            <h3 className="text-3xl font-semibold leading-tight">{country.name}</h3>
            <p className="mt-1 text-sm text-white/80">{country.tagline}</p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/70">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {country.bestSeason}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {country.cities.slice(0, 2).join(", ")}
              </span>
            </div>

            <span className="mt-4 inline-flex items-center gap-2 text-sm text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
              Step inside <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
