---
repo: "kansoku-trade/kansoku"
name: "kansoku"
description: "AI Stock Partner on Your Mac – Local Market Information, Multi-timeframe K-line, AI Intraday Comments and Follow-up Analysis"
readmeQualityOk: true
url: "https://github.com/kansoku-trade/kansoku"
homepage: "https://kansoku.trade/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["agent-skills", "fastify", "longbridge", "market-intelligence", "react", "stock-analysis", "trading-journal", "typescript", "us-stocks"]
stars: 270
forks: 29
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-24T17:17:30Z"
lastCommitAt: "2026-08-01T06:13:06Z"
lastReleaseAt: "2026-07-13T16:07:23Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 92
undervaluedScore: 31
maintainers: ["Innei", "DaZuiZui", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa6077038443394ef4c37b7017edc721bb21a66b09ed93b33001ed2008c71214/kansoku-trade/kansoku"
---

</p>

# Kansoku

> 装在你 Mac 上的能查账的 AI 看盘搭子——它说的每句话你都能查：每个结论挂着完整证据链，归档之后不许改口，事后按命中率记分。

**Kansoku（観測）** 是一个 macOS 桌面应用：行情从你自己的长桥账户拉，指标全部本地实算，AI 用你自己配置的模型盯盘、答疑、改研究稿，结论落成本地文件。数据和 key 都不出你的机器。

## 下载安装

去 [Releases](https://github.com/Innei/kansoku/releases) 下载最新 `desktop-v*` 版本的 `Kansoku-x.y.z-arm64.dmg`（macOS · Apple Silicon），拖进「应用程序」即可。应用内置 Sparkle 自动更新（EdDSA 签名 + 增量包），装一次就不用再回来手动下载。

前置依赖：本机安装并登录 [longbridge CLI](https://open.longbridge.com/docs/cli/install)（行情和账户数据都走它）。应用当前没有付费开发者签名，首次打开需要右键 →「打开」，详见 [`apps/desktop/README.md`](https://github.com/kansoku-trade/kansoku/blob/HEAD/apps/desktop/README.md)。

首次启动有引导：连上长桥数据，再选一个 AI 接入方式（本机 codex 登录态 / LobeHub Cloud / 自带 API key），也可以先跳过。

## AI 能做什么

**盘中自动点评，关掉图表还在巡检** —— 打开一只票，AI 结合多周期 K 线、形态标注和实时行情给出短线方向判断，以及 Bull/Base/Bear 三档情景推演（概率合计 100%，附触发条件）。开启跟进后，关掉图表它仍在后台按行情巡检，判断变了就通知你。右栏还带财报与宏观事件日历，页签在预测、环境、消息、复盘和 AI 点评之间切换。

**追着分析问下去** —— 每份分析都能就地追问「凭什么」。面板浮在图上，可拖走、可缩放、可全屏。AI 会先读你的画线再结合实时行情回答；让它标关键价位时会直接画到图上（紫色虚线，悬停看说明），工具条可一键只清 AI 画的线。查了什么数据全程留痕，点开就是工具调用详情；答歪了随时停止，半截回答不会丢；空面板会先替你想好三个最该问的问题。已归档的预测是冻结记录，追问只解释、不改写。

**研究库 AI 助手** —— 在应用里翻看和搜索本地的股票档案与研究日志，文档内直接对话提问。助手能提议改稿（采纳 / 拒绝 / 撤销），也能按信源刷新研究内容（制定计划 → 核查文档 → 检查市场 → 综合证据 →…
