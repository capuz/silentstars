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
stars: 123
forks: 23
openIssues: 17
closedIssues: 66
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-06-01T11:56:53Z"
lastCommitAt: "2026-11-17T14:33:12Z"
lastReleaseAt: "2026-06-18T16:38:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 47
maintainers: ["Goldziher"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/809000718/06af399b-400f-4096-b94d-d69ee8e0d95e"
discussionCount: 2
---

**The context and communication layer for coding agents.**

basemind turns any repo into an always-current map of its code, documents, history, and memory —
so agents answer from **structure and search** instead of burning their context window on `grep` and
file reads — and gives a team of agents a **shared channel to coordinate** while they work. One
server does both.

Code map across **300+ languages** · PDF, Office, HTML, email and image documents · semantic + full-text search ·
git history & blame · shared memory · agent-to-agent comms

[Docs](https://basemind.ai) · [Install](#installation) · [Features](#what-you-get) · [How it works](#how-it-works) · [Performance](#performance) · [CLI](#cli-reference)

---

---

## What you get

basemind answers with **file paths, line numbers, and signatures — not whole files** — so a question
about your code costs a small fraction of the tokens it takes to read the source.

| Capability | What it does | Key tools |
|---|---|---|
| **Code intelligence** | Read the code map instead of opening files: what a file contains (`code_outline`), where a name is defined (`code_symbols`), one symbol's body or an exact line span (`code_read`), text…
