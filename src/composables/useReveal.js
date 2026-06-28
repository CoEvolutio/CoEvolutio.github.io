import { onMounted, onBeforeUnmount } from 'vue'

// 进入视口时给 .reveal 元素加 .in，触发渐显动画。
// 在挂载后扫描整个文档，组件无需各自持有 observer。
let observer = null
let count = 0

function ensureObserver() {
  if (observer) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
}

export function refreshReveal(root = document) {
  ensureObserver()
  requestAnimationFrame(() => {
    root.querySelectorAll('.reveal:not(.in)').forEach((el) => observer.observe(el))
  })
}

export function revealNow(root = document) {
  root.querySelectorAll('.reveal:not(.in)').forEach((el) => {
    el.classList.add('in')
    observer?.unobserve(el)
  })
}

export function useReveal() {
  onMounted(() => {
    ensureObserver()
    count++
    refreshReveal()
  })

  onBeforeUnmount(() => {
    count--
    if (count === 0 && observer) {
      observer.disconnect()
      observer = null
    }
  })
}
