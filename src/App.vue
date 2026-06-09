<script setup>
import { useReveal } from './composables/useReveal.js'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import DocsSection from './components/DocsSection.vue'
import ShowcaseSection from './components/ShowcaseSection.vue'
import BlogSection from './components/BlogSection.vue'
import MembersSection from './components/MembersSection.vue'
import JoinSection from './components/JoinSection.vue'
import TheFooter from './components/TheFooter.vue'

// 全站滚动渐显
useReveal()
</script>

<template>
  <TheNav />
  <main>
    <HeroSection />
    <DocsSection />
    <ShowcaseSection />
    <BlogSection />
    <MembersSection />
    <JoinSection />
  </main>
  <TheFooter />
</template>
