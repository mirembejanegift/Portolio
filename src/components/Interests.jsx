import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { interests } from "../data/content.js";
import { Server, Sparkles, Coins, Sprout, Cloud, Globe2 } from "lucide-react";

const iconMap = {
  server: Server,
  sparkles: Sparkles,
  coins: Coins,
  sprout: Sprout,
  cloud: Cloud,
  globe: Globe2,
};

export default function Interests() {
  return (
    <section id="interests" className="bg-mist-50 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Career Interests"
          title="Where I'm heading"
          lead="The areas I'm passionate about — and where I want my engineering work to make a difference."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, index) => {
            const Icon = iconMap[interest.icon] ?? Sparkles;
            return (
              <Reveal key={interest.title} delay={index * 70}>
                <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-base font-bold text-ink-900">{interest.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{interest.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
