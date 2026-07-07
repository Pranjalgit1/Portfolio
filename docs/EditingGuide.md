# Editing Guide

Everything you'll realistically want to change, and exactly where to change it. For **almost everything**, you only need to edit one file: **`src/data/portfolioData.js`**.

## My name

**File:** `src/data/portfolioData.js`
**Section:** `profile.name`
```js
export const profile = {
  name: 'Pranjal Chamoli', // <- change this
  ...
```
**After changing:** updates the Hero heading and the Footer copyright line automatically (both import `profile` from this file). Also update `index.html`'s `<title>` tag manually if you want the browser tab to match.

## Profile image

There is currently no profile photo in the design (it follows a minimal, photo-less style like Linear/Vercel). To add one:
1. Put your image file in `public/`, e.g. `public/profile.jpg`.
2. In `src/components/Hero.jsx`, add an `<img src="/profile.jpg" alt="Pranjal Chamoli" className="w-32 h-32 rounded-full object-cover" />` above the `<FadeIn>` blocks.
**After changing:** the image appears in the Hero section. Any file placed in `public/` is served from the site root (`/profile.jpg`), no import needed.

## About section

**File:** `src/data/portfolioData.js`
**Section:** the `about` template string
```js
export const about = `I'm a Computer Science undergraduate...`
```
**After changing:** the paragraph in `src/components/About.jsx` updates automatically — that component just displays this string, it doesn't contain any of the text itself.

## Skills

**File:** `src/data/portfolioData.js`
**Section:** the `skills` array
```js
export const skills = [
  { category: 'Languages', items: ['Python', 'Java', ...] },
  ...
]
```
- Add a skill: add a string to an `items` array.
- Add a new category: add a new `{ category: '...', items: [...] }` object to the array.
**After changing:** `src/components/Skills.jsx` renders however many category cards exist — no limit, the grid reflows automatically.

## Technologies (per-project tech tags)

**File:** `src/data/portfolioData.js`
**Section:** each project's `stack` array, e.g.
```js
{
  name: 'TradeX — Stock Trading Platform',
  stack: ['React', 'Node.js', 'Express', 'MongoDB'], // <- edit this array
  ...
}
```

## Projects

**File:** `src/data/portfolioData.js`
**Section:** the `projects` array. Each project is one object:
```js
{
  name: 'Project Name',
  stack: ['Tech1', 'Tech2'],
  description: 'One or two sentences.',
  links: { source: 'https://github.com/you/repo', demo: 'https://your-demo.com' }, // demo is optional
}
```
- **Add a project:** copy an existing object, edit its fields, add it to the array.
- **Remove a project:** delete its object from the array.
- **Reorder projects:** reorder the objects in the array.
**After changing:** `src/components/Projects.jsx` and `ProjectCard.jsx` re-render the grid automatically — no other file needs touching.

## Social links (GitHub / LinkedIn / LeetCode / Email)

**File:** `src/data/portfolioData.js`
**Section:** `profile.links` and `profile.email`
```js
links: {
  github: 'https://github.com/pranjalgit1',
  linkedin: 'https://linkedin.com/in/your-handle',
  leetcode: 'https://leetcode.com/your-handle',
},
email: 'pranjalchamoli99@gmail.com',
```
**After changing:** updates the Hero social icons, the Footer links, and the Contact section's email button — all three read from this one object.

## Resume

There's no resume download link yet. To add one:
1. Put your PDF in `public/`, e.g. `public/resume.pdf`.
2. Add a button anywhere, e.g. in `src/components/Hero.jsx`:
   ```jsx
   <a href="/resume.pdf" download className="...">Download Resume</a>
   ```
**After changing:** clicking the link downloads the PDF directly — no backend needed, since `public/` files are served as static assets.

## Contact details

**File:** `src/data/portfolioData.js` → `profile.email`. See "Social links" above — same field.

## Theme colors

**File:** `tailwind.config.js`
**Section:** `theme.extend.colors.accent`
```js
colors: {
  accent: {
    DEFAULT: '#3B5BFD', // main accent — links, buttons, highlights
    light: '#5B7CFF',
    dark: '#2A44D6',
  },
},
```
**After changing:** every `text-accent`, `bg-accent`, `border-accent` class across all components picks up the new color automatically — you don't need to touch individual components.

## Fonts

**File:** `index.html` (which font is loaded) + `tailwind.config.js` (which font Tailwind's `font-sans` maps to).
1. In `index.html`, change the Google Fonts `<link>` URL to a different font family.
2. In `tailwind.config.js`, update `theme.extend.fontFamily.sans` to list the new font name first.
**After changing:** since `src/index.css` sets `body { font-family: ... }` using the same stack, the whole site switches fonts.

## Icons

**File:** `src/components/Hero.jsx`
**Section:** the `socialIcons` object at the top of the file — each key holds raw SVG `<path>` data.
To swap an icon, replace the `<path d="...">` value with path data from another SVG icon set (e.g. [Simple Icons](https://simpleicons.org) or [Heroicons](https://heroicons.com)).

## Animations

**File:** `src/components/FadeIn.jsx` (the scroll-reveal behavior) and `tailwind.config.js` (the animation timing/easing values).
- To change how far elements slide in, edit the `translate-y-4` class in `FadeIn.jsx`.
- To change the speed, edit `duration-700` in `FadeIn.jsx`.
- To change the stagger between elements in a section, edit the `delay={i * 80}` (or similar) values passed to `<FadeIn>` in each component.

## Certifications

**File:** `src/data/portfolioData.js`
**Section:** the `certifications` array — same add/remove/edit pattern as Projects.

## Navigation links

**File:** `src/data/portfolioData.js`
**Section:** the `navLinks` array. The `href` must match a section's `id` (e.g. `#skills` matches `<section id="skills">` in `Skills.jsx`).
