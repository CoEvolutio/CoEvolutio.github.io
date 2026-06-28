<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { refreshReveal, revealNow, useReveal } from './composables/useReveal.js'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import DocsSection from './components/DocsSection.vue'
import ShowcaseSection from './components/ShowcaseSection.vue'
import BlogSection from './components/BlogSection.vue'
import MembersSection from './components/MembersSection.vue'
import JoinSection from './components/JoinSection.vue'
import DocReader from './components/DocReader.vue'
import TheFooter from './components/TheFooter.vue'

// 全站滚动渐显
useReveal()

const hash = ref(window.location.hash)
const docSlug = computed(() => {
  const match = hash.value.match(/^#\/docs\/([^#?]+)/)
  return match ? decodeURIComponent(match[1]) : ''
})
const isDocRoute = computed(() => Boolean(docSlug.value))

function syncHash() {
  hash.value = window.location.hash
}

async function scrollToRouteTarget(nextHash) {
  await nextTick()
  refreshReveal()

  const docAnchor = /^#\/docs\/[^#?]+#(.+)$/.exec(nextHash)
  if (docAnchor) {
    const target = document.getElementById(decodeURIComponent(docAnchor[1]))
    target?.scrollIntoView()
    return
  }

  if (!nextHash.startsWith('#/docs/') && nextHash.length > 1) {
    const target = document.getElementById(nextHash.slice(1))
    target?.scrollIntoView()
    if (target) revealNow(target)
    return
  }

  window.scrollTo({ top: 0, behavior: 'auto' })
}

watch(hash, scrollToRouteTarget)

onMounted(() => {
  window.addEventListener('hashchange', syncHash)
  scrollToRouteTarget(hash.value)
})

onBeforeUnmount(() => window.removeEventListener('hashchange', syncHash))
</script>

<template>
  <TheNav />
  <DocReader v-if="isDocRoute" :slug="docSlug" />
  <main v-else>
    <HeroSection />
    <DocsSection />
    <ShowcaseSection />
    <BlogSection />
    <MembersSection />
    <JoinSection />
  </main>
  <TheFooter />
</template>
