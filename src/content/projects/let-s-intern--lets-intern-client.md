---
repo: "Let-s-intern/lets-intern-client"
name: "lets-intern-client"
description: "Let's Career FE development repository"
originalDescription: "렛츠커리어 FE 개발 저장소"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/Let-s-intern/lets-intern-client"
homepage: "https://www.letsintern.co.kr"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 9
forks: 3
openIssues: 10
closedIssues: 143
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2023-11-01T10:48:07Z"
lastCommitAt: "2026-10-28T09:57:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 82
maintainers: ["dusvlf111", "yeji424"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bb513ee17d8117057c0de3a29665bfe2a17fba1de02ace0d2b37a0aacbd6fef/Let-s-intern/lets-intern-client"
---

# Lets Career Client

Lets Career frontend monorepo. Three apps built on a pnpm workspace + Turborepo (Next.js + Vite × 2).

## Prerequisites

- Node.js >= 18.17 (recommended: 20.x)
- pnpm >= 10 — enforces `packageManager: "pnpm@10.33.0"` in `package.json`. Corepack recommended.

## Quick Start

```bash
# 1. Enable pnpm (Corepack)
corepack enable
corepack prepare pnpm@10.33.0 --activate

# 2. Install dependencies
pnpm install --frozen-lockfile

# 3. Environment variables (fill in values by referring to each app's .env.example)
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env
cp apps/mentor/.env.example apps/mentor/.env

# 4. Dev servers
pnpm dev:web      # http://localhost:3000  (Next.js)
pnpm dev:admin    # http://localhost:3001  (Vite)
pnpm dev:mentor   # http://localhost:3002  (Vite)
pnpm dev          # all 3 at once
```

## Build & Verify

Default build and test commands:

```bash
pnpm build         # or build:web / build:admin / build:mentor
pnpm typecheck     # or typecheck:web / typecheck:admin / typecheck:mentor
pnpm test          # or test:web / test:admin / test:mentor
pnpm clean         # deletes build artifacts, node_modules, and…
