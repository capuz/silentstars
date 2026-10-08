---
repo: "jfolcini/agaric"
name: "agaric"
description: "Agaric — local-first, block-based note-taking app inspired by Org-mode and Logseq. Tauri 2 + React 19 + Rust."
readmeQualityOk: true
url: "https://github.com/jfolcini/agaric"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [53, 44]
stars: 10
forks: 1
openIssues: 7
closedIssues: 2551
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-25T09:18:39Z"
lastCommitAt: "2026-10-08T10:51:23Z"
lastReleaseAt: "2026-05-17T09:08:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["jfolcini", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1220744390/81f37406-55ed-4451-aeb3-2ce639020f94"
---

# Agaric

A local-first, block-based note-taking app for **Linux** (primary), **Windows**, **macOS**, and **Android**. Inspired by Org-mode and Logseq — journal-first, with powerful tagging and emergent structure. No cloud, no accounts. Your data lives on your machine, syncs over local WiFi. **AI-ready** — ships an MCP integration so Claude Desktop, Cursor, Continue, and other agents talk directly to your local vault.

## What is it?

Agaric treats everything as a **block** — paragraphs, headings, code snippets, tasks. Blocks live in a tree: pages contain blocks, blocks can nest infinitely. Tags and links are first-class citizens that connect your knowledge graph.

Think Logseq or Notion, but:

- **Local-first** — SQLite database on your filesystem, no server required
- **Offline-first** — works without internet, syncs peer-to-peer over local WiFi
- **Fast** — Rust backend, instant search via FTS5, sub-millisecond operations
- **Private** — no cloud telemetry, no external analytics, no cloud. Your vault is a plain SQLite file on disk (no at-rest encryption) — rely on OS full-disk encryption (LUKS / FileVault / BitLocker) for confidentiality. (The local logger in…
