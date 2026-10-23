---
repo: "minimalcorp/tsunagi"
name: "tsunagi"
description: "Web UI for managing Claude Code tasks across multiple repos with worktree orchestration and real-time terminal. "
originalDescription: "Web UI for managing Claude Code tasks across multiple repos with worktree orchestration and real-time terminal. "
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/minimalcorp/tsunagi"
homepage: "https://minimalcorp.github.io/tsunagi/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-22T09:09:40Z"
lastCommitAt: "2026-10-23T12:05:48Z"
lastReleaseAt: "2026-04-15T15:33:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 55
maintainers: ["ak098ma", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/86592702c908cbcd75c344dcfc6988058a1ad53bf994fc01b4886b30f12d10d2/minimalcorp/tsunagi"
---

# Tsunagi Monorepo

**Tsunagi (繋ぎ)** — A web UI tool that integrates projects from multiple GitHub organizations locally and visualizes and controls AI-driven development with Claude AI.

This repository is a monorepo based on npm workspaces.

## Packages

| Package | Location | Published to npm | Description |
| ------------------------------------ | ------------ | -------- | ---------------------------------------------------------------- |
| [`@minimalcorp/tsunagi`](https://github.com/minimalcorp/tsunagi/blob/HEAD/apps/web) | `apps/web/`  | ✅       | Tsunagi main application (Next.js + Fastify + Prisma)                        |
| [`tsunagi-docs`](https://github.com/minimalcorp/tsunagi/blob/HEAD/apps/docs)        | `apps/docs/` | ❌       | User documentation site (Nextra, deployed to GitHub Pages) |

## Quick Start (for end users)

If you just want to use Tsunagi, you can launch it directly from npm:

```bash
npx @minimalcorp/tsunagi
```

For details, see [apps/web/README.md](https://github.com/minimalcorp/tsunagi/blob/HEAD/apps/web/README.md) or
[documentation site](https://minimalcorp.github.io/tsunagi/).

## Development Setup

```bash
# Clone the repository
git clone…
