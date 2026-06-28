const markdownModules = import.meta.glob('./docs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function fallbackTitle(markdown, slug) {
  const heading = markdown.match(/^#\s+(.+)$/m)
  if (heading) return heading[1].trim()

  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) return { data: {}, body: markdown }

  const data = {}
  match[1].split('\n').forEach((line) => {
    const separator = line.indexOf(':')
    if (separator === -1) return

    const key = line.slice(0, separator).trim()
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '')
    if (key) data[key] = value
  })

  return {
    data,
    body: markdown.slice(match[0].length),
  }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function estimateReadingTime(markdown) {
  const plainText = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#>*_`[\]()|-]/g, '')
    .trim()

  const cnChars = plainText.match(/[\u4e00-\u9fa5]/g)?.length || 0
  const words = plainText.replace(/[\u4e00-\u9fa5]/g, ' ').split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil((cnChars + words) / 450))
  return `${minutes} 分钟`
}

export const docArticles = Object.entries(markdownModules)
  .map(([path, markdown]) => {
    const slug = slugFromPath(path)
    const { data, body } = parseFrontmatter(markdown)

    return {
      slug,
      title: data.title || fallbackTitle(body, slug),
      desc: data.description || data.desc || '一篇 Markdown 文档。',
      cat: data.category || data.cat || 'Blog',
      date: data.date || '',
      readingTime: data.readingTime || estimateReadingTime(body),
      markdown: body,
    }
  })
  .sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date)
    if (a.date) return -1
    if (b.date) return 1
    return a.title.localeCompare(b.title, 'zh-Hans-CN')
  })

export function getDocBySlug(slug) {
  return docArticles.find((doc) => doc.slug === slug)
}
