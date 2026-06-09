import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 组织主站仓库（CoEvolutio.github.io）部署在根路径，base 用 '/'
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
