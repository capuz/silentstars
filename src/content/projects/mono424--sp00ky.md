---
repo: "mono424/sp00ky"
name: "sp00ky"
description: "Offline-first sync engine for Flutter & Solid.js"
readmeQualityOk: true
url: "https://github.com/mono424/sp00ky"
homepage: "https://sp00ky.cloud"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [48, 26]
stars: 38
forks: 0
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-10-15T10:24:35Z"
lastCommitAt: "2026-10-10T10:04:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["mono424"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe0b7d46b24f3c11b8f0c5bee5b8a1e04b5a81a2c0911337709bae050c95bce5/mono424/sp00ky"
---

**The Reactive, Local-First Framework for SurrealDB**

> **⚠️ Under active development — not production-ready. APIs may change without notice.**

[Documentation](https://mono424.github.io/sp00ky/) · [Example App](https://github.com/mono424/sp00ky/blob/HEAD/example/app-solid) · [CLI](https://www.npmjs.com/package/@spooky-sync/cli) · [Contributing](#contributing)

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

const ThreadList = () => {
  const threads = useQuery(() => db.query('thread').select('*').all());

  return (
    <ul>
      <For each={threads.data}>{(thread) => <li>{thread.title}</li>}</For>
    </ul>
  );
};
```

## Packages

| Package…
