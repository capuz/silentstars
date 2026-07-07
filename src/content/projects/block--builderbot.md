---
repo: "block/builderbot"
name: "builderbot"
description: "Incubating experimental AI projects to operate millions of lines of code"
readmeQualityOk: true
url: "https://github.com/block/builderbot"
language: "Rust"
languages: ["Rust", "TypeScript", "Svelte"]
languagePcts: [42, 23, 23]
stars: 52
forks: 17
openIssues: 6
closedIssues: 12
watchers: 1
contributors: 27
recentReleases: 0
createdAt: "2026-02-04T18:19:24Z"
lastCommitAt: "2026-07-07T06:38:26Z"
lastReleaseAt: "2026-03-30T03:25:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 36
maintainers: ["matt2e", "ktabouguia-sq", "logan-primary-vc"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fc4fdba72aaab0b6ecac716a659067c1b68a9058b4c3968004e4ebe26b8311c/block/builderbot"
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
