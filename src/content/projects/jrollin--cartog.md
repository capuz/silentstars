---
repo: "jrollin/cartog"
name: "cartog"
description: "Pre-indexed code knowledge graph via treesitter, enchanced query with RAG, MCP server, private and local storage. Agent ready."
readmeQualityOk: true
url: "https://github.com/jrollin/cartog"
homepage: "https://www.cartog.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
topics: ["claude", "rlm", "skills", "token", "rust", "lsp-server", "treesitter", "cli", "lsp", "mcp"]
stars: 20
forks: 4
openIssues: 0
closedIssues: 25
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-25T12:45:48Z"
lastCommitAt: "2026-11-17T14:45:56Z"
lastReleaseAt: "2026-02-26T13:28:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 58
maintainers: ["jrollin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb6d6befff9e71f1991106a74416a9083772cd601035218418f7d91e88c09aee/jrollin/cartog"
---

# Cartog

**Map your codebase. Navigate by graph, not grep.**

**Semantic search that returns named symbols, not text chunks, ranked, reranked, and budget-aware.**

**~280 tokens per query vs ~1,700 for grep+read · 97% recall · 8 µs–20 ms structural-query latency · 18 languages + 4 frameworks.**

Cartog pre-computes a code graph (symbols, and the calls, imports, and inheritance between them) so you can query structure instantly instead of grepping for text. Ask "who calls this?", "what breaks if I change it?", or "find the auth logic" and get a ranked, structured answer: an exact function with its signature and span, not a file-and-line guess you have to open and read.

Use it from the CLI for day-to-day navigation, or as an MCP server so AI agents query the graph instead of flooding their context with raw file dumps, at a fraction of the token cost. One static binary, one SQLite file. No Python, no pip, no Docker, no cloud: 100% local by default.

> **[Documentation site](https://www.cartog.dev/)**

## Contents

- [Quick Start](#quick-start)
- [Why Cartog](#why-cartog)
- [What You Get](#what-you-get)
- [Install](#install)
- [Commands](#commands)
- [MCP Server…
