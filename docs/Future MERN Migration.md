# Future MERN Migration

This site is already using React (the "R" in MERN). This document is your roadmap for adding the other three letters — MongoDB, Express, Node.js — as you learn them, turning this static portfolio into a full-stack application.

## The honest starting point

You don't need to migrate anything to "get to React" — you're already there. What a MERN upgrade actually adds is a **backend** (so data can change without editing code and redeploying) and a **database** (so that data persists somewhere other than a `.js` file in git). Do this migration in small, working stages — don't attempt it all at once.

## Which files would become React components

Trick answer: they already are. Every file in `src/components/` is a real React component today. What changes is *what data they receive*, not their fundamental nature. New components you'd eventually add:
- `ContactForm.jsx` — replaces the current `mailto:`/`tel:` links in `Contact.jsx` with a real form (name, email, message) that submits to your backend.
- `AdminLogin.jsx` / `AdminDashboard.jsx` — a password-protected page where *you* can add/edit/delete projects through a UI instead of hand-editing `portfolioData.js`.
- `ProjectsLoading.jsx` / error-state components — once data comes over the network, you need to handle "still loading" and "request failed" states that don't exist when data is a static local import.

## How routing would work using React Router

Right now there's one page with anchor-link sections (`#about`, `#projects`). A MERN app typically has multiple real pages/URLs. Roadmap:
1. `npm install react-router-dom`.
2. Wrap `<App />` in `<BrowserRouter>` inside `src/main.jsx`.
3. Split `App.jsx`'s current content into a `HomePage.jsx` (today's whole page).
4. Add routes: `<Route path="/" element={<HomePage />} />`, and later `<Route path="/admin" element={<AdminDashboard />} />`, `<Route path="/projects/:id" element={<ProjectDetailPage />} />` for individual project pages with more detail than fits on a card.
5. The Navbar's anchor links (`#about`) stay as-is *within* a page; React Router only matters for navigating *between* pages.

## How project data could move into a database

Today: `projects` is a hardcoded array in `src/data/portfolioData.js`. MERN version:
1. Design a MongoDB collection, e.g. `projects`, where each document has the same shape your array objects have now (`name`, `stack`, `description`, `links`) — this is why the current data shape matters, it translates almost directly into a schema.
2. Build a small Express server with a route like `GET /api/projects` that queries MongoDB and returns the array as JSON.
3. In `Projects.jsx`, replace `import { projects } from '../data/portfolioData'` with a `useEffect` + `fetch('/api/projects')` call that stores the result in `useState`. This is the single biggest conceptual jump: moving from "data is available instantly because it's a local import" to "data arrives asynchronously over the network," which is why you'll also need loading/error states (see above).
4. Everything downstream — `ProjectCard.jsx`, the grid layout — needs zero changes, because it never cared *where* the `project` prop came from, only its shape.

This same pattern (collection → Express route → fetch in a `useEffect`) applies identically to `skills`, `certifications`, and `education`.

## How a backend could handle the contact form

Today, "contact" is just `mailto:`/`tel:` links — no server involved. MERN version:
1. Build an Express route, e.g. `POST /api/contact`, that accepts `{ name, email, message }` in the request body.
2. That route either emails you directly (using a service like Nodemailer + Gmail, or a transactional email API like Resend/SendGrid) or saves the message into a MongoDB `messages` collection for you to review later — often both.
3. Build a `ContactForm.jsx` component with controlled inputs (`useState` for each field) and an `onSubmit` handler that does `fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })`.
4. Add basic validation (required fields, email format) and a success/error message shown after submitting.

## Which parts should remain unchanged

- **Tailwind styling and the overall visual design** — none of it depends on where data comes from.
- **The component tree/layout in `App.jsx`** — Hero, About, Skills, Certifications, Footer have no reason to ever need a backend; they can stay exactly as they are, reading static data, indefinitely.
- **`FadeIn.jsx` and all animation logic** — purely presentational, entirely independent of the data layer.
- **The single-source-of-truth principle** — you're not abandoning `portfolioData.js`'s *idea*, just moving *some* of its arrays into a database once you actually need to edit them without redeploying (e.g. projects you update often) while leaving simpler, rarely-changed content (like your bio) as local data if you prefer.

## A suggested order to learn/build this in

1. **Node.js + Express basics** — build a tiny standalone API (not yet connected to this site) that returns hardcoded JSON, to learn routes/middleware/`req`/`res`.
2. **MongoDB basics** — using MongoDB Atlas (free tier) + Mongoose, learn to define a schema and do CRUD (Create/Read/Update/Delete) against it, still as a separate practice project.
3. **Connect the dots** — build a real `GET /api/projects` endpoint backed by MongoDB, and point `Projects.jsx` at it instead of the local array. This is the smallest possible real migration step, and it teaches you the exact pattern you'll repeat for everything else.
4. **Add the contact form** — a self-contained feature, good second full-stack exercise (frontend form + backend route + either email or database write).
5. **Add auth + an admin dashboard** — the most advanced step, since it introduces sessions/JWTs and protected routes on both frontend and backend.
6. **Add React Router** — once you have more than one "page" worth building (e.g. an admin dashboard, individual project detail pages), introduce routing.

Do these in order, and each one is a completed, deployable milestone in its own right — you never need to have "finished the migration" for the site to keep working.
