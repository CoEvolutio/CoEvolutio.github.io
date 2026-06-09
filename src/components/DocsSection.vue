<script setup>
import { docs, docsIntro } from '../data/docs.js'
</script>

<template>
  <section class="block" id="docs">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow">{{ docsIntro.eyebrow }}</span>
        <h2 class="sec-title">{{ docsIntro.title[0] }}<em>{{ docsIntro.title[1] }}</em>{{ docsIntro.title[2] }}</h2>
        <p class="sec-desc">{{ docsIntro.desc }}</p>
      </div>
      <div class="docs-grid reveal d1">
        <a v-for="d in docs" :key="d.title" class="doc-card" :href="d.href">
          <div class="doc-ic" :class="d.tone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" v-html="d.icon"></svg>
          </div>
          <h3>{{ d.title }}</h3>
          <p>{{ d.desc }}</p>
          <div class="doc-meta"><span>{{ d.count }}</span> · <span>{{ d.cat }}</span><span class="arrow">→</span></div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.docs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--hairline); border-radius: 18px; overflow: hidden; background: var(--surface); }
.doc-card { padding: 36px 32px; border-right: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline); transition: background .35s var(--ease); position: relative; cursor: pointer; }
.doc-card:hover { background: var(--surface-2); }
.doc-card::after { content:""; position:absolute; left:0; top:0; width:2px; height:0; background: var(--copper); transition: height .35s var(--ease); }
.doc-card:hover::after { height: 100%; }
.docs-grid .doc-card:nth-child(3n) { border-right: none; }
.docs-grid .doc-card:nth-last-child(-n+3) { border-bottom: none; }
.doc-ic { width: 42px; height: 42px; border-radius: 11px; display: grid; place-items: center; margin-bottom: 20px; background: var(--copper-xl); color: var(--copper); }
.doc-ic.slate { background: var(--slate-xl); color: var(--slate-2); }
html[data-theme="dark"] .doc-ic.slate { color: var(--slate-3); }
.doc-ic svg { width: 20px; height: 20px; }
.doc-card h3 { font-family: var(--font-display); font-weight: 400; font-size: 21px; letter-spacing: -.3px; margin-bottom: 8px; }
.doc-card p { font-size: 14px; color: var(--ink-3); line-height: 1.6; margin-bottom: 18px; }
.doc-meta { font-family: var(--font-mono); font-size: 11px; color: var(--ink-3); letter-spacing: .5px; display: flex; align-items: center; gap: 7px; }
.doc-meta .arrow { margin-left: auto; color: var(--copper); transition: transform .3s var(--ease); }
.doc-card:hover .doc-meta .arrow { transform: translateX(4px); }

@media (max-width: 900px) {
  .docs-grid { grid-template-columns: 1fr 1fr; }
  .docs-grid .doc-card:nth-child(3n) { border-right: 1px solid var(--hairline); }
  .docs-grid .doc-card:nth-child(2n) { border-right: none; }
}
@media (max-width: 560px) {
  .docs-grid { grid-template-columns: 1fr; }
  .docs-grid .doc-card { border-right: none !important; }
}
</style>
