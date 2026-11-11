import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { profile, contactIntro } from "../data/content.js";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  AlertCircle,
  Info,
  ExternalLink,
} from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    // Clear the field's error as the user starts fixing it
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please add a short subject.";
    if (form.message.trim().length < 10) next.message = "Please write a message of at least 10 characters.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    // Functional handoff with no backend required: compose the message
    // in the visitor's own email client. See README → "Contact form integration"
    // to wire this up to Formspree, Django or another endpoint later.
    setStatus("sending");
    const subject = encodeURIComponent(`[Portfolio] ${form.subject.trim()}`);
    const body = encodeURIComponent(
      `Hi Mirembe,\n\n${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus("sent"), 600);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder-slate-400 transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
      errors[field] ? "border-red-400" : "border-slate-200 hover:border-slate-300"
    }`;

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            <span aria-hidden="true" className="h-px w-6 bg-blue-400/60" />
            Contact
            <span aria-hidden="true" className="h-px w-6 bg-blue-400/60" />
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {contactIntro}
          </h2>
          <p className="text-base text-slate-400">
            Whether you're a recruiter, employer, collaborator or just curious — my inbox is open.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Direct channels */}
          <Reveal className="flex flex-col gap-4">
            {/* ⚠️ Placeholder email — replace in src/data/content.js */}
            <span className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-blue-400/40">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <Mail size={19} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-bold">Email</p>
                <p className="truncate text-sm text-slate-300">{profile.email}</p>
                {profile.emailIsPlaceholder && (
                  <p className="mt-1 text-xs font-medium text-amber-400">
                    Placeholder — real email to be added
                  </p>
                )}
              </div>
            </span>

            {/* ⚠️ Placeholder LinkedIn — replace in src/data/content.js */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start gap-4 rounded-2xl border p-5 transition-colors duration-300 ${
                profile.linkedinIsPlaceholder
                  ? "cursor-default border-white/10 bg-white/5"
                  : "border-white/10 bg-white/5 hover:border-blue-400/40"
              }`}
              aria-disabled={profile.linkedinIsPlaceholder}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <Linkedin size={19} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 font-display text-sm font-bold">
                  LinkedIn
                  <ExternalLink size={12} aria-hidden="true" className="text-slate-500" />
                </p>
                <p className="truncate text-sm text-slate-300">My professional profile</p>
                {profile.linkedinIsPlaceholder && (
                  <p className="mt-1 text-xs font-medium text-amber-400">
                    Placeholder — profile link to be added
                  </p>
                )}
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-blue-400/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <Github size={19} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 font-display text-sm font-bold">
                  GitHub
                  <ExternalLink size={12} aria-hidden="true" className="text-slate-500" />
                </p>
                <p className="truncate text-sm text-slate-300">github.com/mirembejanegift</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-bold">Location</p>
                <p className="text-sm text-slate-300">{profile.location}</p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.name)}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle size={12} aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle size={12} aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-slate-200">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="What is this about?"
                  aria-invalid={Boolean(errors.subject)}
                  className={inputClass("subject")}
                />
                {errors.subject && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                    <AlertCircle size={12} aria-hidden="true" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your idea, opportunity or project…"
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputClass("message")} resize-y`}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                    <AlertCircle size={12} aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-70"
              >
                <Send size={16} aria-hidden="true" />
                {status === "sending" ? "Opening your email client…" : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                  <CheckIcon /> Your email app should have opened with the message ready to send.
                </p>
              )}

              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-slate-400">
                <Info size={13} aria-hidden="true" className="mt-0.5 shrink-0" />
                Submitting opens your own email app with everything pre-filled — no data leaves your
                device. Prefer not to leave your email? Write to me directly at {profile.email}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
