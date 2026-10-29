---
repo: "Pseudogiant-xr/Pseudolife-MCP"
name: "Pseudolife-MCP"
description: "Persistent long-term memory for Agents — an MCP server with an associative memory bank, a canonical-fact cortex, sleep-like dream consolidation, and a web console. Not quite alive."
readmeQualityOk: true
url: "https://github.com/Pseudogiant-xr/Pseudolife-MCP"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [71, 23]
topics: ["agent-memory", "claude", "long-term-memory", "mcp", "mcp-server", "memory", "pgvector", "postgres", "agentic-memory", "ai-agents"]
stars: 6
forks: 1
openIssues: 20
closedIssues: 24
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2026-07-16T04:25:29Z"
lastCommitAt: "2026-10-29T05:50:11Z"
lastReleaseAt: "2026-10-03T16:48:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 56
maintainers: ["Pseudogiant-xr"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c9d151b9da7e4f4a627d241ccd15387717395855dc592430fcc07b0b8e962ea/Pseudogiant-xr/Pseudolife-MCP"
---

# Pseudolife-MCP

[简体中文](https://github.com/Pseudogiant-xr/Pseudolife-MCP/blob/HEAD/docs/i18n/README.zh.md) ·
[日本語](https://github.com/Pseudogiant-xr/Pseudolife-MCP/blob/HEAD/docs/i18n/README.ja.md) ·
[한국어](https://github.com/Pseudogiant-xr/Pseudolife-MCP/blob/HEAD/docs/i18n/README.ko.md) ·
[Português (BR)](https://github.com/Pseudogiant-xr/Pseudolife-MCP/blob/HEAD/docs/i18n/README.pt-br.md) ·
[Español](https://github.com/Pseudogiant-xr/Pseudolife-MCP/blob/HEAD/docs/i18n/README.es.md)

**Persistent long-term memory for Claude Code, Codex, and other MCP clients.**

An MCP server that gives coding agents a long-term memory that persists across
sessions — surviving context compactions and fresh tasks. Your coding agent is
the intelligence; this server is its memory on disk.

What you get:

- **Associative memory with honest forgetting** — a flat similarity store
  ranked by hybrid dense-plus-lexical retrieval, with conflict detection
  that admits potential updates while preserving earlier source notes;
  whole-note replacement is explicit. (The measured verdict: a preregistered
  ablation campaign found the previous 8-band continuum tied a flat store
  on every gate, so the simpler…
