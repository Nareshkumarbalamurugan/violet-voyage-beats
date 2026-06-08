import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { MapPin, Compass, Star, ArrowRight } from "lucide-react";
import { countries } from "@/data/countries";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/globe")({
  component: GlobePage,
});

/* ─── Country map data ───────────────────────────────────────── */
const MARKERS = [
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    lat: 35.6762,
    lng: 139.6503,
    color: "#38bdf8",       /* sky blue  */
    ringColor: "rgba(56,189,248,",
    label: "Asia",
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    lat: 48.8566,
    lng: 2.3522,
    color: "#a78bfa",       /* violet    */
    ringColor: "rgba(167,139,250,",
    label: "Europe",
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    lat: 41.9028,
    lng: 12.4964,
    color: "#34d399",       /* emerald   */
    ringColor: "rgba(52,211,153,",
    label: "Europe",
  },
  {
    id: "korea",
    name: "South Korea",
    flag: "🇰🇷",
    lat: 37.5665,
    lng: 126.9780,
    color: "#f472b6",       /* pink      */
    ringColor: "rgba(244,114,182,",
    label: "Asia",
  },
  {
    id: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    lat: -15.7801,
    lng: -47.9292,
    color: "#4ade80",       /* green     */
    ringColor: "rgba(74,222,128,",
    label: "South America",
  },
];

type Marker = (typeof MARKERS)[0];

/* ─── Page ───────────────────────────────────────────────────── */
function GlobePage() {
  const navigate = useNavigate();
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [GlobeGL, setGlobeGL] = useState<any>(null);
  const [hovered, setHovered] = useState<Marker | null>(null);
  const [selected, setSelected] = useState<Marker | null>(null);
  const [size, setSize] = useState({ w: 800, h: 800 });
  const [ready, setReady] = useState(false);

  /* ── Dynamic import (browser-only, SSR-safe) ── */
  useEffect(() => {
    import("react-globe.gl").then((m) => {
      setGlobeGL(() => m.default);
    });
  }, []);

  /* ── Resize observer ── */
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: width, h: height });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  /* ── Initial camera + autorotate ── */
  useEffect(() => {
    if (!globeRef.current || !GlobeGL) return;
    const timer = setTimeout(() => {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.6;
      globeRef.current.controls().enableZoom = true;
      globeRef.current.controls().minDistance = 150;
      globeRef.current.controls().maxDistance = 600;
      setReady(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [GlobeGL]);

  /* ── Fly to country on select ── */
  const flyTo = useCallback((marker: Marker) => {
    if (!globeRef.current) return;
    globeRef.current.controls().autoRotate = false;
    globeRef.current.pointOfView(
      { lat: marker.lat, lng: marker.lng, altitude: 1.8 },
      1200
    );
  }, []);

  /* ── HTML label builder ── */
  const buildLabel = useCallback((d: object) => {
    const m = d as Marker;
    const el = document.createElement("div");
    el.style.cssText = `
      pointer-events: none;
      transform: translate(-50%, -130%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
    `;
    el.innerHTML = `
      <div style="
        background: rgba(10,20,40,0.85);
        backdrop-filter: blur(12px);
        border: 1px solid ${m.color}55;
        border-radius: 999px;
        padding: 4px 10px;
        font-size: 12px;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 600;
        color: #fff;
        white-space: nowrap;
        box-shadow: 0 0 12px ${m.color}44;
        display: flex;
        align-items: center;
        gap: 5px;
      ">
        <span style="font-size:14px">${m.flag}</span>
        <span>${m.name}</span>
      </div>
      <div style="
        width: 2px;
        height: 12px;
        background: ${m.color};
        border-radius: 99px;
        box-shadow: 0 0 6px ${m.color};
      "></div>
    `;
    return el;
  }, []);

  const countryData = (id: string) => countries.find((c) => c.id === id);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[oklch(0.08_0.03_245)]">
      {/* Stars background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.20 0.06 240 / 0.5), transparent 70%), oklch(0.08 0.03 245)",
        }}
      />
      {/* Tiny star dots */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 10% 15%, #fff, transparent), radial-gradient(1px 1px at 30% 40%, #e0f2fe, transparent), radial-gradient(1.5px 1.5px at 55% 8%, #fff, transparent), radial-gradient(1px 1px at 75% 25%, #bae6fd, transparent), radial-gradient(1px 1px at 88% 60%, #fff, transparent), radial-gradient(1px 1px at 20% 75%, #e0f2fe, transparent), radial-gradient(1.5px 1.5px at 65% 85%, #fff, transparent), radial-gradient(1px 1px at 42% 55%, #bae6fd, transparent), radial-gradient(1px 1px at 92% 12%, #fff, transparent), radial-gradient(1px 1px at 5% 90%, #e0f2fe, transparent)",
        }}
      />

      {/* Header */}
      <div className="relative z-20 px-6 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-sky-400">
            <Compass className="h-3.5 w-3.5" />
            Interactive World Map
          </p>
          <h1 className="text-5xl font-semibold md:text-7xl text-gradient-gold leading-tight">
            Explore the Globe
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Spin the globe, click a glowing marker, and step into any destination.
          </p>
        </motion.div>
      </div>

      {/* Globe + side panel */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 pb-24 pt-6 lg:flex-row lg:items-start lg:gap-0">
        {/* Globe canvas */}
        <div
          ref={containerRef}
          className="relative w-full max-w-3xl flex-shrink-0 lg:w-[65%]"
          style={{ height: "min(80vw, 680px)" }}
        >
          {!GlobeGL && (
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full border-2 border-sky-500/30 border-t-sky-400 animate-spin" />
                <p className="text-sm text-muted-foreground">Loading globe…</p>
              </div>
            </div>
          )}

          {GlobeGL && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full"
            >
              <GlobeGL
                ref={globeRef}
                width={size.w}
                height={size.h}
                backgroundColor="rgba(0,0,0,0)"
                /* Earth texture */
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                /* Atmosphere */
                atmosphereColor="rgba(56,189,248,0.6)"
                atmosphereAltitude={0.18}
                /* Pulsing rings */
                ringsData={MARKERS}
                ringColor={(d: Marker) => (t: number) =>
                  `${d.ringColor}${Math.max(0, 1 - t)})`
                }
                ringMaxRadius={4}
                ringPropagationSpeed={1.6}
                ringRepeatPeriod={900}
                ringAltitude={0.005}
                /* Glow points */
                pointsData={MARKERS}
                pointLat="lat"
                pointLng="lng"
                pointColor="color"
                pointRadius={0.55}
                pointAltitude={0.02}
                pointsMerge={false}
                /* HTML labels */
                htmlElementsData={MARKERS}
                htmlLat="lat"
                htmlLng="lng"
                htmlAltitude={0.08}
                htmlElement={buildLabel}
                /* Arcs between markers — decorative */
                arcsData={MARKERS.map((m, i) => ({
                  startLat: m.lat,
                  startLng: m.lng,
                  endLat: MARKERS[(i + 2) % MARKERS.length].lat,
                  endLng: MARKERS[(i + 2) % MARKERS.length].lng,
                  color: [m.color, MARKERS[(i + 2) % MARKERS.length].color],
                }))}
                arcColor="color"
                arcAltitude={0.25}
                arcStroke={0.4}
                arcDashLength={0.4}
                arcDashGap={0.15}
                arcDashAnimateTime={3500}
                /* Interaction */
                onPointClick={(point: Marker) => {
                  setSelected(point);
                  flyTo(point);
                }}
                onPointHover={(point: Marker | null) => setHovered(point)}
              />
            </motion.div>
          )}

          {/* Hover tooltip */}
          <AnimatePresence>
            {hovered && !selected && (
              <motion.div
                key={hovered.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-3 text-center shadow-glow"
                style={{ borderColor: hovered.color + "40" }}
              >
                <p className="text-xs text-muted-foreground">{hovered.label}</p>
                <p className="text-lg font-semibold">
                  {hovered.flag} {hovered.name}
                </p>
                <p className="mt-0.5 text-xs text-sky-400">Click to explore →</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Side panel */}
        <div className="w-full lg:w-[35%] lg:pl-8 lg:pt-8">
          {/* Country detail card (selected) */}
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass overflow-hidden rounded-3xl shadow-glow"
                style={{ borderColor: selected.color + "40" }}
              >
                {/* Country image */}
                {countryData(selected.id)?.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={countryData(selected.id)!.image}
                      alt={selected.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-4xl">{selected.flag}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelected(null);
                        if (globeRef.current) {
                          globeRef.current.controls().autoRotate = true;
                        }
                      }}
                      className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white/80 hover:bg-black/70 transition-colors"
                    >
                      ✕ Close
                    </button>
                  </div>
                )}

                <div className="p-6">
                  <p
                    className="text-xs uppercase tracking-[0.2em]"
                    style={{ color: selected.color }}
                  >
                    {selected.label}
                  </p>
                  <h2 className="mt-1 text-3xl font-semibold">{selected.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {countryData(selected.id)?.tagline}
                  </p>

                  {/* Quick stats */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    {[
                      { label: "Best season", value: countryData(selected.id)?.bestSeason },
                      { label: "Budget", value: countryData(selected.id)?.budgetLabel },
                      { label: "Capital", value: countryData(selected.id)?.cities[0] },
                      { label: "Visa", value: countryData(selected.id)?.visa },
                    ].map((stat) => stat.value && (
                      <div key={stat.label} className="rounded-xl bg-white/5 px-3 py-2">
                        <p className="text-muted-foreground">{stat.label}</p>
                        <p className="font-medium text-foreground">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Top foods */}
                  <div className="mt-4">
                    <p className="mb-2 text-xs text-muted-foreground uppercase tracking-wider">
                      Must-try foods
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {countryData(selected.id)?.foods.slice(0, 3).map((f) => (
                        <span
                          key={f.id}
                          className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                          style={{ background: selected.color + "20", color: selected.color }}
                        >
                          {f.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/country/$id"
                    params={{ id: selected.id }}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: `linear-gradient(135deg, ${selected.color}, ${selected.color}99)` }}
                  >
                    Explore {selected.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ) : (
              /* Country list (idle) */
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="mb-4 text-sm text-muted-foreground">
                  <MapPin className="inline h-3.5 w-3.5 mr-1" />
                  {MARKERS.length} destinations on the globe
                </p>
                <div className="space-y-3">
                  {MARKERS.map((m, i) => (
                    <motion.button
                      key={m.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => { setSelected(m); flyTo(m); }}
                      className="w-full glass flex items-center gap-4 rounded-2xl px-4 py-3.5 text-left shadow-soft transition-all hover:scale-[1.02]"
                      style={{ borderColor: m.color + "30" }}
                    >
                      <span className="text-2xl">{m.flag}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                      <div
                        className="h-2 w-2 rounded-full animate-pulse"
                        style={{ backgroundColor: m.color, boxShadow: `0 0 8px ${m.color}` }}
                      />
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 rounded-2xl bg-sky-500/10 border border-sky-500/20 px-4 py-3 text-xs text-sky-300"
                >
                  💡 Click a glowing dot on the globe or a country card to explore
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {MARKERS.map((m) => (
              <button
                key={m.id}
                onClick={() => { setSelected(m); flyTo(m); }}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all hover:scale-105"
                style={{
                  background: m.color + "18",
                  border: `1px solid ${m.color}40`,
                  color: m.color,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: m.color }}
                />
                {m.flag} {m.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
