<script setup>
import { showcase, showcaseIntro } from '../data/showcase.js'
import LogoMark from './LogoMark.vue'

// reveal 错位延迟：第 2、4、5 张卡分别加 d1 / d1 / d2（沿用原稿节奏）
const delays = ['', 'd1', '', 'd1', 'd2']
</script>

<template>
  <section class="block" id="showcase">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow">{{ showcaseIntro.eyebrow }}</span>
        <h2 class="sec-title">{{ showcaseIntro.title[0] }}<em>{{ showcaseIntro.title[1] }}</em>{{ showcaseIntro.title[2] }}</h2>
        <p class="sec-desc">{{ showcaseIntro.desc }}</p>
      </div>
      <div class="show-grid">
        <article
          v-for="(item, i) in showcase"
          :key="item.title"
          class="show-card reveal"
          :class="[item.size, delays[i]]"
        >
          <div class="show-visual">
            <span class="show-tag">{{ item.tag }}</span>
            <LogoMark v-if="item.useMark" :size="100" animated variant="showcase" class="show-mark" />
            <svg v-else viewBox="0 0 24 24" fill="none" :stroke="item.iconStroke" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" v-html="item.icon"></svg>
          </div>
          <div class="show-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="show-foot">
              <span class="pill" v-for="(s, j) in item.stats" :key="j">{{ s.label }} <b v-if="s.value">{{ s.value }}</b></span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.show-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 22px; }
.show-card { border: 1px solid var(--hairline); border-radius: 16px; overflow: hidden; background: var(--surface); position: relative; transition: transform .4s var(--ease), box-shadow .4s var(--ease), border-color .4s; display: flex; flex-direction: column; }
.show-card:hover { transform: translateY(-6px); box-shadow: 0 22px 48px -24px rgba(28,25,23,.4); border-color: var(--hairline-2); }
.show-card.feat { grid-column: span 7; }
.show-card.half { grid-column: span 5; }
.show-card.third { grid-column: span 4; }
.show-visual { height: 200px; position: relative; overflow: hidden; display: grid; place-items: center; background: linear-gradient(135deg, var(--sand-2), var(--surface)); }
.show-card.feat .show-visual { height: 280px; }
.show-visual > svg, .show-visual :deep(.mark) { width: 56%; height: 56%; opacity: .92; transition: transform .6s var(--ease); }
.show-visual :deep(.show-mark) { width: 68%; height: 68%; max-width: 200px; max-height: 200px; }
.show-card:hover .show-visual > svg, .show-card:hover .show-visual :deep(.mark) { transform: scale(1.06) rotate(2deg); }
.show-tag { position: absolute; top: 14px; left: 14px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 100px; background: color-mix(in srgb, var(--bg) 80%, transparent); backdrop-filter: blur(6px); color: var(--copper); border: 1px solid var(--hairline); z-index: 1; }
.show-body { padding: 22px 24px 26px; }
.show-body h3 { font-family: var(--font-display); font-weight: 400; font-size: 22px; letter-spacing: -.4px; margin-bottom: 8px; }
.show-body p { font-size: 14px; color: var(--ink-3); line-height: 1.6; margin-bottom: 16px; }
.show-foot { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-family: var(--font-mono); font-size: 11px; color: var(--ink-3); }
.show-foot .pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border: 1px solid var(--hairline); border-radius: 100px; background: var(--surface-2); }
.show-foot .pill b { color: var(--ink-2); font-weight: 500; }

@media (max-width: 900px) {
  .show-card.feat, .show-card.half, .show-card.third { grid-column: span 6; }
}
@media (max-width: 560px) {
  .show-card.feat, .show-card.half, .show-card.third { grid-column: span 12; }
}
</style>
