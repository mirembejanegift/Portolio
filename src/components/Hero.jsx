import { MapPin, FolderKanban, ArrowRight, Camera, Trophy, ServerCog } from "lucide-react";
import { profile } from "../data/content.js";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-900 text-white">
      {/* Backdrop: grid texture + soft radial glows */}
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
        aria-hidden="true"
      />
      {/* Fade the grid out toward the bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-900"
        aria-hidden="true"
      />

      <div className="container-x relative flex min-h-[38rem] flex-col justify-center pb-20 pt-32 sm:pt-36 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Copy */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Open to opportunities &amp; collaborations
            </span>

            <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Building Technology.{" "}
              <span className="text-blue-400">Solving Problems.</span> Creating Impact.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {profile.heroIntro}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={15} aria-hidden="true" className="text-blue-400" />
              {profile.location}
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Python · Django · PostgreSQL</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                <FolderKanban size={17} aria-hidden="true" />
                View My Projects
              </a>
              <a href="#contact" className="btn-ghost-dark">
                Let's Connect
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Visual: photo placeholder + floating achievement cards */}
          <div className="relative mx-auto w-full max-w-sm animate-fade-in [animation-delay:200ms] pb-2 lg:max-w-none">
            <div className="relative">
              {/* Gradient ring */}
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/40 via-blue-400/10 to-transparent"
                aria-hidden="true"
              />
              {/* Photo frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-ink-800">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-ink-800 to-ink-900">
                    {/* eslint-disable-next-line jsx-a11y/aria-props */}
                    <div
                      className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 font-display text-4xl font-bold text-white shadow-2xl shadow-blue-600/30"
                      aria-hidden="true"
                    >
                      {profile.initials}
                    </div>
                    <p className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <Camera size={13} aria-hidden="true" />
                      Professional photo coming soon
                    </p>
                    <p className="max-w-[80%] text-center font-display text-sm font-semibold text-white">
                      {profile.name}
                    </p>
                  </div>
                )}
              </div>

              {/* Floating card: achievement */}
              <div className="animate-float absolute -left-4 -bottom-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-850/95 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur sm:-left-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
                  <Trophy size={20} aria-hidden="true" />
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400">GirlCode Pan-African Hackathon</p>
                  <p className="text-sm font-semibold text-white">Kampala · 2026</p>
                </div>
              </div>

              {/* Floating card: stack */}
              <div
                className="animate-float absolute -right-3 -top-5 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-ink-850/95 px-4 py-2.5 shadow-2xl shadow-black/40 backdrop-blur sm:-right-6"
                style={{ animationDelay: "1.6s" }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                  <ServerCog size={16} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-white">Python · Django</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
