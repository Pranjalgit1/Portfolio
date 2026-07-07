// A single project card. Receives one `project` object (see the shape in
// src/data/portfolioData.js) as a prop and renders its name, tech tags,
// description, and links. Used by src/components/Projects.jsx, once per project.
export default function ProjectCard({ project }) {
  return (
    // "group" lets child elements react to hovering the whole card (not used
    // here directly, but the card itself lifts + gets a shadow on hover).
    <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{project.name}</h3>

      {/* Tech stack pills — one per string in project.stack */}
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{project.description}</p>

      <div className="mt-6 flex items-center gap-5">
        <a
          href={project.links.source}
          target={project.links.source.startsWith('#') ? undefined : '_blank'}
          rel="noreferrer"
          className="text-sm font-medium text-neutral-900 dark:text-white hover:text-accent transition-colors"
        >
          Source Code →
        </a>
        {/* Live Demo link only renders if the project data includes a "demo" link */}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target={project.links.demo.startsWith('#') ? undefined : '_blank'}
            rel="noreferrer"
            className="text-sm font-medium text-neutral-900 dark:text-white hover:text-accent transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}
