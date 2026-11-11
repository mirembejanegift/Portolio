import { useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/content.js";
import {
  Trophy,
  CheckCircle2,
  Lock,
  MonitorPlay,
  Github,
  Star,
  Images,
  ImagePlus,
} from "lucide-react";

function LinkButtons({ links }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.repo ? (
        <a
          href={links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline !py-2.5 text-sm"
        >
          <Github size={16} aria-hidden="true" />
          View Repository
        </a>
      ) : (
        <button type="button" disabled className="btn-disabled !py-2.5 text-sm" aria-disabled="true">
          <Lock size={15} aria-hidden="true" />
          {links.repoNote}
        </button>
      )}
      {links.demo ? (
        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2.5 text-sm">
          <MonitorPlay size={16} aria-hidden="true" />
          Live Demo
        </a>
      ) : (
        <button type="button" disabled className="btn-disabled !py-2.5 text-sm" aria-disabled="true">
          <MonitorPlay size={15} aria-hidden="true" />
          {links.demoNote}
        </button>
      )}
    </div>
  );
}

function TechChips({ technologies, dark = false }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <li
          key={tech}
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            dark ? "border-white/15 bg-white/5 text-slate-200" : "border-slate-200 bg-mist-50 text-slate-600"
          }`}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

/**
 * Project image gallery. Renders real screenshots once they are supplied in
 * `project.images`; until then it shows a clear "supply this image" placeholder
 * that names the exact folder to drop files into.
 */
function ProjectGallery({ project, dark = false, tall = false }) {
  const [active, setActive] = useState(0);
  const images = project.images ?? [];
  const folder = "public" + project.imagesPath; // e.g. public/images/ugexim

  if (images.length === 0) {
    // ── Placeholder: image not supplied yet ──────────────────────────
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-dashed ${
          dark ? "border-white/15 bg-ink-800" : "border-slate-300 bg-mist-100"
        } ${tall ? "h-44 sm:h-52" : "h-36 sm:h-44"}`}
      >
        <div
          className={`pointer-events-none absolute inset-0 ${
            dark ? "bg-gradient-to-br from-ink-800 to-ink-900" : "bg-gradient-to-br from-mist-100 to-mist-200"
          }`}
          aria-hidden="true"
        />
        <ImagePlus size={22} aria-hidden="true" className={`relative ${dark ? "text-slate-500" : "text-slate-400"}`} />
        <p className={`relative text-xs font-medium ${dark ? "text-slate-500" : "text-slate-600"}`}>
          {project.name} screenshots coming soon
        </p>
        <p className={`relative text-[10px] ${dark ? "text-slate-600" : "text-slate-500"}`}>
          Drop your real screenshots into <code className="font-semibold">{folder}</code>
        </p>
      </div>
    );
  }

  // ── Real gallery: main image + thumbnail strip ────────────────────
  const setActiveSafe = (i) => setActive((a) => (a + i + images.length) % images.length);
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative overflow-hidden rounded-2xl border ${
          dark ? "border-white/10 bg-ink-800" : "border-slate-200 bg-mist-100"
        } ${tall ? "h-44 sm:h-52" : "h-36 sm:h-44"}`}
      >
        <img
          key={project.imagesPath + images[active]}
          src={`${project.imagesPath}/${images[active]}`}
          alt={`${project.name} — screenshot ${active + 1} of ${images.length}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setActiveSafe(-1)}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2.5 py-1.5 text-sm font-bold text-white backdrop-blur transition hover:bg-black/70"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setActiveSafe(1)}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2.5 py-1.5 text-sm font-bold text-white backdrop-blur transition hover:bg-black/70"
            >
              ›
            </button>
            <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
              {active + 1}/{images.length}
            </span>
          </>
        )}
      </div>
      {images.length > 1 && (
        <ul className="flex gap-2 overflow-x-auto pb-1" aria-label={`${project.name} screenshots`}>
          {images.map((file, i) => (
            <li key={file} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={active === i}
                className={`h-12 w-20 overflow-hidden rounded-lg border-2 transition-all ${
                  active === i
                    ? "border-blue-500"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={`${project.imagesPath}/${file}`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I'm building"
          lead="A selection of systems I've designed and built — focused on backend engineering, real workflows and practical impact."
        />

        {/* ---------- Featured project: UGExim ---------- */}
        <Reveal>
          <article className="relative overflow-hidden rounded-3xl bg-ink-900 text-white shadow-2xl shadow-ink-900/20">
            <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:p-12">
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    <Star size={12} aria-hidden="true" />
                    Featured project
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Ongoing
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    Role: {featured.role}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-2xl font-bold sm:text-3xl">{featured.name}</h3>
                <p className="font-display text-sm font-semibold text-blue-400">{featured.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{featured.description}</p>

                <div className="mt-6">
                  <TechChips technologies={featured.technologies} dark />
                </div>

                <div className="mt-auto pt-8">
                  <LinkButtons links={featured.links} />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <ProjectGallery project={featured} dark tall />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
                    My contributions
                  </h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                    {featured.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---------- Other projects ---------- */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {others.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/5">
                <div className="mb-4 flex flex-wrap items-center gap-2.5">
                  {project.achievement && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 py-1.5 text-xs font-bold text-ink-900 shadow-md shadow-amber-400/30">
                      <Trophy size={13} aria-hidden="true" />
                      {project.achievement}
                    </span>
                  )}
                  {project.status && !project.achievement && (
                    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                      {project.status}
                    </span>
                  )}
                  {project.role && (
                    <span className="chip">Role: {project.role}</span>
                  )}
                </div>

                <ProjectGallery project={project} />

                <h3 className="font-display mt-5 text-xl font-bold text-ink-900">{project.name}</h3>
                <p className="text-sm font-semibold text-blue-600">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>

                {project.highlights && (
                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {project.highlightsLabel ?? "Project highlights"}
                    </h4>
                    <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle2 size={14} aria-hidden="true" className="mt-0.5 shrink-0 text-blue-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-5">
                  <TechChips technologies={project.technologies} />
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  <LinkButtons links={project.links} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Honesty note */}
        <Reveal delay={120}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-600">
            <Images size={13} aria-hidden="true" />
            Repository links, live demos and screenshots are added as they become publicly available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
