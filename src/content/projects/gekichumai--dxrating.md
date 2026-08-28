---
repo: "gekichumai/dxrating"
name: "dxrating"
description: "maimai DX rating-related tools"
readmeQualityOk: true
url: "https://github.com/gekichumai/dxrating"
homepage: "https://dxrating.net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["maimai", "maimaidx", "maimainet"]
stars: 120
forks: 22
openIssues: 97
closedIssues: 117
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2023-10-17T05:45:18Z"
lastCommitAt: "2026-08-28T15:33:37Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 45
maintainers: ["gekichumai-admin", "GalvinGao", "Matsuk1"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cfa775db86d15802c1f5d72bee4a828b4c9cb0b28d8f20af58277387de9c7fc/gekichumai/dxrating"
---

alt="DXRating Logo"
     width="96px" />

?label=deployment>)

# DXRating

A web application for [maimai DX](https://maimai.sega.jp/) (music arcade game) providing rating calculators, song data, and community features such as tags, comments, and aliases.

## Usage

## Architecture

This is a [Turborepo](https://turbo.build/repo) monorepo using **pnpm** as the package manager.

```
apps/
├── web/          React 19 + Vite SPA (UnoCSS, MUI, wouter, TanStack Query)
├── backend/      Hono API server (oRPC, Drizzle ORM, PostgreSQL, Better Auth)
└── functions/    Cloudflare Workers (edge endpoints)

packages/
├── dxdata/       Pre-annotated maimai DX song & sheet metadata
└── tsconfig/     Shared TypeScript base configuration

scripts/
└── annotator/    Generates annotated song metadata from various sources
```

### Apps

- **`apps/web`** — The main frontend, serving both web and iOS (via WKWebView) variants. Built with React 19, Vite, UnoCSS, Material-UI 5, and shadcn/ui. Supports 4 languages (en, ja, zh-Hans, zh-Hant) via i18next, with an in-browser SQLite database (sql.js) for offline song data.

- **`apps/backend`** — The API server built on Hono. Uses oRPC for type-safe API…
