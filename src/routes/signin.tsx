import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/signin")({
  component: SignInPage,
});

function SignInPage() {
  const navigate = useNavigate();
  const { signIn, isLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) return setError("Email is required.");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Enter a valid email address.");
    if (!password) return setError("Password is required.");

    setSubmitting(true);
    const result = await signIn(email, password);
    setSubmitting(false);

    if (result.error) {
      setError(result.error);
    } else {
      navigate({ to: "/" });
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-20">
      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-royal/10 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 animate-gold-pulse rounded-full bg-primary shadow-glow" />
          <span className="font-display text-xl font-semibold">Violet Voyage</span>
        </Link>

        <div className="glass rounded-3xl p-8 shadow-glow">
          <h1 className="text-3xl font-semibold text-gradient-gold">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access your journey diary and saved destinations.
          </p>

          {/* Demo hint */}
          <div className="mt-5 rounded-2xl bg-gold/10 border border-gold/20 px-4 py-3 text-xs text-foreground/80">
            <span className="font-semibold text-gold">Demo account:</span>{" "}
            demo@violetVoyage.com / Demo1234!
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2.5 rounded-2xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground/70" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-medium text-foreground/70" htmlFor="password">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-gold transition-opacity hover:opacity-80"
                  onClick={() => setError("Password reset is not available in demo mode.")}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input w-full pr-11"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting || isLoading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            No account?{" "}
            <Link to="/signup" className="text-gold font-medium hover:underline">
              Create one free →
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Developer: Krishna Sangavi &nbsp;·&nbsp; Violet Voyage © {new Date().getFullYear()}
        </p>
      </motion.div>
    </main>
  );
}
