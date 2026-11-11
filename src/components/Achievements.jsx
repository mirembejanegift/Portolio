import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { achievements } from "../data/content.js";
import { Trophy, GraduationCap, BadgeCheck, Code2, Users } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  graduation: GraduationCap,
  badge: BadgeCheck,
  code: Code2,
  users: Users,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones I'm proud of"
          dark
          lead="Moments that reflect consistent growth — competition, certification and real engineering experience."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] ?? BadgeCheck;
            const highlight = index === 0; // Hackathon win gets top billing
            return (
              <Reveal key={achievement.title} delay={index * 80} className={highlight ? "sm:col-span-2" : ""}>
                <article
                  className={`group flex h-full items-start gap-4 rounded-2xl border p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${
                    highlight
                      ? "border-amber-400/30 bg-gradient-to-br from-amber-400/10 to-transparent hover:border-amber-400/50"
                      : "border-white/10 bg-white/5 hover:border-blue-400/40 hover:bg-white/[0.07]"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                      highlight ? "bg-amber-400/20 text-amber-300" : "bg-blue-500/15 text-blue-400"
                    }`}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{achievement.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{achievement.detail}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
