---
repo: "wsshow/agentkit"
name: "agentkit"
description: "A lightweight, event-stream-driven Agent toolkit built on top of CloudWeGo Eino ADK."
readmeQualityOk: true
url: "https://github.com/wsshow/agentkit"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agent", "agentkit", "eino"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-03-17T04:01:54Z"
lastCommitAt: "2026-09-05T07:48:07Z"
lastReleaseAt: "2026-09-05T05:07:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["wsshow"]
openGraphImageUrl: "https://opengraph.githubassets.com/33a1c91de16cd20daa9677988a7fb1bf51f7381afc312021d9812526ea05c101/wsshow/agentkit"
---

# AgentKit

[中文文档](https://github.com/wsshow/agentkit/blob/HEAD/README_zh.md)

AgentKit is a lightweight, event-stream-driven Go library for building reliable agents on top of [CloudWeGo Eino ADK](https://github.com/cloudwego/eino). It keeps the first agent small, while providing sessions, durable goals, context compaction, skills, MCP, and tool governance when an application grows.

Inspired by [pi-agent-core](https://github.com/earendil-works/pi/tree/main/packages/agent), AgentKit focuses on a simpler public API and production-safe defaults.

## Why AgentKit

- **Easy to start** — create an Agent and call `Ask`; no graph or middleware wiring is required.
- **Easy to observe** — use request-scoped streams or global events for text, reasoning, tools, compaction, goals, interrupts, and errors.
- **Easy to keep running** — persist sessions, checkpoints, goals, and large tool results; reconnect by stable IDs after a client or process restart.
- **Safe by default** — concurrent-run protection, panic isolation, bounded cleanup, tool-call repair, result limits, and optimistic concurrency are built in.
- **Composable when needed** — add declarative subagents, skills, MCP servers, tool…
