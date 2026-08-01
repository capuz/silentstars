---
repo: "billy12151/memory-arbiter-mcp"
name: "memory-arbiter-mcp"
description: "Shared memory layer for AI coding tools. One local SQLite DB, every tool reads the same verified facts. Local-first, zero cloud."
readmeQualityOk: true
url: "https://github.com/billy12151/memory-arbiter-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-memory", "claude-code", "codex", "context-engine", "cursor", "llm-context", "local-first", "mcp", "memory-management", "sqlite"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-04T11:18:33Z"
lastCommitAt: "2026-08-01T06:14:26Z"
lastReleaseAt: "2026-07-07T17:42:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 53
maintainers: ["billy12151"]
openGraphImageUrl: "https://opengraph.githubassets.com/a380de3a4a628b3aa008b3305ac13c87778c909f4429874a72e91631feb65bf9/billy12151/memory-arbiter-mcp"
---

mcp-name: io.github.billy12151/memory-arbiter-mcp

# memory-arbiter-mcp

**[中文](#中文) | [English](#english)**

---

## English

A shared memory layer for AI agents. One local SQLite database — every tool you use (Cursor, Claude Code, Codex, ZCode, WorkBuddy, …) searches the same verified facts instead of re-loading markdown files every turn.

```
# Instead of dumping 20K tokens of MEMORY.md into every prompt:
memory_search("auth migration plan")  → 3 laser-relevant entries, ~400 tokens
```

**Less noise, sharper output.** Most AI mistakes aren't the model being dumb — they're the model acting on stale, contradictory, or diluted context. Memory Arbiter fixes the input. Same model, better results.

**Fully local. Zero cloud.** Pure SQLite, no Postgres, no Redis, no API keys. Your data stays on your machine.

### Why Memory Arbiter?

Your AI client loads `MEMORY.md` + `memory/*.md` into the system prompt **every turn**. As knowledge grows, 5K–20K tokens burn before the model even reads your question — and worse, the model drowns in noise, losing track of what's current, what's confirmed, and what's stale.

Memory Arbiter replaces this with a SQLite-backed search: only the relevant…
