import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer } from "./Footer-CTttrzV5.mjs";
import { B as BackButton } from "./BackButton-BRY1BMD-.mjs";
import "../_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { j as Plus, k as Pencil, T as Trash2, M as MapPin, l as Star, W as Wallet, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-CUbQLGxF.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const MOODS = ["😍", "😌", "🤩", "🥹", "😎", "🧘", "🥳"];
const seed = [{
  id: "1",
  date: "2026-04-03",
  location: "Kyoto, Japan",
  notes: "Walked through 10,000 torii gates at dawn. The silence between them felt sacred.",
  expense: "₹6,200",
  mood: "😌",
  rating: 5,
  image: "https://loremflickr.com/800/600/kyoto,torii?lock=42"
}, {
  id: "2",
  date: "2026-04-09",
  location: "Paris, France",
  notes: "Croissants by the Seine, the Louvre at dusk, and a jazz bar in Le Marais.",
  expense: "€140",
  mood: "🤩",
  rating: 5,
  image: "https://loremflickr.com/800/600/paris,seine?lock=77"
}, {
  id: "3",
  date: "2026-04-15",
  location: "Amalfi, Italy",
  notes: "Lemon groves above a turquoise sea. Gelato three times in one day — no regrets.",
  expense: "€95",
  mood: "😍",
  rating: 4,
  image: "https://loremflickr.com/800/600/amalfi,coast?lock=33"
}];
const KEY = "vv-journey";
function load() {
  if (typeof localStorage === "undefined") return seed;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : seed;
  } catch {
    return seed;
  }
}
const empty = () => ({
  id: Math.random().toString(36).slice(2),
  date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
  location: "",
  notes: "",
  expense: "",
  mood: "😍",
  rating: 5,
  image: ""
});
function JourneyPage() {
  const [entries, setEntries] = reactExports.useState(seed);
  const [editing, setEditing] = reactExports.useState(null);
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setEntries(load());
    setReady(true);
  }, []);
  reactExports.useEffect(() => {
    if (ready && typeof localStorage !== "undefined") {
      localStorage.setItem(KEY, JSON.stringify(entries));
    }
  }, [entries, ready]);
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  const totalSpent = entries.length;
  const save = (e) => {
    setEntries((prev) => {
      const exists = prev.some((x) => x.id === e.id);
      return exists ? prev.map((x) => x.id === e.id ? e : x) : [...prev, e];
    });
    setEditing(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-24 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { label: "Home" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-5xl px-6 pt-40 pb-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-aurora opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "text-xs uppercase tracking-[0.3em] text-gold", children: "My Journey" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1
      }, className: "mt-3 text-5xl md:text-7xl font-semibold text-gradient-violet", children: "Your travel diary." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground", children: "A living timeline of every place you've fallen for. Add memories, moods, and expenses — saved right in your browser." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setEditing(empty()), className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add a memory"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass rounded-full px-4 py-2 text-sm", children: [
          totalSpent,
          " ",
          totalSpent === 1 ? "entry" : "entries"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet via-lavender/40 to-transparent md:left-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: sorted.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 40
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-50px"
        }, transition: {
          duration: 0.6
        }, className: `relative pl-12 md:w-1/2 ${i % 2 === 0 ? "md:ml-0 md:pr-12 md:pl-0 md:text-right" : "md:ml-auto md:pl-12"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-2 grid h-8 w-8 place-items-center rounded-full bg-primary text-sm shadow-glow left-0 md:left-auto ${i % 2 === 0 ? "md:-right-4" : "md:-left-4"}`, children: e.mood }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-lift glass overflow-hidden rounded-3xl text-left", children: [
            e.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.image, alt: e.location, className: "h-full w-full object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-gold", children: e.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(e), className: "grid h-7 w-7 place-items-center rounded-full hover:bg-white/10", "aria-label": "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEntries((p) => p.filter((x) => x.id !== e.id)), className: "grid h-7 w-7 place-items-center rounded-full hover:bg-rose-500/20", "aria-label": "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-1 flex items-center gap-1.5 text-xl font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-gold" }),
                " ",
                e.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: e.notes }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 text-gold", children: Array.from({
                  length: e.rating
                }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }, k)) }),
                e.expense && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-foreground/80", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3.5 w-3.5 text-gold" }),
                  " ",
                  e.expense
                ] })
              ] })
            ] })
          ] })
        ] }, e.id)) })
      ] }),
      sorted.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-20 text-center text-muted-foreground", children: "Your diary is empty. Add your first memory above." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: editing && /* @__PURE__ */ jsxRuntimeExports.jsx(EntryModal, { entry: editing, onClose: () => setEditing(null), onSave: save }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function EntryModal({
  entry,
  onClose,
  onSave
}) {
  const [draft, setDraft] = reactExports.useState(entry);
  const set = (patch) => setDraft((d) => ({
    ...d,
    ...patch
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, className: "fixed inset-0 z-[80] grid place-items-center bg-black/60 p-4 backdrop-blur-sm", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    scale: 0.95,
    y: 20
  }, animate: {
    scale: 1,
    y: 0
  }, exit: {
    scale: 0.95,
    opacity: 0
  }, onClick: (ev) => ev.stopPropagation(), className: "glass w-full max-w-lg rounded-3xl p-6 shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: entry.location ? "Edit memory" : "New memory" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "grid h-8 w-8 place-items-center rounded-full hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: draft.date, onChange: (e) => set({
          date: e.target.value
        }), className: "input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expense", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: draft.expense, onChange: (e) => set({
          expense: e.target.value
        }), placeholder: "€120", className: "input" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Location", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: draft.location, onChange: (e) => set({
        location: e.target.value
      }), placeholder: "Lisbon, Portugal", className: "input" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: draft.notes, onChange: (e) => set({
        notes: e.target.value
      }), rows: 3, placeholder: "Favorite memory of the day…", className: "input resize-none" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Image URL (optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: draft.image, onChange: (e) => set({
        image: e.target.value
      }), placeholder: "https://…", className: "input" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mood", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: MOODS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set({
          mood: m
        }), className: `grid h-8 w-8 place-items-center rounded-full text-lg ${draft.mood === m ? "bg-primary/40" : "hover:bg-white/10"}`, children: m }, m)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Rating", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set({
          rating: n
        }), "aria-label": `${n} stars`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-5 w-5 ${n <= draft.rating ? "fill-gold text-gold" : "text-muted-foreground"}` }) }, n)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onSave(draft), disabled: !draft.location.trim(), className: "mt-5 w-full rounded-2xl bg-primary py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-40", children: "Save memory" })
  ] }) });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 block text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    children
  ] });
}
export {
  JourneyPage as component
};
