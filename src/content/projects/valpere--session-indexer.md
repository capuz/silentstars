---
repo: "valpere/session-indexer"
name: "session-indexer"
description: "Per-project semantic search over Claude Code session history. Indexes JSONL transcripts into SQLite; retrieves via bge-m3 embeddings (Ollama) with FTS5 fallback."
readmeQualityOk: true
url: "https://github.com/valpere/session-indexer"
homepage: "https://valpere.github.io/projects/session-indexer/"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["claude-code", "cli", "embeddings", "golang", "ollama", "rag", "semantic-search", "session-history", "sqlite"]
stars: 30
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-06-25T09:29:49Z"
lastCommitAt: "2026-07-30T06:06:30Z"
lastReleaseAt: "2026-07-24T07:44:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 46
maintainers: ["valpere", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/56294499e2e678147c888d3bb5a895e0d419d7cc69f33c2de9ea7580cd11d48c/valpere/session-indexer"
---

# session-indexer

Per-project semantic search over Claude Code session history. Indexes JSONL
transcripts into a per-project SQLite store; retrieves via bge-m3 embeddings
(Ollama) with FTS5 BM25 fallback. Automatically injects relevant past context
at session start.

**Problem it solves:** returning to a project after a week and needing to find
"what did we decide about X" across dozens of past sessions. `session-end`
gives you "where I left off last time"; `session-indexer` gives you "what we
discussed across all history" — by semantic similarity, not grep.

**Scope: single developer, single machine.** This indexes *your own*
individual sessions with Claude Code in a project — not a team's shared
history, not a multi-user store. If you need to share findings with
teammates, that's a conversation/PR/doc, not something this tool does.
See below for why that's a deliberate choice, not a limitation.

**Why not a centralised memory tool?**
[mempalace](https://github.com/MemPalace/mempalace),
[agentmemory](https://github.com/rohitg00/agentmemory), and
[MemMachine](https://github.com/MemMachine/MemMachine) all run on a single
shared backend — mempalace in ChromaDB, agentmemory via an…
