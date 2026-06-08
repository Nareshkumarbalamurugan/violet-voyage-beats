import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame, Utensils, Coins, Activity, Store, MapPin } from "lucide-react";
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
        <p className="text-sm uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Dish not found</h1>
        <Link to="/" className="mt-6 inline-block text-gold underline">
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

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden">
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

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-gold"
          >
            {country.flag} {country.name} · Signature Flavor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-semibold leading-[0.9]"
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

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Story</p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-serif">
            {food.description}
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={<Coins className="h-5 w-5" />} label="Price" value={food.priceRange} />
            <Stat
              icon={<Utensils className="h-5 w-5" />}
              label="Diet"
              value={food.diet === "Non-Vegetarian" ? "Non-Veg" : food.diet === "Vegetarian" ? "Veg" : "Both"}
            />
            <Stat icon={<Activity className="h-5 w-5" />} label="Calories" value={food.calories} />
            <Stat
              icon={<Flame className="h-5 w-5" />}
              label="Spice"
              value={"🌶️".repeat(Math.max(1, food.spice))}
            />
          </div>

          {/* Ingredients */}
          <div className="mt-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
              {food.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Popularity */}
          <div className="mt-10">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Local Popularity</span>
              <span className="font-medium">{food.popularity}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${food.popularity}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-violet to-gold"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 shadow-soft">
            <h3 className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <Store className="h-4 w-4 text-gold" /> Best Restaurants
            </h3>
            <ul className="space-y-2 text-sm">
              {food.restaurants.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="text-gold">★</span> {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-6 shadow-soft">
            <h3 className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold" /> Street Food
            </h3>
            <ul className="space-y-2 text-sm">
              {food.streetFood.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="text-gold">•</span> {r}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/country/$id"
            params={{ id: country.id }}
            className="group block overflow-hidden rounded-3xl"
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
                <p className="text-sm text-gold">More flavors →</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4 text-center">
      <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-primary/20 text-gold">
        {icon}
      </div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}
