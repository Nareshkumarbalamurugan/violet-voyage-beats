import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Only show the intro once per session
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("vv-loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDone(true);
      try {
        sessionStorage.setItem("vv-loaded", "1");
      } catch {
        /* ignore */
      }
    }, 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="absolute inset-0 bg-aurora opacity-70" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              className="h-16 w-16 rounded-full border-2 border-white/10 border-t-gold"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-2xl font-semibold text-gradient-violet"
            >
              Violet Voyage
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
            >
              Curating your world
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
