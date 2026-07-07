// The "Projects" section — lays out a responsive grid of ProjectCard components,
// one per entry in the `projects` array (src/data/portfolioData.js).
import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import FadeIn from './FadeIn'

export default function Projects() {
  return (
    // id="projects" is what the navbar's "Projects" link scrolls to.
    <section id="projects" className="py-24 md:py-32 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-accent mb-3">Projects</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-14">
            Things I've built
          </h2>
        </FadeIn>

        {/* 1 column on mobile, 2 columns from the "sm" breakpoint up */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 80}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
