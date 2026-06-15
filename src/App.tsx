import { useEffect, useMemo, useState } from 'react'
import { Grid2X2, List, MoveDown } from 'lucide-react'
import { ProjectCard } from './components/ProjectCard'
import { categories, projects, type ProjectCategory } from './data/projects'
import './App.css'

type Filter = 'All' | ProjectCategory
type ViewMode = 'grid' | 'list'

const filterLabels: Record<Filter, string> = {
  All: '全部',
  Creative: '创意实验',
  Business: '品牌与设计',
  Utility: '生产力工具',
  Learning: '开发学习',
}

function App() {
  const [filter, setFilter] = useState<Filter>('All')
  const [view, setView] = useState<ViewMode>('grid')
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat('zh-CN', {
          timeZone: 'Asia/Shanghai',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date()),
      )
    }

    updateTime()
    const timer = window.setInterval(updateTime, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const visibleProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MYX Labs 首页">
          <span className="brand-symbol">M</span>
          <span className="brand-name">MYX LABS</span>
          <span className="brand-caption">DIGITAL EXPERIMENTS</span>
        </a>
        <nav aria-label="主导航">
          <a className="active" href="#archive">实验档案</a>
          <a href="#about">关于</a>
        </nav>
        <div className="header-status">
          <span>SHANGHAI</span>
          <time>{time || '00:00:00'}</time>
          <span>EST. 2026</span>
          <i aria-hidden="true" />
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-intro reveal">
            <span className="hero-marker" aria-hidden="true">
              <i />
            </span>
            <div>
              <p className="eyebrow">PERSONAL DIGITAL LABORATORY</p>
              <h1 id="hero-title">正在发生的数字实验</h1>
              <p className="hero-description">
                在设计、代码与真实问题之间来回试验。
                <br />
                这里收录完成的作品，也保留持续迭代的痕迹。
              </p>
            </div>
          </div>

          <dl className="hero-stats reveal delay-1">
            <div>
              <dt>ACTIVE</dt>
              <dd>{String(projects.length).padStart(2, '0')}</dd>
            </div>
            <div>
              <dt>CATEGORIES</dt>
              <dd>{String(categories.length - 1).padStart(2, '0')}</dd>
            </div>
            <div>
              <dt>UPDATED</dt>
              <dd>2026-06</dd>
            </div>
          </dl>

          <div className="hero-map reveal delay-2" aria-hidden="true">
            <span className="map-point point-a" />
            <span className="map-point point-b" />
            <span className="map-point point-c" />
            <span className="map-point point-d" />
            <span className="map-line line-a" />
            <span className="map-line line-b" />
            <span className="map-line line-c" />
          </div>

          <a className="hero-jump" href="#archive">
            查看档案
            <MoveDown size={16} strokeWidth={1.6} />
          </a>
        </section>

        <section className="archive" id="archive" aria-labelledby="archive-title">
          <div className="archive-toolbar">
            <div className="filter-bar" aria-label="项目类型筛选">
              {categories.map((category) => (
                <button
                  key={category}
                  className={filter === category ? 'active' : ''}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                >
                  {filterLabels[category]}
                  <sup>
                    {category === 'All'
                      ? projects.length
                      : projects.filter((project) => project.category === category).length}
                  </sup>
                </button>
              ))}
            </div>

            <div className="view-controls" aria-label="档案视图">
              <span>{visibleProjects.length.toString().padStart(2, '0')} ITEMS</span>
              <button
                className={view === 'grid' ? 'active' : ''}
                type="button"
                onClick={() => setView('grid')}
                aria-label="网格视图"
                aria-pressed={view === 'grid'}
              >
                <Grid2X2 size={18} strokeWidth={1.6} />
              </button>
              <button
                className={view === 'list' ? 'active' : ''}
                type="button"
                onClick={() => setView('list')}
                aria-label="列表视图"
                aria-pressed={view === 'list'}
              >
                <List size={20} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          <h2 id="archive-title" className="sr-only">实验档案</h2>
          <div className={`project-list project-list--${view}`} aria-live="polite">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} view={view} />
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">ABOUT THIS LAB / 02</p>
            <h2 id="about-title">先做出来，<br />再继续理解。</h2>
          </div>
          <div className="about-copy">
            <p>
              MYX Labs 是孟玉新的个人数字实验室，用来记录那些从好奇心出发、最终变成可用网页的想法。
            </p>
            <p>
              实验可能关乎图像与感知，也可能是工作流、知识组织或一套品牌语言。共同点只有一个：从真实结果中继续学习。
            </p>
            <a href="mailto:emyx@msn.com">EMAIL ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <div>© 2026 孟玉新</div>
        <p>INDEPENDENT DIGITAL EXPERIMENTS.</p>
        <div className="footer-links">
          <a href="https://github.com/mengyuxin" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href="mailto:emyx@msn.com">EMAIL ↗</a>
          <a href="#top">回到顶部 ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
