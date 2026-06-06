import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { countries } from "@/data/countries";
import { MusicPlatforms } from "@/components/MusicPlatforms";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";

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
        <p className="text-sm uppercase tracking-[0.3em] text-lavender">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Destination not found</h1>
        <Link to="/" className="mt-6 inline-block text-lavender underline">
          Back home
        </Link>
      </div>
    </div>
  ),
  component: CountryPage,
});

function CountryPage() {
  const { country } = Route.useLoaderData();

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className={`absolute inset-0 bg-gradient-to-tr ${country.accent} mix-blend-soft-light`} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-lavender"
          >
            Destination
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
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {country.description}
          </p>

          <div className="mt-10 glass rounded-3xl p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Signature Flavors
              </h3>
              <span className="text-xs text-lavender">Food</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {country.foods.map((f) => (
                <Link
                  key={f.id}
                  to="/country/$id/food/$foodId"
                  params={{ id: country.id, foodId: f.id }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-3">
                    <p className="text-sm font-semibold">{f.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-lavender">
                      {f.specialty}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <MusicPlatforms countryName={country.name} music={country.music} />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm hover:bg-white/10 transition-colors"
        >
          <span>←</span> All destinations
        </Link>
      </div>

      <Footer />
    </main>
  );
}