import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as countries } from "./router-CUbQLGxF.mjs";
import "../_libs/sonner.mjs";
import { u as useScroll, b as useTransform, c as useMotionValueEvent, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { m as Earth, n as Compass, o as ChevronDown, p as Search, X, q as ArrowRight, r as Thermometer, W as Wallet, M as MapPin, P as Plane, l as Star, s as Calendar, t as ShieldCheck, u as Sparkles } from "../_libs/lucide-react.mjs";
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
const MARKERS = [{
  id: "japan",
  name: "Japan",
  flag: "🇯🇵",
  lat: 35.6762,
  lng: 139.6503,
  color: "#38bdf8",
  ring: "rgba(56,189,248,",
  region: "East Asia"
}, {
  id: "france",
  name: "France",
  flag: "🇫🇷",
  lat: 48.8566,
  lng: 2.3522,
  color: "#7dd3fc",
  ring: "rgba(125,211,252,",
  region: "Western Europe"
}, {
  id: "italy",
  name: "Italy",
  flag: "🇮🇹",
  lat: 41.9028,
  lng: 12.4964,
  color: "#34d399",
  ring: "rgba(52,211,153,",
  region: "Southern Europe"
}, {
  id: "korea",
  name: "South Korea",
  flag: "🇰🇷",
  lat: 37.5665,
  lng: 126.978,
  color: "#f472b6",
  ring: "rgba(244,114,182,",
  region: "East Asia"
}, {
  id: "brazil",
  name: "Brazil",
  flag: "🇧🇷",
  lat: -15.7801,
  lng: -47.9292,
  color: "#4ade80",
  ring: "rgba(74,222,128,",
  region: "South America"
}, {
  id: "india",
  name: "India",
  flag: "🇮🇳",
  lat: 28.6139,
  lng: 77.209,
  color: "#fbbf24",
  ring: "rgba(251,191,36,",
  region: "South Asia"
}, {
  id: "thailand",
  name: "Thailand",
  flag: "🇹🇭",
  lat: 13.7563,
  lng: 100.5018,
  color: "#22d3ee",
  ring: "rgba(34,211,238,",
  region: "Southeast Asia"
}, {
  id: "spain",
  name: "Spain",
  flag: "🇪🇸",
  lat: 40.4168,
  lng: -3.7038,
  color: "#fb7185",
  ring: "rgba(251,113,133,",
  region: "Southern Europe"
}, {
  id: "egypt",
  name: "Egypt",
  flag: "🇪🇬",
  lat: 30.0444,
  lng: 31.2357,
  color: "#facc15",
  ring: "rgba(250,204,21,",
  region: "North Africa"
}, {
  id: "mexico",
  name: "Mexico",
  flag: "🇲🇽",
  lat: 19.4326,
  lng: -99.1332,
  color: "#fb923c",
  ring: "rgba(251,146,60,",
  region: "North America"
}, {
  id: "greece",
  name: "Greece",
  flag: "🇬🇷",
  lat: 37.9838,
  lng: 23.7275,
  color: "#60a5fa",
  ring: "rgba(96,165,250,",
  region: "Southern Europe"
}, {
  id: "australia",
  name: "Australia",
  flag: "🇦🇺",
  lat: -33.8688,
  lng: 151.2093,
  color: "#2dd4bf",
  ring: "rgba(45,212,191,",
  region: "Oceania"
}, {
  id: "morocco",
  name: "Morocco",
  flag: "🇲🇦",
  lat: 31.6295,
  lng: -7.9811,
  color: "#f59e0b",
  ring: "rgba(245,158,11,",
  region: "North Africa"
}];
function StarField() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
      background: "radial-gradient(ellipse 90% 70% at 50% 0%, oklch(0.18 0.07 240 / 0.55), transparent 65%), oklch(0.07 0.03 245)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0", animate: {
      backgroundPosition: ["0% 0%", "100% 100%"]
    }, transition: {
      duration: 90,
      repeat: Infinity,
      ease: "linear"
    }, style: {
      backgroundImage: Array.from({
        length: 60
      }, (_, i) => {
        const x = (i * 37 + 7) % 100;
        const y = (i * 53 + 13) % 100;
        const s = i % 3 === 0 ? "1.5px" : "1px";
        return `radial-gradient(${s} ${s} at ${x}% ${y}%, rgba(255,255,255,${0.3 + i % 4 * 0.15}), transparent)`;
      }).join(", ")
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 opacity-50", animate: {
      backgroundPosition: ["0% 0%", "-100% 80%"]
    }, transition: {
      duration: 60,
      repeat: Infinity,
      ease: "linear"
    }, style: {
      backgroundImage: Array.from({
        length: 30
      }, (_, i) => {
        const x = (i * 71 + 29) % 100;
        const y = (i * 43 + 61) % 100;
        return `radial-gradient(1px 1px at ${x}% ${y}%, rgba(186,230,253,0.6), transparent)`;
      }).join(", ")
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute left-1/4 top-1/3 h-96 w-96 rounded-full", style: {
      background: "radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)"
    }, animate: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 0.8, 0.4]
    }, transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full", style: {
      background: "radial-gradient(circle, rgba(167,139,250,0.07), transparent 70%)"
    }, animate: {
      scale: [1, 1.25, 1],
      opacity: [0.3, 0.7, 0.3]
    }, transition: {
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 4
    } })
  ] });
}
function SearchOverlay({
  onSelect
}) {
  const [q, setQ] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const results = q.trim().length > 0 ? MARKERS.filter((m) => m.name.toLowerCase().includes(q.toLowerCase()) || m.region.toLowerCase().includes(q.toLowerCase())) : [];
  reactExports.useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: -10
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.5
    }, className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3 shadow-glow ring-1 ring-sky-500/20 transition-all focus-within:ring-sky-400/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 flex-shrink-0 text-sky-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => {
        setQ(e.target.value);
        setOpen(true);
      }, onFocus: () => setOpen(true), placeholder: "Search countries, regions…", className: "w-full bg-transparent text-sm placeholder:text-white/35 text-white focus:outline-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: q && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { initial: {
        opacity: 0,
        scale: 0.7
      }, animate: {
        opacity: 1,
        scale: 1
      }, exit: {
        opacity: 0,
        scale: 0.7
      }, onClick: () => {
        setQ("");
        setOpen(false);
      }, className: "text-white/40 hover:text-white/80 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
      open && results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: -8,
        scale: 0.97
      }, animate: {
        opacity: 1,
        y: 0,
        scale: 1
      }, exit: {
        opacity: 0,
        y: -6,
        scale: 0.97
      }, transition: {
        duration: 0.18
      }, className: "absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl shadow-glow z-50", children: results.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { initial: {
        opacity: 0,
        x: -10
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        delay: i * 0.05
      }, onClick: () => {
        onSelect(m);
        setQ("");
        setOpen(false);
      }, className: "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-white/8 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: m.flag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/45", children: m.region })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full opacity-70", style: {
          backgroundColor: m.color,
          boxShadow: `0 0 6px ${m.color}`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" })
      ] }, m.id)) }),
      open && q.trim() && results.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl px-5 py-4 text-sm text-white/50 z-50", children: [
        'No destinations found for "',
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: q }),
        '"'
      ] })
    ] })
  ] });
}
function DetailCard({
  marker,
  onClose
}) {
  const data = countries.find((c) => c.id === marker.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 40,
    scale: 0.95
  }, animate: {
    opacity: 1,
    y: 0,
    scale: 1
  }, exit: {
    opacity: 0,
    y: 30,
    scale: 0.95
  }, transition: {
    type: "spring",
    stiffness: 320,
    damping: 28
  }, className: "w-full max-w-sm overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.7)]", style: {
    background: "rgba(6,14,30,0.92)",
    backdropFilter: "blur(24px)",
    border: `1px solid ${marker.color}35`,
    boxShadow: `0 0 40px ${marker.color}18`
  }, children: [
    data?.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: data.image, alt: marker.name, className: "h-full w-full object-cover", initial: {
        scale: 1.1
      }, animate: {
        scale: 1
      }, transition: {
        duration: 0.8
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[rgba(6,14,30,0.95)] via-black/30 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white/70 backdrop-blur-sm transition-all hover:bg-black/80 hover:text-white hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl drop-shadow", children: marker.flag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider", style: {
          background: marker.color + "25",
          color: marker.color,
          border: `1px solid ${marker.color}40`
        }, children: marker.region })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-white", children: marker.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/60 leading-snug", children: data?.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [{
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "h-3 w-3" }),
        label: "Best season",
        val: data?.bestSeason
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3" }),
        label: "Budget",
        val: data?.budgetLabel
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
        label: "Capital",
        val: data?.cities[0]
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-3 w-3" }),
        label: "Visa",
        val: data?.visa
      }].map((s) => s.val && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl px-3 py-2", style: {
        background: marker.color + "10"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-0.5", style: {
          color: marker.color
        }, children: [
          s.icon,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider opacity-70", children: s.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-white/90", children: s.val })
      ] }, s.label)) }),
      data?.foods && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[10px] uppercase tracking-widest text-white/35", children: "Must-try" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: data.foods.slice(0, 4).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          opacity: 0,
          scale: 0.8
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          type: "spring",
          stiffness: 400
        }, className: "rounded-full px-2.5 py-1 text-[11px] font-medium", style: {
          background: marker.color + "18",
          color: marker.color
        }, children: f.name }, f.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/country/$id", params: {
        id: marker.id
      }, className: "group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]", style: {
        background: `linear-gradient(135deg, ${marker.color}ee, ${marker.color}88)`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4" }),
        "Explore ",
        marker.name,
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: {
          x: [0, 4, 0]
        }, transition: {
          duration: 1.4,
          repeat: Infinity
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
      ] })
    ] })
  ] }, marker.id);
}
function InfoRow({
  marker,
  index
}) {
  const data = countries.find((c) => c.id === marker.id);
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const flip = index % 2 === 1;
  if (!data) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ref, initial: {
    opacity: 0,
    y: 80
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-12%"
  }, transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1]
  }, className: `relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.9,
      x: flip ? 40 : -40
    }, whileInView: {
      opacity: 1,
      scale: 1,
      x: 0
    }, viewport: {
      once: true,
      margin: "-12%"
    }, transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }, className: "group relative aspect-[4/3] overflow-hidden rounded-3xl border", style: {
      borderColor: marker.color + "33",
      boxShadow: `0 30px 80px -30px ${marker.color}55`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: data.image, alt: data.name, loading: "lazy", style: {
        y: imgY
      }, className: "absolute inset-0 h-[124%] w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl drop-shadow", children: marker.flag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm", style: {
          background: marker.color + "30",
          color: "#fff",
          border: `1px solid ${marker.color}55`
        }, children: marker.region })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-amber-300 text-amber-300" }),
        " ",
        data.rating
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-[0.3em]", style: {
        color: marker.color
      }, children: [
        String(index + 1).padStart(2, "0"),
        " · Destination"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-4xl font-semibold leading-tight md:text-5xl text-white", children: data.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-lg text-white/70 font-display", children: data.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-white/55", children: data.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: [{
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
        text: data.bestSeason
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3.5 w-3.5" }),
        text: `${data.budget} · ${data.budgetLabel}`
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
        text: `Safety ${data.safety}`
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        text: `${data.foods.length} signature dishes`
      }].map((chip, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          color: marker.color
        }, children: chip.icon }),
        chip.text
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/45", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5", style: {
          color: marker.color
        } }),
        data.cities.join(" · ")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/country/$id", params: {
        id: marker.id
      }, className: "group mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all hover:scale-[1.04] active:scale-95", style: {
        background: `linear-gradient(135deg, ${marker.color}ee, ${marker.color}88)`
      }, children: [
        "Explore ",
        data.name,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
      ] })
    ] })
  ] });
}
function InfoSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 bg-gradient-to-b from-transparent via-[oklch(0.09_0.035_240)] to-[oklch(0.07_0.03_245)] pb-32 pt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-15%"
    }, transition: {
      duration: 0.8
    }, className: "mx-auto max-w-3xl px-6 pb-6 pt-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-sky-400/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-3.5 w-3.5" }),
        " The Atlas"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-semibold md:text-6xl text-gradient-gold", children: [
        MARKERS.length,
        " Worlds to Wander"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-lg text-white/55", children: "Scroll on — every glowing marker on the globe opens into a living story of food, music, culture and wonder." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: MARKERS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { marker: m, index: i }, m.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.8
    }, className: "mx-auto mt-16 max-w-xl px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/explore", className: "inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-105", children: [
      "Browse all destinations ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] });
}
function GlobePage() {
  const globeRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const [GlobeGL, setGlobeGL] = reactExports.useState(null);
  const [hovered, setHovered] = reactExports.useState(null);
  const [selected, setSelected] = reactExports.useState(null);
  const [size, setSize] = reactExports.useState({
    w: 900,
    h: 900
  });
  const [atTop, setAtTop] = reactExports.useState(true);
  const {
    scrollY
  } = useScroll();
  const globeOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const globeScale = useTransform(scrollY, [0, 600], [1, 1.18]);
  useMotionValueEvent(scrollY, "change", (y) => {
    const top = y < (typeof window !== "undefined" ? window.innerHeight * 0.55 : 400);
    setAtTop((prev) => prev !== top ? top : prev);
  });
  reactExports.useEffect(() => {
    import("../_libs/react-globe.gl.mjs").then((m) => setGlobeGL(() => m.default));
  }, []);
  reactExports.useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([e]) => {
      setSize({
        w: e.contentRect.width,
        h: e.contentRect.height
      });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (!globeRef.current || !GlobeGL) return;
    const t = setTimeout(() => {
      const c = globeRef.current.controls();
      c.autoRotate = true;
      c.autoRotateSpeed = 0.5;
      c.enableZoom = true;
      c.minDistance = 130;
      c.maxDistance = 580;
    }, 700);
    return () => clearTimeout(t);
  }, [GlobeGL]);
  const flyTo = reactExports.useCallback((m) => {
    if (!globeRef.current) return;
    globeRef.current.controls().autoRotate = false;
    globeRef.current.pointOfView({
      lat: m.lat,
      lng: m.lng,
      altitude: 1.6
    }, 1400);
  }, []);
  const handleSelect = reactExports.useCallback((m) => {
    setSelected(m);
    flyTo(m);
  }, [flyTo]);
  const handleClose = reactExports.useCallback(() => {
    setSelected(null);
    if (globeRef.current) globeRef.current.controls().autoRotate = true;
  }, []);
  const buildLabel = reactExports.useCallback((d) => {
    const m = d;
    const el = document.createElement("div");
    el.style.cssText = "pointer-events:auto;cursor:pointer;transform:translate(-50%,-150%);display:flex;flex-direction:column;align-items:center;gap:3px;-webkit-tap-highlight-color:transparent;touch-action:manipulation;";
    el.innerHTML = `
      <div style="background:rgba(6,14,30,0.9);backdrop-filter:blur(14px);border:1px solid ${m.color}66;border-radius:999px;padding:7px 14px;font-size:13px;font-family:inherit;font-weight:700;color:#fff;white-space:nowrap;box-shadow:0 0 18px ${m.color}55;display:flex;align-items:center;gap:6px;transition:transform .18s ease, box-shadow .18s ease;">
        <span style="font-size:16px">${m.flag}</span>
        <span>${m.name}</span>
      </div>
      <div style="width:2px;height:14px;background:linear-gradient(to bottom,${m.color},transparent);border-radius:99px;box-shadow:0 0 8px ${m.color};"></div>
    `;
    const pill = el.firstElementChild;
    const grow = () => {
      pill.style.transform = "scale(1.12)";
      pill.style.boxShadow = `0 0 28px ${m.color}aa`;
    };
    const reset = () => {
      pill.style.transform = "scale(1)";
      pill.style.boxShadow = `0 0 18px ${m.color}55`;
    };
    el.addEventListener("mouseenter", () => {
      grow();
      setHovered(m);
    });
    el.addEventListener("mouseleave", () => {
      reset();
      setHovered(null);
    });
    const fire = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      handleSelect(m);
    };
    el.addEventListener("click", fire);
    el.addEventListener("touchstart", fire, {
      passive: false
    });
    return el;
  }, [handleSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative overflow-x-hidden bg-[oklch(0.07_0.03_245)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StarField, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ref: containerRef, className: "fixed inset-0 z-0", style: {
      top: 0,
      opacity: globeOpacity,
      scale: globeScale,
      pointerEvents: atTop ? "auto" : "none"
    }, children: [
      !GlobeGL && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-20 w-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-sky-500/20 animate-[spin_3s_linear_infinite]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-full border border-sky-400/30 animate-[spin_2s_linear_infinite_reverse]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-full border border-sky-300/40 animate-[spin_1.2s_linear_infinite]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-6 w-6 text-sky-400 animate-pulse" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm tracking-widest uppercase text-white/40", children: "Loading globe…" })
      ] }) }),
      GlobeGL && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.88
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1]
      }, className: "h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        GlobeGL,
        {
          ref: globeRef,
          width: size.w,
          height: size.h,
          backgroundColor: "rgba(0,0,0,0)",
          globeImageUrl: "//unpkg.com/three-globe/example/img/earth-night.jpg",
          bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png",
          atmosphereColor: "rgba(56,189,248,0.55)",
          atmosphereAltitude: 0.2,
          ringsData: MARKERS,
          ringColor: (d) => (t) => `${d.ring}${Math.max(0, 1 - t)})`,
          ringMaxRadius: 4.5,
          ringPropagationSpeed: 1.8,
          ringRepeatPeriod: 800,
          ringAltitude: 5e-3,
          pointsData: MARKERS,
          pointLat: "lat",
          pointLng: "lng",
          pointColor: "color",
          pointRadius: (d) => d.id === selected?.id ? 1.1 : 0.75,
          pointAltitude: 0.03,
          pointsMerge: false,
          htmlElementsData: MARKERS,
          htmlLat: "lat",
          htmlLng: "lng",
          htmlAltitude: 0.09,
          htmlElement: buildLabel,
          arcsData: MARKERS.map((m, i) => ({
            startLat: m.lat,
            startLng: m.lng,
            endLat: MARKERS[(i + 2) % MARKERS.length].lat,
            endLng: MARKERS[(i + 2) % MARKERS.length].lng,
            color: [m.color + "99", MARKERS[(i + 2) % MARKERS.length].color + "99"]
          })),
          arcColor: "color",
          arcAltitude: 0.28,
          arcStroke: 0.5,
          arcDashLength: 0.38,
          arcDashGap: 0.12,
          arcDashAnimateTime: 3200,
          onPointClick: (p) => handleSelect(p),
          onPointHover: (p) => setHovered(p)
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-screen flex-col items-center pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto w-full px-4 pt-24 flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: -20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }, className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { className: "mb-2 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-sky-400/90", animate: {
            opacity: [0.6, 1, 0.6]
          }, transition: {
            duration: 3,
            repeat: Infinity
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-3 w-3" }),
            "Interactive World Globe"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold md:text-6xl text-gradient-gold drop-shadow-[0_2px_30px_rgba(56,189,248,0.3)]", children: "Explore the Globe" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SearchOverlay, { onSelect: handleSelect }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !selected && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, transition: {
          delay: 1.2
        }, className: "rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-xs text-white/40 backdrop-blur-sm", children: "✦ Spin & click a glowing marker — or search above" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none mb-36 flex items-end justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: atTop && hovered && hovered.id !== selected?.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 14,
        scale: 0.94
      }, animate: {
        opacity: 1,
        y: 0,
        scale: 1
      }, exit: {
        opacity: 0,
        y: 10,
        scale: 0.94
      }, transition: {
        type: "spring",
        stiffness: 350,
        damping: 22
      }, className: "rounded-2xl border px-6 py-3 text-center backdrop-blur-2xl shadow-glow", style: {
        background: "rgba(6,14,30,0.82)",
        borderColor: hovered.color + "45",
        boxShadow: `0 0 30px ${hovered.color}20`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-white/40", children: hovered.region }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-white", children: [
          hovered.flag,
          " ",
          hovered.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs", style: {
          color: hovered.color
        }, children: "Click to explore →" })
      ] }, hovered.id) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-auto fixed bottom-8 right-6 z-30 w-[min(100vw-3rem,22rem)] lg:bottom-10 lg:right-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selected && atTop && /* @__PURE__ */ jsxRuntimeExports.jsx(DetailCard, { marker: selected, onClose: handleClose }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !selected && atTop && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: 24
      }, transition: {
        delay: 0.4,
        duration: 0.7
      }, className: "pointer-events-auto fixed inset-x-0 bottom-16 z-30 flex justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex max-w-full gap-2 overflow-x-auto rounded-full border border-white/10 bg-black/40 p-1.5 backdrop-blur-xl", style: {
        scrollbarWidth: "none"
      }, children: MARKERS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { initial: {
        opacity: 0,
        scale: 0.8
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        delay: 0.5 + i * 0.05
      }, onClick: () => handleSelect(m), className: "flex flex-shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105 hover:brightness-125 active:scale-95", style: {
        background: m.color + "16",
        borderColor: m.color + "3a",
        color: m.color
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-none", children: m.flag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: m.name })
      ] }, m.id)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: atTop && !selected && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        delay: 1.4
      }, onClick: () => window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      }), className: "pointer-events-auto fixed inset-x-0 bottom-4 z-30 mx-auto flex w-max flex-col items-center gap-0.5 text-[10px] uppercase tracking-[0.3em] text-white/45 transition-colors hover:text-sky-300", children: [
        "Scroll to explore",
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: {
          y: [0, 5, 0]
        }, transition: {
          duration: 1.6,
          repeat: Infinity
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InfoSection, {})
  ] });
}
export {
  GlobePage as component
};
