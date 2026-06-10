import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SpotifyIcon({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34a.75.75 0 0 1-1.03.25c-2.82-1.72-6.36-2.11-10.54-1.16a.75.75 0 1 1-.33-1.46c4.56-1.04 8.49-.6 11.65 1.34.36.22.47.69.25 1.03zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.99-8.16-2.56-11.98-1.4a.94.94 0 1 1-.55-1.8c4.37-1.32 9.81-.69 13.5 1.6.44.27.58.84.32 1.29zm.13-3.41C15.27 8.4 8.5 8.17 4.87 9.29a1.12 1.12 0 1 1-.66-2.15c4.17-1.27 11.65-1 16.03 1.6a1.12 1.12 0 1 1-1.12 1.92z" }) });
}
function AppleMusicIcon({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a4.98 4.98 0 0 0-.35 1.49c-.06.534-.086 1.072-.09 1.61-.003.05-.006.1-.008.15v12.083c.003.05.006.1.01.15.013.55.04 1.1.1 1.648.145 1.34.62 2.493 1.549 3.43.904.912 2.01 1.404 3.274 1.59.515.075 1.036.103 1.558.11.017.003.033.007.05.007h12.173l.045-.007c.54-.007 1.078-.034 1.613-.107a5.35 5.35 0 0 0 2.21-.88 5.13 5.13 0 0 0 1.62-1.98c.31-.69.46-1.42.52-2.17.04-.48.057-.962.06-1.443l.003-.083V6.124zM9.792 17.67c-.042.04-.09.07-.138.1a2.35 2.35 0 0 1-1.168.32 2.38 2.38 0 0 1-2.37-2.38 2.38 2.38 0 0 1 2.37-2.38c.43 0 .832.12 1.173.32l.133.085V8.01l6.698-1.56v6.735l-.003.012v2.753l-.003.065a2.38 2.38 0 0 1-2.37 2.38 2.35 2.35 0 0 1-2.37-2.38c0-.86.46-1.613 1.148-2.03V9.47l-3.1.723v5.54a2.382 2.382 0 0 1 .003 1.937z" }) });
}
function MusicPlatforms({
  countryName,
  music
}) {
  const q = encodeURIComponent(`${countryName} music`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: [
          "Sound of ",
          countryName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-foreground/50", children: "Search on your favourite platform" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-end gap-0.5", "aria-hidden": true, children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          className: "w-1 rounded-full bg-primary",
          animate: { height: [6, 16, 9, 18, 6] },
          transition: { duration: 1.1, repeat: Infinity, delay: i * 0.15 }
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `https://open.spotify.com/search/${q}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group flex flex-col items-center gap-2 rounded-2xl bg-[#1DB954] px-4 py-5 text-black transition-transform hover:scale-[1.04] active:scale-[0.98]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SpotifyIcon, { className: "h-8 w-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Spotify" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `https://music.apple.com/us/search?term=${q}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 px-4 py-5 text-white transition-transform hover:scale-[1.04] active:scale-[0.98]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleMusicIcon, { className: "h-8 w-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Apple Music" })
          ]
        }
      )
    ] })
  ] });
}
export {
  MusicPlatforms as M
};
