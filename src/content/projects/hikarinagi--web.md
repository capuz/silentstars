---
repo: "Hikarinagi/web"
name: "web"
description: "Hikarinagi web application"
readmeQualityOk: true
url: "https://github.com/Hikarinagi/web"
homepage: "https://www.hikarinagi.org"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [60, 39]
topics: ["nuxt", "typescript", "vue"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-30T08:34:46Z"
lastCommitAt: "2026-10-14T08:58:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 42
maintainers: ["hikarinagi-open-source-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bce55dc2321db0145ba6fb935a5494a8ef6e720e643840af79dc74956c791efb/Hikarinagi/web"
---

# Hikarinagi Web

The Nuxt 4 web application for Hikarinagi.

This repository is mirrored from Hikarinagi's private development monorepo. It contains the web
application and the small set of shared packages required to build it independently. Issues and
pull requests are welcome here; maintainers import accepted changes into the upstream monorepo
before the next mirror sync.

## Requirements

- Node.js 24
- pnpm 10.10

## Develop

```bash
corepack enable
pnpm install
pnpm dev
```

## Validate

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## License

AGPL-3.0-or-later
