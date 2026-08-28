---
repo: "nakafaai/nakafa.com"
name: "nakafa.com"
description: "AI Native Free High-Quality Learning Platform (K-12 to University)"
readmeQualityOk: true
url: "https://github.com/nakafaai/nakafa.com"
homepage: "https://nakafa.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["education", "learn", "study", "community", "curriculum", "experts", "students", "teachers", "indonesia", "agent"]
stars: 79
forks: 18
openIssues: 7
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-20T18:11:05Z"
lastCommitAt: "2026-08-28T13:04:42Z"
lastReleaseAt: "2025-12-16T00:05:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 50
maintainers: ["nabilfatih", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/936220655/8cc28c00-3829-4b78-99ed-cf10deeebd08"
discussionCount: 1
---

# Nakafa

Nakafa is a source-available educational platform for structured learning,
assessments, Quran study, and political analysis. The production site is
[nakafa.com](https://nakafa.com).

This repository owns the React and Next.js applications, design system,
transactional Convex backend, renderer implementations, user state, and
product integrations. The separate
[Aksara repository](https://github.com/nakafaai/aksara) owns authored content
and signed publication artifacts for every content scope. `packages/contents`
contains only live Nakafa product, formatting, and agent contracts. It is not an
authored content source or publication path.

## Toolchain

`package.json` is the toolchain source of truth:

- Node.js 24
- pnpm 11.23.0
- Turborepo
- Next.js 16 and React 19
- TypeScript 7 CLI with TypeScript 6 API compatibility
- Convex
- Vitest
- Biome through Ultracite

Do not add `.npmrc`, `.node-version`, `.nvmrc`, or another package-manager
contract unless the repository gains a measured need that `package.json`
cannot express.

## Setup

```sh
git clone https://github.com/nakafaai/nakafa.com.git
cd nakafa.com
pnpm install --frozen-lockfile
pnpm dev
```

The main web app is…
