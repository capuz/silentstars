---
repo: "zhinjs/zhin"
name: "zhin"
description: "Modern TypeScript AI Agent runtime - Multi-channel Endpoint access, Harness secure orchestration, plugin hot reloading"
originalDescription: "现代 TypeScript AI Agent 运行时 —— 多通道 Endpoint 接入、Harness 安全编排、插件热重载"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhinjs/zhin"
homepage: "http://zhin.js.org/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent", "ai", "robot", "chatbot", "discord", "framework", "hot-module-replacement", "koa", "plugin", "qq"]
stars: 132
forks: 17
openIssues: 2
closedIssues: 84
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2022-08-17T01:12:28Z"
lastCommitAt: "2026-07-07T06:39:14Z"
lastReleaseAt: "2023-06-12T08:21:41Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 47
maintainers: ["mmoy723", "lc-cn", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2279c279604931048c3e926cab4fc8830021a20b6019aa960c13d3d37dac2f4b/zhinjs/zhin"
discussionCount: 0
---

# Zhin.js

TypeScript **multi-channel IM Bot framework** - plugin hot reloading, Sandbox debugging, Remote Console  
Optional **Agent stack** (`@zhin.js/agent`) - commands can be mixed with `@` / `ai:` dialogues

[Documentation](https://zhin.js.org)  
[CI](https://github.com/zhinjs/zhin/actions/workflows/ci.yml)  
[codecov](https://codecov.io/github/zhinjs/zhin)  
[License](https://github.com/zhinjs/zhin/blob/HEAD/LICENSE)

<details>
<summary>Product boundaries (expand)</summary>

Targeting multi-channel **life/work assistant** (private/group chat, memory, cron, notifications) - **not** a coding agent like Cursor / Claude Code, and does not include plan mode. IM is the most common type of Endpoint channel, not the entirety of the product definition. See [Capability tiers and product positioning](https://github.com/zhinjs/zhin/blob/HEAD/docs/essentials/capability-tiers.md).

</details>

## Core Features

Capabilities are tiered by maturity: **Stable** (recommended for initial runs and external default commitments), **Advanced** (multiple Endpoints / toolSearch / MCP, etc.). Complete tiering is detailed in the table below.

**Core vocabulary**: **Adapter** carries platform…
