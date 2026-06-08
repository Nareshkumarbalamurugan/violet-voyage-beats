import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer } from "./Footer-BlcwNYKc.mjs";
import { B as BackButton } from "./BackButton-BRY1BMD-.mjs";
import { c as countries } from "./router-C8Nm53OG.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as Calculator, A as ArrowLeftRight, S as SquareCheckBig, a as Square, b as CloudSun, c as Clock, d as ShieldAlert, P as Plane } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ToolsPage() {
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
      }, className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Smart Travel Tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1
      }, className: "mt-3 text-5xl md:text-7xl font-semibold text-gradient-violet", children: "Plan smarter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground", children: "A toolkit for every trip — crunch the budget, convert currency, pack right, and check safety before you fly." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BudgetCalculator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencyConverter, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PackingChecklist, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CountryIntel, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function ToolCard({
  icon,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-60px"
  }, transition: {
    duration: 0.6
  }, className: "glass rounded-3xl p-6 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-primary/20 text-gold", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: title })
    ] }),
    children
  ] });
}
function BudgetCalculator() {
  const [days, setDays] = reactExports.useState(7);
  const [people, setPeople] = reactExports.useState(2);
  const [stay, setStay] = reactExports.useState(90);
  const [food, setFood] = reactExports.useState(40);
  const [activities, setActivities] = reactExports.useState(30);
  const [flights, setFlights] = reactExports.useState(600);
  const total = reactExports.useMemo(() => (stay + food + activities) * days * people + flights * people, [days, people, stay, food, activities, flights]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }), title: "Budget Calculator", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Num, { label: "Days", value: days, onChange: setDays }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Num, { label: "Travelers", value: people, onChange: setPeople }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Num, { label: "Stay / day", value: stay, onChange: setStay, prefix: "$" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Num, { label: "Food / day", value: food, onChange: setFood, prefix: "$" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Num, { label: "Activities / day", value: activities, onChange: setActivities, prefix: "$" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Num, { label: "Flights / person", value: flights, onChange: setFlights, prefix: "$" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-2xl bg-gradient-to-r from-violet/30 to-royal/30 p-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Estimated Total" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-4xl font-semibold text-gradient-gold", children: [
        "$",
        total.toLocaleString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
        "≈ $",
        Math.round(total / people).toLocaleString(),
        " per person"
      ] })
    ] })
  ] });
}
const RATES = {
  USD: 1,
  EUR: 0.92,
  JPY: 156,
  KRW: 1370,
  BRL: 5.1,
  GBP: 0.79,
  INR: 83.4
};
function CurrencyConverter() {
  const [amount, setAmount] = reactExports.useState(100);
  const [from, setFrom] = reactExports.useState("USD");
  const [to, setTo] = reactExports.useState("EUR");
  const converted = amount / RATES[from] * RATES[to];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "h-5 w-5" }), title: "Currency Converter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: amount, onChange: (e) => setAmount(Number(e.target.value)), className: "input mb-3 text-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: from, onChange: (e) => setFrom(e.target.value), className: "input", children: Object.keys(RATES).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, className: "bg-background", children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setFrom(to);
        setTo(from);
      }, className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/20 text-gold hover:bg-primary/30", "aria-label": "Swap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: to, onChange: (e) => setTo(e.target.value), className: "input", children: Object.keys(RATES).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, className: "bg-background", children: c }, c)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-2xl bg-white/5 p-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-semibold", children: [
        converted.toLocaleString(void 0, {
          maximumFractionDigits: 2
        }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: to })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
        "Indicative rates · 1 ",
        from,
        " = ",
        (RATES[to] / RATES[from]).toFixed(3),
        " ",
        to
      ] })
    ] })
  ] });
}
const DEFAULT_PACK = ["Passport & visa", "Travel insurance", "Universal adapter", "Phone + charger", "Medications", "Comfortable shoes", "Reusable water bottle", "Local currency / card"];
function PackingChecklist() {
  const [items, setItems] = reactExports.useState(DEFAULT_PACK.map((label) => ({
    label,
    done: false
  })));
  const [input, setInput] = reactExports.useState("");
  const done = items.filter((i) => i.done).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "h-5 w-5" }), title: "Packing Checklist", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        done,
        "/",
        items.length,
        " packed"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-32 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-violet to-gold transition-all", style: {
        width: `${done / items.length * 100 || 0}%`
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "max-h-56 space-y-1 overflow-auto pr-1", children: items.map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setItems((p) => p.map((x, i) => i === idx ? {
      ...x,
      done: !x.done
    } : x)), className: "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm hover:bg-white/5", children: [
      it.done ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "h-4 w-4 text-gold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: it.done ? "text-muted-foreground line-through" : "", children: it.label })
    ] }) }, idx)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      if (!input.trim()) return;
      setItems((p) => [...p, {
        label: input.trim(),
        done: false
      }]);
      setInput("");
    }, className: "mt-3 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), placeholder: "Add an item…", className: "input" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground", children: "Add" })
    ] })
  ] });
}
const WEATHER = {
  japan: "🌸 12–20°C, mild & dry",
  france: "⛅ 14–22°C, gentle sun",
  italy: "☀️ 18–27°C, warm",
  korea: "🍁 10–19°C, crisp",
  brazil: "🌴 24–32°C, tropical"
};
function CountryIntel() {
  const [id, setId] = reactExports.useState(countries[0].id);
  const c = countries.find((x) => x.id === id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-5 w-5" }), title: "Destination Intel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: id, onChange: (e) => setId(e.target.value), className: "input mb-4", children: countries.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: x.id, className: "bg-background", children: [
      x.flag,
      " ",
      x.name
    ] }, x.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Intel, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudSun, { className: "h-4 w-4" }), label: "Weather", value: WEATHER[c.id] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Intel, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }), label: "Time zone", value: c.timezone }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Intel, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4" }), label: "Safety score", value: `${c.safety}/100` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Intel, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-4 w-4" }), label: "Visa", value: c.visa })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-2xl bg-white/5 p-4 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Emergency" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1", children: [
        "Dial ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gold", children: "112" }),
        " (EU) ·",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gold", children: "110/119" }),
        " (Asia) ·",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gold", children: "190" }),
        " (Brazil)"
      ] })
    ] })
  ] });
}
function Num({
  label,
  value,
  onChange,
  prefix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 block text-[11px] uppercase tracking-[0.15em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-xl border border-white/10 bg-white/5 px-3", children: [
      prefix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: prefix }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value, onChange: (e) => onChange(Number(e.target.value)), className: "w-full bg-transparent py-2 pl-1 text-sm focus:outline-none" })
    ] })
  ] });
}
function Intel({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/5 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: icon }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground/90", children: value })
  ] });
}
export {
  ToolsPage as component
};
