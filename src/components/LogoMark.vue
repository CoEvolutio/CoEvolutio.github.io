<script setup>
// 复刻自原始品牌 SVG 的轨道双螺旋标识。颜色全部走 CSS 变量，
// 因此在浅色/深色/博客深底等不同上下文下可被局部覆盖。
defineProps({ size: { type: [Number, String], default: 34 } })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100" class="mark" aria-hidden="true">
    <!-- 装饰环 -->
    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--hairline-2)" stroke-width="0.6"/>
    <circle cx="50" cy="50" r="30" fill="none" stroke="var(--hairline)" stroke-width="0.6"/>
    <!-- 人类弧（铜）— 左上轨道 -->
    <path d="M50 8 A42 42 0 1 0 17 67" fill="none" stroke="var(--copper)" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M17 67 A42 42 0 0 0 50 8" fill="none" stroke="var(--copper-l)" stroke-width="1.3" stroke-linecap="round" opacity="0.45"/>
    <!-- AI 弧（slate）— 右下轨道 -->
    <path d="M50 92 A42 42 0 1 0 83 33" fill="none" stroke="var(--slate-2)" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M83 33 A42 42 0 0 0 50 92" fill="none" stroke="var(--slate-3)" stroke-width="1.3" stroke-linecap="round" opacity="0.45"/>
    <!-- 内部交织（彼此牵引） -->
    <path d="M50 8 C65 30,65 70,50 92" fill="none" stroke="var(--copper-l)" stroke-width="0.9" opacity="0.55" stroke-linecap="round"/>
    <path d="M50 92 C35 70,35 30,50 8" fill="none" stroke="var(--slate-3)" stroke-width="0.9" opacity="0.55" stroke-linecap="round"/>
    <!-- 主节点 -->
    <circle cx="50" cy="8"  r="5.5" fill="var(--copper)"/>
    <circle cx="50" cy="8"  r="2.5" fill="#fff" opacity="0.3"/>
    <circle cx="50" cy="92" r="5.5" fill="var(--slate-2)"/>
    <circle cx="50" cy="92" r="2.5" fill="#fff" opacity="0.3"/>
    <!-- 副节点 -->
    <circle cx="17" cy="67" r="3.5" fill="var(--copper)" opacity="0.7"/>
    <circle cx="83" cy="33" r="3.5" fill="var(--slate-2)" opacity="0.7"/>
    <!-- 中心交汇 -->
    <circle cx="50" cy="50" r="7" fill="var(--copper-l)"/>
    <circle cx="50" cy="50" r="4.3" fill="var(--bg)" opacity="0.85"/>
    <circle cx="50" cy="50" r="2" fill="var(--copper)"/>
  </svg>
</template>

<style scoped>
.mark { display: block; }
</style>
