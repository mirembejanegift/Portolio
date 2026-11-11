import { Quote, Compass, Music2, Users, Plane, Trophy, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { profile, about } from "../data/content.js";

const beyondCodeIcons = [Plane, Users, Music2, Trophy];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title={profile.aboutTitle}
          lead="A young software developer from Uganda, passionate about technology, innovation and continuous learning."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Story */}
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-5">
              {about.paragraphs.map((text, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  {text}
                </p>
              ))}
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-4">
              <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-ink-900">
                <HeartHandshake size={16} aria-hidden="true" className="text-blue-600" />
                {about.beyondCodeLabel}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {about.beyondCode.map((item, i) => {
                  const Icon = beyondCodeIcons[i % beyondCodeIcons.length];
                  return (
                    <li
                      key={item}
                      className="chip transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
                    >
                      <Icon size={13} aria-hidden="true" className="mr-1.5 text-blue-500" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <p className="border-l-4 border-blue-500 pl-5 font-display text-lg font-semibold leading-relaxed text-ink-900 sm:text-xl">
                {about.ambition}
              </p>
            </Reveal>
          </div>

          {/* Side: philosophy + brand */}
          <div className="flex flex-col gap-6">
            <Reveal delay={100}>
              <figure className="relative overflow-hidden rounded-3xl bg-ink-900 p-8 text-white shadow-xl shadow-ink-900/10">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-600/20 blur-2xl"
                  aria-hidden="true"
                />
                <Quote size={28} aria-hidden="true" className="text-blue-400" />
                <blockquote className="font-display mt-4 text-xl font-semibold leading-snug">
                  "{profile.philosophy}"
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-300">My personal philosophy</figcaption>
              </figure>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-3xl border border-slate-200 bg-mist-50 p-8">
                <div className="flex items-center gap-3">
                  <Compass size={20} aria-hidden="true" className="text-blue-600" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-900">
                    My personal brand
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {profile.tagline}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
