---
repo: "rustledger/rustledger"
name: "rustledger"
description: "Modern plain text accounting. Beancount compatible."
url: "https://github.com/rustledger/rustledger"
homepage: "https://rustledger.github.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["accounting", "beancount", "cli", "double-entry", "finance", "ledger", "rust"]
stars: 300
forks: 25
openIssues: 5
closedIssues: 348
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2026-01-04T02:35:58Z"
lastCommitAt: "2026-06-24T00:23:37Z"
lastReleaseAt: "2026-01-25T13:40:53Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 29
maintainers: ["robcohen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c69b2cb5e3c7a4317f794eb711ced3bb26e728ef52deb6abfa00f05694a90da8/rustledger/rustledger"
fundingLinks: ["LIBERAPAY:https://liberapay.com/rustledger"]
discussionCount: 18
---

# rustledger

**A blazing-fast Rust implementation of [Beancount](https://beancount.github.io/)**

Parse and validate your ledger faster than Python beancount.

</div>

______________________________________________________________________

## Why rustledger?

| | |
|---|---|
| **10-30x faster** | Parse and validate large ledgers in milliseconds ([see benchmarks](#performance)) |
| **No dependencies** | No Python runtime, no libraries to install |
| **Drop-in replacement** | Compatible `bean-*` CLI commands for easy migration |
| **Full compatibility** | Parses any valid beancount file |
| **Editor support** | LSP server for VS Code, Neovim, Helix, and more |
| **AI-ready** | MCP server for Claude, Cursor, and other AI assistants |
| **Runs anywhere** | WebAssembly support for browser and Node.js |
| **Better errors** | Detailed error messages with source locations |
| **31 built-in plugins** | Plus Python plugin compatibility via WASI sandbox |
| **Bank import** | CSV/OFX import with auto-detection, dedup, and categorization |

<details>
<summary><strong>Comparison with other tools</strong></summary>

| Feature | rustledger | Python beancount | hledger | ledger-cli |…
