---
repo: "kejiland/qingyu-blog"
name: "qingyu-blog"
description: "零框架零依赖的个人博客系统 — 双击 index.html 即用，支持 Cloudflare Workers + D1 云端部署"
readmeQualityOk: true
url: "https://github.com/kejiland/qingyu-blog"
homepage: "https://kejiland.azhz.workers.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
topics: ["blog", "cloudflare-d1", "cloudflare-pages", "cloudflare-workers", "dark-theme", "end-to-end-encryption", "i18n", "javascript", "lightweight", "markdown-blog"]
stars: 44
forks: 23
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-20T04:39:21Z"
lastCommitAt: "2026-09-13T08:29:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 60
undervaluedScore: 35
maintainers: ["kejiland"]
openGraphImageUrl: "https://opengraph.githubassets.com/82da26cc64e9adcbec5fa3f6309c6ad660cc322f5144047bea15ecf49807fb3d/kejiland/qingyu-blog"
discussionCount: 0
---

</p>

<h1 align="center">Qingyu'Blog</h1>

  <b>零框架 · 零构建 · 零依赖 —— 双击 index.html 就能用的个人博客</b>
</p>

  </a>
</p>

  </a>
  </a>
  </a>
  </a>
</p>

  </a>
</p>

---

## 📖 项目介绍

Qingyu'Blog（轻语博客）是一个**纯原生 JavaScript** 编写的个人博客系统，不依赖任何前端框架（React / Vue / Svelte）和构建工具（Webpack / Vite）。

它支持两种运行模式：

| 模式 | 说明 | 适用场景 |
| --- | --- | --- |
| **静态模式** | 双击 `public/index.html` 即可使用，数据存浏览器 localStorage | 本地写作、临时预览 |
| **云端模式** | 部署到 Cloudflare Workers + D1，数据存云端数据库 | 正式发布、多人访问 |

整个博客本体就在 `public/` 目录：前台 `index.html` + `style.css` + `app.js` + `posts.js` + `music-player.js`，后台 `admin.js` + `admin.css`，国际化 `i18n.js` + `locales/`。无需任何第三方运行时依赖。

> 💡 仓库根目录的 `index.html` 只是一个跳转页，会自动打开 `public/index.html`（Cloudflare Pages / Workers 的部署目录）。本地双击 `public/index.html` 同样可用。

---

## ✅ 优点

| 优点 | 说明 |
| --- | --- |
| **零门槛** | 不需要 Node.js、不需要 npm、不需要构建，双击即可运行 |
| **零成本** | Cloudflare Workers + D1 免费额度完全够个人博客使用 |
| **零依赖** | 不引入任何第三方库，代码量可控，加载极快 |
| **零锁定** | 文章是 Markdown 文件，随时可以迁移到任何平台 |
| **双通道** | 静态导出 + 云端 API，同一份代码两种部署方式 |
| **响应式** | 前台 + 后台均支持手机 / 平板 / 桌面全适配 |
| **多语言** | 内置中文 / English / 日本語 / 한국어 / हिन्दी 五语界面，自动识别浏览器语言 |
| **衬线美学** | 书卷风宋体排版（正文 / 标题 / 引用装饰统一走系统宋体与仿宋），零 webfont，阅读舒适且加载最快 |
|…
