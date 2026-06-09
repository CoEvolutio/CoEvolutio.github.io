<script setup>
import { site } from '../data/site.js'
</script>

<template>
  <section class="join">
    <div class="wrap">
      <span class="eyebrow reveal">加入我们 · Join</span>
      <h2 class="reveal d1">和我们一起,<br><em>共同进化。</em></h2>
      <p class="reveal d2">无论你是工程师、研究者、设计师，还是单纯的好奇者——这里都有你的位置。开源,开放,共建。</p>
      <div class="join-cta reveal d3">
        <a class="btn btn-primary" :href="site.githubUrl" target="_blank" rel="noopener">前往 GitHub<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <a class="btn btn-ghost" href="#docs">阅读宣言</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.join { position: relative; padding: 110px 0; text-align: center; overflow: hidden; border-top: 1px solid var(--hairline); }
.join::before { content: ""; position: absolute; inset: 0; z-index: -1; background: radial-gradient(ellipse 60% 80% at 50% 0%, var(--copper-xl), transparent 70%); opacity: .7; }
.join .eyebrow { justify-content: center; }
.join h2 { font-family: var(--font-display); font-weight: 300; font-size: clamp(34px, 6vw, 62px); letter-spacing: -1.5px; line-height: 1.04; margin: 20px 0 18px; }
.join h2 em { font-style: italic; color: var(--copper-l); }
.join p { font-size: 17px; color: var(--ink-2); max-width: 480px; margin: 0 auto 34px; }
.join-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
</style>
