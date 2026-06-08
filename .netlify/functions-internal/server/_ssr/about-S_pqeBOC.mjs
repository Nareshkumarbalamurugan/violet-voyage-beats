import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { G as Globe, H as Heart, r as Compass, s as Camera, l as Star } from "../_libs/lucide-react.mjs";
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
const stats = [{
  value: "50+",
  label: "Destinations"
}, {
  value: "200+",
  label: "Cultural Experiences"
}, {
  value: "1,200+",
  label: "Travel Stories"
}, {
  value: "98%",
  label: "Happy Travellers"
}];
const team = [{
  name: "Krishna Sangavi",
  role: "Founder & Developer",
  avatar: "K",
  bio: "Full-stack developer and avid traveller with a passion for building beautiful digital experiences."
}, {
  name: "Aria Nakamura",
  role: "Head of Curation",
  avatar: "A",
  bio: "Former travel journalist who curated cultural guides for 35 countries across 4 continents."
}, {
  name: "Rohan Iyer",
  role: "Design Lead",
  avatar: "R",
  bio: "Award-winning product designer obsessed with motion, typography, and luxury UI craft."
}];
const values = [{
  icon: Globe,
  title: "Authentic Discovery",
  desc: "We go beyond tourist trails to surface the soul of every destination."
}, {
  icon: Heart,
  title: "Cultural Respect",
  desc: "Every story we tell honours the local people, traditions, and ecosystems."
}, {
  icon: Compass,
  title: "Curated Precision",
  desc: "Each recommendation is hand-picked by our editorial team and local experts."
}, {
  icon: Camera,
  title: "Cinematic Storytelling",
  desc: "We believe travel is an art form best told through vivid, immersive visuals."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen pb-24 pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "mb-4 text-xs uppercase tracking-[0.3em] text-gold", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9
      }, className: "text-5xl md:text-7xl font-semibold text-gradient-gold", children: [
        "Travel beyond",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "the ordinary."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.3
      }, className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground", children: "Violet Voyage was born from a simple belief — every corner of this world holds a story worth experiencing. We are a curated travel platform that blends culture, cuisine, music, and memories into one seamless journey." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.4
      }, className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105", children: "Start Exploring" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5", children: "Get in touch" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto mt-24 max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-6 sm:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1
    }, className: "glass rounded-3xl p-6 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-semibold text-gradient-gold", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-24 max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "text-center text-3xl font-semibold", children: "What we stand for" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "glass rounded-3xl p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "mb-4 h-7 w-7 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.desc })
      ] }, v.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-24 max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "text-center text-3xl font-semibold", children: "The team behind the voyage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-3", children: team.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.12
      }, className: "glass rounded-3xl p-6 text-center shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground", children: m.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gold", children: m.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: m.bio })
      ] }, m.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
        opacity: 0
      }, whileInView: {
        opacity: 1
      }, viewport: {
        once: true
      }, className: "mt-6 text-center text-sm text-muted-foreground", children: [
        "Developer: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-medium", children: "Krishna Sangavi" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto mt-24 max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.97
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, className: "glass rounded-3xl p-12 shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "mx-auto mb-6 h-8 w-8 text-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "text-2xl font-medium leading-relaxed text-foreground/90", children: '"The world is not a problem to be solved; it is a living being to which we belong. The world is part of our own self and we are a part of its suffering wholeness."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-gold", children: "— Llewelyn Vaughan-Lee" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-20 max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold", children: "Ready to explore?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Discover destinations, plan your journey, and collect memories that last a lifetime." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105", children: "Browse Destinations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/journey", className: "rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium transition-colors hover:bg-white/5", children: "My Journey Diary" })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
