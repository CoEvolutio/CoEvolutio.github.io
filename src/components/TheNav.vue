<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { site } from '../data/site.js'
import LogoMark from './LogoMark.vue'

const scrolled = ref(false)
const isDark = ref(false)

function applyTheme(dark) {
  isDark.value = dark
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  const next = !isDark.value
  applyTheme(next)
  localStorage.setItem('ce-theme', next ? 'dark' : 'light')
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  const saved = localStorage.getItem('ce-theme')
  if (saved) applyTheme(saved === 'dark')
  else applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="{ scrolled }">
    <div class="wrap nav">
      <a class="brand" href="#top" aria-label="CoEvolutio home">
        <LogoMark :size="34" />
        <span class="name">{{ site.brandName[0] }}<b>{{ site.brandName[1] }}</b></span>
      </a>
      <nav class="nav-links">
        <a v-for="item in site.nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
      <div class="nav-right">
        <button class="theme-toggle" @click="toggleTheme" aria-label="切换主题">
          <svg v-if="!isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>
        </button>
        <a class="nav-join" :href="site.githubUrl" target="_blank" rel="noopener">加入我们</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky; top: 0; z-index: 100;
  backdrop-filter: blur(14px) saturate(1.4);
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  border-bottom: 1px solid transparent;
  transition: border-color .4s var(--ease), background .4s var(--ease);
}
header.scrolled { border-bottom-color: var(--hairline); }
.nav { display: flex; align-items: center; justify-content: space-between; height: 70px; }
.brand { display: flex; align-items: center; gap: 12px; }
.brand .name { font-family: var(--font-display); font-weight: 400; font-size: 21px; letter-spacing: -.5px; }
.brand .name b { font-weight: 400; color: var(--copper-l); }
.nav-links { display: flex; align-items: center; gap: 34px; }
.nav-links a { font-size: 14px; color: var(--ink-3); position: relative; transition: color .25s; padding: 4px 0; }
.nav-links a::after { content: ""; position: absolute; left: 0; bottom: -2px; width: 0; height: 1.5px; background: var(--copper); transition: width .3s var(--ease); }
.nav-links a:hover { color: var(--ink); }
.nav-links a:hover::after { width: 100%; }
.nav-right { display: flex; align-items: center; gap: 16px; }
.theme-toggle { width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--hairline-2); background: transparent; display: grid; place-items: center; cursor: pointer; color: var(--ink-2); transition: all .3s var(--ease); }
.theme-toggle:hover { border-color: var(--copper); color: var(--copper); transform: rotate(18deg); }
.theme-toggle svg { width: 17px; height: 17px; }
.nav-join { font-size: 13px; font-weight: 500; padding: 9px 18px; border-radius: 100px; background: var(--ink); color: var(--bg); transition: all .3s var(--ease); }
html[data-theme="dark"] .nav-join { background: var(--copper-l); color:#14110E; }
.nav-join:hover { transform: translateY(-2px); }
@media (max-width: 900px) { .nav-links { display: none; } }
</style>
