---
repo: "Goldziher/basemind"
name: "basemind"
description: "Full AI context and content layer for coding agents over one MCP server — tree-sitter code-map, document RAG, shared memory, multi-agent comms, web crawl, git history + blame. 300+ languages, 10+ agent harnesses, pure Rust."
readmeQualityOk: true
url: "https://github.com/Goldziher/basemind"
homepage: "https://basemind.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["agent-context", "code-intelligence", "code-map", "lancedb", "mcp", "rag", "tree-sitter", "vector-search", "web-crawler", "claude"]
stars: 112
forks: 21
openIssues: 1
closedIssues: 56
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2024-06-01T11:56:53Z"
lastCommitAt: "2026-10-23T08:47:08Z"
lastReleaseAt: "2026-06-18T16:38:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 49
maintainers: ["Goldziher", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/809000718/06af399b-400f-4096-b94d-d69ee8e0d95e"
discussionCount: 2
---

**The context and communication layer for coding agents.**

basemind turns any repo into an always-current map of its code, documents, history, and memory —
so agents answer from **structure and search** instead of burning their context window on `grep` and
file reads — and gives a team of agents a **shared channel to coordinate** while they work. One
server does both.

Code map across **300+ languages** · documents in **90+ formats** · semantic + full-text search ·
git history & blame · shared memory · web crawl · agent-to-agent comms

[Docs](https://basemind.ai) · [Install](#installation) · [Features](#what-you-get) · [How it works](#how-it-works) · [Performance](#performance) · [CLI](#cli-reference)

---

---

## What you get

basemind answers with **file paths, line numbers, and signatures — not whole files** — so a question
about your code costs a small fraction of the tokens it takes to read the source.

| Capability | What it does | Key tools |
|---|---|---|
| **Code intelligence** | Read the code map instead of opening files: a file's structure (`outline`), find a definition by name (`symbols`), regex content search (`grep`), enumerate or fuzzy-find files (`files` ·…
