import { ArrowUp, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 pb-8 pt-14 text-slate-400">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 font-display text-sm font-bold text-white ring-1 ring-white/20">
                {profile.initials}
              </span>
              <span className="font-display text-base font-bold text-white">
                Mirembe <span className="text-blue-400">Jane</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {profile.title}
            </p>
            <p className="mt-3 text-sm italic text-slate-400">"{profile.philosophy}"</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white/80">Explore</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Achievements", "#achievements"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-blue-400">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white/80">Connect</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#contact" className="transition-colors hover:text-blue-400">
                  <Mail size={14} aria-hidden="true" className="mr-2 inline" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
                  <Github size={14} aria-hidden="true" className="mr-2 inline" />
                  GitHub
                </a>
              </li>
              {profile.linkedinIsPlaceholder ? (
                <li>
                  <span>
                    <Linkedin size={14} aria-hidden="true" className="mr-2 inline" />
                    LinkedIn — coming soon
                  </span>
                </li>
              ) : (
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
                    <Linkedin size={14} aria-hidden="true" className="mr-2 inline" />
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <span>
                  <MapPin size={14} aria-hidden="true" className="mr-2 inline" />
                  {profile.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Designed &amp; built with care.
          </p>
          <p className="text-slate-400">I create, transform and see what others don't.</p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-blue-400/50 hover:text-blue-400"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
