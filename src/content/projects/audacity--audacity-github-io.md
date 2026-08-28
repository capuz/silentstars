---
repo: "audacity/audacity.github.io"
name: "audacity.github.io"
description: "source code of the Audacity website"
readmeQualityOk: true
url: "https://github.com/audacity/audacity.github.io"
homepage: "https://www.audacityteam.org/"
language: "Astro"
languages: ["Astro", "TypeScript"]
languagePcts: [62, 27]
stars: 10
forks: 8
openIssues: 9
closedIssues: 15
watchers: 12
contributors: 28
recentReleases: 0
createdAt: "2023-02-11T18:26:57Z"
lastCommitAt: "2026-08-28T15:32:43Z"
status: "thriving"
tags: ["community_watch", "fork_magnet"]
healthScore: 90
undervaluedScore: 72
maintainers: ["teetow", "DilsonsPickles", "kryksyh"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8e89eb99a1096fbf203b580924da6282b5d79ccdee7eb8d827a4e06a8230636/audacity/audacity.github.io"
---

# About this repo

This is the source of [www.audacityteam.org](https://www.audacityteam.org). It uses [Astro](https://docs.astro.build/en/getting-started/).

This repo uses [Bun](https://bun.sh) as its package manager (CI builds with it too — only `bun.lock` is tracked).

- Install dependencies: `bun install`
- Run dev server: `bun run dev`
- Build: `bun run build`

## Translation

Translations are not yet supported. Please join our [dev discord](https://discord.gg/sFHfRbUVZj) to get notified when they are.

## Security

This is a static website, with no user input. As such, regular vulnerabilities likely won't affect us. That said, it probably is good to run `npx @astrojs/upgrade` (or `bunx @astrojs/upgrade`) every now and then to update astro to fix security vulnerabilities.

## Promos

Promos shown on the site come from two places:

- **Campaign promos** (MuseHub partners) are the single source of truth on the
  watched Confluence "Promo Calendar" page. They are generated into
  [`src/assets/data/promos/campaigns.ts`](https://github.com/audacity/audacity.github.io/blob/HEAD/src/assets/data/promos/campaigns.ts) by
  the pull command below — **never edit that file by hand.**
-…
