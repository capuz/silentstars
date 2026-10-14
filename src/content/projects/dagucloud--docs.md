---
repo: "dagucloud/docs"
name: "docs"
description: "Documentation for the Dagu workflow engine."
readmeQualityOk: true
url: "https://github.com/dagucloud/docs"
homepage: "https://docs.dagu.sh"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [64, 36]
stars: 5
forks: 7
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-10-26T09:43:03Z"
lastCommitAt: "2026-10-14T08:57:47Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 100
undervaluedScore: 97
maintainers: ["yohamta0"]
openGraphImageUrl: "https://opengraph.githubassets.com/f144bd3cf1687be392fdda1725a78d68664973aa0dff2e6af99c316142573ca3/dagucloud/docs"
---

# Dagu Documentation

This repository contains the VitePress site that powers the Dagu documentation. It includes guides, references, and workflow authoring tutorials for Dagu users.

## Prerequisites

- Node.js 20 or newer
- pnpm 9 or newer
- A current Dagu binary for validating embedded workflow examples

## Install

```bash
pnpm install
```

## Local development

```bash
pnpm dev
```

This launches VitePress at `http://localhost:5173` with hot-reload enabled.

## Build and preview

```bash
pnpm build
pnpm preview
```

`pnpm build` generates the static site into `.vitepress/dist`, and `pnpm preview` serves the built assets locally for final checks.

## Validate workflow examples

The validator prefers `../.local/bin/dagu` when this repository sits beside a Dagu checkout. Otherwise it uses `dagu` from `PATH`. It checks the binary against the current workflow syntax before scanning every example, so an old binary fails with a short, useful error.

Set `DAGU_BIN` when the current build lives somewhere else:

```bash
DAGU_BIN=/path/to/current/dagu pnpm validate:examples
```

CI builds Dagu from the current main branch before running this check.

## Directory overview

- `index.md`:…
