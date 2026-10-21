---
repo: "Mark1708/opencode-usage-monitor"
name: "opencode-usage-monitor"
description: "OpenCode v2 TUI sidebar plugin that displays API usage quotas for OpenAI, Z.AI (GLM), DeepSeek, and OpenCode Go providers"
readmeQualityOk: true
url: "https://github.com/Mark1708/opencode-usage-monitor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["opencode", "opencode-plugin", "ai-tools", "developer-tools", "openai", "tui", "typescript", "bun", "glm", "npm-package"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-05-20T18:17:42Z"
lastCommitAt: "2026-10-21T08:49:05Z"
lastReleaseAt: "2026-10-21T07:07:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 53
maintainers: ["Mark1708", "skolkin-worker", "chrisliebaer"]
openGraphImageUrl: "https://opengraph.githubassets.com/6dbdf5e187644efe2e8a2c6aec8887e019a4eb467c41f42ede2954e155cc3bc8/Mark1708/opencode-usage-monitor"
---

# opencode-usage-monitor

[Русская версия](https://github.com/Mark1708/opencode-usage-monitor/blob/HEAD/README.ru.md)

> OpenCode TUI sidebar plugin that shows OpenAI, Z.AI / GLM, DeepSeek, and OpenCode Go quota/balance usage without exposing provider credentials in the UI.

| Field | Value |
|---|---|
| Status | Actively maintained personal OpenCode tool/plugin |
| Type | OpenCode TUI plugin / host extension |
| Host app | OpenCode `>=2.0.32`; release smoke also covers current `2.1.2` |
| Package | `opencode-usage-monitor` `3.0.0` |
| Runtime | Bun `>= 1.3.0` for local development |
| Maintainer checks | `bun install --frozen-lockfile && bun run typecheck && bun run typecheck:host && bun test && bun run build:all && bun run verify:package` |

## Screenshots

The plugin renders inside the OpenCode terminal UI sidebar.

## Summary

- Displays OpenAI ChatGPT usage windows, available Codex reset credits, and optional nearest reset-credit expiry.
- Displays Z.AI and GLM 5h/week/month quota windows with reset timing and optional plan details. Supports enterprise/org coding plans via organization and project scoping.
- Displays DeepSeek account balance (CNY) with an optional…
