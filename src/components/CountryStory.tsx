import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import type { Country } from "@/data/countries";
import { MusicList } from "./MusicList";

export function CountryStory({ country, index }: { country: Country; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const flip = index % 2 === 1;

  return (
    <section
      ref={ref}
      id={country.id}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden py-32"
    >
      {/* Parallax image */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={country.image}
          alt={country.name}
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className={`absolute inset-0 bg-gradient-to-tr ${country.accent} mix-blend-soft-light`} />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className={`relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        {/* Headline */}
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-lavender"
          >
            Chapter {String(index + 1).padStart(2, "0")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-semibold leading-[0.95]"
          >
            {country.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-2xl md:text-3xl text-gradient-violet font-display"
          >
            {country.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-md text-lg text-muted-foreground"
          >
            {country.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-8"
          >
            <Link
              to="/country/$id"
              params={{ id: country.id }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Explore {country.name}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="flex flex-col justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-6 shadow-soft"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Signature Flavors
              </h3>
              <span className="text-xs text-lavender">Food</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {country.foods.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <MusicList tracks={country.music} title={`Sound of ${country.name}`} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}