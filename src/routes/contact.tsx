import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const info = [
  { icon: Mail, label: "Email", value: "hello@violetvoyage.com" },
  { icon: MapPin, label: "Studio", value: "Bengaluru, Karnataka, India" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Please enter a subject.";
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const e2 = validate();
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen pb-24 pt-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-gold"
        >
          Get in touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-semibold text-gradient-gold"
        >
          We'd love<br />to hear from you.
        </motion.h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center glass rounded-3xl p-12 text-center shadow-glow"
            >
              <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-emerald-500/20">
                <CheckCircle2 className="h-10 w-10 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-semibold">Message sent!</h2>
              <p className="mt-3 text-muted-foreground">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 shadow-soft"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground/70">Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input w-full"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground/70">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input w-full"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3 w-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-medium text-foreground/70">Subject</label>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="input w-full"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle className="h-3 w-3" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-medium text-foreground/70">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input w-full resize-none"
                  placeholder="Tell us what's on your mind…"
                />
                {errors.message && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle className="h-3 w-3" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  "Send message"
                )}
              </button>
            </motion.form>
          )}

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="space-y-5"
          >
            {info.map((item) => (
              <div key={item.label} className="glass flex items-start gap-4 rounded-2xl p-5 shadow-soft">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15">
                  <item.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                  <p className="mt-0.5 font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-5 shadow-soft">
              <p className="text-xs font-medium text-muted-foreground mb-3">Developer</p>
              <p className="font-semibold text-gold">Krishna Sangavi</p>
              <p className="text-sm text-muted-foreground mt-1">
                Building Violet Voyage as a showcase of premium travel web experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
