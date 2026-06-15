import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  view: 'grid' | 'list'
}

const categoryLabels = {
  Creative: '创意实验',
  Business: '品牌与设计',
  Utility: '生产力工具',
  Learning: '开发学习',
}

export function ProjectCard({ project, view }: ProjectCardProps) {
  return (
    <article
      className={`project-card project-card--${view}`}
      style={{ '--accent': project.accent } as React.CSSProperties}
    >
      <div className="project-sequence" aria-hidden="true">
        <strong>{project.index}</strong>
        <span>{project.year}</span>
        <span className="live-status">
          <i />
          {project.status}
        </span>
      </div>

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
        <span className="project-visual-action" aria-hidden="true">
          <ExternalLink size={18} strokeWidth={1.6} />
        </span>
      </a>

      <div className="project-copy">
        <p className="project-category">{categoryLabels[project.category]}</p>
        <h3>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="english-title">{project.englishTitle}</p>
        <p className="project-description">{project.description}</p>

        <div className="project-footer">
          <ul className="tag-list" aria-label="项目标签">
            {project.tags.slice(0, 2).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a
            className="visit-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            访问网站
            <ExternalLink size={15} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
