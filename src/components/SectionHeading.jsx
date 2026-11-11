import Reveal from "./Reveal.jsx";

/**
 * Consistent section header: small blue eyebrow, large display title
 * and an optional supporting line of copy.
 */
export default function SectionHeading({ eyebrow, title, lead, dark = false, align = "center" }) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <Reveal className={`flex flex-col gap-3 ${alignClass} mb-12 sm:mb-16`}>
      <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-blue-400" : "text-blue-700"}`}>
        <span aria-hidden="true" className="h-px w-6 bg-blue-500/60" />
        {eyebrow}
        <span aria-hidden="true" className="h-px w-6 bg-blue-500/60" />
      </span>
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`max-w-2xl text-base leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"} ${align === "left" ? "" : "mx-auto"}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
