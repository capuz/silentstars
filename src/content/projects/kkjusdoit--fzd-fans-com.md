---
repo: "kkjusdoit/fzd-fans.com"
name: "fzd-fans.com"
description: "「樊振东的互联网档案馆（Unofficial）」"
readmeQualityOk: true
url: "https://github.com/kkjusdoit/fzd-fans.com"
language: "Astro"
languages: ["Astro"]
languagePcts: [65]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-09T02:16:21Z"
lastCommitAt: "2026-08-21T04:10:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 49
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e28bc9b25a9b25ad55e13d3a43aef1f054cdaf096dbe0a301a36670e047d6481/kkjusdoit/fzd-fans.com"
---

# 樊振东的互联网档案馆

> 🏓 民间互联网记忆工程 | A Community Internet Memory Project

记录樊振东的意志、人品、纯真、良善、机智、幽默，以及他在喧嚣中的清醒与坚守、直面荆棘时的捍卫与孤勇。

🌐 **在线访问**: [fzd-fans.com](https://fzd-fans.com)

---

## 🏗️ 架构概览 (Architecture)

本项目采用现代化的 **Astro 岛屿架构 (Islands Architecture)**，结合了服务端渲染 (SSR) 的高性能与 React 客户端交互的灵活性，部署于 Cloudflare Edge Network。

### 架构图解

```mermaid
graph TD
    User[用户浏览器]
    Cloudflare[Cloudflare Workers (Edge)]
    KV[Cloudflare KV (数据存储)]
    R2[Cloudflare R2 / 图床 (图片存储)]

    subgraph "Astro Server (SSR)"
        Page[Astro Page (.astro)]
        API[API Routes (.ts)]
        Middleware[Middleware (Auth/Protection)]
    end

    subgraph "Client Side (Hydration)"
        React[React Components]
    end

    User -->|请求页面| Cloudflare
    Cloudflare -->|执行| Page
    Page -->|HTML + JSON| User
    
    User -->|交互 (React)| React
    React -->|Fetch API| API
    
    API -->|读写| KV
    API -->|上传| R2
```

### 1. 渲染层：Astro + React (混合模式)

*   **主体框架 (Astro)**: 负责路由、SEO、静态内容（如文章、Markdown）的生成。采用 SSR 模式，首屏直出 HTML，速度极快。
*   **交互岛屿 (React)**: 负责复杂的客户端交互，通过 `client:load` 指令按需加载。
    *   **ImageUploader**: 图片拖拽上传、进度反馈、文件校验。
    *   **Gallery**: 照片墙瀑布流、分页加载、Lightbox 大图查看、状态缓存 (LocalStorage)。

### 2.…
