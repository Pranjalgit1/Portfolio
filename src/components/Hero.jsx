// The top "landing" section of the site — the first thing a visitor sees.
// Shows your name, role, tagline, two call-to-action buttons, and social icons.
import { profile } from '../data/portfolioData'
import FadeIn from './FadeIn'

// Raw SVG path data for each social icon, keyed by name so <SocialIcon kind="github" />
// can look up the right icon. Kept inline (no icon library) to keep the bundle small.
const socialIcons = {
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.02-.01-1.85-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.5 21h-3.37v-6.06c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.2V21H9.4V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.06 2.26 4.06 5.19V21Z" />
  ),
  leetcode: (
    <path d="M13.85 2.15a1.5 1.5 0 0 0-2.16-.04l-6.9 6.9a4.5 4.5 0 0 0 0 6.36l4.2 4.2a4.5 4.5 0 0 0 6.36 0l1.9-1.9a1.5 1.5 0 1 0-2.12-2.12l-1.9 1.9a1.5 1.5 0 0 1-2.12 0l-4.2-4.2a1.5 1.5 0 0 1 0-2.12l6.9-6.9a1.5 1.5 0 0 0 .04-2.18ZM19 13.5H10a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3Z" />
  ),
  email: (
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 12l8-5.99V6H4Zm16 12V8.24l-7.5 5.62a1 1 0 0 1-1.2 0L4 8.24V18h16Z" />
  ),
}

// A single circular social-link button. `kind` selects which icon to draw.
// If href is "#" (a TODO placeholder), it won't open a new tab.
function SocialIcon({ href, kind, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-500 hover:-translate-y-0.5 transition-all"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        {socialIcons[kind]}
      </svg>
    </a>
  )
}

export default function Hero() {
  return (
    // id="top" is the scroll target for the navbar logo/home link.
    <section id="top" className="relative pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Each block is wrapped in <FadeIn> with an increasing delay, so they
            animate in one after another instead of all at once. */}
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-4">Hello, I'm</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            {profile.name}
          </h1>
        </FadeIn>
        <FadeIn delay={160}>
          <h2 className="mt-4 text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-300">{profile.role}</h2>
        </FadeIn>
        <FadeIn delay={240}>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={320}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:border-neutral-300 dark:hover:border-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-10 flex items-center gap-3">
            <SocialIcon href={profile.links.github} kind="github" label="GitHub" />
            <SocialIcon href={profile.links.linkedin} kind="linkedin" label="LinkedIn" />
            <SocialIcon href={profile.links.leetcode} kind="leetcode" label="LeetCode" />
            <SocialIcon href={`mailto:${profile.email}`} kind="email" label="Email" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
