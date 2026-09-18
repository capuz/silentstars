---
repo: "nightly-labs/openbot"
name: "openbot"
description: "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration."
readmeQualityOk: true
url: "https://github.com/nightly-labs/openbot"
homepage: "https://openbot.run/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai-agents", "bun", "codex", "electron", "local-first", "macos", "solidjs", "typescript"]
stars: 84
forks: 10
openIssues: 31
closedIssues: 121
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-08-12T21:32:03Z"
lastCommitAt: "2026-09-18T14:03:27Z"
lastReleaseAt: "2026-08-14T14:54:36Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 40
maintainers: ["NorbertBodziony", "Sniezka1927", "nrb-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f62a1399cab876b7a2103879938e6fe98b390d482f21c81a71969e1a7edc2d7/nightly-labs/openbot"
discussionCount: 1
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

- Prompt-driven agent creation and editing on desktop and mobile, with editable instructions, avatar, and section review before saving.
- Persistent agents backed by independent Codex, Claude, Grok, or OpenCode sessions and local workspaces.
- Per-agent context monitoring with automatic compaction before long threads…
