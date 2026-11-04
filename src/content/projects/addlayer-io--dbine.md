---
repo: "addlayer-io/dbine"
name: "dbine"
description: "DBine database manager: a free desktop app for 130+ SQL and NoSQL databases and cloud services, with notebooks, schema & data compare, cross-engine migration, a local AI assistant, an MCP server and encrypted cloud sync. Rust + Tauri."
readmeQualityOk: true
url: "https://github.com/addlayer-io/dbine"
homepage: "https://dbine.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["database-client", "database-gui", "database-manager", "mcp-server", "mongodb", "mysql", "oracle", "postgresql", "redis", "rust"]
stars: 36
forks: 3
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-28T10:58:41Z"
lastCommitAt: "2026-11-04T11:28:34Z"
lastReleaseAt: "2026-10-06T20:41:29Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 48
maintainers: ["addlayerio", "mpanichella", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3ed347758216a6089329a7b1de97dee5589819ff26a1a0ce0fb9d83d7291395/addlayer-io/dbine"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/addlayer"]
---

# DBine

**DBine** is a desktop multi-engine database manager from AddLayer. One app
works with **130+ databases and cloud services**: relational, analytical,
document, key-value, graph, time-series and search databases. It runs on
Windows, macOS and Linux.

## Install

- **macOS (Homebrew):** `brew install --cask addlayer-io/tap/dbine`
- **Windows (winget):** `winget install AddLayer.DBine` (it installs the
  version published in winget; DBine then updates itself to the latest).
- **Linux:** `.flatpak`, `.AppImage`, `.deb` and `.rpm` packages in
  [Releases](https://github.com/addlayer-io/dbine/releases/latest).
- **All platforms:** installers on [dbine.com](https://dbine.com/?utm_source=github&utm_medium=readme#download).

More options in [Download](#download).

It is built with **Tauri 2**, a **Rust** core and a **Vue 3 + Element Plus**
UI. The interface is a VS Code-style workbench. Each engine is its own crate
and queries are organized inside each database.

## What it does

### Explorer and connections

- **Tree per connection and per database.** The first node of each database is
  **Queries**, with that database's saved queries. This way loose tabs don't
  pile up. Below…
