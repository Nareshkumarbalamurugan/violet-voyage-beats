import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2, Check } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/signup")({
  component: SignUpPage,
});

/* ─── Password strength ───────────────────────────────────── */
function passwordStrength(pw: string) {
  let score = 0;
  const checks = {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    digit: /\d/.test(pw),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(pw),
  };
  score = Object.values(checks).filter(Boolean).length;
  const label = ["", "Weak", "Fair", "Good", "Strong", "Very strong"][score] ?? "";
  const color =
    score <= 1 ? "bg-red-500" :
    score === 2 ? "bg-orange-500" :
    score === 3 ? "bg-yellow-500" :
    score === 4 ? "bg-emerald-500" :
    "bg-green-400";
  return { score, label, color, checks };
}

function SignUpPage() {
  const navigate = useNavigate();
  const { signUp, isLoading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const strength = passwordStrength(password);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim()) return setError("Please enter your name.");
    if (name.trim().length < 2) return setError("Name must be at least 2 characters.");
    if (!email.trim()) return setError("Email is required.");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Enter a valid email address.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (strength.score < 2) return setError("Please choose a stronger password.");
    if (password !== confirm) return setError("Passwords do not match.");
    if (!agreed) return setError("Please agree to the Terms of Service.");

    setSubmitting(true);
    const result = await signUp(name, email, password);
    setSubmitting(false);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(true);
      setTimeout(() => navigate({ to: "/" }), 2200);
    }
  }

  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md text-center glass rounded-3xl p-12 shadow-glow"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-emerald-500/20"
          >
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold text-gradient-gold">Welcome aboard!</h2>
          <p className="mt-3 text-muted-foreground">
            Your account has been created, {name.split(" ")[0]}. Redirecting you to your journey…
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-20">
      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-royal/10 blur-[80px]" />
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
          <h1 className="text-3xl font-semibold text-gradient-gold">Start your journey</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Create a free account and begin collecting travel memories.
          </p>

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

            {/* Name */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground/70" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full"
                placeholder="Priya Sharma"
              />
            </div>

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
              <label className="mb-1.5 block text-xs font-medium text-foreground/70" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input w-full pr-11"
                  placeholder="Minimum 8 characters"
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

              {/* Strength bar */}
              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          n <= strength.score ? strength.color : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`mt-1 text-xs ${strength.score <= 1 ? "text-red-400" : strength.score <= 3 ? "text-yellow-400" : "text-emerald-400"}`}>
                    {strength.label}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground/70" htmlFor="confirm">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirm"
                  type={showPw ? "text" : "password"}
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="input w-full pr-11"
                  placeholder="Repeat password"
                />
                {confirm.length > 0 && (
                  <span className={`absolute right-3 top-1/2 -translate-y-1/2 ${confirm === password ? "text-emerald-400" : "text-red-400"}`}>
                    {confirm === password
                      ? <Check className="h-4 w-4" />
                      : <AlertCircle className="h-4 w-4" />
                    }
                  </span>
                )}
              </div>
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3 text-sm">
              <div
                className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded border transition-colors ${
                  agreed ? "bg-primary border-primary" : "border-white/30 bg-white/5"
                }`}
                onClick={() => setAgreed((a) => !a)}
                role="checkbox"
                aria-checked={agreed}
                tabIndex={0}
                onKeyDown={(e) => e.key === " " && setAgreed((a) => !a)}
              >
                {agreed && <Check className="h-3 w-3 text-primary-foreground" />}
              </div>
              <span className="text-muted-foreground">
                I agree to the{" "}
                <Link to="/terms" className="text-gold hover:underline">Terms of Service</Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-gold hover:underline">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting || isLoading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Creating account…
                </>
              ) : (
                "Create free account"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signin" className="text-gold font-medium hover:underline">
              Sign in →
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
