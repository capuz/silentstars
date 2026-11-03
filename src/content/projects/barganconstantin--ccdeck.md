---
repo: "BarganConstantin/ccdeck"
name: "ccdeck"
description: "Local dashboard for Claude Code and Codex CLI: which Claude Code session needs input, every tool call and Claude Code subagent live, cost and quota, several Claude accounts. npx ccdeck or the desktop app. Free, open source."
readmeQualityOk: true
url: "https://github.com/BarganConstantin/ccdeck"
homepage: "https://ccdeck.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["ai-agents", "anthropic", "claude", "claude-code", "codex", "dashboard", "developer-tools", "subagents", "cost-tracking", "monitoring"]
stars: 28
forks: 7
openIssues: 80
closedIssues: 842
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-12T21:39:51Z"
lastCommitAt: "2026-11-03T10:52:23Z"
lastReleaseAt: "2026-09-23T14:11:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 53
maintainers: ["BarganConstantin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1267793685/d04867e8-f33e-4a2d-9691-2c16730211cc"
fundingLinks: ["GITHUB:https://github.com/BarganConstantin"]
discussionCount: 0
---

# ccdeck — a live dashboard for Claude Code and Codex

ccdeck is a free, open-source (AGPL-3.0) dashboard that runs on your machine and shows every Claude Code and OpenAI Codex CLI session, including ones started in a plain terminal: which Claude Code session needs input, each Claude Code subagent and every tool call as it runs, cost and quota left. Start it with `npx ccdeck` or the desktop app.

Step-by-step guides: [ccdeck.dev/guides](https://ccdeck.dev/guides/)

**Know which agent is waiting on you, and for how long.**

**ccdeck keeps them in one queue** — every session stopped on a human, longest wait first. The topbar names them, and its count is one click to the oldest. That queue is Claude Code's, because the deck reads Codex from its rollout log and a rollout carries no such signal; the canvas under it is both, with every Claude Code subagent on a node of its own.

```bash
npx ccdeck
```

Or the desktop app, with the waiting count in your menu bar: **[macOS](https://github.com/BarganConstantin/ccdeck/releases/latest/download/ccdeck-mac-arm64.dmg)** · **[Windows](https://github.com/BarganConstantin/ccdeck/releases/latest/download/ccdeck-win-x64.exe)** ·…
