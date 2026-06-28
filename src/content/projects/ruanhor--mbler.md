---
repo: "RuanhoR/mbler"
name: "mbler"
description: "A dev tool in Minecraft bedrock"
url: "https://github.com/RuanhoR/mbler"
homepage: "https://en-d.pmnx.qzz.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["dev", "minecraft", "minecraft-mod", "nodejs", "cli"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2025-11-20T12:08:09Z"
lastCommitAt: "2026-06-28T03:12:09Z"
lastReleaseAt: "2026-06-22T12:09:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["RuanhoR"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c900d70c1002db5a60e7a36f55174bbd4ad2d937a1255ce172c8a485337b8cb/RuanhoR/mbler"
---

# MBLER

A development toolchain for Minecraft Bedrock Edition Addons, built on [Rolldown](https://rolldown.rs).

## Features

- **MCX DSL** — Domain-specific language for Minecraft scripting with type safety
- **Manifest Generator** — Auto-generates `manifest.json` with deterministic UUIDs and module dependencies
- **Bundle** — Bundles scripts into single ESM files via Rolldown, with auto-externalization of Minecraft APIs
- **Component build** — Asset import support (`.png`, `.svg`, etc.) via MCX image components
- **Watch mode** — Incremental rebuild & file-copy on change via `mbler watch`
- **Minification** — Supports `oxc` (default), `terser`, and `esbuild` minifiers
- **Build cache** — Configurable caching (none/memory/file/filesystem/auto) for faster rebuilds
- **Release packaging** — Build `.mcaddon` archives via `BUILD_MODULE=release` environment variable
- **PMNX Marketplace** — Publish, install, uninstall, and manage addon packages
- **i18n** — Built-in internationalization (English & Chinese)
- **`mcx-tsc`** — Standalone MCX type-checker binary

## Installation

**Prerequisites:** Node.js >= 20.0.0, pnpm (recommended) or npm

```bash
npm install -g mbler
```

## Quick…
