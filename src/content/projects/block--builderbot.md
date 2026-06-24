---
repo: "block/builderbot"
name: "builderbot"
description: "Incubating experimental AI projects to operate millions of lines of code"
url: "https://github.com/block/builderbot"
language: "Rust"
languages: ["Rust", "Svelte", "TypeScript"]
languagePcts: [41, 24, 22]
stars: 47
forks: 15
openIssues: 6
closedIssues: 12
watchers: 1
contributors: 26
recentReleases: 3
createdAt: "2026-02-04T18:19:24Z"
lastCommitAt: "2026-06-24T00:23:17Z"
lastReleaseAt: "2026-03-30T03:25:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 42
maintainers: ["matt2e", "kalvinnchau", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/27d5c3d19c26f2f266d2b21a86d368c11b0dd65f216b26554bac8391ac708c6a/block/builderbot"
---

# Builderbot Monorepo

This repository contains Builderbot apps, shared UI packages, and Rust crates.

## Quick Start

```bash
# from repo root
source ./bin/activate-hermit
just setup
```

`just setup` runs `lefthook install` and `pnpm install`.

Then run an app:

```bash
just dev          # start Staged
just dev differ   # start Differ
```

## App Installation

For end-user installs:

- Staged (macOS): `curl -fsSL https://raw.githubusercontent.com/block/builderbot/main/apps/staged/install.sh | bash`
- Differ: no standalone installer yet; run from source with `just dev differ` or build with `just app differ build`

## Command Guide

The root `justfile` supports both styles:

```bash
just dev differ     # verb-first (recommended for humans)
just app differ dev # explicit delegation form
```

Useful commands:

```bash
just apps         # list app names
just setup        # first-time setup (hooks + JS deps)
just dev          # run Staged app
just dev differ   # run Differ app
just staged       # alias for `just app staged dev`
just differ       # alias for `just app differ dev`
just check        # full non-modifying checks
just ci           # alias of `just check`
just fmt          #…
