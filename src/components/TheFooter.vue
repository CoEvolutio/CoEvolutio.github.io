<script setup>
import { site } from '../data/site.js'
import LogoMark from './LogoMark.vue'
const f = site.footer
</script>

<template>
  <footer>
    <div class="wrap">
      <div class="foot">
        <div class="foot-brand">
          <div class="row"><LogoMark :size="30" /><span class="name">{{ site.brandName[0] }}<b>{{ site.brandName[1] }}</b></span></div>
          <p>{{ f.tagline }}</p>
        </div>
        <div class="foot-cols">
          <div class="foot-col" v-for="col in f.columns" :key="col.title">
            <h5>{{ col.title }}</h5>
            <a
              v-for="link in col.links"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener' : undefined"
            >{{ link.label }}</a>
          </div>
        </div>
      </div>
      <div class="foot-base">
        <span>{{ f.copyright }}</span>
        <span>{{ f.madeBy }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer { border-top: 1px solid var(--hairline); padding: 48px 0 40px; }
.foot { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; flex-wrap: wrap; }
.foot-brand { max-width: 280px; }
.foot-brand .row { display: flex; align-items: center; gap: 11px; margin-bottom: 14px; }
.foot-brand .row .name { font-family: var(--font-display); font-size: 19px; }
.foot-brand .row .name b { font-weight: 400; color: var(--copper-l); }
.foot-brand p { font-size: 13px; color: var(--ink-3); line-height: 1.6; }
.foot-cols { display: flex; gap: 64px; flex-wrap: wrap; }
.foot-col h5 { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-3); margin-bottom: 16px; }
.foot-col a { display: block; font-size: 14px; color: var(--ink-2); margin-bottom: 11px; transition: color .25s, padding-left .25s; }
.foot-col a:hover { color: var(--copper); padding-left: 4px; }
.foot-base { margin-top: 44px; padding-top: 26px; border-top: 1px solid var(--hairline); display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; font-size: 12px; color: var(--ink-3); font-family: var(--font-mono); letter-spacing: .3px; }
</style>
