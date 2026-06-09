// 成品展示板块。
// size: 'feat' (跨7列) | 'half' (跨5列) | 'third' (跨4列)
// useMark: true 时用站点 Logo；否则用 icon (SVG 内部片段) + iconStroke 颜色变量
export const showcaseIntro = {
  eyebrow: '成品展示 · Showcase',
  title: ['社区共建的', '开源成品', ''],
  desc: '由人类与 AI 共同打造的工具、实验与作品，全部开源、可复现。',
}

export const showcase = [
  {
    size: 'feat',
    tag: 'Featured',
    useMark: true,
    title: 'Helix · Agent 编排框架',
    desc: '声明式地编排多智能体协作流程，让人类掌舵、AI 划桨。内置可观测性与可复现的工作流图谱。',
    stats: [
      { label: '★', value: '2.4k' },
      { label: '⑂', value: '318' },
      { label: 'TypeScript' },
    ],
  },
  {
    size: 'half',
    tag: 'Tool',
    iconStroke: 'var(--copper)',
    icon: '<path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="var(--copper)"/>',
    title: 'Contextor',
    desc: '上下文工程工具，自动为模型组织最相关的记忆与文档。',
    stats: [{ label: '★', value: '980' }, { label: 'Python' }],
  },
  {
    size: 'third',
    tag: 'Lab',
    iconStroke: 'var(--slate-2)',
    icon: '<path d="M9 2v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V2"/><path d="M7 2h10"/>',
    title: 'EvalForge',
    desc: '开源评测台，量化人机协作质量。',
    stats: [{ label: '★', value: '640' }, { label: 'Rust' }],
  },
  {
    size: 'third',
    tag: 'Design',
    iconStroke: 'var(--copper)',
    icon: '<circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2a10 10 0 0 0 0 20 2.5 2.5 0 0 0 0-5 1.5 1.5 0 0 1 0-3h2a4 4 0 0 0 4-4 10 10 0 0 0-6-8z"/>',
    title: 'Palette CE',
    desc: '共生主题的开源设计系统与配色。',
    stats: [{ label: '★', value: '410' }, { label: 'CSS' }],
  },
  {
    size: 'third',
    tag: 'CLI',
    iconStroke: 'var(--slate-2)',
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M13 15h5"/>',
    title: 'Coevo CLI',
    desc: '终端里的协作助手，一行命令进入心流。',
    stats: [{ label: '★', value: '1.1k' }, { label: 'Go' }],
  },
]
