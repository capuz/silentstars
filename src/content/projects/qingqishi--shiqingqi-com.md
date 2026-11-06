---
repo: "QingqiShi/shiqingqi.com"
name: "shiqingqi.com"
description: "👋 Qingqi Shi's personal website"
readmeQualityOk: true
url: "https://github.com/QingqiShi/shiqingqi.com"
homepage: "http://qingqi.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["personal-website", "react", "resume", "typescript"]
stars: 5
forks: 1
openIssues: 38
closedIssues: 73
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2015-07-08T04:21:38Z"
lastCommitAt: "2026-11-06T11:23:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 81
maintainers: ["QingqiShi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b3008d643d7b9f53d3ffafe9ad08d14a844b1f4c021736cd8d27a0272f69001/QingqiShi/shiqingqi.com"
---

# shiqingqi.com

A pnpm monorepo built with Turborepo.

## Apps

- `apps/web` — ships [qingqi.dev](https://qingqi.dev): a portfolio and Projects site, including an AI-assisted movie and TV database.
- `apps/finance` — ships the household Finance app at [finance.qingqi.dev](https://finance.qingqi.dev). The old `qingqi.dev/finance` paths redirect there.
- `apps/trip-planner` — a private, password-gated reader for pre-written road-trip itineraries.

## Packages

`packages/*` are the `@tuja/*` internals shared across the apps — the `@tuja/ui` StyleX design system, TMDB and i18n code generators, Babel and ESLint plugins, and other build tooling.

## Where to look next

- `AGENTS.md` — monorepo conventions, gotchas, and the commands to run before a change is done.
