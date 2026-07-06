---
repo: "JeromeFitz/packages"
name: "packages"
description: "Monorepo for stuff that I use frequently: Commit Generator, Gitmoji, Oxc, Notion, Semantic Release, etc."
readmeQualityOk: true
url: "https://github.com/JeromeFitz/packages"
homepage: "https://jeromefitzgerald.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["turborepo", "semantic-release", "gitmoji", "notion", "pnpm", "tsconfig", "turbo", "syncpack", "conventional-commit", "emoji"]
stars: 77
forks: 8
openIssues: 1
closedIssues: 31
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2021-04-17T15:47:15Z"
lastCommitAt: "2026-07-06T07:04:26Z"
lastReleaseAt: "2021-05-04T06:39:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 48
maintainers: ["renovate[bot]", "JeromeFitz"]
openGraphImageUrl: "https://opengraph.githubassets.com/33fd00053dcb888f7464483c44c37272fbaa3a45cd8344382bec13600ae902ed/JeromeFitz/packages"
---

# `@jeromefitz/packages`

Monorepo (via [📦 `pnpm`](https://github.com/pnpm/pnpm) and [🔺 `turbo`](https://github.com/vercel/turborepo)) for tools I use frequently in various projects, people, and companies I work with.

- [📦️ Packages](#%EF%B8%8F-packages)
- [👷️ CI/CD Overview](#%EF%B8%8F-cicd-overview)
- [🐙 CI/CD Workflows](#%F0%9F%90%99-cicd-workflows)

## 📦️ Packages

### 🔧 Configuration

- [`@jeromefitz/tsconfig`](https://github.com/JeromeFitz/packages/tree/main/config/tsconfig)
- [`@jeromefitz/oxlint-config`](https://github.com/JeromeFitz/packages/tree/main/config/oxlint-config) _(local only, not published)_

### ⚡ Release Management Tools

- [`ccommit`](https://github.com/JeromeFitz/packages/tree/main/packages/ccommit): conventional commit generator that interprets commit types from `gitmoji` through `conventional-commits`
- [`@jeromefitz/conventional-gitmoji`](https://github.com/JeromeFitz/packages/tree/main/packages/conventional-gitmoji): Maps [`gitmoji`](https://gitmoji.dev) to [`conventional-commits`](https://www.conventionalcommits.org) w/ semver recognition:
  - `feat => ✨️`
  - `fix => 🐛️`
  - `ci => 👷️`
  - `fix-ci => 💚️`
  - `...`
-…
