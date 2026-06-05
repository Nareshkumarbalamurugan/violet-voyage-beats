import { motion } from "framer-motion";

const links = ["Destinations", "Food", "Music", "Plan", "Map"];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex items-center gap-8 rounded-full px-6 py-3 shadow-soft">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
          <span className="font-display text-sm font-semibold tracking-wide">
            Violet Voyage
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="transition-colors hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#plan"
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          Plan
        </a>
      </nav>
    </motion.header>
  );
}