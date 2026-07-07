# Code Walkthrough

A top-to-bottom trace of exactly what happens when someone opens this website, in the order it actually happens.

## 1. The browser requests the page

When someone visits your Vercel URL, the server sends back **`index.html`** — the only real HTML file in this project. It contains:
- A `<head>` with the tab title, description, and a `<link>` that loads the Inter font from Google Fonts.
- A `<body>` with one empty `<div id="root"></div>` and one `<script type="module" src="/src/main.jsx">`.

At this point the page is blank — there's an empty div and nothing else rendered yet.

## 2. JavaScript takes over: `src/main.jsx`

The browser executes `main.jsx`. It:
1. Imports `App` (the root component) and `index.css` (global styles).
2. Finds `document.getElementById('root')` — the empty div from step 1.
3. Calls `ReactDOM.createRoot(...).render(<App />)`, which tells React: "take over this div and draw whatever `<App />` returns inside it."

## 3. How CSS is applied

`index.css` is imported once, in `main.jsx`. It contains three `@tailwind` directives that get replaced, at build time, with all the CSS Tailwind generated for the class names it found in your components (things like `flex`, `text-lg`, `hover:-translate-y-1`). It also sets the global font, background color, and smooth-scroll behavior. Every component then styles itself using Tailwind's utility classes directly in JSX (`className="..."`) — there are no separate `.css` files per component.

## 4. `App.jsx` renders the page layout

`App` is a plain function that returns JSX (HTML-like syntax inside JavaScript). It renders, in order: `Navbar`, then inside `<main>`: `Hero`, `About`, `Timeline`, `Projects`, `Skills`, `Certifications`, `Contact`, then `Footer`. Each of those is its own component file in `src/components/`.

```
<App>
 ├─ <Navbar/>
 └─ <main>
     ├─ <Hero/>
     ├─ <About/>
     ├─ <Timeline/>
     ├─ <Projects/>
     │   └─ <ProjectCard/> × 4
     ├─ <Skills/>
     ├─ <Certifications/>
     └─ <Contact/>
 └─ <Footer/>
```

## 5. Where the actual words come from

None of the components hardcode your name, bio, or project descriptions. They all `import { ... } from '../data/portfolioData'` and drop those values into JSX, e.g. `{profile.name}`. This is why `portfolioData.js` is called "the single source of truth" — one file feeds every section.

## 6. How navigation works

There's no router (no React Router, no separate pages) — this is a single scrolling page. The Navbar's links are plain `<a href="#about">`, `<a href="#projects">`, etc. These are standard HTML anchor links: `href="#about"` tells the browser "scroll to the element whose `id="about"`." Every section component sets that `id` on its outer `<section>` (e.g. `<section id="about">` in `About.jsx`). `scroll-behavior: smooth` in `index.css` makes that jump animate smoothly instead of snapping instantly.

The mobile hamburger menu is just a `useState` boolean (`menuOpen`) in `Navbar.jsx` that conditionally renders a dropdown `<ul>` when true.

## 7. How animations are triggered

Every section wraps its content in `<FadeIn>` (`src/components/FadeIn.jsx`). Here's the mechanism:
1. `FadeIn` renders a `<div>` and gets a reference to it (`useRef`).
2. On mount (`useEffect`), it creates a browser `IntersectionObserver` that watches that div.
3. When the div scrolls into the viewport (crosses the 15% visibility threshold), the observer's callback fires, setting `visible` to `true` via `useState`.
4. That state change re-renders the div with different Tailwind classes: `opacity-0 translate-y-4` (hidden, shifted down) becomes `opacity-100 translate-y-0` (visible, in place).
5. The `transition-all duration-700` class makes that class change animate smoothly instead of snapping instantly.
6. The `delay` prop (passed differently per element, e.g. `delay={80}`, `delay={160}`) staggers nearby elements so they don't all appear in the same instant.

The navbar's background blur is a separate, simpler effect: it listens to `window.scroll` and toggles a class when `scrollY > 8`.

## 8. How project cards are rendered

`Projects.jsx` imports the `projects` array from `portfolioData.js` and calls `.map()` on it — this is standard JavaScript array iteration, and in React it's the idiomatic way to turn a list of data into a list of components. For each `project` object, it renders one `<ProjectCard project={project} />`, passing the object down as a **prop** (React's term for a function argument passed to a component). `ProjectCard.jsx` receives that prop and reads fields off it (`project.name`, `project.stack`, `project.description`, `project.links`) to fill in its own JSX. This same map-over-array-of-data pattern repeats in `Timeline.jsx` (education), `Skills.jsx` (skill categories), and `Certifications.jsx`.

## 9. Dark mode

Not included in this version — the design intentionally sticks to a single light theme (mostly black/white/gray with one accent color), matching the minimal aesthetic it's modeled on. See [CustomizationGuide.md](CustomizationGuide.md) for how you'd add it later.

## 10. What happens when you run `npm run build`

Vite reads `index.html` as the entry point, follows every `import` statement from `main.jsx` onward, bundles all the JavaScript into a few optimized files, and has Tailwind generate only the CSS actually used (based on which class names appear in your code). The output lands in a new `dist/` folder — that's the folder Vercel/Netlify actually serve to visitors. `npm run dev` skips this bundling step and serves files on-demand instead, which is why it starts instantly and updates live as you edit.
