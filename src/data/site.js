// 站点级配置：品牌、导航、外链、页脚
export const site = {
  brandName: ['Co', 'Evolutio'],   // [前缀, 高亮后缀]
  githubUrl: 'https://github.com/CoEvolutio',
  nav: [
    { label: '知识文档', href: '#docs' },
    { label: '成品展示', href: '#showcase' },
    { label: '博客', href: '#blog' },
    { label: '成员', href: '#members' },
  ],
  footer: {
    tagline: 'AI empowers humans, humans evolve AI. 一个共同进化的开源社区。',
    columns: [
      {
        title: '内容',
        links: [
          { label: '知识文档', href: '#docs' },
          { label: '成品展示', href: '#showcase' },
          { label: '博客', href: '#blog' },
          { label: '成员', href: '#members' },
        ],
      },
      {
        title: '社区',
        links: [
          { label: 'GitHub', href: 'https://github.com/CoEvolutio', external: true },
          { label: '贡献指南', href: '#' },
          { label: '行为准则', href: '#' },
          { label: '讨论区', href: '#' },
        ],
      },
      {
        title: '关于',
        links: [
          { label: '宣言', href: '#' },
          { label: '品牌', href: '#' },
          { label: 'License', href: '#' },
        ],
      },
    ],
    copyright: '© 2026 CoEvolutio · Evolve Together',
    madeBy: 'Made by humans × AI',
  },
}
