import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, F as Footer } from "./Footer-CTttrzV5.mjs";
import { c as countries } from "./router-CUbQLGxF.mjs";
import { M as MusicPlatforms } from "./MusicPlatforms-D6DEKaYW.mjs";
import "../_libs/sonner.mjs";
import { u as useScroll, b as useTransform, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { p as Search, o as ChevronDown, G as Globe, q as ArrowRight, u as Sparkles, y as CalendarDays, W as Wallet, P as Plane, n as Compass, M as MapPin, x as Camera, z as TreePalm, D as Luggage, I as Sailboat, J as Mountain, K as TramFront, N as Ticket, m as Earth, O as Tent } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/hero-CZWtMNze.jpg";
const ICONS = [
  { Icon: Plane, top: "16%", left: "8%", size: 30, color: "#38bdf8", dur: 3.2, amp: 14, rot: 8, delay: 0 },
  { Icon: Compass, top: "24%", left: "88%", size: 34, color: "#22d3ee", dur: 4, amp: 18, rot: -10, delay: 0.4 },
  { Icon: MapPin, top: "62%", left: "6%", size: 26, color: "#7dd3fc", dur: 2.8, amp: 12, rot: 6, delay: 0.8 },
  { Icon: Camera, top: "70%", left: "90%", size: 28, color: "#60a5fa", dur: 3.6, amp: 15, rot: -8, delay: 0.2 },
  { Icon: TreePalm, top: "80%", left: "16%", size: 32, color: "#34d399", dur: 4.2, amp: 16, rot: 5, delay: 1 },
  { Icon: Luggage, top: "12%", left: "70%", size: 26, color: "#2dd4bf", dur: 3, amp: 13, rot: -6, delay: 0.6 },
  { Icon: Sailboat, top: "44%", left: "93%", size: 30, color: "#38bdf8", dur: 3.8, amp: 17, rot: 9, delay: 1.2 },
  { Icon: Mountain, top: "84%", left: "78%", size: 30, color: "#7dd3fc", dur: 3.4, amp: 14, rot: -7, delay: 0.3 },
  { Icon: TramFront, top: "34%", left: "4%", size: 26, color: "#22d3ee", dur: 4.4, amp: 15, rot: 7, delay: 0.9 },
  { Icon: Ticket, top: "52%", left: "84%", size: 24, color: "#60a5fa", dur: 2.6, amp: 11, rot: -9, delay: 0.5 },
  { Icon: Earth, top: "8%", left: "40%", size: 28, color: "#34d399", dur: 3.5, amp: 14, rot: 6, delay: 1.1 },
  { Icon: Tent, top: "90%", left: "48%", size: 26, color: "#2dd4bf", dur: 3.9, amp: 16, rot: -5, delay: 0.7 }
];
function FloatingIcons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: ICONS.map(({ Icon, top, left, size, color, dur, amp, rot, delay }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "absolute",
      style: { top, left },
      initial: { opacity: 0, scale: 0 },
      animate: {
        opacity: [0, 0.85, 0.85],
        scale: 1,
        y: [0, -amp, 0],
        rotate: [0, rot, 0]
      },
      transition: {
        opacity: { duration: 0.8, delay: 0.3 + i * 0.08 },
        scale: { type: "spring", stiffness: 260, damping: 18, delay: 0.3 + i * 0.08 },
        y: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: dur, repeat: Infinity, ease: "easeInOut", delay }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid place-items-center rounded-2xl border backdrop-blur-md",
          style: {
            width: size + 22,
            height: size + 22,
            background: color + "1f",
            borderColor: color + "44",
            boxShadow: `0 8px 30px -8px ${color}66`
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { style: { width: size, height: size, color }, strokeWidth: 1.6 })
        }
      )
    },
    i
  )) });
}
const WORDS = ["Wonders.", "Flavors.", "Cultures.", "Stories.", "Adventures."];
function CyclingWord() {
  const [index, setIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-block overflow-hidden", style: { minWidth: "6ch" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      initial: { y: "100%", opacity: 0 },
      animate: { y: "0%", opacity: 1 },
      exit: { y: "-100%", opacity: 0 },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      className: "inline-block text-gradient-gold",
      children: WORDS[index]
    },
    WORDS[index]
  ) }) });
}
function Particle({ p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "pointer-events-none absolute rounded-full",
      style: {
        left: `${p.left}%`,
        bottom: "-5%",
        width: p.size,
        height: p.size,
        background: p.color,
        boxShadow: `0 0 ${p.size * 3}px ${p.color}`
      },
      animate: {
        y: [0, -p.rise],
        x: [0, p.drift],
        opacity: [0, 0.8, 0.8, 0],
        scale: [0.5, 1.2, 0.8, 0]
      },
      transition: {
        duration: p.dur,
        delay: p.delay,
        repeat: Infinity,
        ease: "easeOut",
        repeatDelay: p.repeatDelay
      }
    }
  );
}
function seeded(i, salt) {
  const v = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return v - Math.floor(v);
}
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  delay: i * 0.7,
  color: i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#a78bfa" : "#34d399",
  left: seeded(i, 1) * 100,
  dur: 12 + seeded(i, 2) * 10,
  size: 1.5 + seeded(i, 3) * 2.5,
  rise: 500 + seeded(i, 4) * 400,
  drift: (seeded(i, 5) - 0.5) * 120,
  repeatDelay: seeded(i, 6) * 5
}));
function Hero() {
  const navigate = useNavigate();
  const [q, setQ] = reactExports.useState("");
  const [mounted, setMounted] = reactExports.useState(false);
  const sectionRef = reactExports.useRef(null);
  reactExports.useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const onSearch = (e) => {
    e.preventDefault();
    const term = q.trim().toLowerCase();
    const match = countries.find(
      (c) => c.name.toLowerCase().includes(term) || c.cities.some((ct) => ct.toLowerCase().includes(term))
    );
    if (match) navigate({ to: "/country/$id", params: { id: match.id } });
    else navigate({ to: "/explore" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: sectionRef,
      id: "top",
      className: "relative flex min-h-screen w-full items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 -z-10",
            style: { y: imgY },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: heroImg,
                alt: "",
                width: 1920,
                height: 1280,
                className: "h-[110%] w-full object-cover opacity-65"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/85" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingIcons, {}),
        mounted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: PARTICLES.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Particle, { p }, i)) }),
        [
          { className: "absolute -left-52 top-1/3 h-[32rem] w-[32rem]", color: "bg-primary/25", dur: 10, amp: 35 },
          { className: "absolute -right-44 bottom-1/4 h-[38rem] w-[38rem]", color: "bg-royal/35", dur: 13, amp: -45 },
          { className: "absolute left-1/3 top-0 h-72 w-[65vw]", color: "bg-accent/12", dur: 8, amp: 0 },
          { className: "absolute right-1/3 bottom-0 h-64 w-[50vw]", color: "bg-sky-500/10", dur: 11, amp: 0 }
        ].map((orb, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: `${orb.className} rounded-full ${orb.color} blur-[110px]`,
            animate: { y: [0, orb.amp, 0], scale: [1, 1.07, 1] },
            transition: { duration: orb.dur, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }
          },
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            style: { opacity: fadeOut },
            className: "relative z-10 mx-auto max-w-5xl px-6 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: 22, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  className: "mb-7 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs uppercase tracking-[0.28em] text-gold",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        className: "h-1.5 w-1.5 rounded-full bg-gold",
                        animate: { scale: [1, 1.8, 1], opacity: [1, 0.5, 1] },
                        transition: { duration: 2, repeat: Infinity }
                      }
                    ),
                    "A new way to experience the world"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 36 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.38, duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                  className: "text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] text-gradient-violet",
                  children: [
                    "Discover",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "World ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CyclingWord, {})
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 22 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.62, duration: 0.9 },
                  className: "mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground",
                  children: "Immerse yourself in destinations through experiences, flavors, cultures, and sounds — all in one place."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.form,
                {
                  onSubmit: onSearch,
                  initial: { opacity: 0, y: 22 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.78, duration: 0.8 },
                  className: "mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full glass px-2 py-2 shadow-glow ring-1 ring-sky-500/20 focus-within:ring-sky-400/50 transition-shadow",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "ml-3 h-4 w-4 text-muted-foreground flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        value: q,
                        onChange: (e) => setQ(e.target.value),
                        placeholder: "Search a country or city…",
                        className: "w-full bg-transparent px-1 text-sm placeholder:text-muted-foreground/70 focus:outline-none"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.button,
                      {
                        type: "submit",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.97 },
                        className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 flex-shrink-0",
                        children: "Go"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 22 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.9, duration: 0.8 },
                  className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/explore",
                        className: "group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90",
                        children: [
                          "Start Exploring",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.span,
                            {
                              className: "ml-2",
                              animate: { x: [0, 4, 0] },
                              transition: { duration: 1.6, repeat: Infinity },
                              children: "→"
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/globe",
                        className: "inline-flex items-center justify-center rounded-full glass px-8 py-4 text-sm font-semibold hover:bg-white/10 transition-colors gap-2",
                        children: "🌍 View Globe"
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 1.1, duration: 1 },
                  className: "mt-12 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground/70",
                  children: [
                    { val: "5", label: "Destinations" },
                    { val: "50+", label: "Local foods" },
                    { val: "∞", label: "Stories" }
                  ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 1.2 + i * 0.15 },
                      className: "flex flex-col items-center gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-semibold text-foreground", children: s.val }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.label })
                      ]
                    },
                    s.label
                  ))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.6, duration: 1 },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { y: [0, 9, 0] },
                transition: { duration: 1.8, repeat: Infinity },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5 text-muted-foreground/50" })
              }
            )
          }
        )
      ]
    }
  );
}
function CountryStory({ country, index }) {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const flip = index % 2 === 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      id: country.id,
      className: "relative min-h-[110vh] flex items-center justify-center overflow-hidden py-32",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            style: { y: imgY, scale: imgScale },
            className: "absolute inset-0 -z-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: country.image,
                  alt: country.name,
                  loading: "lazy",
                  width: 1920,
                  height: 1080,
                  className: "h-full w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            style: { y: textY },
            className: `relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.span,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-20%" },
                    transition: { duration: 0.8 },
                    className: "mb-4 text-xs uppercase tracking-[0.3em] text-gold",
                    children: [
                      "Chapter ",
                      String(index + 1).padStart(2, "0")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.h2,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-20%" },
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                    className: "text-6xl md:text-8xl font-semibold leading-[0.95]",
                    children: country.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-20%" },
                    transition: { duration: 0.9, delay: 0.15 },
                    className: "mt-6 text-2xl md:text-3xl text-white/95 font-display",
                    children: country.tagline
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-20%" },
                    transition: { duration: 0.9, delay: 0.25 },
                    className: "mt-6 max-w-md text-lg text-white/75",
                    children: country.description
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-20%" },
                    transition: { duration: 0.9, delay: 0.35 },
                    className: "mt-8",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/country/$id",
                        params: { id: country.id },
                        className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
                        children: [
                          "Explore ",
                          country.name,
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                        ]
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30, rotateX: 8 },
                    whileInView: { opacity: 1, y: 0, rotateX: 0 },
                    viewport: { once: true, margin: "-20%" },
                    transition: { duration: 0.85, delay: 0.2 },
                    className: "glass rounded-3xl p-6 shadow-soft",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "Signature Flavors" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gold", children: "Food" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: country.foods.map((f, fi) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, scale: 0.7, y: 8 },
                          whileInView: { opacity: 1, scale: 1, y: 0 },
                          viewport: { once: true },
                          transition: { delay: 0.3 + fi * 0.07, type: "spring", stiffness: 380, damping: 22 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Link,
                            {
                              to: "/country/$id/food/$foodId",
                              params: { id: country.id, foodId: f.id },
                              className: "block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition-all hover:bg-primary/30 hover:border-primary/40 hover:scale-105",
                              children: f.name
                            }
                          )
                        },
                        f.id
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-20%" },
                    transition: { duration: 0.8, delay: 0.35 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MusicPlatforms, { countryName: country.name, music: country.music })
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Planner() {
  const [where, setWhere] = reactExports.useState("");
  const [days, setDays] = reactExports.useState("5");
  const [vibe, setVibe] = reactExports.useState("Culture");
  const [plan, setPlan] = reactExports.useState(null);
  const generate = () => {
    const q = where.trim().toLowerCase();
    const match = countries.find((c) => c.name.toLowerCase().includes(q) || c.cities.some((ct) => ct.toLowerCase().includes(q))) ?? countries[Math.floor(Math.random() * countries.length)];
    const n = Math.max(1, Math.min(7, parseInt(days) || 5));
    const blocks = [
      `Arrive in ${match.cities[0]} — settle in, sunset stroll & first local bite.`,
      `Explore ${match.attractions[0]?.name}. Taste ${match.foods[0]?.name} for lunch.`,
      `${vibe} day: ${match.attractions[1]?.name ?? match.cities[1]} + ${match.foods[1]?.name}.`,
      `Day trip to ${match.cities[2] ?? match.cities[0]}, soundtrack of ${match.music[0]?.genre}.`,
      `Hidden gems: ${match.attractions[3]?.name ?? "local markets"} & street food crawl.`,
      `Relaxed morning, ${match.foods[3]?.name}, souvenir & café hopping.`,
      `Farewell ${match.name} — final views and ${match.music[1]?.genre} send-off.`
    ];
    setPlan({ country: match, itinerary: blocks.slice(0, n) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "plan", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-60 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-4 text-xs uppercase tracking-[0.3em] text-gold",
          children: "AI Travel Planner"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.9 },
          className: "text-5xl md:text-7xl font-semibold text-gradient-violet",
          children: [
            "Your journey,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "composed in seconds."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.15 },
          className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
          children: "Tell us a destination, the days, and a feeling. We'll craft a day-by-day itinerary scored with the perfect local soundtrack."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1, delay: 0.2 },
          className: "mx-auto mt-12 max-w-3xl glass rounded-3xl p-2 shadow-glow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: where,
                  onChange: (e) => setWhere(e.target.value),
                  placeholder: "Where to? (e.g. Japan)",
                  className: "rounded-2xl bg-white/5 px-4 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: days,
                  onChange: (e) => setDays(e.target.value),
                  placeholder: "Days",
                  type: "number",
                  min: 1,
                  max: 7,
                  className: "rounded-2xl bg-white/5 px-4 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: vibe,
                  onChange: (e) => setVibe(e.target.value),
                  className: "rounded-2xl bg-white/5 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary [&>option]:bg-background",
                  children: ["Culture", "Food", "Adventure", "Relaxation", "Nightlife"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: v }, v))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: generate,
                className: "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground hover:scale-[1.01] transition-transform",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                  " Compose my journey"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: plan && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          className: "mx-auto mt-8 max-w-3xl glass rounded-3xl p-6 text-left shadow-soft",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-wrap items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: plan.country.flag }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: plan.country.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gold", children: plan.country.tagline })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass inline-flex items-center gap-1 rounded-full px-3 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5" }),
                  " ",
                  plan.itinerary.length,
                  " days"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass inline-flex items-center gap-1 rounded-full px-3 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3.5 w-3.5" }),
                  " ",
                  plan.country.budget
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: plan.itinerary.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.li,
              {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.08 },
                className: "flex gap-4 rounded-2xl bg-white/5 p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/90", children: d })
                ]
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/country/$id",
                params: { id: plan.country.id },
                className: "mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]",
                children: [
                  "Explore ",
                  plan.country.name,
                  " →"
                ]
              }
            )
          ]
        }
      ) })
    ] })
  ] });
}
function GlobeTeaser() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -z-10", style: {
      background: "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.20 0.08 240 / 0.4), transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true,
        margin: "-15%"
      }, transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sky-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
          "Interactive World Globe"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl font-semibold leading-[1.05] md:text-6xl text-gradient-gold", children: [
          "Spin the",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "World."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-lg text-muted-foreground", children: "Our 3D globe maps every destination with glowing markers. Click any country to instantly dive into its sights, foods, and culture." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: ["🌍 Real-time globe rotation", "📍 Clickable country markers", "🌙 Night Earth view", "✈️ Instant country detail"].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          opacity: 0,
          scale: 0.8,
          y: 10
        }, whileInView: {
          opacity: 1,
          scale: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.3 + i * 0.09,
          type: "spring",
          stiffness: 350,
          damping: 22
        }, className: "glass rounded-full px-4 py-2 text-sm text-foreground", children: f }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/globe", className: "group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]", children: [
          "Launch Globe",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.88
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true,
        margin: "-15%"
      }, transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-80 w-80 rounded-full border border-sky-400/20 animate-[spin_18s_linear_infinite]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-64 w-64 rounded-full border border-primary/30 animate-[spin_12s_linear_infinite_reverse]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-48 w-48 rounded-full border border-sky-300/20 animate-[spin_8s_linear_infinite]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass relative flex h-40 w-40 items-center justify-center rounded-full shadow-glow", style: {
          background: "radial-gradient(circle at 35% 35%, oklch(0.35 0.10 240), oklch(0.12 0.05 240))"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-16 w-16 text-sky-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.8)]" }) }),
        [{
          flag: "🇯🇵",
          label: "Japan",
          x: "78%",
          y: "8%",
          amp: -7,
          dur: 3.1
        }, {
          flag: "🇫🇷",
          label: "France",
          x: "-6%",
          y: "20%",
          amp: -5,
          dur: 3.7
        }, {
          flag: "🇮🇹",
          label: "Italy",
          x: "4%",
          y: "74%",
          amp: -8,
          dur: 2.9
        }, {
          flag: "🇰🇷",
          label: "Korea",
          x: "80%",
          y: "70%",
          amp: -6,
          dur: 4
        }, {
          flag: "🇧🇷",
          label: "Brazil",
          x: "38%",
          y: "92%",
          amp: -5,
          dur: 3.4
        }].map((pin, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.4 + i * 0.13,
          type: "spring",
          stiffness: 280,
          damping: 20
        }, style: {
          position: "absolute",
          left: pin.x,
          top: pin.y
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
          y: [0, pin.amp, 0]
        }, transition: {
          duration: pin.dur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4
        }, className: "flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold shadow-soft whitespace-nowrap cursor-default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pin.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pin.label })
        ] }) }, pin.label))
      ] })
    ] }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative bg-background text-foreground", id: "destinations", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    countries.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CountryStory, { country: c, index: i }, c.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlobeTeaser, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Planner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
