import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  Search, Compass, ArrowRight, X, MapPin,
  Thermometer, Wallet, Plane, Globe2,
} from "lucide-react";
import { countries } from "@/data/countries";

export const Route = createFileRoute("/globe")({
  component: GlobePage,
});

/* ─── Markers ─────────────────────────────────────────────────── */
const MARKERS = [
  { id: "japan",  name: "Japan",       flag: "🇯🇵", lat:  35.6762, lng:  139.6503, color: "#38bdf8", ring: "rgba(56,189,248,",  region: "Asia"          },
  { id: "france", name: "France",      flag: "🇫🇷", lat:  48.8566, lng:    2.3522, color: "#a78bfa", ring: "rgba(167,139,250,", region: "Europe"        },
  { id: "italy",  name: "Italy",       flag: "🇮🇹", lat:  41.9028, lng:   12.4964, color: "#34d399", ring: "rgba(52,211,153,",  region: "Europe"        },
  { id: "korea",  name: "South Korea", flag: "🇰🇷", lat:  37.5665, lng:  126.9780, color: "#f472b6", ring: "rgba(244,114,182,", region: "Asia"          },
  { id: "brazil", name: "Brazil",      flag: "🇧🇷", lat: -15.7801, lng:  -47.9292, color: "#4ade80", ring: "rgba(74,222,128,",  region: "South America" },
];

type Marker = (typeof MARKERS)[0];

/* ─── Animated star field ─────────────────────────────────────── */
function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, oklch(0.18 0.07 240 / 0.55), transparent 65%), oklch(0.07 0.03 245)",
        }}
      />
      {/* Layer 1 – slow drift */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: Array.from({ length: 60 }, (_, i) => {
            const x = (i * 37 + 7) % 100;
            const y = (i * 53 + 13) % 100;
            const s = i % 3 === 0 ? "1.5px" : "1px";
            return `radial-gradient(${s} ${s} at ${x}% ${y}%, rgba(255,255,255,${0.3 + (i % 4) * 0.15}), transparent)`;
          }).join(", "),
        }}
      />
      {/* Layer 2 – medium drift */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{ backgroundPosition: ["0% 0%", "-100% 80%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: Array.from({ length: 30 }, (_, i) => {
            const x = (i * 71 + 29) % 100;
            const y = (i * 43 + 61) % 100;
            return `radial-gradient(1px 1px at ${x}% ${y}%, rgba(186,230,253,0.6), transparent)`;
          }).join(", "),
        }}
      />
      {/* Slow-pulsing nebula glows */}
      <motion.div
        className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.07), transparent 70%)" }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}

/* ─── Search box ──────────────────────────────────────────────── */
function SearchOverlay({
  onSelect,
}: {
  onSelect: (m: Marker) => void;
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const results = q.trim().length > 0
    ? MARKERS.filter(
        (m) =>
          m.name.toLowerCase().includes(q.toLowerCase()) ||
          m.region.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  // Close on outside click
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-md">
      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3 shadow-glow ring-1 ring-sky-500/20 transition-all focus-within:ring-sky-400/50"
      >
        <Search className="h-4 w-4 flex-shrink-0 text-sky-400" />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search countries, regions…"
          className="w-full bg-transparent text-sm placeholder:text-white/35 text-white focus:outline-none"
        />
        <AnimatePresence>
          {q && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              onClick={() => { setQ(""); setOpen(false); }}
              className="text-white/40 hover:text-white/80 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl shadow-glow z-50"
          >
            {results.map((m, i) => (
              <motion.button
                key={m.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  onSelect(m);
                  setQ("");
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-white/8 group"
              >
                <span className="text-xl">{m.flag}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{m.name}</p>
                  <p className="text-xs text-white/45">{m.region}</p>
                </div>
                <div
                  className="h-2 w-2 rounded-full opacity-70"
                  style={{ backgroundColor: m.color, boxShadow: `0 0 6px ${m.color}` }}
                />
                <ArrowRight className="h-3.5 w-3.5 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </motion.div>
        )}
        {open && q.trim() && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl px-5 py-4 text-sm text-white/50 z-50"
          >
            No destinations found for "<span className="text-white/80">{q}</span>"
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Country detail card (floating overlay) ──────────────────── */
function DetailCard({
  marker,
  onClose,
}: {
  marker: Marker;
  onClose: () => void;
}) {
  const data = countries.find((c) => c.id === marker.id);

  return (
    <motion.div
      key={marker.id}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="w-full max-w-sm overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.7)]"
      style={{
        background: "rgba(6,14,30,0.92)",
        backdropFilter: "blur(24px)",
        border: `1px solid ${marker.color}35`,
        boxShadow: `0 0 40px ${marker.color}18`,
      }}
    >
      {/* Hero image */}
      {data?.image && (
        <div className="relative h-44 overflow-hidden">
          <motion.img
            src={data.image}
            alt={marker.name}
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,14,30,0.95)] via-black/30 to-transparent" />
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white/70 backdrop-blur-sm transition-all hover:bg-black/80 hover:text-white hover:scale-110"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          {/* Flag + region */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="text-3xl drop-shadow">{marker.flag}</span>
            <span
              className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
              style={{ background: marker.color + "25", color: marker.color, border: `1px solid ${marker.color}40` }}
            >
              {marker.region}
            </span>
          </div>
        </div>
      )}

      <div className="p-5">
        <h2 className="text-2xl font-semibold text-white">{marker.name}</h2>
        <p className="mt-1 text-sm text-white/60 leading-snug">{data?.tagline}</p>

        {/* Stats grid */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[
            { icon: <Thermometer className="h-3 w-3" />, label: "Best season", val: data?.bestSeason },
            { icon: <Wallet className="h-3 w-3" />,      label: "Budget",      val: data?.budgetLabel },
            { icon: <MapPin className="h-3 w-3" />,      label: "Capital",     val: data?.cities[0] },
            { icon: <Plane className="h-3 w-3" />,       label: "Visa",        val: data?.visa },
          ].map((s) => s.val && (
            <div key={s.label} className="rounded-xl px-3 py-2" style={{ background: marker.color + "10" }}>
              <div className="flex items-center gap-1 mb-0.5" style={{ color: marker.color }}>
                {s.icon}
                <span className="text-[10px] uppercase tracking-wider opacity-70">{s.label}</span>
              </div>
              <p className="text-xs font-semibold text-white/90">{s.val}</p>
            </div>
          ))}
        </div>

        {/* Foods */}
        {data?.foods && (
          <div className="mt-4">
            <p className="mb-2 text-[10px] uppercase tracking-widest text-white/35">Must-try</p>
            <div className="flex flex-wrap gap-1.5">
              {data.foods.slice(0, 4).map((f) => (
                <motion.span
                  key={f.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                  style={{ background: marker.color + "18", color: marker.color }}
                >
                  {f.name}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <Link
          to="/country/$id"
          params={{ id: marker.id }}
          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: `linear-gradient(135deg, ${marker.color}ee, ${marker.color}88)` }}
        >
          <Globe2 className="h-4 w-4" />
          Explore {marker.name}
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
function GlobePage() {
  const globeRef  = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [GlobeGL, setGlobeGL] = useState<any>(null);
  const [hovered, setHovered]   = useState<Marker | null>(null);
  const [selected, setSelected] = useState<Marker | null>(null);
  const [size, setSize] = useState({ w: 900, h: 900 });

  /* Dynamic import */
  useEffect(() => {
    import("react-globe.gl").then((m) => setGlobeGL(() => m.default));
  }, []);

  /* Resize */
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([e]) => {
      setSize({ w: e.contentRect.width, h: e.contentRect.height });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  /* Init controls */
  useEffect(() => {
    if (!globeRef.current || !GlobeGL) return;
    const t = setTimeout(() => {
      const c = globeRef.current.controls();
      c.autoRotate      = true;
      c.autoRotateSpeed = 0.5;
      c.enableZoom      = true;
      c.minDistance     = 130;
      c.maxDistance     = 580;
    }, 700);
    return () => clearTimeout(t);
  }, [GlobeGL]);

  const flyTo = useCallback((m: Marker) => {
    if (!globeRef.current) return;
    globeRef.current.controls().autoRotate = false;
    globeRef.current.pointOfView({ lat: m.lat, lng: m.lng, altitude: 1.6 }, 1400);
  }, []);

  const handleSelect = useCallback((m: Marker) => {
    setSelected(m);
    flyTo(m);
  }, [flyTo]);

  const handleClose = useCallback(() => {
    setSelected(null);
    if (globeRef.current) globeRef.current.controls().autoRotate = true;
  }, []);

  /* HTML label */
  const buildLabel = useCallback((d: object) => {
    const m = d as Marker;
    const el = document.createElement("div");
    el.style.cssText = "pointer-events:none;transform:translate(-50%,-140%);display:flex;flex-direction:column;align-items:center;gap:3px;";
    el.innerHTML = `
      <div style="background:rgba(6,14,30,0.88);backdrop-filter:blur(14px);border:1px solid ${m.color}55;border-radius:999px;padding:4px 11px;font-size:12px;font-family:inherit;font-weight:700;color:#fff;white-space:nowrap;box-shadow:0 0 16px ${m.color}55;display:flex;align-items:center;gap:5px;">
        <span style="font-size:15px">${m.flag}</span>
        <span>${m.name}</span>
      </div>
      <div style="width:2px;height:14px;background:linear-gradient(to bottom,${m.color},transparent);border-radius:99px;box-shadow:0 0 8px ${m.color};"></div>
    `;
    return el;
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[oklch(0.07_0.03_245)]">
      <StarField />

      {/* ── Fullscreen globe ── */}
      <div ref={containerRef} className="fixed inset-0 z-0" style={{ top: 0 }}>
        {!GlobeGL && (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              {/* Orbital loader */}
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 rounded-full border border-sky-500/20 animate-[spin_3s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border border-sky-400/30 animate-[spin_2s_linear_infinite_reverse]" />
                <div className="absolute inset-4 rounded-full border border-sky-300/40 animate-[spin_1.2s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe2 className="h-6 w-6 text-sky-400 animate-pulse" />
                </div>
              </div>
              <p className="text-sm tracking-widest uppercase text-white/40">Loading globe…</p>
            </div>
          </div>
        )}

        {GlobeGL && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <GlobeGL
              ref={globeRef}
              width={size.w}
              height={size.h}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              atmosphereColor="rgba(56,189,248,0.55)"
              atmosphereAltitude={0.2}
              /* Rings */
              ringsData={MARKERS}
              ringColor={(d: Marker) => (t: number) => `${d.ring}${Math.max(0, 1 - t)})`}
              ringMaxRadius={4.5}
              ringPropagationSpeed={1.8}
              ringRepeatPeriod={800}
              ringAltitude={0.005}
              /* Points */
              pointsData={MARKERS}
              pointLat="lat"
              pointLng="lng"
              pointColor="color"
              pointRadius={(d: Marker) => d.id === selected?.id ? 0.9 : 0.55}
              pointAltitude={0.025}
              /* Labels */
              htmlElementsData={MARKERS}
              htmlLat="lat"
              htmlLng="lng"
              htmlAltitude={0.09}
              htmlElement={buildLabel}
              /* Arcs */
              arcsData={MARKERS.map((m, i) => ({
                startLat: m.lat, startLng: m.lng,
                endLat: MARKERS[(i + 2) % MARKERS.length].lat,
                endLng: MARKERS[(i + 2) % MARKERS.length].lng,
                color: [m.color + "99", MARKERS[(i + 2) % MARKERS.length].color + "99"],
              }))}
              arcColor="color"
              arcAltitude={0.28}
              arcStroke={0.5}
              arcDashLength={0.38}
              arcDashGap={0.12}
              arcDashAnimateTime={3200}
              /* Interaction */
              onPointClick={(p: Marker) => handleSelect(p)}
              onPointHover={(p: Marker | null) => setHovered(p)}
            />
          </motion.div>
        )}
      </div>

      {/* ── UI overlay (above globe) ── */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none" style={{ minHeight: "100svh" }}>

        {/* Top bar */}
        <div className="pointer-events-auto w-full px-4 pt-24 flex flex-col items-center gap-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.p
              className="mb-2 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-sky-400/90"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Compass className="h-3 w-3" />
              Interactive World Globe
            </motion.p>
            <h1 className="text-4xl font-semibold md:text-6xl text-gradient-gold drop-shadow-[0_2px_30px_rgba(56,189,248,0.3)]">
              Explore the Globe
            </h1>
          </motion.div>

          {/* Search box */}
          <SearchOverlay onSelect={handleSelect} />

          {/* Hint pill */}
          <AnimatePresence>
            {!selected && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.2 }}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-xs text-white/40 backdrop-blur-sm"
              >
                ✦ Spin &amp; click a glowing marker — or search above
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Hover tooltip — bottom center */}
        <div className="pointer-events-none mb-36 flex items-end justify-center px-4">
          <AnimatePresence>
            {hovered && hovered.id !== selected?.id && (
              <motion.div
                key={hovered.id}
                initial={{ opacity: 0, y: 14, scale: 0.94 }}
                animate={{ opacity: 1, y: 0,  scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.94 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="rounded-2xl border px-6 py-3 text-center backdrop-blur-2xl shadow-glow"
                style={{
                  background: "rgba(6,14,30,0.82)",
                  borderColor: hovered.color + "45",
                  boxShadow: `0 0 30px ${hovered.color}20`,
                }}
              >
                <p className="text-[10px] uppercase tracking-widest text-white/40">{hovered.region}</p>
                <p className="text-lg font-bold text-white">{hovered.flag} {hovered.name}</p>
                <p className="mt-0.5 text-xs" style={{ color: hovered.color }}>Click to explore →</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detail card — fixed bottom-right on desktop, bottom-center on mobile */}
        <div className="pointer-events-auto fixed bottom-8 right-6 z-30 w-[min(100vw-3rem,22rem)] lg:bottom-10 lg:right-10">
          <AnimatePresence>
            {selected && (
              <DetailCard marker={selected} onClose={handleClose} />
            )}
          </AnimatePresence>
        </div>

        {/* Country dot legend — bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="pointer-events-auto fixed bottom-8 left-6 z-30 flex flex-col gap-2 lg:bottom-10 lg:left-10"
        >
          {MARKERS.map((m, i) => (
            <motion.button
              key={m.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + i * 0.08 }}
              onClick={() => handleSelect(m)}
              className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-xl transition-all hover:scale-105 hover:brightness-125"
              style={{
                background: m.color + "14",
                borderColor: m.color + "35",
                color: m.color,
              }}
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: m.color }}
                animate={{ boxShadow: [`0 0 4px ${m.color}`, `0 0 10px ${m.color}`, `0 0 4px ${m.color}`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              {m.flag} {m.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
