import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import { A as AnimatePresence, m as motion, u as useScroll, a as useSpring } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-UaFLuCmn.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 1e-3
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { scaleX },
      className: "fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-gold via-accent to-royal",
      "aria-hidden": true
    }
  );
}
function Loader() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("vv-loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDone(true);
      try {
        sessionStorage.setItem("vv-loaded", "1");
      } catch {
      }
    }, 1900);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-0 z-[100] grid place-items-center bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { rotate: 0 },
              animate: { rotate: 360 },
              transition: { duration: 1.6, repeat: Infinity, ease: "linear" },
              className: "h-16 w-16 rounded-full border-2 border-white/10 border-t-gold"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.8 },
              className: "font-display text-2xl font-semibold text-gradient-violet",
              children: "Violet Voyage"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5 },
              className: "text-xs uppercase tracking-[0.4em] text-muted-foreground",
              children: "Curating your world"
            }
          )
        ] })
      ]
    }
  ) });
}
const CURRENT_KEY = "vv-auth-user";
const USERS_KEY = "vv-auth-users";
const DEMO_USER = {
  id: "demo-001",
  name: "Priya Sharma",
  email: "demo@violetVoyage.com",
  joinedAt: "2026-01-01",
  avatar: "P",
  passwordHash: "Demo1234!"
  // plain-text for demo — never do this in production!
};
function seedUsers() {
  if (typeof localStorage === "undefined") return;
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    localStorage.setItem(USERS_KEY, JSON.stringify([DEMO_USER]));
  } else {
    const list = JSON.parse(raw);
    if (!list.find((u) => u.id === DEMO_USER.id)) {
      localStorage.setItem(USERS_KEY, JSON.stringify([DEMO_USER, ...list]));
    }
  }
}
function getUsers() {
  if (typeof localStorage === "undefined") return [DEMO_USER];
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [DEMO_USER];
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getCurrent() {
  if (typeof localStorage === "undefined") return null;
  const raw = localStorage.getItem(CURRENT_KEY);
  return raw ? JSON.parse(raw) : null;
}
function saveCurrent(user) {
  if (user) {
    localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_KEY);
  }
}
function toPublic(u) {
  const { passwordHash: _, ...pub } = u;
  return pub;
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const AuthContext = reactExports.createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    seedUsers();
    const current = getCurrent();
    setUser(current);
    setIsLoading(false);
  }, []);
  const signIn = reactExports.useCallback(
    async (email, password) => {
      setIsLoading(true);
      await delay(700);
      const users = getUsers();
      const found = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (!found) {
        setIsLoading(false);
        return { error: "No account found with that email address." };
      }
      if (found.passwordHash !== password) {
        setIsLoading(false);
        return { error: "Incorrect password. Please try again." };
      }
      const pub = toPublic(found);
      saveCurrent(pub);
      setUser(pub);
      setIsLoading(false);
      return {};
    },
    []
  );
  const signUp = reactExports.useCallback(
    async (name, email, password) => {
      setIsLoading(true);
      await delay(900);
      const users = getUsers();
      const existing = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (existing) {
        setIsLoading(false);
        return {
          error: "An account with that email already exists. Try signing in."
        };
      }
      const newUser = {
        id: `usr-${Date.now()}`,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        joinedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        avatar: name.trim()[0].toUpperCase(),
        passwordHash: password
        // demo only
      };
      saveUsers([...users, newUser]);
      const pub = toPublic(newUser);
      saveCurrent(pub);
      setUser(pub);
      setIsLoading(false);
      return {};
    },
    []
  );
  const signOut = reactExports.useCallback(() => {
    saveCurrent(null);
    setUser(null);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, isLoading, signIn, signUp, signOut }, children });
}
function useAuth() {
  const ctx = reactExports.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none mb-8 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[120px] font-semibold leading-none text-gradient-gold opacity-20 select-none", children: "404" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-semibold text-gradient-gold", children: "Lost in transit." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has set sail for somewhere else. Let us guide you back." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
          children: "Return home"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/explore",
          className: "rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5",
          children: "Browse destinations"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-xs text-muted-foreground", children: "Developer: Krishna Sangavi  ·  Violet Voyage" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass max-w-md rounded-3xl p-10 text-center shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-red-500/15 text-3xl", children: "✦" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold text-gradient-gold", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "An unexpected error occurred. You can try again or return home." }),
    error?.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 rounded-xl bg-white/5 px-3 py-2 text-xs text-red-400 font-mono", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white/5",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$d = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Violet Voyage — Travel Beyond Borders" },
      {
        name: "description",
        content: "Violet Voyage is a premium international travel platform for immersive destination discovery, curated culture, food, music, and AI-powered trip planning."
      },
      { name: "author", content: "Developer: Krishna Sangavi" },
      { property: "og:title", content: "Violet Voyage — Travel Beyond Borders" },
      {
        property: "og:description",
        content: "Discover the world through culture, food, music, and memories. Premium travel curation by Violet Voyage."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@VioletVoyage" },
      { name: "twitter:title", content: "Violet Voyage — Travel Beyond Borders" },
      {
        name: "twitter:description",
        content: "Discover the world through culture, food, music, and memories. Premium travel curation."
      }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Toaster,
      {
        position: "bottom-right",
        toastOptions: {
          style: {
            background: "oklch(0.18 0.01 250)",
            border: "1px solid oklch(0.3 0.01 250)",
            color: "oklch(0.92 0.02 60)"
          }
        }
      }
    )
  ] }) });
}
const $$splitComponentImporter$c = () => import("./tools-BLLUwEfG.mjs");
const Route$c = createFileRoute("/tools")({
  head: () => ({
    meta: [{
      title: "Smart Travel Tools — Violet Voyage"
    }, {
      name: "description",
      content: "Budget calculator, currency converter, packing checklist, weather, safety scores, and time zones — everything for your trip."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./terms-DKeW8YvE.mjs");
const Route$b = createFileRoute("/terms")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./signup-D-Q_aqj7.mjs");
const Route$a = createFileRoute("/signup")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./signin-Dnb0Lec3.mjs");
const Route$9 = createFileRoute("/signin")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./privacy-DcjOBoRC.mjs");
const Route$8 = createFileRoute("/privacy")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./journey-DhIu-fm5.mjs");
const Route$7 = createFileRoute("/journey")({
  head: () => ({
    meta: [{
      title: "My Journey — Violet Voyage"
    }, {
      name: "description",
      content: "An interactive travel diary timeline. Log your trips, memories, moods, expenses, and ratings."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./explore--K6bHSC2.mjs");
const Route$6 = createFileRoute("/explore")({
  head: () => ({
    meta: [{
      title: "Explore Destinations — Violet Voyage"
    }, {
      name: "description",
      content: "Browse curated destinations and step into each country through landscape, flavor, and sound."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-DXqDvWuC.mjs");
const Route$5 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./blog-BtYHjerI.mjs");
const Route$4 = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-S_pqeBOC.mjs");
const Route$3 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-BX73ULlV.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Violet Voyage — Travel Beyond Borders"
    }, {
      name: "description",
      content: "Discover destinations through experiences, flavors, cultures, and sounds. A cinematic travel platform."
    }, {
      property: "og:title",
      content: "Violet Voyage — Travel Beyond Borders"
    }, {
      property: "og:description",
      content: "Discover destinations through experiences, flavors, cultures, and sounds."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const japan = "/assets/japan-ug-tjJDs.jpg";
const france = "/assets/france-dpdsXtuE.jpg";
const italy = "/assets/italy-GhG0BXmF.jpg";
const korea = "/assets/korea-C8Djuiix.jpg";
const brazil = "/assets/brazil-DQfrMNvO.jpg";
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const img = (q, extra = "") => `https://loremflickr.com/1200/900/${encodeURIComponent(q)}${extra ? "," + encodeURIComponent(extra) : ""}?lock=${Math.abs(
  [...q + extra].reduce((a2, c) => a2 + c.charCodeAt(0), 0)
)}`;
const f = (food) => ({
  ...food,
  id: slug(food.name),
  image: img(food.query ?? food.name, "food")
});
const a = (attr) => ({
  ...attr,
  image: img(attr.query ?? attr.name, "landmark")
});
const countries = [
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    tagline: "Tradition Meets Tomorrow.",
    description: "Cherry blossoms drifting past neon skylines. A country where every detail is a quiet ceremony.",
    image: japan,
    rating: 4.9,
    bestSeason: "Mar–May (Cherry Blossom)",
    budget: "$$$",
    budgetLabel: "Premium",
    cities: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"],
    region: "East Asia",
    visa: "eVisa / Visa-free for many (90 days)",
    safety: 96,
    timezone: "JST (UTC+9)",
    foods: [
      f({
        name: "Sushi",
        specialty: "Edomae artistry",
        description: "Hand-pressed vinegared rice topped with the morning's catch — a centuries-old craft refined into edible minimalism.",
        ingredients: ["Shari rice", "Fresh fish", "Nori", "Wasabi", "Rice vinegar"],
        priceRange: "$$–$$$",
        diet: "Non-Vegetarian",
        spice: 1,
        calories: "~40 kcal / piece",
        popularity: 98,
        restaurants: ["Sukiyabashi Jiro (Tokyo)", "Sushi Saito (Tokyo)"],
        streetFood: ["Tsukiji Outer Market stalls", "Conveyor-belt sushi (kaiten)"]
      }),
      f({
        name: "Ramen",
        specialty: "Tonkotsu soul",
        description: "Slow-simmered pork bone broth, springy alkaline noodles, and a soft-yolk egg. Comfort in a steaming bowl.",
        ingredients: ["Pork bone broth", "Wheat noodles", "Chashu pork", "Ajitama egg", "Scallions"],
        priceRange: "$–$$",
        diet: "Non-Vegetarian",
        spice: 2,
        calories: "~500 kcal",
        popularity: 95,
        restaurants: ["Ichiran", "Afuri (Tokyo)"],
        streetFood: ["Yokocho alley ramen", "Late-night yatai stalls"]
      }),
      f({
        name: "Tempura",
        specialty: "Featherlight crunch",
        description: "Seafood and vegetables dipped in ice-cold batter and flash-fried — impossibly crisp, never heavy.",
        ingredients: ["Prawns", "Seasonal vegetables", "Cold batter", "Tentsuyu dipping sauce"],
        priceRange: "$$",
        diet: "Both",
        spice: 0,
        calories: "~350 kcal",
        popularity: 88,
        restaurants: ["Tempura Kondo (Tokyo)", "Tenju"],
        streetFood: ["Department store food halls", "Tendon counters"]
      }),
      f({
        name: "Mochi",
        specialty: "Pounded poetry",
        description: "Glutinous rice pounded into pillowy cakes, wrapped around sweet red bean or served with matcha.",
        ingredients: ["Glutinous rice", "Red bean paste", "Matcha", "Kinako"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~100 kcal / piece",
        popularity: 80,
        restaurants: ["Nakatanidou (Nara)", "Demachi Futaba (Kyoto)"],
        streetFood: ["Festival mochi stands", "Temple-town sweet shops"]
      })
    ],
    music: [
      { genre: "City Pop", mood: "Nostalgic neon nights", type: "Modern", artists: ["Tatsuro Yamashita", "Mariya Takeuchi"] },
      { genre: "J-Pop", mood: "Bright & electric", type: "Modern", artists: ["YOASOBI", "Kenshi Yonezu"] },
      { genre: "Koto & Shakuhachi", mood: "Ancient stillness", type: "Traditional", artists: ["Kimio Eto", "Goro Yamaguchi"] },
      { genre: "Matsuri Taiko", mood: "Festival thunder", type: "Festival", artists: ["Kodo"] }
    ],
    attractions: [
      a({ name: "Fushimi Inari Shrine", category: "Historical", description: "Thousands of vermilion torii gates winding up a sacred mountain.", location: "Kyoto", ticket: "Free", hours: "24 hours", bestTime: "Early morning", tip: "Hike past the first gates to escape crowds.", unesco: false, query: "torii gate kyoto" }),
      a({ name: "Mount Fuji", category: "Nature", description: "Japan's iconic snow-capped sacred volcano and climbing pilgrimage.", location: "Honshu", ticket: "Free (climb permit in season)", hours: "Climbing Jul–Sep", bestTime: "Sunrise (Goraiko)", tip: "View it clearly from Lake Kawaguchiko.", unesco: true, query: "mount fuji" }),
      a({ name: "Shibuya Crossing", category: "Nightlife", description: "The world's busiest pedestrian scramble under a wall of neon.", location: "Tokyo", ticket: "Free", hours: "24 hours", bestTime: "After dark", tip: "Watch from the Shibuya Sky deck.", query: "shibuya crossing" }),
      a({ name: "Arashiyama Bamboo Grove", category: "Hidden Gem", description: "A towering green corridor of swaying bamboo.", location: "Kyoto", ticket: "Free", hours: "24 hours", bestTime: "Sunrise", tip: "Combine with nearby Tenryu-ji temple.", query: "bamboo forest japan" })
    ],
    culture: {
      festivals: ["Hanami (Cherry Blossom)", "Gion Matsuri", "Tanabata"],
      language: "Japanese (日本語)",
      greeting: "Konnichiwa (こんにちは) with a bow",
      clothing: "Kimono & yukata for ceremonies; modern fashion in cities",
      etiquette: ["Remove shoes indoors", "No tipping", "Quiet on trains", "Bow to greet"],
      currency: "Japanese Yen (¥ / JPY)",
      religion: "Shinto & Buddhism",
      holidays: ["Golden Week", "Obon", "New Year (Shogatsu)"],
      customs: ["Gift-giving (omiyage)", "Slurping noodles is polite", "Onsen bathing rituals"]
    },
    accent: "from-pink-300/40 to-violet-500/40"
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    tagline: "The Art of Living.",
    description: "Golden hour over Parisian rooftops. Wine, light, and a centuries-old love affair with beauty.",
    image: france,
    rating: 4.8,
    bestSeason: "Apr–Jun & Sep–Oct",
    budget: "$$$",
    budgetLabel: "Premium",
    cities: ["Paris", "Nice", "Lyon", "Bordeaux"],
    region: "Western Europe",
    visa: "Schengen Visa (90 days)",
    safety: 82,
    timezone: "CET (UTC+1)",
    foods: [
      f({
        name: "Croissant",
        specialty: "Laminated perfection",
        description: "Eighty-one buttery layers folded by hand, baked until shatteringly crisp outside and cloud-soft within.",
        ingredients: ["Flour", "French butter", "Yeast", "Milk", "Sugar"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~270 kcal",
        popularity: 96,
        restaurants: ["Du Pain et des Idées (Paris)", "Cédric Grolet"],
        streetFood: ["Corner boulangeries", "Morning market bakeries"]
      }),
      f({
        name: "Coq au Vin",
        specialty: "Burgundy braise",
        description: "Rooster slow-cooked in red wine with lardons, mushrooms, and pearl onions — the taste of a French farmhouse.",
        ingredients: ["Chicken", "Red wine", "Lardons", "Mushrooms", "Pearl onions"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 1,
        calories: "~490 kcal",
        popularity: 84,
        restaurants: ["Le Coq Rico (Paris)", "Bouillon Chartier"],
        streetFood: ["Bistro lunch menus"]
      }),
      f({
        name: "Ratatouille",
        specialty: "Provençal harvest",
        description: "Sun-ripened tomato, courgette, aubergine, and pepper layered with thyme and olive oil — summer on a plate.",
        ingredients: ["Tomato", "Courgette", "Aubergine", "Bell pepper", "Herbes de Provence"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~180 kcal",
        popularity: 78,
        restaurants: ["La Petite Maison (Nice)"],
        streetFood: ["Provençal market traiteurs"]
      }),
      f({
        name: "Macaron",
        specialty: "Parisian jewel",
        description: "Delicate almond meringue shells sandwiching silky ganache. A study in color, balance, and restraint.",
        ingredients: ["Almond flour", "Egg whites", "Sugar", "Ganache filling"],
        priceRange: "$$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~90 kcal / piece",
        popularity: 90,
        restaurants: ["Ladurée", "Pierre Hermé"],
        streetFood: ["Patisserie windows"]
      })
    ],
    music: [
      { genre: "French Jazz", mood: "Smoke & velvet", type: "Modern", artists: ["Django Reinhardt", "Stéphane Grappelli"] },
      { genre: "Chanson", mood: "Romantic murmurs", type: "Traditional", artists: ["Édith Piaf", "Jacques Brel"] },
      { genre: "Café Acoustic", mood: "Sunday mornings", type: "Playlist", artists: ["Paris Combo", "Zaz"] },
      { genre: "French House", mood: "Electric Paris nights", type: "Modern", artists: ["Daft Punk", "Justice"] }
    ],
    attractions: [
      a({ name: "Eiffel Tower", category: "Historical", description: "The iron lattice icon that defines the Paris skyline.", location: "Paris", ticket: "€18–29", hours: "9:30–23:45", bestTime: "Sunset & sparkle hour", tip: "Book summit tickets weeks ahead.", query: "eiffel tower" }),
      a({ name: "Louvre Museum", category: "Historical", description: "The world's largest art museum, home to the Mona Lisa.", location: "Paris", ticket: "€22", hours: "9:00–18:00 (closed Tue)", bestTime: "Wednesday evening", tip: "Enter via Carrousel to skip pyramid queues.", unesco: true, query: "louvre museum" }),
      a({ name: "Côte d'Azur Beaches", category: "Beaches", description: "Glittering Mediterranean coves from Nice to Cannes.", location: "French Riviera", ticket: "Free (public)", hours: "Daylight", bestTime: "June", tip: "Visit Villefranche-sur-Mer for calm water.", query: "french riviera beach" }),
      a({ name: "Mont Saint-Michel", category: "UNESCO", description: "A medieval abbey rising from tidal flats like a mirage.", location: "Normandy", ticket: "€11 (abbey)", hours: "9:00–19:00", bestTime: "High tide", tip: "Stay overnight after day-trippers leave.", unesco: true, query: "mont saint michel" })
    ],
    culture: {
      festivals: ["Bastille Day", "Fête de la Musique", "Cannes Film Festival"],
      language: "French (Français)",
      greeting: "Bonjour with la bise (cheek kiss)",
      clothing: "Effortless chic; smart-casual elegance",
      etiquette: ["Greet shopkeepers", "Dine slowly", "Keep voices low", "Bread on the table, not plate"],
      currency: "Euro (€ / EUR)",
      religion: "Predominantly Catholic; secular state (laïcité)",
      holidays: ["Bastille Day (Jul 14)", "Toussaint", "Assumption"],
      customs: ["Long leisurely meals", "Wine with lunch", "August holidays"]
    },
    accent: "from-amber-300/40 to-violet-500/40"
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    tagline: "La Dolce Vita.",
    description: "Cypress-lined roads, sun-drenched stone, and meals that last the entire afternoon.",
    image: italy,
    rating: 4.9,
    bestSeason: "Apr–Jun & Sep",
    budget: "$$",
    budgetLabel: "Moderate",
    cities: ["Rome", "Florence", "Venice", "Amalfi"],
    region: "Southern Europe",
    visa: "Schengen Visa (90 days)",
    safety: 80,
    timezone: "CET (UTC+1)",
    foods: [
      f({
        name: "Pizza Napoletana",
        specialty: "Wood-fired tradition",
        description: "San Marzano tomatoes, fior di latte, and a leopard-spotted crust kissed by 900°F flame for 90 seconds.",
        ingredients: ["00 flour", "San Marzano tomato", "Fior di latte", "Basil", "Olive oil"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~270 kcal / slice",
        popularity: 97,
        restaurants: ["L'Antica Pizzeria da Michele (Naples)", "Sorbillo"],
        streetFood: ["Pizza a portafoglio (folded)", "Fried pizza fritta"],
        query: "neapolitan pizza"
      }),
      f({
        name: "Pasta Carbonara",
        specialty: "Roman classic",
        description: "Guanciale, pecorino romano, egg yolk, and black pepper — a glossy, peppery emulsion. No cream, ever.",
        ingredients: ["Spaghetti", "Guanciale", "Pecorino Romano", "Egg yolk", "Black pepper"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 1,
        calories: "~600 kcal",
        popularity: 93,
        restaurants: ["Roscioli (Rome)", "Da Enzo al 29"],
        streetFood: ["Trattoria lunch counters"],
        query: "carbonara pasta"
      }),
      f({
        name: "Risotto",
        specialty: "Creamy alchemy",
        description: "Carnaroli rice stirred patiently with broth until each grain releases its starch into silk.",
        ingredients: ["Carnaroli rice", "Broth", "Parmigiano", "Butter", "White wine"],
        priceRange: "$$",
        diet: "Both",
        spice: 0,
        calories: "~430 kcal",
        popularity: 82,
        restaurants: ["Ratanà (Milan)", "Trattoria Masuelli"],
        streetFood: ["Arancini (fried risotto balls)"],
        query: "risotto"
      }),
      f({
        name: "Gelato",
        specialty: "Velvet chill",
        description: "Less air, less fat than ice cream — denser, more intense flavor. The pistachio is non-negotiable.",
        ingredients: ["Milk", "Sugar", "Pistachio", "Fresh fruit"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~210 kcal / scoop",
        popularity: 95,
        restaurants: ["Gelateria dei Neri (Florence)", "Giolitti (Rome)"],
        streetFood: ["Gelato carts on every piazza"],
        query: "gelato"
      })
    ],
    music: [
      { genre: "Opera", mood: "Grand & timeless", type: "Traditional", artists: ["Luciano Pavarotti", "Andrea Bocelli"] },
      { genre: "Italian Pop", mood: "Coastal summers", type: "Modern", artists: ["Måneskin", "Eros Ramazzotti"] },
      { genre: "Neapolitan Folk", mood: "Tuscan evenings", type: "Regional", artists: ["Pino Daniele"] },
      { genre: "Canzone Napoletana", mood: "Mandolin romance", type: "Regional", artists: ["Roberto Murolo"] }
    ],
    attractions: [
      a({ name: "Colosseum", category: "Historical", description: "The mighty Roman amphitheatre that once held 50,000 spectators.", location: "Rome", ticket: "€18", hours: "9:00–19:00", bestTime: "Early morning", tip: "Combo ticket includes the Forum.", unesco: true, query: "colosseum rome" }),
      a({ name: "Venice Canals", category: "Hidden Gem", description: "A floating city of bridges, gondolas, and faded palazzi.", location: "Venice", ticket: "Gondola ~€80", hours: "24 hours", bestTime: "Dawn", tip: "Get lost away from San Marco for magic.", unesco: true, query: "venice canal" }),
      a({ name: "Amalfi Coast", category: "Beaches", description: "Pastel cliff-side villages above a turquoise sea.", location: "Campania", ticket: "Free", hours: "Daylight", bestTime: "May", tip: "Take the SITA bus, not a car.", query: "amalfi coast" }),
      a({ name: "Florence Duomo", category: "Historical", description: "Brunelleschi's terracotta dome crowning Renaissance Florence.", location: "Florence", ticket: "€30 (dome climb)", hours: "10:15–16:00", bestTime: "Opening", tip: "Book the dome climb online days ahead.", unesco: true, query: "florence duomo" })
    ],
    culture: {
      festivals: ["Carnevale di Venezia", "Palio di Siena", "Ferragosto"],
      language: "Italian (Italiano)",
      greeting: "Ciao / Buongiorno with warm gestures",
      clothing: "La bella figura — polished, tailored style",
      etiquette: ["Cover shoulders in churches", "No cappuccino after noon", "Dinner after 8pm"],
      currency: "Euro (€ / EUR)",
      religion: "Roman Catholic",
      holidays: ["Ferragosto (Aug 15)", "Republic Day", "Epiphany"],
      customs: ["Aperitivo hour", "Passeggiata evening stroll", "Long Sunday lunches"]
    },
    accent: "from-orange-300/40 to-violet-500/40"
  },
  {
    id: "korea",
    name: "South Korea",
    flag: "🇰🇷",
    tagline: "Where Innovation Meets Culture.",
    description: "Seoul hums under violet neon — palaces and skyscrapers, kimchi and K-pop, all in one breath.",
    image: korea,
    rating: 4.7,
    bestSeason: "Sep–Nov (Autumn foliage)",
    budget: "$$",
    budgetLabel: "Moderate",
    cities: ["Seoul", "Busan", "Jeju", "Gyeongju"],
    region: "East Asia",
    visa: "K-ETA / Visa-free for many (90 days)",
    safety: 92,
    timezone: "KST (UTC+9)",
    foods: [
      f({
        name: "Bibimbap",
        specialty: "Stone-bowl harmony",
        description: "Rice, sautéed vegetables, gochujang, and a sunny egg in a sizzling stone bowl. Mix vigorously, eat immediately.",
        ingredients: ["Rice", "Assorted namul vegetables", "Gochujang", "Egg", "Sesame oil"],
        priceRange: "$",
        diet: "Both",
        spice: 3,
        calories: "~560 kcal",
        popularity: 90,
        restaurants: ["Gogung (Seoul)", "Jeonju local houses"],
        streetFood: ["Market dosirak counters"]
      }),
      f({
        name: "Korean BBQ",
        specialty: "Tableside theater",
        description: "Marinated bulgogi and galbi grilled at the table, wrapped in lettuce with ssamjang, garlic, and rice.",
        ingredients: ["Beef short rib", "Bulgogi marinade", "Lettuce", "Ssamjang", "Garlic"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 2,
        calories: "~650 kcal",
        popularity: 96,
        restaurants: ["Maple Tree House (Seoul)", "Geumdwaeji Sikdang"],
        streetFood: ["Pojangmacha grill tents"],
        query: "korean bbq"
      }),
      f({
        name: "Tteokbokki",
        specialty: "Street-side fire",
        description: "Chewy rice cakes simmered in sweet-spicy gochujang sauce — Seoul's favorite late-night craving.",
        ingredients: ["Rice cakes", "Gochujang", "Fish cake", "Scallion", "Sugar"],
        priceRange: "$",
        diet: "Both",
        spice: 4,
        calories: "~400 kcal",
        popularity: 92,
        restaurants: ["Sindang-dong Tteokbokki Town"],
        streetFood: ["Myeongdong street carts", "Pojangmacha stalls"]
      }),
      f({
        name: "Bingsu",
        specialty: "Snow-flake dessert",
        description: "Mountains of shaved milk-ice topped with red bean, fresh fruit, and condensed milk. Summer's antidote.",
        ingredients: ["Shaved milk ice", "Red bean", "Condensed milk", "Fruit", "Tteok"],
        priceRange: "$$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~350 kcal",
        popularity: 78,
        restaurants: ["Sulbing", "Homilbat (Seoul)"],
        streetFood: ["Summer café terraces"]
      })
    ],
    music: [
      { genre: "K-Pop", mood: "High-gloss euphoria", type: "Modern", artists: ["BTS", "NewJeans", "BLACKPINK"] },
      { genre: "Korean Indie", mood: "Late-night reflection", type: "Modern", artists: ["IU", "Hyukoh"] },
      { genre: "Pansori", mood: "Ancestral storytelling", type: "Traditional", artists: ["Ahn Sook-sun"] },
      { genre: "Trot", mood: "Retro festival joy", type: "Festival", artists: ["Lim Young-woong"] }
    ],
    attractions: [
      a({ name: "Gyeongbokgung Palace", category: "Historical", description: "Joseon-era royal palace with a ceremonial guard-changing.", location: "Seoul", ticket: "₩3,000", hours: "9:00–18:00 (closed Tue)", bestTime: "Guard change 10am", tip: "Wear hanbok for free entry.", query: "gyeongbokgung palace" }),
      a({ name: "Bukchon Hanok Village", category: "Hidden Gem", description: "Lanes of traditional tile-roofed hanok houses.", location: "Seoul", ticket: "Free", hours: "Daylight (quiet hours)", bestTime: "Early morning", tip: "Be respectful — residents live here.", query: "bukchon hanok village" }),
      a({ name: "Jeju Island", category: "Nature", description: "Volcanic island of waterfalls, craters, and lava tubes.", location: "Jeju", ticket: "Varies", hours: "Daylight", bestTime: "Spring/Autumn", tip: "Hike Hallasan for sunrise.", unesco: true, query: "jeju island" }),
      a({ name: "Haeundae Beach", category: "Beaches", description: "Busan's lively crescent of sand backed by skyscrapers.", location: "Busan", ticket: "Free", hours: "24 hours", bestTime: "Summer evenings", tip: "Pair with nearby Gamcheon Culture Village.", query: "haeundae beach busan" })
    ],
    culture: {
      festivals: ["Seollal (Lunar New Year)", "Chuseok", "Boryeong Mud Festival"],
      language: "Korean (한국어)",
      greeting: "Annyeonghaseyo (안녕하세요) with a bow",
      clothing: "Hanbok for tradition; trend-setting street fashion",
      etiquette: ["Use two hands when giving/receiving", "Remove shoes indoors", "Pour elders' drinks"],
      currency: "South Korean Won (₩ / KRW)",
      religion: "Buddhism, Christianity, Confucian values",
      holidays: ["Seollal", "Chuseok", "Liberation Day"],
      customs: ["Respect for elders (nunchi)", "Communal side dishes (banchan)", "Café culture"]
    },
    accent: "from-fuchsia-400/40 to-violet-600/40"
  },
  {
    id: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    tagline: "Rhythm of the Atlantic.",
    description: "Mountains, ocean, samba in the streets. A country that moves to its own irresistible beat.",
    image: brazil,
    rating: 4.6,
    bestSeason: "Dec–Mar (Summer & Carnival)",
    budget: "$$",
    budgetLabel: "Moderate",
    cities: ["Rio de Janeiro", "São Paulo", "Salvador", "Florianópolis"],
    region: "South America",
    visa: "eVisa for some; visa-free for many (90 days)",
    safety: 64,
    timezone: "BRT (UTC−3)",
    foods: [
      f({
        name: "Feijoada",
        specialty: "Saturday ritual",
        description: "Black bean stew slow-cooked with smoked pork, served with rice, collard greens, orange, and farofa.",
        ingredients: ["Black beans", "Smoked pork", "Sausage", "Collard greens", "Farofa"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 2,
        calories: "~700 kcal",
        popularity: 91,
        restaurants: ["Casa da Feijoada (Rio)", "Bolinha (São Paulo)"],
        streetFood: ["Weekend botecos"]
      }),
      f({
        name: "Açaí Bowl",
        specialty: "Amazon energy",
        description: "Frozen açaí blended thick and topped with banana, granola, and honey — purple fuel from the rainforest.",
        ingredients: ["Açaí pulp", "Banana", "Granola", "Honey", "Guaraná syrup"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~450 kcal",
        popularity: 88,
        restaurants: ["Tropicália (Rio)"],
        streetFood: ["Beachfront açaí kiosks"],
        query: "acai bowl"
      }),
      f({
        name: "Pão de Queijo",
        specialty: "Cheesy clouds",
        description: "Tapioca-flour cheese rolls — crisp shell, impossibly stretchy inside. Best eaten warm with coffee.",
        ingredients: ["Tapioca flour", "Minas cheese", "Egg", "Milk", "Oil"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~70 kcal / piece",
        popularity: 85,
        restaurants: ["Casa do Pão de Queijo"],
        streetFood: ["Bakery padarias everywhere"],
        query: "pao de queijo"
      }),
      f({
        name: "Moqueca",
        specialty: "Coastal stew",
        description: "Fish simmered in coconut milk, dendê oil, tomato, and cilantro — the soul of Bahia in a clay pot.",
        ingredients: ["White fish", "Coconut milk", "Dendê oil", "Tomato", "Cilantro"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 2,
        calories: "~480 kcal",
        popularity: 80,
        restaurants: ["Paraíso Tropical (Salvador)"],
        streetFood: ["Bahian acarajé stands"]
      })
    ],
    music: [
      { genre: "Bossa Nova", mood: "Warm & weightless", type: "Traditional", artists: ["João Gilberto", "Antônio Carlos Jobim"] },
      { genre: "Samba", mood: "Carnival energy", type: "Festival", artists: ["Beth Carvalho", "Zeca Pagodinho"] },
      { genre: "MPB", mood: "Sun-soaked soul", type: "Modern", artists: ["Caetano Veloso", "Gilberto Gil"] },
      { genre: "Forró", mood: "Northeastern dance", type: "Regional", artists: ["Luiz Gonzaga"] }
    ],
    attractions: [
      a({ name: "Christ the Redeemer", category: "Historical", description: "The 38m Art Deco statue watching over Rio from Corcovado.", location: "Rio de Janeiro", ticket: "R$87", hours: "8:00–19:00", bestTime: "Sunrise (clear skies)", tip: "Take the cog train through Tijuca forest.", unesco: false, query: "christ the redeemer" }),
      a({ name: "Sugarloaf Mountain", category: "Nature", description: "Cable-car peaks above Guanabara Bay at golden hour.", location: "Rio de Janeiro", ticket: "R$160", hours: "8:00–21:00", bestTime: "Sunset", tip: "Buy tickets online to skip lines.", query: "sugarloaf mountain rio" }),
      a({ name: "Iguaçu Falls", category: "Nature", description: "275 thundering cascades straddling the Argentine border.", location: "Paraná", ticket: "R$100", hours: "9:00–17:00", bestTime: "Morning", tip: "Bring a poncho for the Devil's Throat.", unesco: true, query: "iguazu falls" }),
      a({ name: "Copacabana Beach", category: "Beaches", description: "4km of golden sand, beach football, and caipirinhas.", location: "Rio de Janeiro", ticket: "Free", hours: "24 hours", bestTime: "Late afternoon", tip: "Watch your belongings; travel light.", query: "copacabana beach" })
    ],
    culture: {
      festivals: ["Carnival (Carnaval)", "Festa Junina", "Réveillon (New Year)"],
      language: "Portuguese (Português)",
      greeting: "Olá / Tudo bem? with a hug or cheek kiss",
      clothing: "Bright, relaxed beachwear; Havaianas everywhere",
      etiquette: ["Arrive fashionably late", "Warm physical greetings", "Football is sacred"],
      currency: "Brazilian Real (R$ / BRL)",
      religion: "Catholic majority; vibrant Afro-Brazilian faiths",
      holidays: ["Carnival", "Independence Day (Sep 7)", "Tiradentes"],
      customs: ["Beach culture", "Churrasco barbecues", "Samba circles (roda)"]
    },
    accent: "from-emerald-300/40 to-violet-500/40"
  }
];
const $$splitComponentImporter$1 = () => import("./country._id-BYb0RAzG.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./country._id-BK4X2yFt.mjs");
const Route$1 = createFileRoute("/country/$id")({
  loader: ({
    params
  }) => {
    const country = countries.find((c) => c.id === params.id);
    if (!country) throw notFound();
    return {
      country
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.country.name ?? "Country"} — Violet Voyage`
    }, {
      name: "description",
      content: loaderData?.country.tagline ?? "Explore destinations."
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./country._id.food._foodId-yg0p_SiH.mjs");
const $$splitNotFoundComponentImporter = () => import("./country._id.food._foodId-BzYT2ZAz.mjs");
const Route = createFileRoute("/country/$id/food/$foodId")({
  loader: ({
    params
  }) => {
    const country = countries.find((c) => c.id === params.id);
    if (!country) throw notFound();
    const food = country.foods.find((f2) => f2.id === params.foodId);
    if (!food) throw notFound();
    return {
      country,
      food
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.food.name ?? "Dish"} — ${loaderData?.country.name ?? ""} — Violet Voyage`
    }, {
      name: "description",
      content: loaderData?.food.description ?? "A signature dish."
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ToolsRoute = Route$c.update({
  id: "/tools",
  path: "/tools",
  getParentRoute: () => Route$d
});
const TermsRoute = Route$b.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$d
});
const SignupRoute = Route$a.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$d
});
const SigninRoute = Route$9.update({
  id: "/signin",
  path: "/signin",
  getParentRoute: () => Route$d
});
const PrivacyRoute = Route$8.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$d
});
const JourneyRoute = Route$7.update({
  id: "/journey",
  path: "/journey",
  getParentRoute: () => Route$d
});
const ExploreRoute = Route$6.update({
  id: "/explore",
  path: "/explore",
  getParentRoute: () => Route$d
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$d
});
const BlogRoute = Route$4.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$d
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$d
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const CountryIdRoute = Route$1.update({
  id: "/country/$id",
  path: "/country/$id",
  getParentRoute: () => Route$d
});
const CountryIdFoodFoodIdRoute = Route.update({
  id: "/food/$foodId",
  path: "/food/$foodId",
  getParentRoute: () => CountryIdRoute
});
const CountryIdRouteChildren = {
  CountryIdFoodFoodIdRoute
};
const CountryIdRouteWithChildren = CountryIdRoute._addFileChildren(
  CountryIdRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  ContactRoute,
  ExploreRoute,
  JourneyRoute,
  PrivacyRoute,
  SigninRoute,
  SignupRoute,
  TermsRoute,
  ToolsRoute,
  CountryIdRoute: CountryIdRouteWithChildren
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  Route as a,
  countries as c,
  router as r,
  useAuth as u
};
