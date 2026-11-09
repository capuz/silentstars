---
repo: "monkey2jack/aiduCAT"
name: "aiduCAT"
description: "aiduCAT☤爱嘟妙咪飞 = Coding Agent Texting · 绝妙设计的迷人简洁飞书卡片（Claude Code / Codex / Hermes Agent）"
readmeQualityOk: true
url: "https://github.com/monkey2jack/aiduCAT"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T09:55:56Z"
lastCommitAt: "2026-11-09T03:20:45Z"
lastReleaseAt: "2026-11-03T17:35:49Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 67
maintainers: ["monkey2jack", "alone-lon"]
openGraphImageUrl: "https://opengraph.githubassets.com/0497f35f964bfc1cab6a52f24e9a2fc6fc6d949231cca6791d699abdd25e0c3b/monkey2jack/aiduCAT"
---

# aiduCAT☤爱嘟妙咪飞 — Coding Agent Texting · 绝妙设计的迷人简洁飞书卡片

> **爱嘟妙咪飞：妙（喵）+ 咪（猫）+ 飞（飞书）——绝妙设计的迷人简洁飞书卡片**
>
> **aiduCAT = Coding Agent Texting ——一只住在飞书里的猫，随时替你敲代码**
>
> **提问在上方，过程收进一只小面板，结果由面板颜色说话。**
>
> 给 Claude Code / Codex CLI / Hermes Agent 穿上泡波流的飞书卡片：宣白纸面上灌一道深蓝流光，一只猫，零噪音。

**中文** | **[📖 English](https://github.com/monkey2jack/aiduCAT/blob/HEAD/README.en.md)**

> **分发说明**：aiduCAT 不发 npm / PyPI 安装包，直接从本仓库源码运行（`pnpm install --frozen-lockfile`，见下方「快速开始」）。`README.zh.md` 与本文件内容相同。

---

## aiduCAT 是什么？

**aiduCAT☤爱嘟妙咪飞**，全称 **Coding Agent Texting**（编程代理短信/消息化），是给 **Claude Code / Codex CLI / Hermes Agent** 装上的一只飞书猫（按 profile 三选一，f0.4+ 起支持 Hermes） —— 把本地编程 agent 的思考、工具调用和最终答案，实时装进一张仿 [aiduPOP](https://github.com/monkey2jack/aiduPOP) 泡波样式的飞书流式卡片。

aiduCAT 起源并致敬上游 [zarazhangrui/lark-coding-agent-bridge](https://github.com/zarazhangrui/lark-coding-agent-bridge)（npm 包 `lark-channel-bridge`），在 MIT 协议的代码基础之上，做了一套完整的**泡波化改造**：

| 特性 | 说明 |
|------|------|
| 🤖 **三种 agent 三选一**（f0.4+） | 每个 profile 选 Claude Code、Codex CLI 或 Hermes Agent，同一套卡片、命令和白名单；见下方「Hermes Agent 接入」 |
| 🫧 **单面板泡波样式** | 答案流式显示在上方；思考与全部工具调用收进一只折叠面板（aiduPOP 布局） |
| 💭 **计数头** | 面板头：`模型 · 💭 思考段数 · 🛠️ 工具数 · ⏱️…
