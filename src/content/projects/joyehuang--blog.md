---
repo: "joyehuang/blog"
name: "blog"
description: "joye's personal blog"
readmeQualityOk: true
url: "https://github.com/joyehuang/blog"
homepage: "https://www.joyehuang.me/"
language: "MDX"
languages: ["MDX", "Astro"]
languagePcts: [39, 30]
stars: 9
forks: 4
openIssues: 11
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-23T05:44:58Z"
lastCommitAt: "2026-09-14T09:12:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 74
undervaluedScore: 64
maintainers: ["joyehuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/08cc302ddc041a68eb6245c07f3f4539210a601358f3016b28ac3bc72497fc0a/joyehuang/blog"
---

# Personal Blog Template

这是一个基于 [Astro](https://astro.build/) 和 [Astro Theme Pure](https://astro-pure.js.org/) 改造的个人博客模板，适合搭建技术博客、个人主页、项目展示、notes 知识库、精选阅读和公开分享页面。

它不是一个无代码主题，而是一份已经跑过真实内容生产的工程模板。你可以 fork 后替换个人信息，也可以只参考其中的内容组织、双语路由、组件拆分、搜索、评论、agent-facing manifest 和 terminal dev mode。

## 功能

- Blog：正式文章，支持中英文镜像。
- Notes：短笔记、研究卡片、未成稿材料和面试题沉淀。
- Curated：外部文章、论文、项目的精选与消化。
- Talks：公开分享、幻灯片和活动记录。
- Projects / Links / About / Contact：个人主页常见页面。
- 中英文路由、RSS、站内搜索、评论、访问统计、OG 图片和 agent 读取接口。

## 技术栈

- Astro 5 + TypeScript
- React islands
- UnoCSS / Astro Theme Pure
- Bun
- Vercel Analytics / Speed Insights
- Waline comments

## 快速开始

环境要求：

- [Node.js](https://nodejs.org/): 18.0.0+
- [Bun](https://bun.sh/): 本项目使用 Bun 管理依赖和脚本

```shell
bun install
bun dev
```

常用命令：

```shell
bun run check
bun run build
bun preview
bun new
bun format
bun lint
```

发布前建议至少运行：

```shell
bun run check
bun run build
```

## 改成你自己的博客

优先替换这些位置：

- `src/site.config.ts`: 站点标题、作者、导航、社交链接、友链申请信息、评论服务等全局配置。
- `src/pages/about/index.astro` 和 `src/pages/en/about/index.astro`: 关于页内容。
- `src/pages/contact/index.astro` 和 `src/pages/en/contact/index.astro`: 联系方式与二维码展示。
- `src/assets/avatar.png`: 首页和站点使用的头像。
-…
