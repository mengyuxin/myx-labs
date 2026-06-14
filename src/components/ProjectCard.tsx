import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="project-card"
      style={{ '--accent': project.accent } as React.CSSProperties}
    >
      <a
        className="project-visual"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`访问 ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} 网站界面预览`}
          loading="lazy"
          style={{ objectPosition: project.imagePosition }}
        />
        <span className="visual-grid" aria-hidden="true" />
        <span className="open-mark" aria-hidden="true">
          ↗
        </span>
        <span className="project-index" aria-hidden="true">
          {project.index}
        </span>
      </a>

      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category.toUpperCase()}</span>
          <span>{project.year}</span>
          <span className="live-status">
            <i aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <h2>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h2>
        <p className="english-title">{project.englishTitle}</p>
        <p className="project-description">{project.description}</p>

        <div className="project-footer">
          <ul className="tag-list" aria-label="项目标签">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a
            className="visit-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            访问实验 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}
