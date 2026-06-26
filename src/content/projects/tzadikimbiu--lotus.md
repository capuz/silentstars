---
repo: "TzadikimBIU/lotus"
name: "lotus"
description: "Plugin for turning notes into runnable, typed, and reproducible polyglot workspaces"
url: "https://github.com/TzadikimBIU/lotus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["obsidian", "plugin", "workspace"]
stars: 23
forks: 2
openIssues: 3
closedIssues: 23
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-06-20T15:19:02Z"
lastCommitAt: "2026-06-26T23:40:34Z"
lastReleaseAt: "2026-06-26T23:42:25Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["Thomy-G", "23384"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1275349705/8f8a22d4-6668-4ed2-849d-3b43f6f2cd14"
---

# lotus

Obsidian plugin for executing ordinary fenced Markdown code blocks.

lotus is intended for research and exploratory notes where code, proofs, solver queries, and runtime output should stay readable in the document. It adds execution controls to normal fenced code blocks and renders transient output beneath the block. The source block is not rewritten into a plugin-specific format.

## Model

lotus treats a fenced block as executable when the fence info string resolves to a supported language alias. The parser walks the active Markdown buffer, skips managed lotus output sections, normalises the fence language, and creates a stable block descriptor.

Each block receives an ID derived from these values:
- Vault-relative file path
- Supported block ordinal
- Normalised language
- Source content hash

That ID is used for output replacement and toolbar state. Rerunning a block updates the existing output panel instead of appending another panel.

## Installation

### Via Community Plugins
If Lotus is listed in the Community Plugins directory, install it from **Settings > Community plugins > Browse**.

### Manual Installation
1. Download `main.js`, `manifest.json`, and…
