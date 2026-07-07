# Architecture

## Why the project is structured this way

Three deliberate decisions shape this codebase:

**1. One component per section.** Instead of one giant `App.jsx` with everything inline, each visual section (Hero, About, Projects, ...) is its own file. This mirrors how you'll be asked to think in any real frontend job: a page is a tree of independent, single-responsibility components, not one monolithic template. It also means you can reason about (and later modify) one section without scrolling past nine others.

**2. Content is separated from presentation.** `src/data/portfolioData.js` holds *what* to say; the components in `src/components/` hold *how* to display it. This is the same separation a database + template engine gives you in a traditional web app, just without the database yet. It's why you can rewrite your entire bio or add five projects without opening a single component file — and conversely, why a designer/developer could restyle every card without touching your words.

**3. No premature abstraction.** There's no state management library (Redux/Zustand), no router, no CMS, no backend. A single-page portfolio has no complex shared state and no dynamic routes — adding those tools now would be solving problems this project doesn't have. `FadeIn.jsx` is the *only* shared behavior extracted into a reusable component, because it's the one piece of logic (IntersectionObserver-based reveal) genuinely repeated across every section.

## How files communicate

There is exactly one data flow direction, and it's simple:

```
src/data/portfolioData.js   (plain JS objects/arrays — the data)
        │  imported by
        ▼
src/components/*.jsx        (read data, return JSX — the view)
        │  imported by
        ▼
src/App.jsx                 (assembles components in order)
        │  imported by
        ▼
src/main.jsx                 (mounts App into the DOM)
```

Data only ever flows *downward*: `portfolioData.js` doesn't know components exist, components don't modify the data, and sibling components (e.g. `Hero` and `Footer`) never talk to each other directly — they each independently import what they need from `portfolioData.js`. This is sometimes called "one-way data flow," and it's the core mental model React is built around. `ProjectCard.jsx` is the one exception worth noting: it doesn't import data itself, it *receives* a `project` object as a **prop** from `Projects.jsx` — this is how you hand data to a *reusable* component that's rendered multiple times with different content.

## Why this is a scalable structure

- **Adding content never requires touching logic.** A new project, skill, or cert is a new array entry, not new code — the rendering logic (`.map()` over the array) already handles any number of items.
- **Adding a new section never requires touching existing sections.** Because each component is self-contained (own file, own data import, own styling), dropping in a new one is additive — you add a file and one line in `App.jsx`, without risk of breaking Hero or Projects.
- **The design system is centralized.** Colors, fonts, and shadows live in `tailwind.config.js`, not scattered as magic hex codes across components. Change the accent color once, and every button/link everywhere updates.
- **It has a clear ceiling, and that's fine.** This structure comfortably scales to "bigger static portfolio" (more sections, more projects) but intentionally stops before "app with logins, a database, or dynamic per-visitor content" — because it doesn't need that yet. See below for what changes when it does.

## How a React/MERN version would be organized

The "R" in MERN (React) is already here — this project already *is* a React app; there's no rewrite required to get to React. What MERN adds is a **backend and a database behind the same React frontend**:

```
Today (static):                 MERN (full-stack):

src/data/portfolioData.js   →   MongoDB collections (projects, skills, ...)
                                       │
                                 Express REST API (GET /api/projects, POST /api/contact)
                                       │
src/components/*.jsx        →   same components, but fetch data from the API
                                 instead of importing a local JS file
```

The component tree, the Tailwind styling, and the overall page layout barely change. What changes is *where the data comes from* — a network request instead of a local `import`. This is exactly why separating data from components (decision #2 above) matters: it means this migration touches only a handful of files, not the whole codebase.

## Which parts would become React components in the future

They already are — every file in `src/components/` is already a React component. Nothing here needs to be "converted." What the MERN stack adds are *new* components that don't exist yet: things like a `ContactForm.jsx` with real form state and a submit handler (replacing the current `mailto:` link), or an `AdminDashboard.jsx` for editing projects without touching code. See [Future MERN Migration.md](Future%20MERN%20Migration.md) for the concrete roadmap.
