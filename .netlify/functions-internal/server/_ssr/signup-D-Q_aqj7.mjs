import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-C8Nm53OG.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { e as CircleCheck, f as CircleAlert, E as EyeOff, g as Eye, h as Check, L as LoaderCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function passwordStrength(pw) {
  let score = 0;
  const checks = {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    digit: /\d/.test(pw),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(pw)
  };
  score = Object.values(checks).filter(Boolean).length;
  const label = ["", "Weak", "Fair", "Good", "Strong", "Very strong"][score] ?? "";
  const color = score <= 1 ? "bg-red-500" : score === 2 ? "bg-orange-500" : score === 3 ? "bg-yellow-500" : score === 4 ? "bg-emerald-500" : "bg-green-400";
  return {
    score,
    label,
    color,
    checks
  };
}
function SignUpPage() {
  const navigate = useNavigate();
  const {
    signUp,
    isLoading
  } = useAuth();
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirm, setConfirm] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [agreed, setAgreed] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  const strength = passwordStrength(password);
  async function handleSubmit(e) {
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
      setTimeout(() => navigate({
        to: "/"
      }), 2200);
    }
  }
  if (success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.9
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "w-full max-w-md text-center glass rounded-3xl p-12 shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }, className: "mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-emerald-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-emerald-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold text-gradient-gold", children: "Welcome aboard!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground", children: [
        "Your account has been created, ",
        name.split(" ")[0],
        ". Redirecting you to your journey…"
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex min-h-screen items-center justify-center px-4 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-royal/10 blur-[80px]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }, className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mb-8 flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 animate-gold-pulse rounded-full bg-primary shadow-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-semibold", children: "Violet Voyage" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold text-gradient-gold", children: "Start your journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Create a free account and begin collecting travel memories." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-6 space-y-4", noValidate: true, children: [
          error && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: -8
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "flex items-start gap-2.5 rounded-2xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-foreground/70", htmlFor: "name", children: "Full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", type: "text", autoComplete: "name", value: name, onChange: (e) => setName(e.target.value), className: "input w-full", placeholder: "Priya Sharma" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-foreground/70", htmlFor: "email", children: "Email address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", type: "email", autoComplete: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "input w-full", placeholder: "you@example.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-foreground/70", htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "password", type: showPw ? "text" : "password", autoComplete: "new-password", value: password, onChange: (e) => setPassword(e.target.value), className: "input w-full pr-11", placeholder: "Minimum 8 characters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw((p) => !p), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors", "aria-label": showPw ? "Hide password" : "Show password", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
            ] }),
            password.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1 flex-1 rounded-full transition-all duration-300 ${n <= strength.score ? strength.color : "bg-white/10"}` }, n)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-xs ${strength.score <= 1 ? "text-red-400" : strength.score <= 3 ? "text-yellow-400" : "text-emerald-400"}`, children: strength.label })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-foreground/70", htmlFor: "confirm", children: "Confirm password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "confirm", type: showPw ? "text" : "password", autoComplete: "new-password", value: confirm, onChange: (e) => setConfirm(e.target.value), className: "input w-full pr-11", placeholder: "Repeat password" }),
              confirm.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute right-3 top-1/2 -translate-y-1/2 ${confirm === password ? "text-emerald-400" : "text-red-400"}`, children: confirm === password ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded border transition-colors ${agreed ? "bg-primary border-primary" : "border-white/30 bg-white/5"}`, onClick: () => setAgreed((a) => !a), role: "checkbox", "aria-checked": agreed, tabIndex: 0, onKeyDown: (e) => e.key === " " && setAgreed((a) => !a), children: agreed && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "I agree to the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "text-gold hover:underline", children: "Terms of Service" }),
              " ",
              "and",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "text-gold hover:underline", children: "Privacy Policy" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: submitting || isLoading, className: "mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60", children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
            " Creating account…"
          ] }) : "Create free account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signin", className: "text-gold font-medium hover:underline", children: "Sign in →" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
        "Developer: Krishna Sangavi  ·  Violet Voyage © ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] })
    ] })
  ] });
}
export {
  SignUpPage as component
};
