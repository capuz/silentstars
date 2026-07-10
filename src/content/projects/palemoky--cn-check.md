---
repo: "palemoky/cn-check"
name: "cn-check"
description: "🐾 Are you from China?"
readmeQualityOk: true
url: "https://github.com/palemoky/cn-check"
homepage: "https://cn-check.palemoky.com/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 27]
stars: 85
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-06T03:56:14Z"
lastCommitAt: "2026-07-10T07:00:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 28
maintainers: ["palemoky", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9e51b4e95b6a2f9c55a75a0aea4ec4bec81244038e27ce68e89577501a23f72/palemoky/cn-check"
discussionCount: 0
---

# China Access Check

检测你的浏览环境是否会被 ChatGPT、Claude、LinkedIn 等网站识别为**中国大陆用户**。

在浏览器中复现这些网站常用的检测手段，逐项打分并给出综合判断，帮助你了解自己的网络环境暴露了哪些信号。托管于 Cloudflare Workers（静态资源 + 边缘 API），无任何数据存储。

## 检测项与权重

| 检测项           | 权重 | 原理                                                                                                                                                                                                                             | 备注                                   |
| ---------------- | ---: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| IP 归属地        |   21 | Cloudflare 边缘提供的 IP 地理位置（`request.cf.country`），并用 chnroutes CIDR 独立核对                                                                                                                                          | 最直接的信号                           |
| 被屏蔽服务可达性 |   16 | 探测 Google、YouTube、Facebook、X、Instagram、维基百科等被屏蔽服务是否可达；按不可达比例分级打分（全部不可达才满分，个别不可达可能只是服务故障或广告拦截），多服务同时不可达强烈暗示身处 GFW 之内…
