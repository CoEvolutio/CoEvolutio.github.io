# CoEvolutio.github.io

CoEvolutio 开源社区官网 — 基于 **Vue 3 + Vite** 的组件化静态站点。
AI empowers humans, humans evolve AI.

## 本地开发

```bash
npm install      # 安装依赖（首次）
npm run dev      # 启动开发服务器（默认 http://localhost:5173）
npm run build    # 构建到 dist/
npm run preview  # 本地预览构建产物
```

## 目录结构

```
index.html                 Vite 入口（仅挂载点 + 字体）
vite.config.js             base 设为 '/'（组织主站根路径）
src/
├─ main.js                 应用入口
├─ App.vue                 页面装配
├─ styles/tokens.css       设计令牌 + 共享原子类（改配色看这里）
├─ composables/useReveal.js  滚动渐显
├─ content/
│  ├─ docs.js              自动收集 Markdown 文档
│  └─ docs/                ★ 博客 / 文档 Markdown 放这里
├─ data/                   ★ 站点其他内容数据
│  ├─ site.js              品牌 / 导航 / 页脚 / GitHub 链接
│  ├─ showcase.js          成品展示
│  ├─ blog.js              博客文章
│  └─ members.js           成员
└─ components/             ★ 改某一板块的结构/样式只动对应文件
   ├─ LogoMark.vue         轨道双螺旋 Logo（复用）
   ├─ TheNav.vue           导航 + 主题切换
   ├─ HeroSection.vue      首屏
   ├─ DocsSection.vue      文档中心
   ├─ DocReader.vue        Markdown 阅读页
   ├─ ShowcaseSection.vue  成品展示
   ├─ BlogSection.vue      博客
   ├─ MembersSection.vue   成员
   ├─ JoinSection.vue      加入我们
   └─ TheFooter.vue        页脚
```

**怎么改：** 加一篇文档 / 博客 = 在 `src/content/docs/` 放一个 `.md` 文件；
换配色 = 改 `src/styles/tokens.css` 顶部的变量；
改某板块布局 = 只动对应的 `*.vue` 文件。

## 文档中心

文档中心会自动扫描 `src/content/docs/*.md`，生成首页列表、分类筛选和独立阅读页。地址形式为 `#/docs/文件名`，适合 GitHub Pages 这种纯静态部署。

新增或修改文档：

1. 在 `src/content/docs/` 新增或编辑 `.md` 文件。
2. 文件名就是访问地址，例如 `my-first-post.md` 对应 `#/docs/my-first-post`。
3. 可选：在文件顶部写 frontmatter 控制标题、描述、分类和日期。

```md
---
title: 我的第一篇博客
description: 这篇文章会显示在文档中心列表中。
category: 随笔
date: 2026-06-28
---

# 我的第一篇博客

正文从这里开始。
```

当前渲染支持标题、段落、无序/有序列表、表格、代码块、行内代码和链接。

## 部署（GitHub Pages，自动）

已配置 `.github/workflows/deploy.yml`：每次 push 到 `main` 自动构建并发布。

**首次需要做一次设置：**
1. 打开仓库 → **Settings → Pages**
2. **Source** 选择 **GitHub Actions**（不要再选 "Deploy from a branch"）
3. 之后 push 到 `main` 即自动部署到 https://coevolutio.github.io

> 旧的单文件版本保留在 git 历史中（首次提交 `557e4f6`），如需回退可查阅。
