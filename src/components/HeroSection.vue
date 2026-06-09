<script setup>
import { site } from '../data/site.js'
import LogoMark from './LogoMark.vue'

const stats = [
  { num: '2026', sup: '', lbl: '开始共建' },
  { num: 'Open', sup: '', lbl: '开源协作' },
  { num: 'AI', sup: '+', lbl: 'Human in loop' },
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

      <div class="hero-art reveal in d2">
        <div class="time-orbit">2026</div>
        <LogoMark :size="420" animated variant="hero" class="hero-mark" />
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

.hero-art { position: relative; display: grid; place-items: center; min-height: 420px; }
.hero-mark { width: min(100%, 420px); height: auto; filter: drop-shadow(0 26px 42px color-mix(in srgb, var(--copper-l) 16%, transparent)); }
.time-orbit {
  position: absolute;
  right: 10%;
  top: 12%;
  z-index: 1;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1.8px;
  color: var(--copper);
  border: 1px solid var(--hairline-2);
  border-radius: 100px;
  padding: 5px 12px;
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  backdrop-filter: blur(8px);
}

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 12px; }
  .hero-art { order: -1; min-height: 300px; max-width: 340px; margin: 0 auto 10px; }
  .hero-stats { gap: 26px; flex-wrap: wrap; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-badge .dot { animation: none; }
}
</style>
