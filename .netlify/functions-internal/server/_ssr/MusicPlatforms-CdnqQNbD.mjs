import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { D as Play } from "../_libs/lucide-react.mjs";
function SpotifyIcon({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34a.75.75 0 0 1-1.03.25c-2.82-1.72-6.36-2.11-10.54-1.16a.75.75 0 1 1-.33-1.46c4.56-1.04 8.49-.6 11.65 1.34.36.22.47.69.25 1.03zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.99-8.16-2.56-11.98-1.4a.94.94 0 1 1-.55-1.8c4.37-1.32 9.81-.69 13.5 1.6.44.27.58.84.32 1.29zm.13-3.41C15.27 8.4 8.5 8.17 4.87 9.29a1.12 1.12 0 1 1-.66-2.15c4.17-1.27 11.65-1 16.03 1.6a1.12 1.12 0 1 1-1.12 1.92z" }) });
}
const typeColor = {
  Traditional: "from-amber-400/60 to-rose-500/60",
  Modern: "from-violet-500/60 to-fuchsia-500/60",
  Regional: "from-emerald-400/60 to-teal-500/60",
  Festival: "from-orange-400/60 to-red-500/60",
  Playlist: "from-sky-400/60 to-indigo-500/60"
};
function MusicPlatforms({
  countryName,
  music
}) {
  const playlistQ = encodeURIComponent(`${countryName} ${music.map((m) => m.genre).join(" ")}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: [
        "Sound of ",
        countryName
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-end gap-0.5", "aria-hidden": true, children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          className: "w-1 rounded-full bg-lavender",
          animate: { height: [6, 16, 9, 18, 6] },
          transition: { duration: 1.1, repeat: Infinity, delay: i * 0.15 }
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: music.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `https://open.spotify.com/search/${encodeURIComponent(countryName + " " + m.genre)}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${typeColor[m.type] ?? typeColor.Modern}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-5 w-5 text-white transition-transform group-hover:scale-125" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold", children: m.genre }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/10 px-2 py-0.5 text-[9px] uppercase tracking-wider text-gold", children: m.type })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: m.mood }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[11px] text-foreground/60", children: m.artists.join(" · ") })
          ] })
        ]
      },
      m.genre
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `https://open.spotify.com/search/${playlistQ}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center gap-2 rounded-2xl bg-[#1DB954] px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SpotifyIcon, { className: "h-5 w-5" }),
            " Spotify"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://music.apple.com/us/search?term=${playlistQ}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]",
          children: "Apple Music"
        }
      )
    ] })
  ] });
}
export {
  MusicPlatforms as M
};
