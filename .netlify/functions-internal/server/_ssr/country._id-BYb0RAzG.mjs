import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as MusicPlatforms } from "./MusicPlatforms-CdnqQNbD.mjs";
import { N as Navbar, F as Footer } from "./Footer-BlcwNYKc.mjs";
import { B as BackButton } from "./BackButton-BRY1BMD-.mjs";
import { S as Stars } from "./Stars-EMgezo8y.mjs";
import { R as Route$1 } from "./router-C8Nm53OG.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { n as Calendar, v as Coins, w as ShieldCheck, M as MapPin, x as Ticket, c as Clock, t as Sparkles, y as Languages, z as Landmark } from "../_libs/lucide-react.mjs";
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
const TABS = ["Food", "Music", "Attractions", "Culture"];
function CountryPage() {
  const {
    country
  } = Route$1.useLoaderData();
  const [tab, setTab] = reactExports.useState("Food");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-24 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[90vh] items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: country.image, alt: country.name, initial: {
        scale: 1.2
      }, animate: {
        scale: 1.05
      }, transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1]
      }, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-tr ${country.accent} mix-blend-soft-light` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8
        }, className: "mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: country.flag }),
          " Destination · ",
          country.region
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }, className: "text-6xl md:text-9xl font-semibold leading-[0.9]", children: country.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.9,
          delay: 0.2
        }, className: "mt-6 max-w-2xl text-2xl md:text-3xl text-gradient-violet font-display", children: country.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.9,
          delay: 0.3
        }, className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Fact, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, { value: country.rating }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Fact, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-gold" }), label: country.bestSeason }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Fact, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4 text-gold" }), label: `${country.budget} · ${country.budgetLabel}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Fact, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-emerald-400" }), label: `Safety ${country.safety}` })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto w-full max-w-4xl px-6 pt-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl leading-relaxed text-foreground/90 font-serif", children: country.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: country.cities.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass rounded-full px-4 py-1.5 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mr-1.5 inline h-3 w-3 text-gold" }),
        city
      ] }, city)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto w-full max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-20 z-30 mb-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass flex gap-1 rounded-full p-1.5 shadow-soft", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t), className: `relative rounded-full px-5 py-2 text-sm transition-colors ${tab === t ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: [
        tab === t && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "tab-pill", className: "absolute inset-0 -z-10 rounded-full bg-primary shadow-glow", transition: {
          type: "spring",
          stiffness: 400,
          damping: 32
        } }),
        t
      ] }, t)) }) }),
      tab === "Food" && /* @__PURE__ */ jsxRuntimeExports.jsx(FoodTab, { country }),
      tab === "Music" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MusicPlatforms, { countryName: country.name, music: country.music }) }),
      tab === "Attractions" && /* @__PURE__ */ jsxRuntimeExports.jsx(AttractionsTab, { country }),
      tab === "Culture" && /* @__PURE__ */ jsxRuntimeExports.jsx(CultureTab, { country })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/explore", className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm hover:bg-white/10 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "←" }),
      " All destinations"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Fact({
  icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm", children: [
    icon,
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: label })
  ] });
}
function FoodTab({
  country
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.5
  }, className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: country.foods.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/country/$id/food/$foodId", params: {
    id: country.id,
    foodId: f.id
  }, className: "card-lift group glass relative block overflow-hidden rounded-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: f.image, alt: f.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium ${f.diet === "Vegetarian" ? "bg-emerald-500/80 text-white" : f.diet === "Non-Vegetarian" ? "bg-rose-500/80 text-white" : "bg-amber-500/80 text-black"}`, children: f.diet === "Vegetarian" ? "Veg" : f.diet === "Non-Vegetarian" ? "Non-Veg" : "Both" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold", children: f.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-gold", children: f.specialty }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.priceRange }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌶️".repeat(Math.max(1, f.spice)) || "—" })
      ] })
    ] })
  ] }, f.id)) });
}
function AttractionsTab({
  country
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.5
  }, className: "grid gap-6 md:grid-cols-2", children: country.attractions.map((at) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-lift glass overflow-hidden rounded-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: at.image, alt: at.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-end justify-between p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/40 px-2.5 py-1 text-[10px] uppercase tracking-wider", children: at.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-semibold", children: at.name })
        ] }),
        at.unesco && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gold/30 px-2.5 py-1 text-[10px] font-semibold text-gold", children: "UNESCO" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: at.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }), text: at.location }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ticket, { className: "h-3.5 w-3.5" }), text: at.ticket }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }), text: at.hours }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }), text: `Best: ${at.bestTime}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 rounded-2xl bg-white/5 p-3 text-xs text-foreground/80", children: [
        "💡 ",
        at.tip
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://www.google.com/maps/search/${encodeURIComponent(at.name + " " + at.location)}`, target: "_blank", rel: "noopener noreferrer", className: "mt-3 inline-flex items-center gap-1 text-xs text-gold hover:underline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
        " Open in Google Maps →"
      ] })
    ] })
  ] }, at.name)) });
}
function CultureTab({
  country
}) {
  const c = country.culture;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.5
  }, className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CultureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-4 w-4" }), title: "Language & Greeting", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.language }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-gold", children: [
        "“",
        c.greeting,
        "”"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CultureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "h-4 w-4" }), title: "Festivals", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: c.festivals.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "• ",
      x
    ] }, x)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CultureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4" }), title: "Currency & Religion", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.currency }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: c.religion })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CultureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }), title: "Etiquette", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: c.etiquette.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "• ",
      x
    ] }, x)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CultureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }), title: "Local Customs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: c.customs.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      "• ",
      x
    ] }, x)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CultureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }), title: "Clothing & Holidays", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.clothing }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: c.holidays.join(" · ") })
    ] })
  ] });
}
function CultureCard({
  icon,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-lift glass rounded-3xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-gold", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm uppercase tracking-[0.15em]", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/90", children })
  ] });
}
function Info({
  icon,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: icon }),
    text
  ] });
}
export {
  CountryPage as component
};
