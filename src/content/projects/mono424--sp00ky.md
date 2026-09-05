---
repo: "mono424/sp00ky"
name: "sp00ky"
description: "Offline-first sync engine for Flutter & Solid.js"
readmeQualityOk: true
url: "https://github.com/mono424/sp00ky"
homepage: "https://sp00ky.cloud"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [44, 31]
stars: 37
forks: 0
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-10-15T10:24:35Z"
lastCommitAt: "2026-09-05T07:47:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 41
maintainers: ["mono424"]
openGraphImageUrl: "https://opengraph.githubassets.com/72080e68bb86b849486d5b4de114522161d14cb65d56fe5c1d7f09a4bb5cc64d/mono424/sp00ky"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="apps/landing-page/public/logo.svg" />
  <source media="(prefers-color-scheme: light)" srcset="apps/landing-page/public/logo_dark.svg" />
</picture>

**The Reactive, Local-First Framework for SurrealDB**

> **⚠️ Under active development — not production-ready. APIs may change without notice.**

[Documentation](https://mono424.github.io/sp00ky/) · [Example App](https://github.com/mono424/sp00ky/blob/HEAD/example/app-solid) · [CLI](https://www.npmjs.com/package/@spooky-sync/cli) · [Contributing](#contributing)

</div>

## Features

- **Live Queries** — Your UI updates instantly when data changes
- **Local-First** — Works offline using IndexedDB, syncs when back online
- **End-to-End Type Safety** — Generated TypeScript definitions from your SQL schema
- **Optimistic UI** — Immediate feedback for user actions while syncing in the background

## Quick Start

### Install

```bash
pnpm add @spooky-sync/client-solid
```

### Generate Types with CLI

```bash
npx @spooky-sync/cli generate
```

### Usage (SolidJS)

```tsx
import { useQuery } from '@spooky-sync/client-solid';
import { db } from './db';

const ThreadList = () =>…
