# Bishal De — Portfolio

**Software Development Engineer at Twilio** · Full-Stack · ML / Gen-AI · DevOps & Observability

[![Live site](https://img.shields.io/badge/Live_site-bishalde.vercel.app-111111?style=for-the-badge&logo=vercel&logoColor=white)](https://bishalde.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-bishalde-111111?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bishalde)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-bishalde-111111?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bishalde/)
[![Email](https://img.shields.io/badge/Email-itsbishalde@gmail.com-111111?style=for-the-badge&logo=gmail&logoColor=white)](mailto:itsbishalde@gmail.com)

My personal portfolio: an editorial, monochrome design with a warm orange accent, built with Next.js 15, React 19, Tailwind CSS v4 and Framer Motion. It is fully responsive across phones, tablets and desktops.

---

## Features

- **Editorial hero**: grayscale portrait, oversized name, an interactive *Stack* list with a gradient marquee row, floating tech cards per category, company logos and glossy social "bubbles" with a *Book a Call* CTA.
- **Technologies grid**: 31 tools with brand-coloured icons, category filters and a slow dual marquee.
- **Projects list**: hover a row for a cursor-following preview card; projects with a live URL open in a new tab and carry a *Live* badge.
- **Experience timeline** with official company logos (Twilio, Nokia, PwC, Reflow Technologies).
- **About, Services, Education, Awards, Languages, CTA and Contact** sections, all in the same editorial style.
- **Contact form** with underlined inputs, posting to `/api/contact`.
- **Footer** with a closing CTA, link columns, back-to-top button and a fitted gradient wordmark.
- **Responsive**: hamburger menu below `lg`, touch-friendly tap targets, no horizontal scroll at 375px.
- **SEO**: metadata, `robots` and `sitemap` routes, and a web manifest.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router, Turbopack dev server), React 19 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (`@theme` tokens in `app/globals.css`) |
| Animation | [Framer Motion 12](https://motion.dev) (shared layouts, springs, in-view reveals) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (Simple Icons, Tabler, Font Awesome) |
| Fonts | Inter, Inter Tight (headings), DM Sans, Geist via `next/font` |
| Hosting | [Vercel](https://vercel.com), Node.js **24.x** |

## Getting started

**Prerequisite:** Node.js 24 (pinned in `package.json` → `engines.node`).

```bash
git clone https://github.com/bishalde/bishalde.github.io.git
cd bishalde.github.io
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

> **Tip:** stop `npm run dev` before running `npm run build`. Both write to `.next/`, and the running dev server breaks if a build overwrites it.

## Project structure

```
app/
├── layout.js            # Fonts, metadata, theme colour
├── page.js              # Section order
├── globals.css          # Colour tokens, marquee / bubble / tab utilities
├── data.js              # ← All portfolio content lives here
├── api/contact/route.js # Contact form endpoint
├── components/          # Navbar, Footer, Section, Arrow, CompanyLogo, TechIcon, …
└── sections/            # Hero, About, Services, Skills, Projects, Experience,
                         # Education, Achievements, Languages, CTA, Contact
public/
├── bishal.jpg           # Hero portrait
├── Bishal_Resume.pdf    # Linked from the navbar, hero and footer
└── logos/               # PwC and Reflow logo files
```

## Customising

- **Content**: edit `app/data.js`. It holds the roles, skills, experience, projects (add `link` to show the *Live* badge), education, scholarships, awards, languages and services.
- **Hero floating cards**: the `featured` map in `app/sections/Hero.jsx` controls which tools appear per category.
- **Icons**: add a tool's icon and brand colour to `iconMap` in `app/components/TechIcon.jsx`.
- **Company logos**: `app/components/CompanyLogo.jsx` (react-icons or a file in `public/logos/`).
- **Colours**: the CSS variables at the top of `app/globals.css` (`--background`, `--primary`, `--muted`, …).
- **Contact form**: `app/api/contact/route.js` currently validates and logs messages. Connect it to an email provider or database to receive them.

## Deployment

The site deploys to Vercel from this repository, and every pull request gets a preview deployment. The Node.js version comes from `engines.node` in `package.json` (24.x). If a build reports an unsupported Node version, check **Project Settings → Build & Deployment → Node.js Version** as well.

---

<sub>Designed & built by Bishal De.</sub>
