# Mirembe Jane Mugeni — Personal Portfolio

A modern, fully responsive developer portfolio built with **React + Vite + Tailwind CSS v4**.

> "Building Technology. Solving Problems. Creating Impact."

## Quick start

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
portfolio/
├── index.html                  # SEO, Open Graph, fonts, JSON-LD
├── src/
│   ├── main.jsx                # Entry point
│   ├── App.jsx                 # Page composition
│   ├── index.css               # Tailwind v4 theme, tokens & shared patterns
│   ├── data/
│   │   └── content.js          # ⭐ ALL personal content — edit this file first
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Achievements.jsx
│       ├── Education.jsx
│       ├── Interests.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Reveal.jsx          # Scroll-reveal animation wrapper
│       └── SectionHeading.jsx  # Shared section header
```

## Placeholders to replace before going live

**Everything below lives in `src/data/content.js`** — one edit updates the whole site.

| Placeholder            | Where                          | Notes                                                    |
| ---------------------- | ------------------------------ | -------------------------------------------------------- |
| ~~Professional email~~ | ✅ Done                         | `mirembejanegift@gmail.com` is live                      |
| ~~LinkedIn URL~~       | ✅ Done                         | linkedin.com/in/mirembe-jane is live                     |
| Professional photo     | `profile.photo`                | Drop your picture into `public/images/profile/`, share it in chat, then set `profile.photo` |
| Project screenshots    | `projects[*].images`           | Files go in `public/images/{ugexim,bodaboda,cropxcel}/` (see `public/images/README.md`) |
| Boda Boda system links | `projects` → Boda Boda entry   | A planned system — repo/demo added only when real        |
| Other project demos/screenshots | `projects[*]`         | Same pattern — shown once provided                       |
| Site URL (Open Graph)  | `index.html` → `og:url`        | After first deployment                                   |

When a link or screenshot is filled in, the corresponding "coming soon" placeholder is
replaced automatically — no component changes needed.

## Contact form integration

The form currently validates input client-side and hands off to the visitor's own email
client via `mailto:` (see `handleSubmit` in `src/components/Contact.jsx`). This works
today with zero backend, but to receive submissions directly:

### Option A — Formspree (easiest, no server)

1. Create a form at [formspree.io](https://formspree.io) and copy your form ID.
2. In `Contact.jsx`, replace the `mailto:` handoff inside `handleSubmit` with:

```js
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setStatus("sent"); else setStatus("error");
```

### Option B — Django endpoint (matches your stack)

Expose a `POST /api/contact/` endpoint that accepts `{ name, email, subject, message }`,
validates server-side, and sends an email (e.g. via Django's `send_mail` + SMTP).
Point the `fetch` above at your API and add CSRF handling per your setup.

After either integration, update the helper note under the submit button so visitors
know the message is sent directly.

## Deployment

Any static host works:

- **Netlify / Vercel:** connect the repo, build command `npm run build`, output dir `dist`.
- **GitHub Pages:** push `dist/` to the `gh-pages` branch (or use a GH Actions workflow).

## Design notes

- Deep navy (`ink-*`) + light mist palette with blue accents; Sora display / Inter body type.
- Scroll-reveal animations via `IntersectionObserver`, disabled under `prefers-reduced-motion`.
- Semantic HTML, skip-link, labelled form fields, `:focus-visible` outlines.
- Proficiency labels are **honest by design** — Proficient / Working Knowledge / Currently
  Learning. Please keep an unjustified "Proficient" label out of the resume-linked site.
