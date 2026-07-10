---
repo: "yeaft/yeaft-web-code-agent"
name: "yeaft-web-code-agent"
description: "Web interface for remotely accessing Claude Code CLI across multiple machines. Hub-and-spoke architecture with WebSocket server, distributed agents, and Vue.js frontend."
readmeQualityOk: true
url: "https://github.com/yeaft/yeaft-web-code-agent"
homepage: "https://yeaft.github.io/yeaft-web-code-agent/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-02-16T02:34:48Z"
lastCommitAt: "2026-07-10T07:01:30Z"
lastReleaseAt: "2026-03-09T02:01:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["xxx111x1"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb665a9b09589e8a257332fa61adc9b21f2cf99fad10025952c2c1e65ede237e/yeaft/yeaft-web-code-agent"
---

# Yeaft Web Code Agent

[English](https://github.com/yeaft/yeaft-web-code-agent/blob/HEAD/README.md) | [中文](https://github.com/yeaft/yeaft-web-code-agent/blob/HEAD/README.zh-CN.md) | [Documentation](https://yeaft.github.io/claude-web-chat/)

> Web-based multi-provider code agent platform — run Claude Code CLI, GitHub Copilot CLI, or Yeaft's native Code Agent from one browser UI. Connect many worker machines, keep execution local, route models across providers, and collaborate with persistent multi-VP Sessions.

**🌐 Try it now: [cc.yeaft.com](https://cc.yeaft.com)** — open registration, no invite code required.

## Terminology

- **Yeaft Web Code Agent** — the whole web-based product: server, browser UI, connected worker agents, docs, and deployment story.
- **Yeaft Code Agent** — the native code-agent capability running inside `yeaft-agent`; it owns the Yeaft engine, tools, memory, and direct LLM provider routing.
- **Yeaft Session** — the native engine's durable collaboration unit. A Session can have one VP for focused coding or many VPs for parallel collaboration.
- **Legacy wire/storage names** — some code and protocol fields still say `group`, `groupId`, `yeaft_session_chat`,…
