// The "Contact" section. This is a static site with no backend, so instead
// of a submit-able form it offers a direct "mailto:" link that opens
// the visitor's own email app pre-filled with your address.
// (See docs/Future MERN Migration.md for how to turn this into a real form
// backed by a Node/Express API later.)
import { profile } from '../data/portfolioData'
import FadeIn from './FadeIn'

export default function Contact() {
  return (
    // id="contact" is what the navbar's "Contact" link scrolls to.
    <section id="contact" className="py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-3">Contact</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Let's build something together
          </h2>
        </FadeIn>
        <FadeIn delay={160}>
          <p className="mt-4 max-w-xl mx-auto text-neutral-500 dark:text-neutral-400">
            I'm open to internships, collaborations, and interesting problems. Reach out and I'll get back to you.
          </p>
        </FadeIn>
        <FadeIn delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
