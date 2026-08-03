---
repo: "neondatabase/neon-pkgs"
name: "neon-pkgs"
description: "Monorepo for Neon's open-source SDKs, libraries, CLIs, and framework plugins"
readmeQualityOk: true
url: "https://github.com/neondatabase/neon-pkgs"
homepage: "https://neon.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["command-line-tool", "neon", "postgres", "postgresql", "serverless", "cli", "sdk"]
stars: 50
forks: 8
openIssues: 3
closedIssues: 7
watchers: 3
contributors: 26
recentReleases: 9
createdAt: "2025-04-09T12:18:04Z"
lastCommitAt: "2026-08-03T06:43:37Z"
lastReleaseAt: "2026-07-11T05:12:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 60
maintainers: ["andrelandgraf", "thisistonydang", "a-giuliano"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/77690634?s=400&v=4"
discussionCount: 0
---

# Neon JavaScript/TypeScript packages

The monorepo for [Neon](https://neon.com)'s open-source JavaScript/TypeScript SDKs, libraries, CLIs, and framework plugins. Each folder under [`packages/`](https://github.com/neondatabase/neon-pkgs/blob/HEAD/packages) is an independently versioned, separately published package; they share tooling (pnpm workspaces, Biome, tsdown, Vitest, Changesets) but ship on their own cadence.

If you're looking for a single package's docs, see its own `README.md` under `packages/<name>/`.

## Packages

### Neon CLI

| Package | Description |
| --- | --- |
| `neon` | The Neon CLI. Install this package for the `neon` command. |
| `neonctl` | Compatibility package that delegates to `neon`. Provides the legacy `neonctl` command (plus `neon`) and is what Homebrew builds from. |

### Provisioning & project setup

| Package | Description |
| --- | --- |
| `neon-init` | Set up your project with Neon's MCP server for AI-powered database operations. |
| `neon-new` | A CLI tool and SDK for creating claimable Neon databases instantly. |
| `vite-plugin-neon-new` | A Vite plugin that automatically provisions databases during development. |

### Config-as-Code…
