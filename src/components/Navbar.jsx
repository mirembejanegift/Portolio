import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { profile, navLinks } from "../data/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href) => {
    const isActive = active === href.slice(1);
    const base = "text-sm font-medium transition-colors duration-200";
    const onDark = !scrolled && !open;
    if (onDark) {
      return `${base} ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`;
    }
    return `${base} ${isActive ? "text-blue-600" : "text-slate-600 hover:text-ink-900"}`;
  };

  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main navigation">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-bold transition-colors duration-300 ${
              onDark ? "bg-white/10 text-white ring-1 ring-white/20" : "bg-ink-900 text-white group-hover:bg-blue-600"
            }`}
          >
            {profile.initials}
          </span>
          <span
            className={`font-display text-base font-bold tracking-tight transition-colors duration-300 ${
              onDark ? "text-white" : "text-ink-900"
            }`}
          >
            Mirembe <span className="text-blue-700">Jane</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 lg:inline-flex ${
            onDark
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-ink-900 text-white hover:bg-blue-600"
          }`}
        >
          Let's Connect
          <ArrowRight size={15} aria-hidden="true" />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
            onDark ? "text-white hover:bg-white/10" : "text-ink-900 hover:bg-slate-100"
          }`}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-slate-200 bg-white transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[26rem] shadow-lg" : "max-h-0 border-b-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-ink-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
            >
              Let's Connect
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
