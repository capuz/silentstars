---
repo: "WhiteBr1ck/agy-powertools"
name: "agy-powertools"
description: "Native interface enhancement plugin for Antigravity 2.0: UI localization, Codex-like compact layout and stage reporting, context and cache monitoring, conversation branching, and a local usage panel"
originalDescription: "Antigravity 2.0 原生界面增强插件：界面汉化、类 Codex 紧凑排版与阶段汇报、上下文与缓存监控、会话分支及本地用量面板"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/WhiteBr1ck/agy-powertools"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["antigravity", "antigravity-plugin", "codex", "telemetry", "ui-enhancement"]
stars: 222
forks: 13
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-11-16T21:35:31Z"
lastCommitAt: "2026-11-23T10:23:37Z"
lastReleaseAt: "2026-11-20T11:23:21Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 31
maintainers: ["WhiteBr1ck", "reshdh", "zhangyu-ch"]
openGraphImageUrl: "https://opengraph.githubassets.com/635fdbec2ada801cc2bd01414c910680159415bca1a757be2f1692eb871f358a/WhiteBr1ck/agy-powertools"
---

## What this tool does

**Agy Powertools** is an enhancement plugin for Antigravity 2.0. It attaches directly inside the client through a local debugging interface, reads local SQLite and JSONL session records, and adds several useful features to Antigravity 2.0 without modifying the client's installed files or opening external web pages.

It mainly addresses four pain points in everyday use of Antigravity:

1. **Fully English interface with low information density**: The native menus and settings are all in English. The chat area's default line height and paragraph spacing are loose, so only a little code and tool output fits on one screen.
2. **Multi-step tasks lack clear stage feedback**: When the agent calls tools in succession, it either stays silent for a long time with no visible progress, or keeps piling transitional commentary into the body text, which gets in the way of reading the final answer.
3. **No real-time context window display**: In long conversations, it is hard to see context usage, cache hit rate, generation speed, and details of individual errors. There is also no central place to view the 5-hour limit, the weekly limit, and cumulative token usage.
4.
