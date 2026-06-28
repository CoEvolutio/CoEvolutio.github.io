<script setup>
import { computed } from 'vue'
import { docArticles } from '../content/docs.js'
import { renderMarkdown } from '../utils/markdown.js'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const article = computed(() => docArticles.find((doc) => doc.slug === props.slug))
const articleIndex = computed(() => docArticles.findIndex((doc) => doc.slug === props.slug))
const bodyMarkdown = computed(() => article.value?.markdown.replace(/^#\s+.+\n+/, '') || '')
const rendered = computed(() => (article.value ? renderMarkdown(bodyMarkdown.value) : { html: '', headings: [] }))
const prevArticle = computed(() => (articleIndex.value > 0 ? docArticles[articleIndex.value - 1] : null))
const nextArticle = computed(() => (articleIndex.value >= 0 && articleIndex.value < docArticles.length - 1 ? docArticles[articleIndex.value + 1] : null))
</script>

<template>
  <main class="reader">
    <template v-if="article">
      <section class="reader-hero">
        <div class="wrap reader-hero-inner">
          <a class="back-link" href="#docs">← 返回文档中心</a>
          <p class="eyebrow">{{ article.cat }}</p>
          <h1>{{ article.title }}</h1>
          <p>{{ article.desc }}</p>
          <div class="reader-meta">
            <span>{{ article.readingTime }}</span>
            <span>Markdown 自动渲染</span>
          </div>
        </div>
      </section>

      <section class="wrap reader-layout">
        <aside class="reader-sidebar" aria-label="文章列表">
          <p>文章列表</p>
          <a
            v-for="doc in docArticles"
            :key="doc.slug"
            :class="{ active: doc.slug === article.slug }"
            :href="`#/docs/${doc.slug}`"
          >
            <span>{{ doc.title }}</span>
            <small>{{ doc.cat }}</small>
          </a>
        </aside>

        <article class="markdown-shell">
          <nav v-if="rendered.headings.length > 1" class="toc" aria-label="文章小节">
            <a
              v-for="heading in rendered.headings.filter((item) => item.level > 1)"
              :key="heading.id"
              :href="`#/docs/${article.slug}#${heading.id}`"
            >
              {{ heading.text }}
            </a>
          </nav>
          <div class="markdown-body" v-html="rendered.html"></div>
          <div class="reader-pager">
            <a v-if="prevArticle" :href="`#/docs/${prevArticle.slug}`">
              <small>上一篇</small>
              <span>{{ prevArticle.title }}</span>
            </a>
            <a v-if="nextArticle" :href="`#/docs/${nextArticle.slug}`">
              <small>下一篇</small>
              <span>{{ nextArticle.title }}</span>
            </a>
          </div>
        </article>
      </section>
    </template>

    <section v-else class="wrap not-found">
      <p class="eyebrow">Document Missing</p>
      <h1>没有找到这篇文档</h1>
      <p>这个地址还没有对应的 Markdown 内容。</p>
      <a class="btn btn-primary" href="#docs">回到文档中心</a>
    </section>
  </main>
</template>

<style scoped>
.reader { min-height: 70vh; }
.reader-hero { border-bottom: 1px solid var(--hairline); padding: 72px 0 56px; background: var(--surface); }
.reader-hero-inner { max-width: 920px; }
.back-link { display: inline-flex; color: var(--ink-3); font-size: 14px; margin-bottom: 30px; transition: color .25s var(--ease); }
.back-link:hover { color: var(--copper); }
.reader-hero .eyebrow { margin-bottom: 18px; }
.reader-hero h1 { font-family: var(--font-display); font-weight: 300; font-size: clamp(42px, 7vw, 76px); line-height: 1; letter-spacing: -1px; margin-bottom: 18px; }
.reader-hero p:not(.eyebrow) { color: var(--ink-3); font-size: 18px; max-width: 680px; }
.reader-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }
.reader-meta span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .8px; text-transform: uppercase; border: 1px solid var(--hairline-2); border-radius: 100px; padding: 6px 10px; color: var(--ink-3); }
.reader-layout { display: grid; grid-template-columns: 240px minmax(0, 760px); gap: 72px; align-items: start; padding-top: 56px; padding-bottom: 92px; }
.reader-sidebar { position: sticky; top: 96px; border-right: 1px solid var(--hairline); padding-right: 22px; }
.reader-sidebar p { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-3); margin-bottom: 14px; }
.reader-sidebar a { display: grid; gap: 2px; padding: 12px 0; border-bottom: 1px solid var(--hairline); color: var(--ink-3); transition: color .25s var(--ease); }
.reader-sidebar a:hover, .reader-sidebar a.active { color: var(--copper); }
.reader-sidebar span { font-size: 15px; color: inherit; }
.reader-sidebar small { font-family: var(--font-mono); font-size: 10px; letter-spacing: .8px; text-transform: uppercase; color: var(--ink-3); }
.markdown-shell { min-width: 0; }
.toc { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 30px; padding-bottom: 22px; border-bottom: 1px solid var(--hairline); }
.toc a { font-size: 13px; color: var(--ink-3); border: 1px solid var(--hairline-2); border-radius: 100px; padding: 6px 12px; transition: border-color .25s var(--ease), color .25s var(--ease); }
.toc a:hover { color: var(--copper); border-color: var(--copper); }
.reader-pager { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 56px; }
.reader-pager a { border: 1px solid var(--hairline); background: var(--surface); padding: 18px; border-radius: 8px; transition: transform .25s var(--ease), border-color .25s var(--ease); }
.reader-pager a:hover { transform: translateY(-2px); border-color: var(--copper); }
.reader-pager small { display: block; font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: var(--ink-3); margin-bottom: 4px; }
.reader-pager span { font-family: var(--font-display); font-size: 20px; }
.not-found { padding: 96px 32px; }
.not-found h1 { font-family: var(--font-display); font-weight: 300; font-size: clamp(34px, 6vw, 64px); margin: 16px 0; }
.not-found p:not(.eyebrow) { color: var(--ink-3); margin-bottom: 28px; }

.markdown-body :deep(h2) { font-family: var(--font-display); font-weight: 350; font-size: clamp(28px, 4vw, 40px); line-height: 1.18; letter-spacing: -.3px; margin: 42px 0 14px; scroll-margin-top: 92px; }
.markdown-body :deep(h3) { font-family: var(--font-display); font-weight: 400; font-size: 25px; line-height: 1.25; margin: 34px 0 12px; scroll-margin-top: 92px; }
.markdown-body :deep(p) { color: var(--ink-2); font-size: 17px; line-height: 1.85; margin: 0 0 20px; }
.markdown-body :deep(ul), .markdown-body :deep(ol) { color: var(--ink-2); padding-left: 24px; margin: 14px 0 24px; }
.markdown-body :deep(li) { margin: 8px 0; padding-left: 4px; }
.markdown-body :deep(a) { color: var(--copper); border-bottom: 1px solid color-mix(in srgb, var(--copper) 45%, transparent); }
.markdown-body :deep(code) { font-family: var(--font-mono); font-size: .88em; background: var(--surface-2); border: 1px solid var(--hairline); border-radius: 6px; padding: 2px 6px; }
.markdown-body :deep(pre) { margin: 26px 0; padding: 20px; overflow-x: auto; border: 1px solid var(--hairline); border-radius: 8px; background: var(--surface); }
.markdown-body :deep(pre code) { display: block; padding: 0; border: none; border-radius: 0; background: transparent; color: var(--ink-2); line-height: 1.7; }
.markdown-body :deep(table) { width: 100%; border-collapse: collapse; margin: 28px 0; overflow: hidden; font-size: 15px; }
.markdown-body :deep(th), .markdown-body :deep(td) { border: 1px solid var(--hairline); padding: 12px 14px; text-align: left; vertical-align: top; }
.markdown-body :deep(th) { background: var(--surface); color: var(--ink); font-weight: 600; }
.markdown-body :deep(td) { color: var(--ink-2); }

@media (max-width: 860px) {
  .reader-layout { grid-template-columns: 1fr; gap: 34px; padding-top: 36px; }
  .reader-sidebar { position: static; border-right: none; padding-right: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 18px; }
  .reader-sidebar p { grid-column: 1 / -1; }
}

@media (max-width: 560px) {
  .reader-hero { padding-top: 44px; }
  .reader-sidebar, .reader-pager { grid-template-columns: 1fr; }
}
</style>
