// The "About" section — a short bio paragraph. All text comes from the
// `about` string in src/data/portfolioData.js, so this component is purely
// layout (no editing needed here to change the bio text itself).
import { about } from '../data/portfolioData'
import FadeIn from './FadeIn'

export default function About() {
  return (
    // id="about" is what the navbar's "About" link scrolls to.
    <section id="about" className="py-24 md:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-3">About</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-6">
            A little about me
          </h2>
        </FadeIn>
        <FadeIn delay={160}>
          <p className="max-w-3xl text-base md:text-lg text-neutral-500 leading-relaxed">{about}</p>
        </FadeIn>
      </div>
    </section>
  )
}
