import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X, User, BookOpen, Wrench, LogOut, ChevronDown } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useAuth } from "@/hooks/use-auth";

const navLinks = [
  { label: "Explore", to: "/explore" },
  { label: "Globe", to: "/globe" },
  { label: "Journey", to: "/journey" },
  { label: "Tools", to: "/tools" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
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

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`glass flex items-center gap-6 rounded-full px-5 py-2.5 shadow-soft transition-all ${
          scrolled ? "scale-[0.98]" : ""
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="h-2 w-2 animate-gold-pulse rounded-full bg-gold shadow-glow" />
          <span className="font-display text-sm font-semibold tracking-wide">Violet Voyage</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="transition-colors hover:text-foreground [&.active]:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Auth — desktop */}
          {user ? (
            /* User avatar + dropdown */
            <div className="relative hidden sm:block" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen((o) => !o)}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 pl-1.5 pr-3 py-1 text-sm hover:bg-white/10 transition-colors"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {user.avatar}
                </span>
                <span className="max-w-[80px] truncate text-xs font-medium">
                  {user.name.split(" ")[0]}
                </span>
                <ChevronDown className={`h-3 w-3 text-muted-foreground transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="glass absolute right-0 top-10 w-52 rounded-2xl p-1.5 shadow-glow"
                  >
                    <div className="border-b border-white/10 px-3 py-2 mb-1">
                      <p className="text-xs font-semibold truncate">{user.name}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                    </div>
                    {[
                      { icon: BookOpen, label: "My Journey", to: "/journey" },
                      { icon: Wrench, label: "Travel Tools", to: "/tools" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm hover:bg-white/8 transition-colors"
                      >
                        <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                        {item.label}
                      </Link>
                    ))}
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors mt-1"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      Sign out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Sign in / Sign up */
            <div className="hidden sm:flex items-center gap-2">
              <Link
                to="/signin"
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                Sign up
              </Link>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden grid h-8 w-8 place-items-center rounded-full border border-white/10"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass absolute top-20 w-[88%] max-w-sm rounded-3xl p-4 shadow-soft md:hidden"
          >
            {/* User banner in mobile */}
            {user && (
              <div className="mb-3 flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {user.avatar}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
              </div>
            )}

            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile auth buttons */}
            <div className="mt-3 border-t border-white/10 pt-3">
              {user ? (
                <button
                  onClick={() => { handleSignOut(); setOpen(false); }}
                  className="flex w-full items-center gap-2 rounded-2xl px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <LogOut className="h-4 w-4" /> Sign out
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/signin"
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-white/20 px-4 py-3 text-center text-sm font-medium hover:bg-white/5 transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Create free account
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
