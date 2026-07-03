---
repo: "andaoai/O"
name: "O"
description: "古代天文可视化工具，主要可视化罗盘+奇门遁甲罗盘使用+天文可视化。"
url: "https://github.com/andaoai/O"
homepage: "https://andaoai.github.io/O/"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [64, 36]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-11T05:19:36Z"
lastCommitAt: "2026-07-03T06:23:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 59
maintainers: ["andaoai"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f7a798e8dd10304a0655ee8b3b5735c08bc05ebf3bbce8afc2c996fa5ba3730/andaoai/O"
---

# 🧭 乙巳观 (Yisiguan)

> 道由天观。乙巳年，观天那一瞬来了感觉，于是有了这里。

一个把古代中华算法画成**可以看、可以转、可以随时间演化**的罗盘的项目——集**古籍笔记 · 通用概念 · 罗盘可视化**三位一体的知识站。

主要为我自己服务，解决那些从史料里翻出来、纸上难以想象、代码里跑起来又极想亲眼看看的可视化问题。

技术栈：**VitePress 1.6** 单栈 · Vue 3.5 · TypeScript · SVG。

## ✨ 罗盘清单

- **中华天文圆环** — 二十四节气、二十八宿、六十甲子、五行纳音、天干地支、八门四象、太阳黄道，一盘看尽中华天文全景。
- **六十甲子六环** — 年月日时分秒六柱同心环，实时跟踪当下干支，柱格高亮。
- **先天六十四卦盘** — 伏羲/邵雍先天圆图，六十四卦按二进制位反转排列，乾南坤北。
- **京房十二消息卦盘** — 京房卦气：60 卦六日七分 + 四正卦 + 十二消息卦 + 八宫世应 + 浑天纳甲 + 日干支值日环。
- **七曜入宿天象盘** — 盖天投影，赤道·黄道·白道三道斜交，日月五星实时入二十八宿。
- **回归年闰月盘** — 365 天回归年对 360 度甲子纪年，节气节/中气区分，农历闰月与月相实时可视化。

访问：<https://andaoai.github.io/O/>

## 🛠️ 技术栈

- **VitePress 1.6** — 文档站与罗盘页共用同一构建产物。
- **Vue 3.5** — 罗盘组件宿主。
- **[astronomy-engine](https://github.com/cosinekitty/astronomy)** — 天文计算。
- **[tyme4ts](https://github.com/6tail/tyme4ts)** — 历法/干支。

**关键设计**：项目**不使用** Vue Router 也**不再是 SPA**。所有罗盘都以 `docs/compass/*.md` 的 VitePress 页面形式存在，通过自定义 `layout: compass` 全屏渲染 `src/views/*.vue`。src/ 是纯组件库，靠 `@` alias 被 VitePress 消费。

## 🚀 快速开始

Node.js `^20.19.0 || >=22.12.0`：

```sh
npm install         # 安装依赖
npm run dev         # 启动 VitePress dev（含文档 + 罗盘）
npm run type-check  # vue-tsc 类型检查
npm run build       # 生产构建 → dist/
npm run…
