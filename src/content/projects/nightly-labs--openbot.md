---
repo: "nightly-labs/openbot"
name: "openbot"
description: "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration."
readmeQualityOk: true
url: "https://github.com/nightly-labs/openbot"
homepage: "https://openbot.run/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai-agents", "bun", "codex", "electron", "local-first", "macos", "solidjs", "typescript"]
stars: 29
forks: 0
openIssues: 16
closedIssues: 11
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-12T21:32:03Z"
lastCommitAt: "2026-09-02T08:04:06Z"
lastReleaseAt: "2026-08-14T14:54:36Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 43
maintainers: ["NorbertBodziony", "Sniezka1927", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29020c4fe46e2526d98c1918b75fa7dd2a0a62e2112f3c2d28daf899ad339df0/nightly-labs/openbot"
discussionCount: 0
---

# OpenBot

OpenBot is a local-first desktop workspace for persistent AI teammates. It supports the local
[Codex App Server](https://learn.chatgpt.com/docs/app-server) and
[Claude Code](https://code.claude.com/docs/en/overview), plus [Grok CLI](https://docs.x.ai/build/overview)
through ACP. It gives every agent its own workspace and
conversation, and provides local queues, file transfers, an embedded browser, and agent-to-agent
messaging in one desktop app.

> [!WARNING]
> OpenBot is a development preview. Agents currently run with `danger-full-access` and
> `approvalPolicy: never`. They can read and modify files, run commands, use the network, and control
> the embedded browser without per-action confirmations after the explicit first-launch consent.
> Run only agents and tasks you trust, keep backups, and review [Security](#security) before use.

## What works

- Persistent agents backed by independent Codex, Claude, or Grok sessions and local workspaces.
- Per-agent context monitoring with automatic compaction before long threads exhaust the model window.
- FIFO message queues with pause, resume, cancellation, and crash-safe persistence.
- Agent-to-agent messages, replies,…
