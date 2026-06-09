// 知识文档板块。icon 为 SVG 内部路径片段；tone: '' (铜) | 'slate'
export const docsIntro = {
  eyebrow: '知识文档 · Knowledge',
  title: ['沉淀', '人机协作', '的方法论'],   // [前, 高亮, 后]
  desc: '从入门指南到深度研究，系统化整理人类与 AI 协作的实践、原理与边界。',
}

export const docs = [
  {
    tone: '',
    title: '入门指南',
    desc: '第一次与 AI 协作？从这里建立正确的心智模型与工作流。',
    count: '12 篇',
    cat: 'Getting Started',
    href: '#',
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  },
  {
    tone: 'slate',
    title: '提示工程',
    desc: '结构化提示、上下文工程与 Agent 编排的可复用范式。',
    count: '18 篇',
    cat: 'Prompting',
    href: '#',
    icon: '<path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 2v10l6 3"/>',
  },
  {
    tone: '',
    title: '工具链',
    desc: '开源工具的安装、配置与最佳实践，开箱即用。',
    count: '9 篇',
    cat: 'Toolchain',
    href: '#',
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  },
  {
    tone: 'slate',
    title: '研究文库',
    desc: '人机共生、对齐与能力涌现的前沿阅读与笔记。',
    count: '21 篇',
    cat: 'Research',
    href: '#',
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  },
  {
    tone: '',
    title: '工程实践',
    desc: '把 AI 嵌入真实工程系统的架构、评测与可靠性方案。',
    count: '15 篇',
    cat: 'Engineering',
    href: '#',
    icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
  },
  {
    tone: 'slate',
    title: '伦理与边界',
    desc: '负责任地使用 AI——安全、隐私与协作伦理的共识。',
    count: '7 篇',
    cat: 'Ethics',
    href: '#',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  },
]
