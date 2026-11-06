---
repo: "zoonk/zoonk"
name: "zoonk"
description: "Turn your goal into a daily learning plan"
readmeQualityOk: true
url: "https://github.com/zoonk/zoonk"
homepage: "https://zoonk.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [69]
topics: ["education", "postgres", "tailwindcss", "learning", "ai", "nextjs", "prisma", "vercel", "vercel-ai-sdk", "better-auth"]
stars: 157
forks: 13
openIssues: 47
closedIssues: 255
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2025-01-30T16:45:53Z"
lastCommitAt: "2026-11-06T13:19:42Z"
lastReleaseAt: "2026-11-02T17:55:48Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 46
maintainers: ["ceolinwill"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6e6fa2498eb22eadade5718c28f06af4c7d149ea4e6ffb66c7c34189ff1cf2c/zoonk/zoonk"
fundingLinks: ["GITHUB:https://github.com/ceolinwill"]
discussionCount: 2
---

Tell us your goal in your own words. Zoonk plans every day until your date, with lessons, practice and reviews shaped by it.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [Reporting bugs](#reporting-bugs)
- [Suggesting features](#suggesting-features)
- [Supporters](#supporters)

## Getting Started

### Prerequisites

- Node.js v26
- pnpm v12
- PostgreSQL v18, running on this machine

We recommend using [mise](https://mise.jdx.dev/) to manage your Node.js and pnpm versions. On macOS, install PostgreSQL with `brew install postgresql@18 && brew services start postgresql@18` and put `$(brew --prefix postgresql@18)/bin` on your `PATH`. On a Linux machine or a cloud agent, `bash scripts/cloud/setup.sh` installs all three ([cloud agents](https://github.com/zoonk/zoonk/blob/HEAD/.agents/guides/development.md#cloud-agents)).

### Installation

1. `pnpm install` to install dependencies for all apps and packages
2. `pnpm db:setup` to create the local development, test, and E2E databases, apply migrations, and seed new ones. It connects as…
