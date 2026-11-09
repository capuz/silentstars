---
repo: "rustledger/rustledger"
name: "rustledger"
description: "Modern plain text accounting. Beancount compatible."
readmeQualityOk: true
url: "https://github.com/rustledger/rustledger"
homepage: "https://rustledger.github.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["accounting", "beancount", "cli", "double-entry", "finance", "ledger", "rust"]
stars: 423
forks: 49
openIssues: 8
closedIssues: 762
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2026-01-04T02:35:58Z"
lastCommitAt: "2026-11-09T04:35:23Z"
lastReleaseAt: "2026-01-25T13:40:53Z"
status: "thriving"
tags: ["funded", "community_hub"]
healthScore: 99
undervaluedScore: 34
maintainers: ["robcohen", "dependabot[bot]", "doniv79"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fdf6e2e2b52ee31bb398e7462b2b7a028c766fdf675ac96ea7ba96d773c27e8/rustledger/rustledger"
fundingLinks: ["LIBERAPAY:https://liberapay.com/rustledger"]
discussionCount: 25
---

# rustledger

**A blazing-fast Rust implementation of [Beancount](https://beancount.github.io/)**

Parse and validate your ledger faster than Python beancount.

______________________________________________________________________

## Why rustledger?

| | |
|---|---|
| **10-30x faster** | Parse and validate large ledgers in milliseconds ([see benchmarks](#performance)) |
| **No dependencies** | No Python runtime, no libraries to install |
| **Drop-in replacement** | Compatible `bean-*` CLI commands for easy migration |
| **Full compatibility** | Parses any valid beancount file |
| **Editor support** | LSP server for VS Code, Neovim, Helix, and more |
| **AI-ready** | MCP server for AI assistants, plus `ag-rledger` — an agent-native CLI with JSON envelopes |
| **Runs anywhere** | WebAssembly support for browser and Node.js |
| **Better errors** | Detailed error messages with source locations |
| **33 built-in plugins** | Plus Python plugin compatibility via WASI sandbox |
| **Bank import** | CSV/OFX import with auto-detection, dedup, and categorization |
| **Investment returns** | Money-weighted (XIRR) and time-weighted returns, robust over imperfect ledgers: a built-in beangrow…
