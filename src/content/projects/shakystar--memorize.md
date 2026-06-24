---
repo: "shakystar/memorize"
name: "memorize"
description: "Shared, persistent memory for AI coding agents — Claude Code & Codex share one local-first, event-sourced project brain that survives sessions and syncs across machines. No server, no API key required."
url: "https://github.com/shakystar/memorize"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-memory", "ai-agents", "ai-coding", "claude-code", "cli", "codex", "context-engineering", "developer-tools", "event-sourcing", "llm-memory"]
stars: 9
forks: 0
openIssues: 16
closedIssues: 40
watchers: 1
contributors: 5
recentReleases: 4
createdAt: "2026-04-14T01:12:53Z"
lastCommitAt: "2026-06-24T00:20:41Z"
lastReleaseAt: "2026-06-13T06:38:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 53
maintainers: ["shakystar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1209977869/2911f1cd-3649-4528-b691-3e264e00e31f"
discussionCount: 8
---

# Memorize — shared memory for AI coding agents

**English** | [한국어](./docs/i18n/README.ko.md) | [日本語](./docs/i18n/README.ja.md) | [简体中文](./docs/i18n/README.zh-CN.md) | [Español](./docs/i18n/README.es.md)

</p>

> One persistent project brain shared between you, Claude Code, and
> Codex — local-first, event-sourced, modeled on how biological memory
> actually works.

Your agent forgets everything when the session ends. Memorize watches it
work, distills what mattered into long-term memories, and injects the
right ones back at the start of every future session — for **every**
agent on the project, across machines, with no server and no API key
required.

## Why

- **Claude sessions end and the context dies with them.** Next session
  you re-explain what you were doing, what you decided, and where you
  stopped.
- **Switching from Claude to Codex means starting over.** Each agent has
  its own memory silo; none of them see the other's notes.
- **Two machines, two half-brains.** Your desktop's context doesn't
  follow you to the laptop.

## How it works

1. **Capture** — hooks record cheap, rule-filtered observations while
   the agent works (file writes, decisions, task…
