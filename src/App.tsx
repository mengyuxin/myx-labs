import { useEffect, useMemo, useState } from 'react'
import { ProjectCard } from './components/ProjectCard'
import { categories, projects, type ProjectCategory } from './data/projects'
import './App.css'

type Filter = 'All' | ProjectCategory

function App() {
  const [filter, setFilter] = useState<Filter>('All')
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
          <span>
            <strong>MYX LABS</strong>
            <small>DIGITAL EXPERIMENTS</small>
          </span>
        </a>
        <nav aria-label="主导航">
          <a href="#archive">实验档案</a>
          <a href="#about">关于</a>
        </nav>
        <div className="header-status">
          <span>SHANGHAI</span>
          <time>{time || '00:00:00'}</time>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-kicker reveal">
            <span>PERSONAL DIGITAL LABORATORY</span>
            <span>EST. 2026</span>
          </div>
          <div className="hero-title-wrap">
            <h1 id="hero-title" className="reveal delay-1">
              <span>正在发生的</span>
              <span className="outline-text">数字实验</span>
            </h1>
            <div className="orbit-mark reveal delay-2" aria-hidden="true">
              <span />
              <span />
              <i />
            </div>
          </div>
          <div className="hero-bottom reveal delay-3">
            <p>
              在设计、代码与真实问题之间来回试验。
              <br />
              这里收录完成的作品，也保留持续迭代的痕迹。
            </p>
            <a href="#archive" className="scroll-cue">
              <span>浏览实验档案</span>
              <i aria-hidden="true">↓</i>
            </a>
          </div>
          <div className="hero-counter" aria-label={`当前收录 ${projects.length} 个项目`}>
            <strong>{String(projects.length).padStart(2, '0')}</strong>
            <span>ACTIVE<br />EXPERIMENTS</span>
          </div>
        </section>

        <section className="archive" id="archive" aria-labelledby="archive-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / EXPERIMENT ARCHIVE</p>
              <h2 id="archive-title">实验档案</h2>
            </div>
            <p className="archive-note">
              每个项目都是一个问题的临时答案。
              <br />
              点击进入独立实验现场。
            </p>
          </div>

          <div className="filter-bar" aria-label="项目类型筛选">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? 'active' : ''}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category === 'All' ? '全部' : category}
                <sup>
                  {category === 'All'
                    ? projects.length
                    : projects.filter((project) => project.category === category).length}
                </sup>
              </button>
            ))}
          </div>

          <div className="project-list" aria-live="polite">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <p className="eyebrow">02 / ABOUT THIS LAB</p>
          <div className="about-grid">
            <h2 id="about-title">
              Build.
              <br />
              Observe.
              <br />
              <span>Iterate.</span>
            </h2>
            <div className="about-copy">
              <p>
                MYX Labs 是孟雨欣的个人数字实验室。我用它记录那些从好奇心出发、最终变成可用网页的想法。
              </p>
              <p>
                实验没有统一题目：可能是图像与感知，也可能是工作流、知识组织或一套品牌语言。共同点只有一个：先做出来，再从真实结果中继续学习。
              </p>
              <a href="mailto:emyx@msn.com">
                发起对话 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#top">MYX LABS</a>
        <p>Independent digital experiments by Meng Yuxin.</p>
        <div>
          <span>© 2026</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
