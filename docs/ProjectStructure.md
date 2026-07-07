# Project Structure

A beginner's map of every file and folder in this project — why it exists, what it does, and when you'd touch it.

## Top-level files

### `index.html`
**Why it exists:** every website needs one HTML file the browser loads first. Since this is a React "Single Page Application" (SPA), it's the *only* HTML file — React swaps content in and out of it as you navigate.
**What it does:** sets the page `<title>`, loads the Inter font, and contains one empty `<div id="root"></div>` where React mounts the entire app. It also loads `src/main.jsx` as a `<script type="module">`.
**Depends on:** `src/main.jsx` (loaded directly), `public/favicon.svg` (the tab icon).
**When to edit:** changing the browser tab title, the meta description (for Google/social previews), or swapping the font loaded from Google Fonts.

### `package.json`
**Why it exists:** every Node.js/npm project has one. It lists the project's dependencies (libraries it needs) and defines command shortcuts.
**What it does:** declares `react`, `react-dom` (runtime dependencies) and `vite`, `tailwindcss`, etc. (dev-only tools). Defines `npm run dev`, `npm run build`, `npm run preview`.
**Depends on:** nothing; everything else depends on it (npm reads it to know what to install).
**When to edit:** adding a new library (e.g. `npm install some-package` updates this automatically), or adding a new script command.

### `package-lock.json`
**Why it exists:** records the *exact* version of every installed package (including sub-dependencies) so `npm install` produces identical results on any machine.
**What it does:** nothing you interact with directly — npm reads/writes it automatically.
**When to edit:** never by hand. Let `npm install` manage it.

### `vite.config.js`
**Why it exists:** Vite (the build tool) needs to know which plugins to use.
**What it does:** enables the official React plugin, which lets Vite understand JSX syntax and enables "Fast Refresh" (instant browser updates when you save a file).
**When to edit:** rarely — only if you add something like a path alias or another Vite plugin.

### `tailwind.config.js`
**Why it exists:** Tailwind CSS needs to know which files to scan for class names, and lets you customize the design system (colors, fonts, shadows, animations).
**What it does:** defines the `accent` color, the `sans` font stack, custom shadow utilities (`shadow-soft`, `shadow-card`), and the `fadeInUp` animation.
**Depends on:** none. Everything using Tailwind classes (every component) depends on this to know what those classes mean.
**When to edit:** changing the accent color, adding a new font, or adding new reusable shadow/animation utilities. See [EditingGuide.md](EditingGuide.md).

### `postcss.config.js`
**Why it exists:** Tailwind is technically a PostCSS plugin; this file wires it (and Autoprefixer, for cross-browser CSS prefixes) into the build pipeline.
**What it does:** nothing beyond plugin registration.
**When to edit:** essentially never.

### `.gitignore`
**Why it exists:** tells Git which files/folders to never track (so they don't get committed).
**What it does:** excludes `node_modules` (huge, regenerable via `npm install`), `dist` (the build output, regenerable via `npm run build`), and local env/editor files.
**When to edit:** if you add a new tool that generates local files you don't want committed (e.g. a `.env` file with secrets).

## `public/`

### `public/favicon.svg`
**Why it exists:** the small icon shown in the browser tab.
**What it does:** a simple black square with a "P" — a placeholder.
**When to edit:** replace with your own icon/logo. Anything in `public/` is copied as-is to the final build, so you can reference it directly (e.g. `public/resume.pdf` → `href="/resume.pdf"`).

## `src/` — all the actual application code

### `src/main.jsx`
**Why it exists:** the entry point — the first JavaScript that runs in the browser.
**What it does:** finds `<div id="root">` (from `index.html`) and tells React to render `<App />` into it.
**Depends on:** `src/App.jsx`, `src/index.css`.
**When to edit:** almost never — this file rarely changes once set up.

### `src/App.jsx`
**Why it exists:** the root component — the top of the component tree.
**What it does:** renders every section of the page, in order: Navbar, Hero, About, Timeline, Projects, Skills, Certifications, Contact, Footer.
**Depends on:** every file in `src/components/`.
**When to edit:** to reorder sections, remove a section, or add a brand-new section component.

### `src/index.css`
**Why it exists:** the one global stylesheet for the whole site.
**What it does:** pulls in Tailwind's generated CSS, sets the default background/text color/font on `<body>`, enables smooth scrolling, and styles selected-text color.
**When to edit:** rarely — only for truly global styling that isn't per-component.

### `src/data/portfolioData.js`
**Why it exists:** **the single source of truth for all your content** — name, bio, education, projects, skills, certifications, and nav links. Every component imports its text from here instead of hardcoding it.
**What it does:** exports plain JavaScript objects/arrays (`profile`, `about`, `education`, `projects`, `skills`, `certifications`, `navLinks`).
**Depends on:** nothing. Everything in `src/components/` depends on it.
**When to edit:** **this is the file you'll edit most often** — any time you update your bio, add a project, add a skill, or change a link. See [EditingGuide.md](EditingGuide.md).

### `src/components/` — one file per visual section

| File | Renders | Depends on |
|---|---|---|
| `FadeIn.jsx` | Not a section — a reusable wrapper that fades+slides its children into view on scroll. Used by every other component. | nothing |
| `Navbar.jsx` | Sticky top navigation bar | `data/portfolioData.js` (navLinks) |
| `Hero.jsx` | The big intro section with your name/tagline/social icons | `data/portfolioData.js` (profile), `FadeIn.jsx` |
| `About.jsx` | Bio paragraph | `data/portfolioData.js` (about), `FadeIn.jsx` |
| `Timeline.jsx` | Vertical education timeline | `data/portfolioData.js` (education), `FadeIn.jsx` |
| `Projects.jsx` | Grid layout wrapper for project cards | `data/portfolioData.js` (projects), `ProjectCard.jsx`, `FadeIn.jsx` |
| `ProjectCard.jsx` | One individual project card | receives a `project` object as a prop (from `Projects.jsx`) |
| `Skills.jsx` | Grid of skill category cards | `data/portfolioData.js` (skills), `FadeIn.jsx` |
| `Certifications.jsx` | Grid of certification cards | `data/portfolioData.js` (certifications), `FadeIn.jsx` |
| `Contact.jsx` | Email/phone call-to-action links | `data/portfolioData.js` (profile), `FadeIn.jsx` |
| `Footer.jsx` | Bottom copyright + social links | `data/portfolioData.js` (profile) |

**When to edit a component file:** only when you want to change *how* a section looks or behaves (layout, spacing, animation). If you just want to change *what text/data* it shows, edit `portfolioData.js` instead.

## `docs/` (this folder)
Documentation only — not imported by any code, safe to read/edit freely, never affects the live site.

## `dist/` (appears after running `npm run build`)
The final, production-ready HTML/CSS/JS files that get deployed. Auto-generated — never edit by hand, and it's git-ignored.

## `node_modules/` (appears after running `npm install`)
Every library your project depends on, downloaded to disk. Never edit, never commit (it's huge and regenerable).
