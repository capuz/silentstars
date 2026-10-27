---
repo: "galihroswandi/Personal-Portfolio"
name: "Personal-Portfolio"
description: "Personal Website Galih Roswandi"
readmeQualityOk: true
url: "https://github.com/galihroswandi/Personal-Portfolio"
homepage: "https://galihroswandi.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [55, 30]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-22T15:25:33Z"
lastCommitAt: "2026-10-27T09:16:24Z"
lastReleaseAt: "2024-10-08T11:11:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 55
maintainers: ["galihroswandi"]
openGraphImageUrl: "https://opengraph.githubassets.com/55551d5837588e8d765f8af9e46b9023eea60bb90d7f2af689564b3e960300fc/galihroswandi/Personal-Portfolio"
---

# Galih Roswandi · portfolio

Bilingual (Indonesian + English) personal portfolio. Static Astro site, deployed to Vercel.

> Work in progress. Sections below are filled in as the phases land.

## Requirements

- Node 24 (`.nvmrc`), pnpm via corepack: `corepack enable pnpm`

## Setup

```sh
corepack enable pnpm
pnpm install
pnpm dev            # http://localhost:4321 → redirects to /id/ or /en/
```

## Scripts

| Script                 | What it does                                                |
| ---------------------- | ----------------------------------------------------------- |
| `pnpm dev`             | Dev server                                                  |
| `pnpm build`           | Static build into `dist/`                                   |
| `pnpm preview`         | Serve `dist/` locally                                       |
| `pnpm lint`            | ESLint + Prettier check                                     |
| `pnpm format`          | Prettier write + ESLint fix                                 |
| `pnpm typecheck`       | `astro check` (TypeScript + Astro templates)                |
| `pnpm test`            | Vitest unit tests…
