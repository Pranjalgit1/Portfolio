// The "Skills" section — one card per category in the `skills` array
// (src/data/portfolioData.js), each showing its list of items as pills.
import { skills } from '../data/portfolioData'
import FadeIn from './FadeIn'

export default function Skills() {
  return (
    // id="skills" is what the navbar's "Skills" link scrolls to.
    <section id="skills" className="py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-3">Skills</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-14">
            Technologies I work with
          </h2>
        </FadeIn>

        {/* 1 column on mobile, 2 on tablet ("sm"), 3 on desktop ("lg") */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 80}>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 h-full">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
