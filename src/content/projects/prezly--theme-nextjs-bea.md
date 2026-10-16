---
repo: "prezly/theme-nextjs-bea"
name: "theme-nextjs-bea"
description: "News site built with NextJS, Typescript and Prezly SDK"
readmeQualityOk: true
url: "https://github.com/prezly/theme-nextjs-bea"
homepage: "https://the-good-news-room.prezly.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["nextjs", "typescript", "blogging"]
stars: 57
forks: 17
openIssues: 4
closedIssues: 1
watchers: 3
contributors: 29
recentReleases: 0
createdAt: "2021-10-12T12:12:43Z"
lastCommitAt: "2026-10-16T08:27:03Z"
lastReleaseAt: "2022-08-19T12:40:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 81
undervaluedScore: 49
maintainers: ["fgyimah", "camilb", "christianprezly"]
openGraphImageUrl: "https://opengraph.githubassets.com/5787644580668cfe18ed6530a4c7d363753247599b418b5c3d9025c0065c1151/prezly/theme-nextjs-bea"
---

# Prezly Bea Theme

Bea Prezly Theme is based on [Next.js] 12+ framework.

- Made with [TypeScript], [Prezly SDK] and [Prezly Content React Renderer].
- Data-fetching is handled by [Prezly Theme Kit] and [Prezly SDK].
- Multi-language is powered by [React Intl] and [Prezly Themes Translations].
- Analytics powered by [Prezly Analytics].
- Code-style is ensured by [Biome].
- Search is powered by Meilisearch
- Error-logging with [Sentry].

### Requirements

- Node.js and pnpm (preferred). This repository includes a `pnpm-lock.yaml` lockfile.
  If you don't have `pnpm` installed, install it with `npm install -g pnpm` or enable Corepack (`corepack enable`).

## Quick Start

### Getting Started

Run the following command on your local environment

```Shell
git clone https://github.com/prezly/theme-nextjs-bea
cd theme-nextjs-bea
pnpm install
```

Set up your .env.local file by copying .env.example:

```Shell
cp .env.example .env.local
```

You'll need to populate it with your Prezly Access Token and your newsroom's UUID. You can use one from the [Testing/Token](#testingtoken) section below.

Additionally, you'll need to provide:

- Sitekey for HCaptcha if you want HCaptcha to work on…
