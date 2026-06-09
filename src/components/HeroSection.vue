<script setup>
import { site } from '../data/site.js'

const stats = [
  { num: '24', sup: '+', lbl: '开源项目' },
  { num: '180', sup: '+', lbl: '社区成员' },
  { num: '∞', sup: '', lbl: '共同进化' },
]
</script>

<template>
  <section class="hero" id="top">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <span class="hero-badge reveal in"><span class="dot"></span>Open Source Community</span>
        <h1 class="reveal in d1">AI empowers<br>humans.<br><em>Humans evolve AI.</em></h1>
        <p class="lead reveal in d2">CoEvolutio 是一个让<strong>人类智慧</strong>与<strong>机器智能</strong>共同进化的开源社区。我们构建工具、沉淀知识、分享思考——让两者彼此成就。</p>
        <div class="hero-cta reveal in d3">
          <a class="btn btn-primary" href="#showcase">探索成品<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <a class="btn btn-ghost" href="#docs">阅读文档</a>
        </div>
        <div class="hero-stats reveal in d4">
          <div class="stat" v-for="s in stats" :key="s.lbl">
            <div class="num">{{ s.num }}<span>{{ s.sup }}</span></div>
            <div class="lbl">{{ s.lbl }}</div>
          </div>
        </div>
      </div>

      <div class="hero-art">
        <svg viewBox="0 0 520 520" class="float" aria-hidden="true">
          <g class="spin-slow" opacity=".5">
            <circle cx="260" cy="260" r="200" fill="none" stroke="var(--hairline-2)" stroke-width="0.6"/>
            <circle cx="260" cy="260" r="150" fill="none" stroke="var(--hairline)" stroke-width="0.6"/>
            <line x1="260" y1="60" x2="260" y2="460" stroke="var(--hairline)" stroke-width="0.5"/>
            <line x1="60" y1="260" x2="460" y2="260" stroke="var(--hairline)" stroke-width="0.5"/>
          </g>
          <g class="spin-rev">
            <circle cx="370" cy="260" r="5" fill="var(--copper-l)" opacity=".5"/>
            <circle cx="150" cy="260" r="4" fill="var(--slate-3)" opacity=".5"/>
          </g>
          <path class="draw glow" d="M 260 110 A 150 150 0 1 0 115 370" fill="none" stroke="var(--copper)" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M 115 370 A 150 150 0 0 0 260 110" fill="none" stroke="var(--copper-l)" stroke-width="1.6" stroke-linecap="round" opacity=".5"/>
          <path class="draw" style="animation-delay:.3s" d="M 260 410 A 150 150 0 1 0 405 150" fill="none" stroke="var(--slate-2)" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M 405 150 A 150 150 0 0 0 260 410" fill="none" stroke="var(--slate-3)" stroke-width="1.6" stroke-linecap="round" opacity=".5"/>
          <path d="M 260 110 C 330 175, 330 345, 260 410" fill="none" stroke="var(--copper-l)" stroke-width="1.1" opacity=".5" stroke-linecap="round"/>
          <path d="M 260 410 C 190 345, 190 175, 260 110" fill="none" stroke="var(--slate-3)" stroke-width="1.1" opacity=".5" stroke-linecap="round"/>
          <circle cx="260" cy="110" r="11" fill="var(--copper)"/>
          <circle cx="260" cy="110" r="5" fill="#fff" opacity=".35"/>
          <circle cx="260" cy="410" r="11" fill="var(--slate-2)"/>
          <circle cx="260" cy="410" r="5" fill="#fff" opacity=".35"/>
          <circle cx="115" cy="370" r="6" fill="var(--copper)" opacity=".7"/>
          <circle cx="405" cy="150" r="6" fill="var(--slate-2)" opacity=".7"/>
          <circle cx="260" cy="260" r="15" fill="var(--copper-l)"/>
          <circle cx="260" cy="260" r="9" fill="var(--bg)" opacity=".9"/>
          <circle cx="260" cy="260" r="4" fill="var(--copper)"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; padding: 88px 0 96px; overflow: hidden; }
.hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 48px; align-items: center; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 11px; font-weight: 500;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--copper); background: var(--copper-xl);
  border: 1px solid color-mix(in srgb, var(--copper) 30%, transparent);
  padding: 6px 14px; border-radius: 100px; margin-bottom: 28px;
}
.hero-badge .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--copper-l); animation: pulse 2.4s infinite; }
.hero h1 { font-family: var(--font-display); font-weight: 300; font-size: clamp(40px, 6.5vw, 78px); line-height: .98; letter-spacing: -2.5px; margin-bottom: 26px; }
.hero h1 em { font-style: italic; color: var(--copper-l); }
.lead { font-size: 18px; color: var(--ink-2); max-width: 480px; line-height: 1.7; margin-bottom: 36px; }
.lead strong { color: var(--ink); font-weight: 500; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
.hero-stats { display: flex; gap: 40px; margin-top: 54px; padding-top: 32px; border-top: 1px solid var(--hairline); }
.stat .num { font-family: var(--font-display); font-size: 34px; font-weight: 400; letter-spacing: -1px; line-height: 1; }
.stat .num span { color: var(--copper-l); }
.stat .lbl { font-size: 12px; color: var(--ink-3); margin-top: 6px; letter-spacing: .3px; }

.hero-art { position: relative; display: grid; place-items: center; }
.hero-art svg { width: 100%; max-width: 420px; height: auto; overflow: visible; }
.spin-slow { transform-origin: 260px 260px; animation: spin 60s linear infinite; }
.spin-rev  { transform-origin: 260px 260px; animation: spin 90s linear infinite reverse; }
.draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: draw 2.6s var(--ease) forwards; }
.glow { filter: drop-shadow(0 0 14px color-mix(in srgb, var(--copper-l) 55%, transparent)); }

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 12px; }
  .hero-art { order: -1; max-width: 320px; margin: 0 auto 10px; }
  .hero-stats { gap: 26px; flex-wrap: wrap; }
}
@media (prefers-reduced-motion: reduce) {
  .spin-slow, .spin-rev, .draw, .hero-badge .dot { animation: none; }
}
</style>
