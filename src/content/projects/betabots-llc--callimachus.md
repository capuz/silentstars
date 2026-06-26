---
repo: "BetaBots-LLC/callimachus"
name: "callimachus"
description: "One local, searchable index of your AI coding-agent history Claude Code, Codex, Cursor, Gemini & more. Keyword + semantic search, MCP server, CLI & VS Code extension."
url: "https://github.com/BetaBots-LLC/callimachus"
homepage: "https://callimachus.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [56, 41]
topics: ["ai-agents", "ai-tools", "claude-code", "codex", "cursor", "developer-tools", "embeddings", "gemini", "llm", "local-first"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-17T23:23:37Z"
lastCommitAt: "2026-06-26T23:42:03Z"
lastReleaseAt: "2026-06-21T04:50:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 56
maintainers: ["ashaller2017", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b413769c5582a2cc1e89feae018bb0e303b3d2ed15656a65c8d920dd1fb364ea/BetaBots-LLC/callimachus"
discussionCount: 0
---

</p>

</p>

> **Local index & search for your AI coding-agent threads** — across **11 tools** (Claude Code, Codex, Cursor, Gemini CLI, Qwen Code, Goose, OpenCode, Continue, Cline, Roo Code, Kilo Code) — plus a provider-agnostic chat, an MCP server, a CLI, and a VS Code / Cursor extension. Everything stays on your machine.

Named for [Callimachus](https://en.wikipedia.org/wiki/Callimachus), who built the first catalogue of the Library of Alexandria.

## Download

Grab the latest signed build from **[Releases](../../releases/latest)** — macOS (`.dmg`, Apple Silicon), Windows (`.msi`), or Linux (`.AppImage` / `.deb`). The app auto-updates from there on. Prefer to build it yourself? See [Develop](#develop).

## What it does

- **Indexes** every conversation from 11 coding agents into one local SQLite store — Claude Code, Codex, Cursor, Gemini CLI, Qwen Code, Goose, OpenCode, Continue, Cline, Roo Code, and Kilo Code. Adding another source is a [small, documented contract](apps/desktop/src-tauri/src/indexer/README.md).
- **Searches** them with hybrid ranking: keyword (SQLite FTS5 / BM25) fused with on-device semantic similarity (sqlite-vec KNN, no cloud) via Reciprocal Rank Fusion.…
