import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/content.js";
import { GraduationCap, Cloud } from "lucide-react";

export default function Education() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education & Experience"
          title="My journey so far"
          lead="Practical, project-driven training — learning by building real systems with real teams."
        />

        <div className="mx-auto max-w-3xl">
          <ol className="relative flex flex-col gap-10 border-l-2 border-slate-200 pl-8 sm:pl-10">
            {education.map((item, index) => (
              <Reveal key={item.title} as="li" delay={index * 90} className="relative">
                  {/* Timeline dot */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white sm:-left-[52px] ${
                      item.current ? "bg-blue-600 animate-pulse-dot" : "bg-blue-400"
                    }`}
                  />

                  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        {index === education.length - 1 ? (
                          <Cloud size={19} aria-hidden="true" />
                        ) : (
                          <GraduationCap size={19} aria-hidden="true" />
                        )}
                      </span>
                      {item.current && (
                        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                          Current
                        </span>
                      )}
                      <span className="rounded-full bg-mist-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display mt-4 text-lg font-bold text-ink-900">{item.title}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-blue-600">{item.organisation}</p>

                    {item.photo && (
                      <figure className="mt-4">
                        <img
                          src={item.photo}
                          alt={item.photoAlt}
                          loading="lazy"
                          className="h-64 w-full rounded-xl border border-slate-200 object-cover object-[50%_25%] sm:h-80"
                        />
                      </figure>
                    )}

                    <ul className={item.photo ? "mt-4 flex flex-col gap-2" : "mt-4 flex flex-col gap-2"}>
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
