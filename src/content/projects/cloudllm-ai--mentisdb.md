---
repo: "CloudLLM-ai/mentisdb"
name: "mentisdb"
description: "Memory that lasts and compounds. MentisDB gives agents durable memory so they do not just remember, they improve over time. It stores append-only thought chains   plus a Git-like skills registry, letting skills evolve with experience through versioned, integrity-checked updates and fast retrieval."
readmeQualityOk: true
url: "https://github.com/CloudLLM-ai/mentisdb"
homepage: "https://mentisdb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["ai", "ai-agents", "claude", "codex", "copilot", "infinite-memory", "openai", "openrouter", "skills-registry", "orchestration-tools"]
stars: 90
forks: 12
openIssues: 1
closedIssues: 13
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-16T04:50:23Z"
lastCommitAt: "2026-10-31T15:59:03Z"
lastReleaseAt: "2026-03-28T16:12:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 39
maintainers: ["gubatron"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1182917091/8f3de6b5-7bd7-4614-9736-43e1b998fb32"
fundingLinks: ["GITHUB:https://github.com/gubatron", "CUSTOM:https://www.paypal.com/donate?business=gubatron%40gmail.com", "CUSTOM:https://etherscan.io/address/0xbcF4ce65d9a4df25f4016F800Ae79cc68892965e", "CUSTOM:https://snowscan.xyz/address/0xbcF4ce65d9a4df25f4016F800Ae79cc68892965e"]
discussionCount: 1
---

# MentisDB

MentisDB is a **durable semantic memory engine and versioned skill registry** for AI agents — a persistent, hash-chained brain that survives context resets, model swaps, and team turnover.

It stores semantically typed thoughts in an append-only, hash-chained memory log through a swappable storage adapter layer. The skill registry is a git-like immutable version store for agent instruction bundles — every upload is a new version, history is never overwritten, and every version is cryptographically signable.

---

## Why MentisDB

**Harness Swapping** — the same durable memory works across every AI coding environment. Connect Claude Code, OpenAI Codex, GitHub Copilot CLI, Qwen Code, Cursor, VS Code, or any MCP-capable host to the same `mentisdb` daemon and your agents share one brain, regardless of which tool you picked up today.

**Zero Knowledge Loss Across Context Boundaries** — when an agent's context window fills, it writes a `Summary` checkpoint to MentisDB, compacts, reloads `mentisdb_recent_context`, and continues without losing a single decision. Chat history is ephemeral. MentisDB is permanent.

**Fleet Orchestration at Scale** — one project manager agent…
