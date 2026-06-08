import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer } from "./Footer-BlcwNYKc.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as countries } from "./router-C8Nm53OG.mjs";
import { M as MusicPlatforms } from "./MusicPlatforms-CdnqQNbD.mjs";
import "../_libs/sonner.mjs";
import { m as motion, u as useScroll, b as useTransform, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { m as Search, t as Sparkles, u as CalendarDays, W as Wallet } from "../_libs/lucide-react.mjs";
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
function Hero() {
  const navigate = useNavigate();
  const [q, setQ] = reactExports.useState("");
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
      id: "top",
      className: "relative flex min-h-screen w-full items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroImg,
            alt: "",
            width: 1920,
            height: 1280,
            className: "absolute inset-0 h-full w-full object-cover opacity-70"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-[100px]",
            animate: { y: [0, 30, 0], scale: [1, 1.06, 1] },
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "absolute -right-40 bottom-1/4 h-[32rem] w-[32rem] rounded-full bg-royal/30 blur-[120px]",
            animate: { y: [0, -40, 0], scale: [1, 1.08, 1] },
            transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "absolute left-1/2 top-0 h-64 w-[60vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]",
            animate: { opacity: [0.5, 1, 0.5] },
            transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.8 },
              className: "mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-gold-pulse rounded-full bg-gold" }),
                "A new way to experience the world"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] },
              className: "text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] text-gradient-violet",
              children: [
                "Travel Beyond",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Borders."
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.9 },
              className: "mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground",
              children: "Discover the world's destinations through experiences, flavors, cultures, and sounds."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.form,
            {
              onSubmit: onSearch,
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.75, duration: 0.8 },
              className: "glass mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full p-1.5 shadow-glow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "ml-3 h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: q,
                    onChange: (e) => setQ(e.target.value),
                    placeholder: "Search a country or city…",
                    className: "w-full bg-transparent px-1 text-sm placeholder:text-muted-foreground focus:outline-none"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105",
                    children: "Go"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.85, duration: 0.8 },
              className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/explore",
                    className: "group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
                    children: [
                      "Start Exploring",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 transition-transform group-hover:translate-x-1", children: "→" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#plan",
                    className: "inline-flex items-center justify-center rounded-full glass px-8 py-4 text-sm font-medium hover:bg-white/10 transition-colors",
                    children: "Plan My Journey"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.4, duration: 1 },
            className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: { y: [0, 8, 0] },
                  transition: { duration: 1.6, repeat: Infinity },
                  className: "h-8 w-px bg-gradient-to-b from-lavender to-transparent"
                }
              )
            ]
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-tr ${country.accent} mix-blend-soft-light` })
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
                    className: "mt-6 text-2xl md:text-3xl text-gradient-violet font-display",
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
                    className: "mt-6 max-w-md text-lg text-muted-foreground",
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
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-20%" },
                    transition: { duration: 0.8, delay: 0.2 },
                    className: "glass rounded-3xl p-6 shadow-soft",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "Signature Flavors" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gold", children: "Food" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: country.foods.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/country/$id/food/$foodId",
                          params: { id: country.id, foodId: f.id },
                          className: "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition-colors hover:bg-primary/30 hover:border-primary/40",
                          children: f.name
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
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative bg-background text-foreground", id: "destinations", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    countries.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CountryStory, { country: c, index: i }, c.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Planner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
