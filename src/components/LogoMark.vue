<script setup>
// 共用品牌标识。颜色走 CSS 变量，动态版本用于首屏、作品卡与博客封面。
defineProps({
  size: { type: [Number, String], default: 34 },
  animated: { type: Boolean, default: false },
  variant: { type: String, default: 'default' },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    :class="['mark', `mark-${variant}`, { animated }]"
    aria-hidden="true"
  >
    <g class="rings">
      <circle cx="50" cy="50" r="42" class="ring ring-outer" />
      <circle cx="50" cy="50" r="30.5" class="ring" />
    </g>

    <path class="track track-main human-main" d="M50 8 A42 42 0 1 0 9.9 71" />
    <path class="track track-echo human-echo" d="M9.9 71 A42 42 0 0 0 50 8" />
    <path class="track track-main ai-main" d="M50 92 A42 42 0 1 0 90.1 29" />
    <path class="track track-echo ai-echo" d="M90.1 29 A42 42 0 0 0 50 92" />

    <path class="weave weave-human" d="M50 8 C69 27 69 73 50 92" />
    <path class="weave weave-ai" d="M50 92 C31 73 31 27 50 8" />

    <g class="nodes">
      <circle cx="50" cy="50" r="3.8" class="node-core-outer" />
      <circle cx="50" cy="50" r="2.3" class="node-core-bg" />
      <circle cx="50" cy="50" r=".95" class="node-core" />
    </g>

    <g v-if="animated" class="travelers">
      <circle r="1.8" class="traveler traveler-human">
        <animateMotion
          dur="9s"
          calcMode="linear"
          repeatCount="indefinite"
          path="M50 92 C69 73 69 27 50 8 A42 42 0 1 0 9.9 71 A42 42 0 0 0 50 8 C31 27 31 73 50 92 A42 42 0 1 0 90.1 29 A42 42 0 0 0 50 92"
        />
      </circle>
      <circle r="1.8" class="traveler traveler-ai">
        <animateMotion
          dur="9s"
          begin="-4.5s"
          calcMode="linear"
          repeatCount="indefinite"
          path="M50 92 C69 73 69 27 50 8 A42 42 0 1 0 9.9 71 A42 42 0 0 0 50 8 C31 27 31 73 50 92 A42 42 0 1 0 90.1 29 A42 42 0 0 0 50 92"
        />
      </circle>
    </g>
  </svg>
</template>

<style scoped>
.mark { display: block; overflow: visible; }
.ring {
  fill: none;
  stroke: var(--hairline);
  stroke-width: .22;
  opacity: .42;
}
.ring-outer { stroke: var(--hairline-2); opacity: .5; }
.track, .weave {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.track-main { stroke-width: 1.15; }
.track-echo { stroke-width: .48; opacity: .32; }
.human-main { stroke: var(--copper); }
.human-echo, .weave-human { stroke: var(--copper-l); }
.ai-main { stroke: var(--slate-2); }
.ai-echo, .weave-ai { stroke: var(--slate-3); }
.weave {
  stroke-width: .38;
  opacity: .42;
}
.mark-hero .track-main,
.mark-showcase .track-main,
.mark-cover .track-main {
  stroke-width: 1.05;
}
.mark-hero .track-echo,
.mark-showcase .track-echo,
.mark-cover .track-echo {
  stroke-width: .5;
}
.node-human { fill: var(--copper); }
.node-ai { fill: var(--slate-2); }
.node-secondary { opacity: .74; }
.node-small { opacity: .82; }
.node-core-outer { fill: var(--copper-l); }
.node-core-bg { fill: var(--bg); opacity: .9; }
.node-core { fill: var(--copper); }

.animated .rings {
  transform-origin: 50px 50px;
  animation: mark-spin 70s linear infinite;
}
.animated .node-core-outer {
  transform-origin: center;
  animation: mark-pulse 3.8s ease-in-out infinite;
}
.traveler-human { fill: var(--copper-l); }
.traveler-ai { fill: var(--slate-3); }
.traveler {
  filter: drop-shadow(0 0 2px currentColor);
  opacity: .95;
}

@keyframes mark-spin {
  to { transform: rotate(360deg); }
}
@keyframes mark-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .72; transform: scale(.92); }
}

@media (prefers-reduced-motion: reduce) {
  .animated .rings,
  .animated .orbit-human,
  .animated .orbit-ai,
  .animated .track-main,
  .animated .node-core-outer {
    animation: none;
  }
  .travelers { display: none; }
}
</style>
