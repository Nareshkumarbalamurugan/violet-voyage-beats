import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as countries } from "./router-CUbQLGxF.mjs";
import { N as Navbar, F as Footer } from "./Footer-CTttrzV5.mjs";
import { B as BackButton } from "./BackButton-BRY1BMD-.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Stars } from "./Stars-EMgezo8y.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { p as Search, s as Calendar, M as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CountryCard({ country, index = 0 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.7, delay: index % 3 * 0.08, ease: [0.22, 1, 0.36, 1] },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/country/$id",
          params: { id: country.id },
          className: "card-lift group relative block overflow-hidden rounded-3xl border border-white/10 shadow-soft",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: country.image,
                alt: country.name,
                loading: "lazy",
                className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 top-0 flex items-center justify-between p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-xs text-white border border-white/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: country.flag }),
                country.region
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white border border-white/20", children: country.budget })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, { value: country.rating }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-sky-300", children: country.budgetLabel })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-semibold leading-tight text-white", children: country.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/90 drop-shadow-sm", children: country.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                  " ",
                  country.bestSeason
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                  " ",
                  country.cities.slice(0, 2).join(", ")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-sm text-sky-300 opacity-0 transition-all duration-500 group-hover:opacity-100", children: [
                "Step inside ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
              ] })
            ] })
          ] })
        }
      )
    }
  );
}
const regions = ["All", ...Array.from(new Set(countries.map((c) => c.region)))];
const budgets = ["All", "$", "$$", "$$$"];
function ExplorePage() {
  const [query, setQuery] = reactExports.useState("");
  const [region, setRegion] = reactExports.useState("All");
  const [budget, setBudget] = reactExports.useState("All");
  const results = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    return countries.filter((c) => {
      const matchesQuery = !q || c.name.toLowerCase().includes(q) || c.cities.some((city) => city.toLowerCase().includes(q)) || c.tagline.toLowerCase().includes(q);
      const matchesRegion = region === "All" || c.region === region;
      const matchesBudget = budget === "All" || c.budget === budget;
      return matchesQuery && matchesRegion && matchesBudget;
    });
  }, [query, region, budget]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-24 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { label: "Home" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-7xl px-6 pt-40 pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Explore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "mt-3 text-5xl md:text-7xl font-semibold leading-[0.95] text-gradient-violet", children: "Choose your next chapter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.15
      }, className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Five destinations, five worlds. Search, filter, and tap any country to step inside its flavors, culture, and sound." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        delay: 0.25
      }, className: "mt-10 flex flex-col gap-4 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex flex-1 items-center gap-3 rounded-full px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search countries or cities…", className: "w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: regions.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRegion(r), className: `rounded-full border px-4 py-2 text-xs transition-colors ${region === r ? "border-primary/50 bg-primary/30 text-foreground" : "border-white/10 text-muted-foreground hover:bg-white/5"}`, children: r }, r)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Budget" }),
        budgets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBudget(b), className: `rounded-full border px-3 py-1.5 text-xs transition-colors ${budget === b ? "border-gold/50 bg-gold/20 text-foreground" : "border-white/10 text-muted-foreground hover:bg-white/5"}`, children: b === "All" ? "All" : b }, b))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-20 text-center text-muted-foreground", children: "No destinations match your search yet. Try a different filter." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: results.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CountryCard, { country: c, index: i }, c.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ExplorePage as component
};
