---
repo: "receptron/mulmoclaude"
name: "mulmoclaude"
description: "Multi-modal Claude Code Client"
url: "https://github.com/receptron/mulmoclaude"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 185
forks: 28
openIssues: 42
closedIssues: 300
watchers: 2
contributors: 6
recentReleases: 10
createdAt: "2026-03-29T02:37:30Z"
lastCommitAt: "2026-06-25T01:31:17Z"
lastReleaseAt: "2026-04-19T06:23:51Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 33
maintainers: ["snakajima", "isamu"]
openGraphImageUrl: "https://opengraph.githubassets.com/c41af2197f255eadee7a5e195f5a0ce15839f606bd2c964c2f6ad74d8ad5d149/receptron/mulmoclaude"
---

# MulmoClaude

**English** · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (BR)](README.pt-BR.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

> **[How AI-Native Applications Should Be Built](MANIFEST.md)** — the architecture, UX, and protocol thesis behind MulmoClaude.

MulmoClaude is an open-source, AI-native application platform that runs locally on your machine. Instead of siloed apps, capabilities are built as plugins within a single registry. Applications running on it today include a full accounting system (real server-side bookkeeping logic), a personal wiki, and an SEC-filings reader (Edgar). Claude acts as a universal controller that composes across these plugins.

You interact in natural language, and Claude summons the right GUI for the task — replying in markdown, charts, forms, wikis, spreadsheets, or 3D scenes. All data lives as plain files in your workspace.

## Quick Start

```bash
# 1. Clone and install
git clone git@github.com:receptron/mulmoclaude.git
cd mulmoclaude && yarn install

# 2. Configure (optional — image generation requires Gemini API key)
cp .env.example .env   # edit .env to add…
