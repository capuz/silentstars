---
repo: "finitoapp/payky"
name: "payky"
description: "Payky is a local-first payment terminal that combines classic bank transfers for the Czech and Slovak markets, cash payments, and Bitcoin Lightning payments."
readmeQualityOk: true
url: "https://github.com/finitoapp/payky"
homepage: "https://payky.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["local-first", "payments", "self-custody", "btc", "point-of-sale"]
stars: 7
forks: 2
openIssues: 13
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-01T06:06:51Z"
lastCommitAt: "2026-07-14T05:53:16Z"
lastReleaseAt: "2026-06-30T06:04:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 89
undervaluedScore: 62
maintainers: ["pepakriz", "JanetByte"]
openGraphImageUrl: "https://opengraph.githubassets.com/f98bfb28e5e809a55a5536e54f1c6770feda3da2c3daf138d154fa41e6e0f90a/finitoapp/payky"
---

# Payky

Payky is a local-first point-of-sale application for managing terminal checkout
flows, catalog items, bills, payments, account transactions, and background sync
jobs.

The app is built with React, TypeScript, Vite, TanStack Router, Tailwind CSS,
shadcn-style local UI components, Base UI primitives, Zod validation, and Evolu
for persistent application data.

<p>
</p>

## Requirements

- Bun

Install dependencies with exact versions:

```bash
bun install
```

Dependency versions are pinned through Bun. Keep `exact = true` in
`bunfig.toml`.

Install the locked Codex skills from `skills-lock.json`:

```bash
bunx skills experimental_install
```

## Development

Start the Vite dev server:

```bash
bun run dev
```

Build the app:

```bash
bun run build
```

Preview a production build:

```bash
bun run preview
```

## Native Targets

Capacitor is available as the Android native target:

```bash
bun run cap:android:sync
bun run cap:android:dev
bun run cap:android:build
```

Capacitor builds use the native HTTP bridge through `CapacitorHttp` so mobile
requests are not limited by browser CORS behavior.

For Capacitor Android live reload, run:

```bash
bun run cap:android:dev
```…
