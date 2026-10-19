---
repo: "steipete/gifgrep"
name: "gifgrep"
description: "Grep the GIF. Stick the landing."
readmeQualityOk: true
url: "https://github.com/steipete/gifgrep"
homepage: "https://gifgrep.com"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["gif", "go", "tui"]
stars: 134
forks: 19
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2025-12-30T17:17:45Z"
lastCommitAt: "2026-10-19T09:14:12Z"
lastReleaseAt: "2026-09-12T01:20:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 43
maintainers: ["steipete", "github-actions[bot]", "erazemk"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7b8a843404bd3827f6eae9fd208d5b81931ba74a6dfe64257f29119e1f106db/steipete/gifgrep"
---

# gifgrep 🧲 — Grep the GIF. Stick the landing.

gifgrep searches GIPHY and KLIPY from the terminal. It provides pipe-friendly CLI output and an interactive TUI with inline previews.

## Install

Homebrew is the shortest path on macOS and Linux:

```bash
brew install steipete/tap/gifgrep
```

With Go 1.26 or newer:

```bash
go install github.com/steipete/gifgrep/cmd/gifgrep@latest
```

Prebuilt macOS and Linux binaries are available from [GitHub Releases](https://github.com/steipete/gifgrep/releases/latest). macOS downloads require macOS 13 or newer and are Developer ID signed by Peter Steinberger and notarized by Apple, so direct downloads pass Gatekeeper.

## Quick start

Set a provider key, then search or open the TUI:

```bash
export GIPHY_API_KEY="your-key"
gifgrep cats --max 3
gifgrep cats --format url | head -n 1
gifgrep tui "office handshake"
```

Use `KLIPY_API_KEY` instead to search KLIPY. With both keys configured, the default `auto` source tries GIPHY first and falls back to KLIPY if GIPHY fails.

## Commands

| Command | Purpose |
| --- | --- |
| [`gifgrep <query>`](https://gifgrep.com/search) | Search and print plain text, URLs, Markdown, TSV, or JSON. |
| [`gifgrep…
