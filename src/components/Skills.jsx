import { skills } from '../data/portfolioData'
import FadeIn from './FadeIn'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-3">Skills</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-14">
            Technologies I work with
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 80}>
              <div className="rounded-2xl border border-neutral-200 p-6 h-full">
                <h3 className="text-sm font-semibold text-neutral-900 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600"
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
