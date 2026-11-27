---
repo: "PedroZappa/strudel-lsp-server"
name: "strudel-lsp-server"
description: "LSP Server for Strudel DSL"
readmeQualityOk: true
url: "https://github.com/PedroZappa/strudel-lsp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["dsl", "language", "lsp", "lsp-server", "strudel", "tooling"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-08-21T10:19:03Z"
lastCommitAt: "2026-11-27T16:25:12Z"
lastReleaseAt: "2026-11-27T14:41:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 61
maintainers: ["PedroZappa"]
openGraphImageUrl: "https://opengraph.githubassets.com/36e5e1e6ea0be85bae04083896ec70868cbd7e6692da6966468ce959fe459959/PedroZappa/strudel-lsp-server"
---

# Strudel LSP Server

An editor-agnostic Language Server Protocol implementation for [Strudel](https://strudel.cc/). The npm package is named `strudel-lsp-server` and the first release is `0.1.0`. The server core speaks LSP over stdio and does not depend on any editor client.

## Features

- Diagnostics that stay quiet on incomplete live-coding input.
- Completion, hover documentation and signature help backed by pinned Strudel metadata.
- Definition, references, document symbols and bounded workspace symbols.
- Rename, quick fixes and a conservative inline-constant refactoring.
- Semantic tokens and indentation-only formatting.
- Mini-notation-aware diagnostics, hover and tokens.

## Requirements

The `0.1.0` package supports Node.js 24 and 26 with npm 11.x. The required first-release validation matrix is Linux x64 with glibc, macOS arm64 and Windows x64; the parser also ships prebuilds for Linux arm64, macOS x64 and Windows arm64, which remain best-effort until validated. See [ADR-035](https://github.com/PedroZappa/strudel-lsp-server/blob/main/docs/DECISIONS.md).
