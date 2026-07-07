# Customization Guide

Step-by-step recipes for common changes. For quick "where do I edit X" lookups, see [EditingGuide.md](EditingGuide.md) instead — this file is about *how to do* slightly bigger tasks.

## Add a new project

1. Open `src/data/portfolioData.js`.
2. Copy one object inside the `projects` array, e.g.:
   ```js
   {
     name: 'My New Project',
     stack: ['React', 'Firebase'],
     description: 'What it does, in one or two sentences.',
     links: { source: 'https://github.com/you/repo', demo: 'https://my-demo.com' },
   },
   ```
3. Paste it into the array (order = display order) and edit the fields.
4. Save. `npm run dev` will hot-reload the new card instantly — no other file needs to change, because `Projects.jsx` renders however many entries exist in the array.

## Remove a project

Delete its `{ ... }` object from the `projects` array in `portfolioData.js`. That's it.

## Add another skill

In `portfolioData.js`, find the relevant category in the `skills` array and add a string to its `items` list:
```js
{ category: 'Languages', items: ['Python', 'Java', 'Go'] }, // added Go
```
To add a whole new category, add a new object: `{ category: 'DevOps', items: ['Docker', 'Kubernetes'] }`.

## Change colors

Open `tailwind.config.js` → `theme.extend.colors.accent`. Change the three hex codes. This single-source change propagates to every button, link, and highlight that uses `accent` classes (`text-accent`, `bg-accent`, `border-accent`, etc.) across all components — you don't touch component files.

If you want to change the neutral grays/white/black theme itself (not just the accent), you'd edit the `neutral`/`white`/`black` Tailwind classes directly inside each component — those are Tailwind's built-in palette, not customized in this project, so they're used directly as `text-neutral-900` etc. throughout the components.

## Change fonts

1. Pick a new font on [Google Fonts](https://fonts.google.com).
2. In `index.html`, replace the `<link href="https://fonts.googleapis.com/css2?family=Inter...">` with the new font's embed link.
3. In `tailwind.config.js`, update `theme.extend.fontFamily.sans` so the new font name is listed first.
4. Save — the whole site (via `body { font-family }` in `index.css`) switches fonts.

## Add another page

This site is currently a single scrolling page with anchor links (`#about`, `#projects`, etc.) — there's no router. To add a true second page (e.g. a `/blog` URL):
1. `npm install react-router-dom`.
2. In `src/main.jsx`, wrap `<App />` in a `<BrowserRouter>`.
3. In `src/App.jsx`, replace the flat list of sections with `<Routes>` containing `<Route path="/" element={<HomePage />} />` and `<Route path="/blog" element={<BlogPage />} />`, where `HomePage` is basically today's `App` content.
4. Build new page components the same way existing section components are built.

This is a meaningful structural change — read [Architecture.md](Architecture.md) first to understand why the project is currently structured the way it is, so the router fits in cleanly.

## Add a blog later

Once you've added a router (above), a simple blog can start as just another array in `portfolioData.js` (title, date, excerpt, content) rendered by a `BlogPage` + `BlogPostCard` component, exactly like `projects` + `ProjectCard` today. For real blog authoring (not just editing a JS array), see [Future MERN Migration.md](Future%20MERN%20Migration.md) — that's where a database and admin UI would come in.

## Add certifications

Same pattern as projects: add an object to the `certifications` array in `portfolioData.js` — `{ name, issuer, link }`.

## Add experience

There's no separate "Experience" section yet — only "Education" (`Timeline.jsx`). To add work experience:
1. In `portfolioData.js`, add a new exported array, e.g. `export const experience = [{ company, role, period, detail }]` (same shape as `education`).
2. Copy `src/components/Timeline.jsx` to `src/components/ExperienceTimeline.jsx`, and swap its import from `education` to `experience`.
3. Add `<ExperienceTimeline />` to `App.jsx` wherever you want it to appear, and add a matching nav link in `navLinks`.

## Replace images

Put new image files in `public/` (e.g. `public/profile.jpg`, `public/project-screenshot.png`). Reference them in JSX as `/profile.jpg` (no import statement needed — anything in `public/` is served from the site root as-is).

## Replace icons

Social icons live as inline SVG path data in `src/components/Hero.jsx` (the `socialIcons` object). To swap one, find replacement path data from an icon set like [Simple Icons](https://simpleicons.org) or [Heroicons](https://heroicons.com) and paste the new `<path d="...">` value in.

## Change animations

- **Scroll-reveal behavior** (fade + slide up): edit `src/components/FadeIn.jsx` — the Tailwind classes `opacity-0 translate-y-4` (hidden state) and `duration-700` (speed).
- **Stagger timing** between elements in a section: edit the `delay={...}` values passed to `<FadeIn>` in each section component.
- **Hover effects** (card lift, etc.): these are plain Tailwind classes like `hover:-translate-y-1 hover:shadow-card` directly on the element — edit them in place in the relevant component (e.g. `ProjectCard.jsx`).

## Reorder sections

Open `src/App.jsx` — it's a flat, readable list of `<Hero />`, `<About />`, `<Timeline />`, etc. Reorder the JSX lines to reorder the sections on the page. Nothing else needs to change (each section is self-contained).
