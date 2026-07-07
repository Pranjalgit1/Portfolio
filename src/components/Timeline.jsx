import { education } from '../data/portfolioData'
import FadeIn from './FadeIn'

export default function Timeline() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-3">Education</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-14">
            Academic background
          </h2>
        </FadeIn>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-1 bottom-1 w-px bg-neutral-200" />
          <div className="space-y-12">
            {education.map((item, i) => (
              <FadeIn key={item.institution + item.period} delay={i * 100}>
                <div className="relative">
                  <span className="absolute -left-[2.14rem] md:-left-[2.64rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/10" />
                  <p className="text-sm text-neutral-400">{item.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900">{item.institution}</h3>
                  <p className="mt-1 text-neutral-500">{item.credential}</p>
                  <p className="mt-1 text-sm font-medium text-neutral-700">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
