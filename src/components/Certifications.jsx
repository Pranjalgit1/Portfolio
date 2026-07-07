// The "Certifications" section — one clickable card per entry in the
// `certifications` array (src/data/portfolioData.js). Clicking a card opens
// the credential link (once you replace the "#" placeholders).
import { certifications } from '../data/portfolioData'
import FadeIn from './FadeIn'

export default function Certifications() {
  return (
    // id="certifications" is what the navbar's "Certifications" link scrolls to.
    <section id="certifications" className="py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-3">Certifications</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-14">
            Certifications
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 80}>
              {/* The whole card is a link, not just the "View Credential" text */}
              <a
                href={cert.link}
                target={cert.link.startsWith('#') ? undefined : '_blank'}
                rel="noreferrer"
                className="group block rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white leading-snug">{cert.name}</h3>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{cert.issuer}</p>
                <p className="mt-4 text-sm font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-accent transition-colors">
                  View Credential →
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
