export type ProjectCategory = 'Creative' | 'Business' | 'Utility' | 'Learning'

export type Project = {
  id: string
  index: string
  title: string
  englishTitle: string
  description: string
  category: ProjectCategory
  tags: string[]
  year: string
  status: 'LIVE'
  url: string
  image: string
  accent: string
  imagePosition?: string
}

export const categories = ['All', 'Creative', 'Business', 'Utility', 'Learning'] as const

export const projects: Project[] = [
  {
    id: 'depthloom',
    index: '01',
    title: 'Depthloom',
    englishTitle: '裸眼立体画实验室',
    description:
      '把图像的深度藏进纹理之中。一个完全运行在浏览器里的裸眼立体画生成器，也是一场关于双眼与视觉感知的实验。',
    category: 'Creative',
    tags: ['CREATIVE CODING', 'IMAGE TOOL', '3D VISION'],
    year: '2026',
    status: 'LIVE',
    url: 'https://myx-3d.netlify.app',
    image: '/projects/depthloom.jpg',
    accent: '#d8ff3e',
    imagePosition: 'center top',
  },
  {
    id: 'fanguang',
    index: '02',
    title: '繁光咨询主页',
    englishTitle: 'Fanguang Consulting',
    description:
      '为中日企业数字化咨询工作室建立的多语言品牌主页。用编辑式排版将 AI、业务系统与跨境协作组织成一条清晰叙事。',
    category: 'Business',
    tags: ['BRAND WEBSITE', 'CONSULTING', 'MULTILINGUAL'],
    year: '2026',
    status: 'LIVE',
    url: 'https://fan-guang.netlify.app',
    image: '/projects/fanguang.jpg',
    accent: '#e6a755',
    imagePosition: 'center top',
  },
  {
    id: 'todo',
    index: '03',
    title: 'MYX Todo',
    englishTitle: '双语待办事项工具',
    description:
      '一个专注于快速记录的轻量待办工具。支持中英文切换与优先级管理，让任务输入保持简单、直接、低干扰。',
    category: 'Utility',
    tags: ['WEB APP', 'PRODUCTIVITY', 'UI EXPERIMENT'],
    year: '2026',
    status: 'LIVE',
    url: 'https://myx-todo.netlify.app',
    image: '/projects/todo.jpg',
    accent: '#9eb8ff',
  },
  {
    id: 'abap',
    index: '04',
    title: 'SAP ABAP 学习工作台',
    englishTitle: 'ABAP Learning Workbench',
    description:
      '把 51 章教程重组为一条可理解的学习路径。通过主题分组、顺序建议和快速检索，降低技术资料的导航成本。',
    category: 'Learning',
    tags: ['LEARNING TOOL', 'SAP', 'INFORMATION ARCHITECTURE'],
    year: '2026',
    status: 'LIVE',
    url: 'https://myx-abap.netlify.app',
    image: '/projects/abap.jpg',
    accent: '#ff775f',
    imagePosition: 'center top',
  },
  {
    id: 'url-decoder',
    index: '05',
    title: 'URL Decoder',
    englishTitle: 'SharePoint URL Decoder',
    description:
      '一个中日双语的 SharePoint URL 解码工具。粘贴复杂链接后自动还原转义字符，并生成更容易阅读和分享的简化 URL。',
    category: 'Utility',
    tags: ['URL TOOL', 'SHAREPOINT', 'BILINGUAL'],
    year: '2026',
    status: 'LIVE',
    url: 'https://myx-url.netlify.app',
    image: '/projects/url-decoder.jpg',
    accent: '#5fc6b2',
    imagePosition: 'center top',
  },
  {
    id: 'solar-system',
    index: '06',
    title: 'MYX Solar System',
    englishTitle: '3D 实时轨道演示',
    description:
      '一个浏览器中的 3D 太阳系轨道演示。支持时间轴、模拟速度、标签显示、比例切换和天体导航，用交互方式观察行星运动。',
    category: 'Creative',
    tags: ['3D SIMULATION', 'ASTRONOMY', 'INTERACTIVE'],
    year: '2026',
    status: 'LIVE',
    url: 'https://myx-solar.netlify.app',
    image: '/projects/solar-system.jpg',
    accent: '#f4c86a',
    imagePosition: 'center top',
  },
]
