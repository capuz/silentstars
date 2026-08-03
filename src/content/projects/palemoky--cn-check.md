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
stars: 91
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-06T03:56:14Z"
lastCommitAt: "2026-08-03T06:44:01Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 31
maintainers: ["palemoky", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/10eb311137f10a2dee6681040e20da686a21cd6c7a69472b9b309647ce7e38ba/palemoky/cn-check"
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
