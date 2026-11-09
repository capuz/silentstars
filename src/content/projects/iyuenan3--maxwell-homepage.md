---
repo: "iyuenan3/maxwell-homepage"
name: "maxwell-homepage"
description: "Maxwell's personal site — maxwellii.com 终端体个人主页 + RAG-powered AI 对话化身 (Next.js 16 + 火山方舟 doubao-pro) + 简历多版本归档"
readmeQualityOk: true
url: "https://github.com/iyuenan3/maxwell-homepage"
homepage: "https://maxwellii.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [53]
topics: ["ai-persona", "doubao", "llm-chatbot", "nextjs", "obsidian-vault", "personal-website", "portfolio", "rag", "terminal-ui", "vibe-coding"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-11T04:21:50Z"
lastCommitAt: "2026-11-09T11:59:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 33
maintainers: ["iyuenan3"]
openGraphImageUrl: "https://opengraph.githubassets.com/e03c3067961e92f17af59a45f9a791c4b078e2c2505fd4b751334c080a027bbe/iyuenan3/maxwell-homepage"
---

# Maxwell-Homepage

李越男 (Maxwell Li) 的个人主页仓库 — **maxwellii.com 终端体网站源码 + AI 化身对话后端 (chat-api)**。

> 5/9 由 `Maxwell-Resume` 改名为 `maxwell-homepage`：从「简历仓库」扩展到「个人主页 + AI 化身」。GitHub 自动 redirect 旧 URL，外链不会 404。简历归档 2026-05-26 迁至 Maxwell 私有知识库统一管理（本仓库不再存简历文件）。
>
> **工程文档（架构 / 部署 / 决策 / 接口契约 / 版本史）见 [`AIREADME/`](https://github.com/iyuenan3/maxwell-homepage/blob/HEAD/AIREADME/)** —— 本仓库的 AI 原生真相源。变更日志见 [`AIREADME/CHANGELOG.md`](https://github.com/iyuenan3/maxwell-homepage/blob/HEAD/AIREADME/CHANGELOG.md)。

## 个人主页 — maxwellii.com

终端体设计的个人静态站点（已上线 https://maxwellii.com）：bash 隐喻 + CRT 扫描线 + 朱砂方印 + 等宽/衬线中文字体。主页 `ls -lah projects/` 列出 9 个项目（含本仓库自身），每行点进对应详情页（终端 `cat README.md` 风格 + 中英双 H1）。两种模式：**V1 简介**（`/v1/`）与 **V2 化身对话**（主域 `/`，右下角 chat 框接 AI 版 Maxwell）。

| 属性 | 值 |
|------|-----|
| 主域 | https://maxwellii.com |
| 子站点 | naming.maxwellii.com（取名 SaaS）/ tale.maxwellii.com（多人小说 H5）|
| 源码 | `site/public/`（V1）· `site/v2-redesign/`（V2）· `site/data/projects/<slug>.md`（详情页数据）|
| 构建 | `site/build.js`（纯 Node 零依赖）→ `bash site/deploy.sh` 发版 |

> 部署架构 / nginx / CDN 缓存 / 构建管线等工程细节见 [`AIREADME/DEPLOYMENT.md`](https://github.com/iyuenan3/maxwell-homepage/blob/HEAD/AIREADME/DEPLOYMENT.md) +…
