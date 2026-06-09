<script setup>
import { posts, featuredPost, blogIntro } from '../data/blog.js'
import LogoMark from './LogoMark.vue'

const pad = (n) => String(n + 1).padStart(2, '0')
</script>

<template>
  <section class="block" id="blog">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow">{{ blogIntro.eyebrow }}</span>
        <h2 class="sec-title">{{ blogIntro.title[0] }}<em>{{ blogIntro.title[1] }}</em>{{ blogIntro.title[2] }}</h2>
        <p class="sec-desc">{{ blogIntro.desc }}</p>
      </div>
      <div class="blog-grid">
        <article class="blog-feat reveal">
          <a class="img" :href="featuredPost.href">
            <LogoMark :size="220" class="float cover-mark" />
          </a>
          <div class="body">
            <span class="blog-cat">{{ featuredPost.cat }}</span>
            <h3>{{ featuredPost.title }}</h3>
            <p>{{ featuredPost.excerpt }}</p>
            <div class="blog-by"><span class="av">{{ featuredPost.avatar }}</span><span>{{ featuredPost.meta }}</span></div>
          </div>
        </article>
        <div class="blog-list reveal d1">
          <a v-for="(p, i) in posts" :key="p.title" class="blog-item" :href="p.href">
            <span class="idx">{{ pad(i) }}</span>
            <div>
              <h4>{{ p.title }}</h4>
              <div class="m">{{ p.meta }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: start; }
.blog-feat { border-radius: 18px; overflow: hidden; }
.blog-feat .img { height: 300px; background: radial-gradient(120% 120% at 70% 20%, var(--slate-2), var(--slate)); position: relative; display: grid; place-items: center; overflow: hidden; }
.blog-feat .img::before { content:""; position:absolute; width:340px; height:340px; border-radius:50%; background: radial-gradient(circle, color-mix(in srgb, var(--copper-l) 28%, transparent), transparent 62%); top:-90px; right:-70px; }
/* 深底封面：局部覆盖 Logo 配色，让 AI 弧与环线在深色上可见 */
.cover-mark { position: relative; --slate-2: #94A3B8; --slate-3: #CBD5E1; --hairline: rgba(255,255,255,.14); --hairline-2: rgba(255,255,255,.22); --copper: #D97706; --copper-l: #F59E0B; --bg: #1E293B; }
.blog-feat .body { padding: 28px 4px 0; }
.blog-cat { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--copper); }
.blog-feat h3 { font-family: var(--font-display); font-weight: 300; font-size: 32px; line-height: 1.12; letter-spacing: -.8px; margin: 14px 0 12px; }
.blog-feat p { font-size: 15px; color: var(--ink-3); line-height: 1.7; margin-bottom: 18px; max-width: 540px; }
.blog-by { display: flex; align-items: center; gap: 11px; font-size: 13px; color: var(--ink-3); }
.blog-by .av { width: 30px; height: 30px; border-radius: 50%; background: var(--copper-xl); color: var(--copper); display: grid; place-items: center; font-weight: 600; font-size: 12px; font-family: var(--font-display); }
.blog-list { display: flex; flex-direction: column; }
.blog-item { padding: 24px 0; border-bottom: 1px solid var(--hairline); display: flex; gap: 20px; cursor: pointer; transition: padding-left .3s var(--ease); }
.blog-item:first-child { padding-top: 0; }
.blog-item:hover { padding-left: 8px; }
.blog-item .idx { font-family: var(--font-mono); font-size: 12px; color: var(--copper); padding-top: 4px; }
.blog-item h4 { font-family: var(--font-display); font-weight: 400; font-size: 18px; line-height: 1.3; letter-spacing: -.3px; margin-bottom: 6px; transition: color .25s; }
.blog-item:hover h4 { color: var(--copper-l); }
.blog-item .m { font-family: var(--font-mono); font-size: 11px; color: var(--ink-3); letter-spacing: .5px; }

@media (max-width: 900px) {
  .blog-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>
