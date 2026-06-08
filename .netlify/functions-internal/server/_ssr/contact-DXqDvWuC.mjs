import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { e as CircleCheck, f as CircleAlert, L as LoaderCircle, o as Mail, M as MapPin, c as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const info = [{
  icon: Mail,
  label: "Email",
  value: "hello@violetvoyage.com"
}, {
  icon: MapPin,
  label: "Studio",
  value: "Bengaluru, Karnataka, India"
}, {
  icon: Clock,
  label: "Response time",
  value: "Within 24 hours"
}];
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Please enter a subject.";
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters.";
    return e;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen pb-24 pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "mb-4 text-xs uppercase tracking-[0.3em] text-gold", children: "Get in touch" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.9
    }, className: "text-5xl md:text-6xl font-semibold text-gradient-gold", children: [
      "We'd love",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "to hear from you."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-10 lg:grid-cols-[1fr_380px]", children: [
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, className: "flex flex-col items-center justify-center glass rounded-3xl p-12 text-center shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 grid h-20 w-20 place-items-center rounded-full bg-emerald-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-emerald-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Message sent!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Thank you for reaching out. We'll get back to you within 24 hours." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.2
      }, onSubmit: handleSubmit, className: "glass rounded-3xl p-8 shadow-soft", noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-foreground/70", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.name, onChange: (e) => setForm({
              ...form,
              name: e.target.value
            }), className: "input w-full", placeholder: "Your name" }),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-red-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
              " ",
              errors.name
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-foreground/70", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: form.email, onChange: (e) => setForm({
              ...form,
              email: e.target.value
            }), className: "input w-full", placeholder: "you@example.com" }),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-red-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
              " ",
              errors.email
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-foreground/70", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.subject, onChange: (e) => setForm({
            ...form,
            subject: e.target.value
          }), className: "input w-full", placeholder: "What's this about?" }),
          errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-red-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
            " ",
            errors.subject
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-foreground/70", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: "input w-full resize-none", placeholder: "Tell us what's on your mind…" }),
          errors.message && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-red-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
            " ",
            errors.message
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: submitting, className: "mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed", children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          " Sending…"
        ] }) : "Send message" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.35
      }, className: "space-y-5", children: [
        info.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-start gap-4 rounded-2xl p-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5 text-gold" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-medium", children: item.value })
          ] })
        ] }, item.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-3", children: "Developer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gold", children: "Krishna Sangavi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Building Violet Voyage as a showcase of premium travel web experiences." })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ContactPage as component
};
