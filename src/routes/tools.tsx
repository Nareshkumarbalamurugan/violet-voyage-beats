import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Calculator,
  ArrowLeftRight,
  CheckSquare,
  Square,
  CloudSun,
  ShieldAlert,
  Clock,
  Plane,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";
import { countries } from "@/data/countries";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Smart Travel Tools — Violet Voyage" },
      {
        name: "description",
        content:
          "Budget calculator, currency converter, packing checklist, weather, safety scores, and time zones — everything for your trip.",
      },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="absolute left-6 top-24 z-20">
        <BackButton label="Home" />
      </div>

      <section className="relative mx-auto max-w-5xl px-6 pt-40 pb-10 text-center">
        <div className="absolute inset-0 -z-10 bg-aurora opacity-50" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.3em] text-gold"
        >
          Smart Travel Tools
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-3 text-5xl md:text-7xl font-semibold text-gradient-violet"
        >
          Plan smarter.
        </motion.h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          A toolkit for every trip — crunch the budget, convert currency, pack
          right, and check safety before you fly.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-2">
        <BudgetCalculator />
        <CurrencyConverter />
        <PackingChecklist />
        <CountryIntel />
      </section>

      <Footer />
    </main>
  );
}

function ToolCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-6 shadow-soft"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/20 text-gold">
          {icon}
        </span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function BudgetCalculator() {
  const [days, setDays] = useState(7);
  const [people, setPeople] = useState(2);
  const [stay, setStay] = useState(90);
  const [food, setFood] = useState(40);
  const [activities, setActivities] = useState(30);
  const [flights, setFlights] = useState(600);

  const total = useMemo(
    () => (stay + food + activities) * days * people + flights * people,
    [days, people, stay, food, activities, flights]
  );

  return (
    <ToolCard icon={<Calculator className="h-5 w-5" />} title="Budget Calculator">
      <div className="grid grid-cols-2 gap-3">
        <Num label="Days" value={days} onChange={setDays} />
        <Num label="Travelers" value={people} onChange={setPeople} />
        <Num label="Stay / day" value={stay} onChange={setStay} prefix="$" />
        <Num label="Food / day" value={food} onChange={setFood} prefix="$" />
        <Num label="Activities / day" value={activities} onChange={setActivities} prefix="$" />
        <Num label="Flights / person" value={flights} onChange={setFlights} prefix="$" />
      </div>
      <div className="mt-5 rounded-2xl bg-gradient-to-r from-violet/30 to-royal/30 p-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Estimated Total</p>
        <p className="mt-1 text-4xl font-semibold text-gradient-gold">
          ${total.toLocaleString()}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          ≈ ${Math.round(total / people).toLocaleString()} per person
        </p>
      </div>
    </ToolCard>
  );
}

const RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  JPY: 156,
  KRW: 1370,
  BRL: 5.1,
  GBP: 0.79,
  INR: 83.4,
};

function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  const converted = (amount / RATES[from]) * RATES[to];

  return (
    <ToolCard icon={<ArrowLeftRight className="h-5 w-5" />} title="Currency Converter">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="input mb-3 text-lg"
      />
      <div className="flex items-center gap-3">
        <select value={from} onChange={(e) => setFrom(e.target.value)} className="input">
          {Object.keys(RATES).map((c) => (
            <option key={c} value={c} className="bg-background">
              {c}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/20 text-gold hover:bg-primary/30"
          aria-label="Swap"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </button>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="input">
          {Object.keys(RATES).map((c) => (
            <option key={c} value={c} className="bg-background">
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5 rounded-2xl bg-white/5 p-5 text-center">
        <p className="text-3xl font-semibold">
          {converted.toLocaleString(undefined, { maximumFractionDigits: 2 })}{" "}
          <span className="text-gold">{to}</span>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Indicative rates · 1 {from} = {(RATES[to] / RATES[from]).toFixed(3)} {to}
        </p>
      </div>
    </ToolCard>
  );
}

const DEFAULT_PACK = [
  "Passport & visa",
  "Travel insurance",
  "Universal adapter",
  "Phone + charger",
  "Medications",
  "Comfortable shoes",
  "Reusable water bottle",
  "Local currency / card",
];

function PackingChecklist() {
  const [items, setItems] = useState(
    DEFAULT_PACK.map((label) => ({ label, done: false }))
  );
  const [input, setInput] = useState("");
  const done = items.filter((i) => i.done).length;

  return (
    <ToolCard icon={<CheckSquare className="h-5 w-5" />} title="Packing Checklist">
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {done}/{items.length} packed
        </span>
        <div className="h-2 w-32 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet to-gold transition-all"
            style={{ width: `${(done / items.length) * 100 || 0}%` }}
          />
        </div>
      </div>
      <ul className="max-h-56 space-y-1 overflow-auto pr-1">
        {items.map((it, idx) => (
          <li key={idx}>
            <button
              onClick={() =>
                setItems((p) => p.map((x, i) => (i === idx ? { ...x, done: !x.done } : x)))
              }
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm hover:bg-white/5"
            >
              {it.done ? (
                <CheckSquare className="h-4 w-4 text-gold" />
              ) : (
                <Square className="h-4 w-4 text-muted-foreground" />
              )}
              <span className={it.done ? "text-muted-foreground line-through" : ""}>{it.label}</span>
            </button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) return;
          setItems((p) => [...p, { label: input.trim(), done: false }]);
          setInput("");
        }}
        className="mt-3 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add an item…"
          className="input"
        />
        <button className="rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground">
          Add
        </button>
      </form>
    </ToolCard>
  );
}

const WEATHER: Record<string, string> = {
  japan: "🌸 12–20°C, mild & dry",
  france: "⛅ 14–22°C, gentle sun",
  italy: "☀️ 18–27°C, warm",
  korea: "🍁 10–19°C, crisp",
  brazil: "🌴 24–32°C, tropical",
};

function CountryIntel() {
  const [id, setId] = useState(countries[0].id);
  const c = countries.find((x) => x.id === id)!;

  return (
    <ToolCard icon={<Plane className="h-5 w-5" />} title="Destination Intel">
      <select value={id} onChange={(e) => setId(e.target.value)} className="input mb-4">
        {countries.map((x) => (
          <option key={x.id} value={x.id} className="bg-background">
            {x.flag} {x.name}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <Intel icon={<CloudSun className="h-4 w-4" />} label="Weather" value={WEATHER[c.id]} />
        <Intel icon={<Clock className="h-4 w-4" />} label="Time zone" value={c.timezone} />
        <Intel
          icon={<ShieldAlert className="h-4 w-4" />}
          label="Safety score"
          value={`${c.safety}/100`}
        />
        <Intel icon={<Plane className="h-4 w-4" />} label="Visa" value={c.visa} />
      </div>
      <div className="mt-4 rounded-2xl bg-white/5 p-4 text-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Emergency</p>
        <p className="mt-1">
          Dial <span className="font-semibold text-gold">112</span> (EU) ·{" "}
          <span className="font-semibold text-gold">110/119</span> (Asia) ·{" "}
          <span className="font-semibold text-gold">190</span> (Brazil)
        </p>
      </div>
    </ToolCard>
  );
}

function Num({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-3">
        {prefix && <span className="text-sm text-muted-foreground">{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent py-2 pl-1 text-sm focus:outline-none"
        />
      </div>
    </label>
  );
}

function Intel({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-3">
      <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        <span className="text-gold">{icon}</span>
        {label}
      </span>
      <p className="mt-1 text-foreground/90">{value}</p>
    </div>
  );
}
