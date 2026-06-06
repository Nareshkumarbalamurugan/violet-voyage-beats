import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { countries } from "@/data/countries";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";

export const Route = createFileRoute("/country/$id/food/$foodId")({
  loader: ({ params }) => {
    const country = countries.find((c) => c.id === params.id);
    if (!country) throw notFound();
    const food = country.foods.find((f) => f.id === params.foodId);
    if (!food) throw notFound();
    return { country, food };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.food.name ?? "Dish"} — ${loaderData?.country.name ?? ""} — Violet Voyage`,
      },
      {
        name: "description",
        content: loaderData?.food.description ?? "A signature dish.",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background text-foreground">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-lavender">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Dish not found</h1>
        <Link to="/" className="mt-6 inline-block text-lavender underline">
          Back home
        </Link>
      </div>
    </div>
  ),
  component: FoodPage,
});

function FoodPage() {
  const { country, food } = Route.useLoaderData();

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="absolute left-6 top-24 z-20">
        <BackButton />
      </div>

      {/* Hero with food background */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden">
        <motion.img
          src={food.image}
          alt={food.name}
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
            {country.name} · Signature Flavor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-9xl font-semibold leading-[0.9]"
          >
            {food.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-2xl text-2xl md:text-3xl text-gradient-violet font-display"
          >
            {food.specialty}
          </motion.p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-lavender mb-4">
            The Story
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
            {food.description}
          </p>
        </div>

        <div className="glass rounded-3xl p-6 shadow-soft h-fit">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            From
          </p>
          <Link
            to="/country/$id"
            params={{ id: country.id }}
            className="group block overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[4/3]">
              <img
                src={country.image}
                alt={country.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-4">
                <p className="text-2xl font-semibold">{country.name}</p>
                <p className="text-sm text-lavender">{country.tagline}</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}