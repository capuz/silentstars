---
repo: "nakafaai/nakafa.com"
name: "nakafa.com"
description: "AI Native Free High-Quality Learning Platform (K-12 to University)"
readmeQualityOk: true
url: "https://github.com/nakafaai/nakafa.com"
homepage: "https://nakafa.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["education", "learn", "study", "community", "curriculum", "experts", "students", "teachers", "indonesia", "agent"]
stars: 81
forks: 18
openIssues: 4
closedIssues: 17
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-20T18:11:05Z"
lastCommitAt: "2026-11-27T11:53:35Z"
lastReleaseAt: "2025-12-16T00:05:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["nabilfatih"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/936220655/8cc28c00-3829-4b78-99ed-cf10deeebd08"
discussionCount: 2
---

# Nakafa

Nakafa is a source-available educational platform for structured learning,
assessments, Quran study, and political analysis. The production site is
[nakafa.com](https://nakafa.com).

This repository owns the React applications on TanStack Start, design system,
transactional Convex backend, renderer implementations, user state, and
product integrations. The separate
[Aksara repository](https://github.com/nakafaai/aksara) owns authored content
and signed publication artifacts for every content scope. `packages/contents`
contains only live Nakafa product, formatting, and agent contracts. It is not an
authored content source or publication path.

## Toolchain

`package.json` is the toolchain source of truth:

- Node.js 26.13.1, and the Node major that `packages/backend/convex.json` names
  for Convex "use node" actions, installed with `brew install node@<major>`. The
  local acceptance backend finds it through Homebrew, so no shell puts it first.
- Bun 1.4.5
- Turborepo
- TanStack Start and React 19
- tsrs, the Rust port of the TypeScript 7.1 compiler
- Convex
- Vitest
- Biome through Ultracite
