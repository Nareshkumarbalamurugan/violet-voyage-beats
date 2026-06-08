import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Twitter, Youtube, Globe, Send } from "lucide-react";

const cols = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", to: "/explore" },
      { label: "Food & Cuisine", to: "/explore" },
      { label: "Music & Culture", to: "/explore" },
      { label: "Attractions", to: "/explore" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Travel Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
      { label: "Join Us", to: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Feedback", to: "/contact" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.trim()) return setError("Please enter your email.");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Enter a valid email address.");
    setSent(true);
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-40" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow animate-gold-pulse" />
              <span className="font-display text-lg font-semibold">Violet Voyage</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A cinematic travel companion — discover the world through culture,
              food, music, and memories.
            </p>

            <form onSubmit={handleNewsletter} className="mt-6 max-w-sm" noValidate>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold">
                Join the newsletter
              </p>
              {sent ? (
                <p className="rounded-2xl bg-emerald-500/15 px-4 py-3 text-sm text-emerald-300">
                  ✦ You're on the list. See you out there.
                </p>
              ) : (
                <>
                  <div className="glass flex items-center gap-2 rounded-full p-1.5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-transparent px-4 text-sm focus:outline-none"
                      aria-label="Email for newsletter"
                    />
                    <button
                      type="submit"
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                      aria-label="Subscribe to newsletter"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  {error && (
                    <p className="mt-1.5 text-xs text-red-400">{error}</p>
                  )}
                </>
              )}
            </form>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Violet Voyage. Travel beyond borders.
            </p>
            <p className="text-xs text-muted-foreground">
              Developer:{" "}
              <span className="text-gold font-medium">Krishna Sangavi</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="h-4 w-4" />
              <select
                aria-label="Language"
                className="bg-transparent text-sm focus:outline-none [&>option]:bg-background"
              >
                <option>English</option>
                <option>Français</option>
                <option>日本語</option>
                <option>Português</option>
              </select>
            </div>

            <div className="flex gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
