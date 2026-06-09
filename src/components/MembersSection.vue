<script setup>
import { members, membersIntro } from '../data/members.js'

// 头像 reveal 错位延迟循环
const delays = ['', 'd1', 'd2', 'd3']
</script>

<template>
  <section class="block" id="members">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow">{{ membersIntro.eyebrow }}</span>
        <h2 class="sec-title">{{ membersIntro.title[0] }}<em>{{ membersIntro.title[1] }}</em>{{ membersIntro.title[2] }}</h2>
        <p class="sec-desc">{{ membersIntro.desc }}</p>
      </div>
      <div class="mem-grid">
        <div v-for="(m, i) in members" :key="m.name" class="mem-card reveal" :class="delays[i % 4]">
          <div class="mem-av" :style="{ background: m.gradient }">{{ m.avatar }}</div>
          <h4>{{ m.name }}</h4>
          <div class="role">{{ m.role }}</div>
          <p class="bio">{{ m.bio }}</p>
          <div class="mem-tags"><span v-for="t in m.tags" :key="t">{{ t }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mem-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.mem-card { border: 1px solid var(--hairline); border-radius: 16px; padding: 28px 24px; background: var(--surface); text-align: center; position: relative; overflow: hidden; transition: transform .35s var(--ease), border-color .35s, box-shadow .35s; }
.mem-card:hover { transform: translateY(-5px); border-color: var(--copper); box-shadow: 0 18px 40px -22px rgba(180,83,9,.4); }
.mem-av { width: 76px; height: 76px; border-radius: 50%; margin: 0 auto 16px; display: grid; place-items: center; font-family: var(--font-display); font-size: 27px; font-weight: 400; color: #fff; position: relative; }
.mem-av::after { content:""; position:absolute; inset:-4px; border-radius:50%; border:1px solid var(--hairline-2); }
.mem-card h4 { font-family: var(--font-display); font-weight: 500; font-size: 18px; letter-spacing: -.2px; }
.mem-card .role { font-size: 13px; color: var(--copper); margin: 3px 0 14px; font-family: var(--font-mono); letter-spacing: .3px; }
.mem-card .bio { font-size: 13px; color: var(--ink-3); line-height: 1.6; min-height: 42px; }
.mem-tags { display: flex; gap: 6px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
.mem-tags span { font-size: 10px; font-family: var(--font-mono); padding: 3px 9px; border-radius: 100px; background: var(--surface-2); color: var(--ink-3); border: 1px solid var(--hairline); }

@media (max-width: 900px) { .mem-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .mem-grid { grid-template-columns: 1fr; } }
</style>
