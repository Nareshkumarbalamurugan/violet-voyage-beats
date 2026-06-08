import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Plus, Trash2, MapPin, Wallet, Star, Pencil, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "My Journey — Violet Voyage" },
      {
        name: "description",
        content:
          "An interactive travel diary timeline. Log your trips, memories, moods, expenses, and ratings.",
      },
    ],
  }),
  component: JourneyPage,
});

type Entry = {
  id: string;
  date: string;
  location: string;
  notes: string;
  expense: string;
  mood: string;
  rating: number;
  image: string;
};

const MOODS = ["😍", "😌", "🤩", "🥹", "😎", "🧘", "🥳"];

const seed: Entry[] = [
  {
    id: "1",
    date: "2026-04-03",
    location: "Kyoto, Japan",
    notes: "Walked through 10,000 torii gates at dawn. The silence between them felt sacred.",
    expense: "₹6,200",
    mood: "😌",
    rating: 5,
    image: "https://loremflickr.com/800/600/kyoto,torii?lock=42",
  },
  {
    id: "2",
    date: "2026-04-09",
    location: "Paris, France",
    notes: "Croissants by the Seine, the Louvre at dusk, and a jazz bar in Le Marais.",
    expense: "€140",
    mood: "🤩",
    rating: 5,
    image: "https://loremflickr.com/800/600/paris,seine?lock=77",
  },
  {
    id: "3",
    date: "2026-04-15",
    location: "Amalfi, Italy",
    notes: "Lemon groves above a turquoise sea. Gelato three times in one day — no regrets.",
    expense: "€95",
    mood: "😍",
    rating: 4,
    image: "https://loremflickr.com/800/600/amalfi,coast?lock=33",
  },
];

const KEY = "vv-journey";

function load(): Entry[] {
  if (typeof localStorage === "undefined") return seed;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Entry[]) : seed;
  } catch {
    return seed;
  }
}

const empty = (): Entry => ({
  id: Math.random().toString(36).slice(2),
  date: new Date().toISOString().slice(0, 10),
  location: "",
  notes: "",
  expense: "",
  mood: "😍",
  rating: 5,
  image: "",
});

function JourneyPage() {
  const [entries, setEntries] = useState<Entry[]>(seed);
  const [editing, setEditing] = useState<Entry | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setEntries(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready && typeof localStorage !== "undefined") {
      localStorage.setItem(KEY, JSON.stringify(entries));
    }
  }, [entries, ready]);

  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  const totalSpent = entries.length;

  const save = (e: Entry) => {
    setEntries((prev) => {
      const exists = prev.some((x) => x.id === e.id);
      return exists ? prev.map((x) => (x.id === e.id ? e : x)) : [...prev, e];
    });
    setEditing(null);
  };

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
          My Journey
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-3 text-5xl md:text-7xl font-semibold text-gradient-violet"
        >
          Your travel diary.
        </motion.h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          A living timeline of every place you've fallen for. Add memories, moods,
          and expenses — saved right in your browser.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setEditing(empty())}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            <Plus className="h-4 w-4" /> Add a memory
          </button>
          <span className="glass rounded-full px-4 py-2 text-sm">
            {totalSpent} {totalSpent === 1 ? "entry" : "entries"}
          </span>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet via-lavender/40 to-transparent md:left-1/2" />
          <div className="space-y-12">
            {sorted.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`relative pl-12 md:w-1/2 ${
                  i % 2 === 0 ? "md:ml-0 md:pr-12 md:pl-0 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute top-2 grid h-8 w-8 place-items-center rounded-full bg-primary text-sm shadow-glow left-0 md:left-auto ${
                    i % 2 === 0 ? "md:-right-4" : "md:-left-4"
                  }`}
                >
                  {e.mood}
                </span>

                <div className="card-lift glass overflow-hidden rounded-3xl text-left">
                  {e.image && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={e.image} alt={e.location} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">{e.date}</p>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setEditing(e)}
                          className="grid h-7 w-7 place-items-center rounded-full hover:bg-white/10"
                          aria-label="Edit"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => setEntries((p) => p.filter((x) => x.id !== e.id))}
                          className="grid h-7 w-7 place-items-center rounded-full hover:bg-rose-500/20"
                          aria-label="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                    <h3 className="mt-1 flex items-center gap-1.5 text-xl font-semibold">
                      <MapPin className="h-4 w-4 text-gold" /> {e.location}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.notes}</p>
                    <div className="mt-3 flex items-center gap-4 text-sm">
                      <span className="inline-flex items-center gap-1 text-gold">
                        {Array.from({ length: e.rating }).map((_, k) => (
                          <Star key={k} className="h-3.5 w-3.5 fill-gold text-gold" />
                        ))}
                      </span>
                      {e.expense && (
                        <span className="inline-flex items-center gap-1 text-foreground/80">
                          <Wallet className="h-3.5 w-3.5 text-gold" /> {e.expense}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {sorted.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">
            Your diary is empty. Add your first memory above.
          </p>
        )}
      </section>

      <AnimatePresence>
        {editing && (
          <EntryModal entry={editing} onClose={() => setEditing(null)} onSave={save} />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

function EntryModal({
  entry,
  onClose,
  onSave,
}: {
  entry: Entry;
  onClose: () => void;
  onSave: (e: Entry) => void;
}) {
  const [draft, setDraft] = useState<Entry>(entry);
  const set = (patch: Partial<Entry>) => setDraft((d) => ({ ...d, ...patch }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(ev) => ev.stopPropagation()}
        className="glass w-full max-w-lg rounded-3xl p-6 shadow-glow"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{entry.location ? "Edit memory" : "New memory"}</h3>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Date">
              <input
                type="date"
                value={draft.date}
                onChange={(e) => set({ date: e.target.value })}
                className="input"
              />
            </Field>
            <Field label="Expense">
              <input
                value={draft.expense}
                onChange={(e) => set({ expense: e.target.value })}
                placeholder="€120"
                className="input"
              />
            </Field>
          </div>
          <Field label="Location">
            <input
              value={draft.location}
              onChange={(e) => set({ location: e.target.value })}
              placeholder="Lisbon, Portugal"
              className="input"
            />
          </Field>
          <Field label="Notes">
            <textarea
              value={draft.notes}
              onChange={(e) => set({ notes: e.target.value })}
              rows={3}
              placeholder="Favorite memory of the day…"
              className="input resize-none"
            />
          </Field>
          <Field label="Image URL (optional)">
            <input
              value={draft.image}
              onChange={(e) => set({ image: e.target.value })}
              placeholder="https://…"
              className="input"
            />
          </Field>
          <div className="flex items-center justify-between gap-4">
            <Field label="Mood">
              <div className="flex gap-1">
                {MOODS.map((m) => (
                  <button
                    key={m}
                    onClick={() => set({ mood: m })}
                    className={`grid h-8 w-8 place-items-center rounded-full text-lg ${
                      draft.mood === m ? "bg-primary/40" : "hover:bg-white/10"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Rating">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} onClick={() => set({ rating: n })} aria-label={`${n} stars`}>
                    <Star
                      className={`h-5 w-5 ${
                        n <= draft.rating ? "fill-gold text-gold" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </Field>
          </div>
        </div>

        <button
          onClick={() => onSave(draft)}
          disabled={!draft.location.trim()}
          className="mt-5 w-full rounded-2xl bg-primary py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-40"
        >
          Save memory
        </button>
      </motion.div>
    </motion.div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-left">
      <span className="mb-1 block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
