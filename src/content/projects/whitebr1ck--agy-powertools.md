---
repo: "WhiteBr1ck/agy-powertools"
name: "agy-powertools"
description: "Antigravity 2.0 native UI enhancement plugin: interface localization, Codex-like compact layout and stage reporting, context and cache monitoring, session branching, and local usage panel"
originalDescription: "Antigravity 2.0 原生界面增强插件：界面汉化、类 Codex 紧凑排版与阶段汇报、上下文与缓存监控、会话分支及本地用量面板"
descriptionLang: "zh-Hans"
readmeQualityOk: true
url: "https://github.com/WhiteBr1ck/agy-powertools"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["antigravity", "antigravity-plugin", "codex", "telemetry", "ui-enhancement"]
stars: 233
forks: 13
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-11-16T21:35:31Z"
lastCommitAt: "2026-11-23T13:31:20Z"
lastReleaseAt: "2026-11-20T11:23:21Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 31
maintainers: ["WhiteBr1ck", "reshdh", "zhangyu-ch"]
openGraphImageUrl: "https://opengraph.githubassets.com/946a4423a3b87e23ec814c17733379d618386d50174c3731b34a6e098bb19db1/WhiteBr1ck/agy-powertools"
---

> **Agy Powertools** mounts directly inside the Antigravity 2.0 client through a local debugging interface, and parses local SQLite and JSONL session records in read-only mode. **It does not modify `app.asar`, does not open external web pages, and sends zero data externally.** All enhancement controls blend seamlessly into the interface in the style of the client's native components.

---

## Feature Gallery

---

## Core Capabilities

### Efficiency and Session Experience
- **Codex-like conversation rhythm**: Keeps the client's font size while tightening line height and block spacing (compact layout saves about 19% of vertical height). When running multi-step tools, it reports stage progress in real time. After a full round ends, it automatically collapses into the top timing bar, leaving only the conclusion in the body text.
- **Lossless session forking and in-place message editing**: From any past answer or the session menu, invoke the native `ForkConversation` to ffork in one click. It automatically handles sessions that include subagent sessions and renames them with `(1)` / `(2)`.
