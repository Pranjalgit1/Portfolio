// Renders the education array (src/data/portfolioData.js) as a vertical
// timeline: a line down the left side with a dot next to each entry.
import { education } from '../data/portfolioData'
import FadeIn from './FadeIn'

export default function Timeline() {
  return (
    // id="education" is what the navbar's "Education" link scrolls to.
    <section id="education" className="py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-3">Education</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-14">
            Academic background
          </h2>
        </FadeIn>

        {/* The vertical line + dots are drawn with plain CSS (no image/library):
            the "absolute" div is the line, and each entry gets its own dot. */}
        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-1 bottom-1 w-px bg-neutral-200 dark:bg-neutral-700" />
          <div className="space-y-12">
            {education.map((item, i) => (
              // .map() loops over every entry in the array and renders one block per item.
              // `i * 100` staggers each entry's fade-in animation by 100ms.
              <FadeIn key={item.institution + item.period} delay={i * 100}>
                <div className="relative">
                  <span className="absolute -left-[2.14rem] md:-left-[2.64rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/10" />
                  <p className="text-sm text-neutral-400 dark:text-neutral-500">{item.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">{item.institution}</h3>
                  <p className="mt-1 text-neutral-500 dark:text-neutral-400">{item.credential}</p>
                  <p className="mt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
