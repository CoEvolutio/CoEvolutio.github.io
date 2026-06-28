<script setup>
import { computed, ref } from 'vue'
import { docArticles } from '../content/docs.js'

const activeCategory = ref('全部')
const categories = computed(() => ['全部', ...new Set(docArticles.map((doc) => doc.cat))])
const visibleDocs = computed(() => (
  activeCategory.value === '全部'
    ? docArticles
    : docArticles.filter((doc) => doc.cat === activeCategory.value)
))
const featuredDoc = computed(() => visibleDocs.value[0])
const archiveDocs = computed(() => visibleDocs.value.slice(1))
</script>

<template>
  <section class="docs-center block" id="docs">
    <div class="wrap">
      <div class="docs-head reveal">
        <div>
          <span class="eyebrow">文档中心 · Articles</span>
          <h2 class="sec-title">写作、笔记与<em>方法沉淀</em></h2>
        </div>
        <p>{{ docArticles.length }} 篇文章</p>
      </div>

      <div v-if="categories.length > 2" class="docs-toolbar reveal d1">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: category === activeCategory }"
          type="button"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div v-if="featuredDoc" class="article-layout reveal d2">
        <a class="feature-article" :href="`#/docs/${featuredDoc.slug}`">
          <div class="feature-copy">
            <div class="article-kicker">
              <span>{{ featuredDoc.cat }}</span>
              <span v-if="featuredDoc.date">{{ featuredDoc.date }}</span>
              <span>{{ featuredDoc.readingTime }}</span>
            </div>
            <h3>{{ featuredDoc.title }}</h3>
            <p>{{ featuredDoc.desc }}</p>
          </div>
          <span class="feature-arrow">阅读全文 →</span>
        </a>

        <div v-if="archiveDocs.length" class="archive-list">
          <a v-for="doc in archiveDocs" :key="doc.slug" class="archive-row" :href="`#/docs/${doc.slug}`">
            <div>
              <div class="article-kicker">
                <span>{{ doc.cat }}</span>
                <span v-if="doc.date">{{ doc.date }}</span>
              </div>
              <h3>{{ doc.title }}</h3>
              <p>{{ doc.desc }}</p>
            </div>
            <span>→</span>
          </a>
        </div>

        <div v-else class="empty-note">
          <span>Archive</span>
          <p>新的 Markdown 文章会继续排列在这里。</p>
        </div>
      </div>

      <div v-else class="empty-note reveal d2">
        <span>Archive</span>
        <p>文档中心会在这里展示文章。</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.docs-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 32px;
  align-items: end;
  margin-bottom: 34px;
}

.docs-head .sec-title {
  margin-bottom: 0;
}

.docs-head > p {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--ink-3);
  white-space: nowrap;
  padding-bottom: 8px;
}

.docs-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.docs-toolbar button {
  border: 1px solid var(--hairline-2);
  background: transparent;
  color: var(--ink-3);
  border-radius: 100px;
  padding: 8px 14px;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: border-color .25s var(--ease), color .25s var(--ease), background .25s var(--ease);
}

.docs-toolbar button:hover,
.docs-toolbar button.active {
  border-color: var(--copper);
  color: var(--copper);
  background: var(--copper-xl);
}

.article-layout {
  display: grid;
  grid-template-columns: minmax(0, .95fr) minmax(280px, .55fr);
  gap: 22px;
  align-items: stretch;
}

.feature-article {
  min-height: 300px;
  border: 1px solid var(--hairline);
  border-radius: 8px;
  padding: clamp(28px, 4vw, 46px);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--surface) 90%, transparent), color-mix(in srgb, var(--surface-2) 70%, transparent)),
    radial-gradient(circle at 86% 12%, color-mix(in srgb, var(--copper-l) 12%, transparent), transparent 35%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: border-color .25s var(--ease), transform .25s var(--ease);
}

.feature-article:hover {
  border-color: color-mix(in srgb, var(--copper) 55%, var(--hairline));
  transform: translateY(-3px);
}

.article-kicker {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .9px;
  text-transform: uppercase;
  color: var(--copper);
}

.feature-copy h3 {
  font-family: var(--font-display);
  font-weight: 320;
  font-size: clamp(36px, 5vw, 62px);
  line-height: 1.04;
  letter-spacing: -.5px;
  margin-bottom: 16px;
}

.feature-copy p {
  color: var(--ink-3);
  font-size: 17px;
  line-height: 1.75;
  max-width: 620px;
}

.feature-arrow {
  width: max-content;
  margin-top: 42px;
  font-size: 14px;
  color: var(--copper);
  transition: transform .25s var(--ease);
}

.feature-article:hover .feature-arrow {
  transform: translateX(5px);
}

.archive-list {
  border: 1px solid var(--hairline);
  border-radius: 8px;
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  overflow: hidden;
}

.archive-row {
  min-height: 142px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 22px;
  gap: 18px;
  align-items: center;
  padding: 22px;
  border-bottom: 1px solid var(--hairline);
  transition: background .25s var(--ease);
}

.archive-row:last-child {
  border-bottom: 0;
}

.archive-row:hover {
  background: var(--surface-2);
}

.archive-row h3 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 380;
  line-height: 1.2;
  margin-bottom: 8px;
  transition: color .25s var(--ease);
}

.archive-row:hover h3,
.archive-row:hover > span {
  color: var(--copper);
}

.archive-row p {
  color: var(--ink-3);
  font-size: 14px;
  line-height: 1.6;
}

.archive-row > span {
  color: var(--ink-3);
  transition: color .25s var(--ease), transform .25s var(--ease);
}

.archive-row:hover > span {
  transform: translateX(3px);
}

.empty-note {
  border: 1px dashed var(--hairline-2);
  border-radius: 8px;
  padding: 28px;
  background: color-mix(in srgb, var(--surface) 48%, transparent);
  align-self: stretch;
}

.empty-note span {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--copper);
  margin-bottom: 10px;
}

.empty-note p {
  color: var(--ink-3);
  font-size: 15px;
}

@media (max-width: 900px) {
  .article-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .docs-head {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .docs-head > p {
    padding-bottom: 0;
  }

  .feature-article {
    min-height: 240px;
  }
}
</style>
