---
repo: "checkmate-works/blindfold-chess"
name: "blindfold-chess"
description: "A free online platform for practising blindfold chess"
readmeQualityOk: true
url: "https://github.com/checkmate-works/blindfold-chess"
homepage: "https://www.blindfold-chess.online"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["blindfold-chess", "chess"]
stars: 6
forks: 1
openIssues: 33
closedIssues: 147
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-14T08:51:35Z"
lastCommitAt: "2026-11-10T11:37:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 83
maintainers: ["k0kishima"]
openGraphImageUrl: "https://opengraph.githubassets.com/2166fb8f5356f19a09fddd195ecb0028217970bddfe983bde18b7fdc593159b6/checkmate-works/blindfold-chess"
---

# Blindfold Chess (Monorepo)

Free online platform to practice blindfold chess.

This repository is a Monorepo managed by [Turborepo](https://turbo.build/).

## Directory Structure

- `apps/web`: Next.js web application
- `apps/mobile`: React Native (Expo) mobile application

### Shared Packages

| Package                  | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| `packages/types`         | Shared TypeScript type definitions                                     |
| `packages/features`      | Cross-platform business logic (coordinate-quiz, etc.)                  |
| `packages/ui`            | Shared color/theme constants (single source of truth for web & mobile) |
| `packages/eslint-config` | Shared ESLint configuration                                            |

## Quick Start

### Prerequisites

- Node.js 24.x
- pnpm 10.x

> [!TIP]
> This project uses [Volta](https://volta.sh/) to pin the Node.js version.
> If you have Volta installed, it will automatically switch to the correct Node.js version defined in `package.json`.
>
> Volta works through…
