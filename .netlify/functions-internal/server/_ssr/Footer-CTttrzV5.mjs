import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-CUbQLGxF.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { $ as Sun, a0 as Moon, o as ChevronDown, B as BookOpen, a1 as Wrench, a2 as LogOut, X, a3 as Menu, a4 as Send, G as Globe, a5 as Instagram, a6 as Twitter, a7 as Youtube } from "../_libs/lucide-react.mjs";
function useTheme() {
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const stored = typeof localStorage !== "undefined" && localStorage.getItem("vv-theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("light", stored === "light");
    }
  }, []);
  const toggle = reactExports.useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light", next === "light");
      try {
        localStorage.setItem("vv-theme", next);
      } catch {
      }
      return next;
    });
  }, []);
  return { theme, toggle };
}
const navLinks = [
  { label: "Explore", to: "/explore" },
  { label: "Globe", to: "/globe" },
  { label: "Journey", to: "/journey" },
  { label: "Tools", to: "/tools" }
];
function Navbar() {
  const { theme, toggle } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [userMenuOpen, setUserMenuOpen] = reactExports.useState(false);
  const userMenuRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    function handler(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  function handleSignOut() {
    signOut();
    setUserMenuOpen(false);
    navigate({ to: "/" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      className: "fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: `glass flex items-center gap-6 rounded-full px-5 py-2.5 shadow-soft transition-all ${scrolled ? "scale-[0.98]" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-gold-pulse rounded-full bg-gold shadow-glow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold tracking-wide", children: "Violet Voyage" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-6 text-sm text-muted-foreground", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  className: "transition-colors hover:text-foreground [&.active]:text-foreground",
                  children: l.label
                }
              ) }, l.label)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: toggle,
                    "aria-label": "Toggle theme",
                    className: "grid h-8 w-8 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5",
                    children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
                  }
                ),
                user ? (
                  /* User avatar + dropdown */
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden sm:block", ref: userMenuRef, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => setUserMenuOpen((o) => !o),
                        className: "flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 pl-1.5 pr-3 py-1 text-sm hover:bg-white/10 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-6 w-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground", children: user.avatar }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[80px] truncate text-xs font-medium", children: user.name.split(" ")[0] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3 w-3 text-muted-foreground transition-transform ${userMenuOpen ? "rotate-180" : ""}` })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: userMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: -6, scale: 0.97 },
                        animate: { opacity: 1, y: 0, scale: 1 },
                        exit: { opacity: 0, y: -6, scale: 0.97 },
                        transition: { duration: 0.18 },
                        className: "glass absolute right-0 top-10 w-52 rounded-2xl p-1.5 shadow-glow",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/10 px-3 py-2 mb-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold truncate", children: user.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: user.email })
                          ] }),
                          [
                            { icon: BookOpen, label: "My Journey", to: "/journey" },
                            { icon: Wrench, label: "Travel Tools", to: "/tools" }
                          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Link,
                            {
                              to: item.to,
                              onClick: () => setUserMenuOpen(false),
                              className: "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm hover:bg-white/8 transition-colors",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                                item.label
                              ]
                            },
                            item.label
                          )),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              onClick: handleSignOut,
                              className: "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors mt-1",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
                                "Sign out"
                              ]
                            }
                          )
                        ]
                      }
                    ) })
                  ] })
                ) : (
                  /* Sign in / Sign up */
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/signin",
                        className: "rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5",
                        children: "Sign in"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/signup",
                        className: "rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105",
                        children: "Sign up"
                      }
                    )
                  ] })
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpen((o) => !o),
                    "aria-label": "Menu",
                    className: "md:hidden grid h-8 w-8 place-items-center rounded-full border border-white/10",
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            transition: { duration: 0.2 },
            className: "glass absolute top-20 w-[88%] max-w-sm rounded-3xl p-4 shadow-soft md:hidden",
            children: [
              user && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground", children: user.avatar }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: user.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: user.email })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-1", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "block rounded-2xl px-4 py-3 text-sm hover:bg-white/5",
                  children: l.label
                }
              ) }, l.label)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 border-t border-white/10 pt-3", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    handleSignOut();
                    setOpen(false);
                  },
                  className: "flex w-full items-center gap-2 rounded-2xl px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                    " Sign out"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/signin",
                    onClick: () => setOpen(false),
                    className: "block rounded-2xl border border-white/20 px-4 py-3 text-center text-sm font-medium hover:bg-white/5 transition-colors",
                    children: "Sign in"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/signup",
                    onClick: () => setOpen(false),
                    className: "block rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]",
                    children: "Create free account"
                  }
                )
              ] }) })
            ]
          }
        ) })
      ]
    }
  );
}
const cols = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", to: "/explore" },
      { label: "Food & Cuisine", to: "/explore" },
      { label: "Music & Culture", to: "/explore" },
      { label: "Attractions", to: "/explore" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Travel Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
      { label: "Join Us", to: "/about" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Feedback", to: "/contact" }
    ]
  }
];
function Footer() {
  const [email, setEmail] = reactExports.useState("");
  const [sent, setSent] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  function handleNewsletter(e) {
    e.preventDefault();
    setError("");
    if (!email.trim()) return setError("Please enter your email.");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Enter a valid email address.");
    setSent(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden border-t border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-aurora opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-primary shadow-glow animate-gold-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold", children: "Violet Voyage" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-muted-foreground", children: "A cinematic travel companion — discover the world through culture, food, music, and memories." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleNewsletter, className: "mt-6 max-w-sm", noValidate: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-xs uppercase tracking-[0.2em] text-gold", children: "Join the newsletter" }),
            sent ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-2xl bg-emerald-500/15 px-4 py-3 text-sm text-emerald-300", children: "✦ You're on the list. See you out there." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-2 rounded-full p-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    placeholder: "your@email.com",
                    className: "w-full bg-transparent px-4 text-sm focus:outline-none",
                    "aria-label": "Email for newsletter"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105",
                    "aria-label": "Subscribe to newsletter",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                  }
                )
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs text-red-400", children: error })
            ] })
          ] })
        ] }),
        cols.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: col.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: col.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.to,
              className: "transition-colors hover:text-foreground",
              children: link.label
            }
          ) }, link.label)) })
        ] }, col.title))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 text-center sm:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Violet Voyage. Travel beyond borders."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Developer:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-medium", children: "Krishna Sangavi" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                "aria-label": "Language",
                className: "bg-transparent text-sm focus:outline-none [&>option]:bg-background",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "English" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Français" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "日本語" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Português" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://instagram.com",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Instagram",
                className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://twitter.com",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Twitter / X",
                className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://youtube.com",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "YouTube",
                className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Footer as F,
  Navbar as N
};
