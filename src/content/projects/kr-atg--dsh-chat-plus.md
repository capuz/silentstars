---
repo: "Kr-ATG/dsh-chat-plus"
name: "dsh-chat-plus"
description: "DSH Chat Experience Enhancement Suite (zero source changes, pure plugin injection). Seeker two-column execution dashboard: the right column has four cards (tasks / operation panel / sub-agents / artifacts) with memory pinned at the bottom. The left column keeps only a one-line status card, plus thinking cards and Q&A cards embedded in the conversation stream (font size follows the official “Settings → Font Size”). The message body can render cards: html sandbox (runs real HTML/JS), diagram flowcharts, iu native interactive cards, and proto-tabs. Also included: conversation screenshots, a download tool, bare-path-to-link conversion, a provider center (API Key / network proxy / image generation, image recognition, video generation / AnySearch, entry on the official settings “Providers” page), and six workbenches: memory / soul / capabilities / usage / gallery / mailbox."
originalDescription: "DSH 对话体验增强套件（零源码改动，纯插件注入）。Seeker 双栏执行大盘：右栏任务 / 操作面板 / 子智能体 / 产出物四张卡 + 记忆钉底，左栏只留一行状态卡与贴进对话流的思考卡、问答卡（字号跟随官方「设置 → 字号」）。正文可出卡片：html 沙箱（跑真 HTML/JS）、diagram 流程图、iu 原生交互卡、proto-tabs。另有对话截图、download 下载工具、裸路径转链接，供应商中心（API Key / 网络代理 / 生图识图生视频 / AnySearch，入口在官方设置「供应商」页），以及记忆 / 灵魂 / 能力 / 用量 / 画廊 / 邮箱六个工作台。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Kr-ATG/dsh-chat-plus"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 31]
topics: ["deepseek-harness", "dsh-plugin", "reasoning", "screenshot", "typescript", "dsh", "chat-ui", "cordis-plugin", "markdown", "memory"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-31T18:00:46Z"
lastCommitAt: "2026-10-23T09:32:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["Kr-ATG"]
openGraphImageUrl: "https://opengraph.githubassets.com/18e8b88e3f4daa8bee3fe13cdfbfeb0651b5061c67fef715297084f14f84e0cc/Kr-ATG/dsh-chat-plus"
---

# dsh-chat-plus

**Chat experience enhancement suite for DeepSeek Harness**: makes conversations easier to read, renders interactive cards, translates execution processes into plain language, and gathers memory / SKILL / usage / gallery / mailbox into a row of workbenches.

Zero DSH source changes. All capabilities are injected as Cordis plugins, so official upgrades leave them untouched.

```bash
dsh plugin --profile web add github:Kr-ATG/dsh-chat-plus
```

Restart DSH after installing. This package declares `dsh.bundle.patch`, so `dsh plugin add` automatically adds it to the profile's bundles layer. No need to edit config files by hand.

---

## Table of Contents

- [What you probably want most](#你可能最想要的)
- [Seeker view: two-column execution dashboard](#seeker-视图双栏执行大盘)
- [Cards in the message body](#正文里能出卡片)
- [Smoother conversation reading](#对话读起来更顺)
- [Four workbenches](#四个工作台)
- [Input area and toolbar](#输入区与工具栏)
- [Agent mailbox (read-only cards)](#agent-邮箱只读卡片)
- [Provider center (Settings → Providers)](#供应商中心设置--供应商)
- [Prompt channel: when the model knows about these fences](#提示词通道什么时候模型才知道这些围栏)
- [Installation and uninstallation](#安装与卸载)
- [Configuration…
