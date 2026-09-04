---
repo: "0xMaxMa/claude-gateway"
name: "claude-gateway"
description: "Self-hosted multi-agent gateway for Claude Code — agents that self-improve, manage their memory through nightly dreaming, and build their own knowledge base"
readmeQualityOk: true
url: "https://github.com/0xMaxMa/claude-gateway"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent", "claude", "claude-code", "hermes-agent", "openclaw"]
stars: 24
forks: 11
openIssues: 2
closedIssues: 146
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-07T01:34:28Z"
lastCommitAt: "2026-09-04T08:10:57Z"
lastReleaseAt: "2026-05-15T09:42:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 48
maintainers: ["0xMaxMa", "0xthoth", "0xKirin"]
openGraphImageUrl: "https://opengraph.githubassets.com/96504911fa1009a72ccf068b685621c055353e7e3fed87c0f86cde22eed6d8d9/0xMaxMa/claude-gateway"
---

# Claude Gateway

A self-hosted multi-agent gateway for Claude Code — with agents that improve themselves, manage their own memory through nightly dreaming, and build a searchable knowledge base from what they learn.

</p>

---

## Features

- 🧠 **Skill self-improvement** — agents learn reusable skills from their own work: after a substantive turn a background reviewer creates or updates a skill, hot-reloaded for the next turn. Provenance-guarded (never overwrites human-written skills), capped per day, and audited to `SKILLS_LEARNED.md`. See [`gateway.skillLearning`](#gatewayskilllearning)
- 📚 **Knowledge base (two-lane memory)** — per-agent SQLite/FTS5 searchable archive exposed through `memory_search` / `memory_get` MCP tools, so agents recall notes that don't fit the always-injected core; chunks carry fail-closed provenance and the index is refreshed off the gateway event loop. See [`gateway.knowledge`](#gatewayknowledge)
- 🌙 **Nightly dreaming** — background consolidation of long-term memory: a print-only reviewer proposes ops that a safe applier writes to `MEMORY.md` / `USER.md` (backup, bounded-loss, net-negative when over budget). Deterministic compaction, budget-scaled…
