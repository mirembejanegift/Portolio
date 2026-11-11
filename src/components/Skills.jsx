import { Server, Database, LayoutTemplate, Wrench, Boxes } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { skillCategories, proficiencyLevels } from "../data/content.js";

const categoryIcons = {
  backend: Server,
  databases: Database,
  frontend: LayoutTemplate,
  tools: Wrench,
  additional: Boxes,
};

/**
 * Honest proficiency styling — no skill is overstated.
 */
const levelStyles = {
  Proficient: "border-blue-200 bg-blue-50 text-blue-700",
  "Working Knowledge": "border-slate-200 bg-white text-slate-600",
  "Currently Learning": "border-amber-200 bg-amber-50 text-amber-700",
};

const levelDots = {
  Proficient: "bg-blue-500",
  "Working Knowledge": "bg-slate-400",
  "Currently Learning": "bg-amber-400",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-mist-50 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technical Skills"
          title="What I work with"
          lead="Organised honestly — proficiency reflects what I apply confidently in real projects today, not where I intend to be tomorrow."
        />

        {/* Legend */}
        <Reveal className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600">
          {Object.entries(proficiencyLevels).map(([level, meaning]) => (
            <span key={level} className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className={`h-2 w-2 rounded-full ${levelDots[level]}`} />
              <strong className="font-semibold text-slate-700">{level}</strong>
              <span className="hidden sm:inline">— {meaning}</span>
            </span>
          ))}
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] ?? Boxes;
            const featured = index === 0; // Backend first & widest
            return (
              <Reveal
                key={category.id}
                delay={index * 70}
                className={featured ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink-900">{category.title}</h3>
                      <p className="text-xs text-slate-600">{category.description}</p>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${levelStyles[skill.level]}`}
                        title={proficiencyLevels[skill.level]}
                      >
                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${levelDots[skill.level]}`} />
                        {skill.name}
                        <span className="font-normal">· {skill.level}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
