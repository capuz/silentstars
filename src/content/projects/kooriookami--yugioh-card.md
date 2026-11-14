---
repo: "kooriookami/yugioh-card"
name: "yugioh-card"
description: "A tool for rendering Yu-Gi-Oh! cards using Canvas"
originalDescription: "一个使用 Canvas 渲染游戏王卡片的工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kooriookami/yugioh-card"
homepage: "https://kooriookami.github.io/yugioh-card/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["rush-duel", "yugioh", "yugioh-card"]
stars: 75
forks: 23
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-07-31T07:59:04Z"
lastCommitAt: "2026-11-14T09:49:51Z"
lastReleaseAt: "2025-07-13T09:42:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 36
maintainers: ["kooriookami", "mercury233"]
openGraphImageUrl: "https://opengraph.githubassets.com/33b2ffae340f7cd59a43771f7f949bb889f69091c3429aa6084c8c0146527431/kooriookami/yugioh-card"
---

There are currently 5 types of cards: 🚀🚀🚀🚀🚀

- 1️⃣ Yu-Gi-Oh!
- 2️⃣ Rush Duel
- 3️⃣ Yu-Gi-Oh! Card Back
- 4️⃣ Field Center Card
- 5️⃣ Yu-Gi-Oh! Series 2

## 🫡 Special Thanks

- [LeaferJS](https://www.leaferjs.com/) for the powerful graphics rendering features
- [白羽幸鳥](https://tieba.baidu.com/home/main?id=tb.1.d6c63ffd.3YV5T6Q9Z7uIeVVhPlo8hg%3Ft%3D1654573649) for the high-definition card templates

## 🚩 Online Demo

[Online Demo](https://kooriookami.github.io/yugioh-card/)

## ⚡ Quick Start

Development environment requirements: Node.js 22.13+ (22.x) or 24+, pnpm 12.

`pnpm add yugioh-card`

### Repository Development

```bash
# Node.js 22.13+ (22.x) or 24+
pnpm install
pnpm dev
pnpm build
pnpm build:lib
```

### Browser

```js
// Optional: YugiohCard, RushDuelCard, YugiohBackCard, FieldCenterCard, YugiohSeries2Card
import { YugiohCard } from 'yugioh-card';

const card = new YugiohCard({
  view: 'xxx', // div container
  data: {
    ..., // see the Data properties below for parameters
  },
  resourcePath: 'xxx', // Static resource path. Copy the src/assets/yugioh-card folder into your project or onto your server.
});

// Export an image. For more export parameters, see…
