---
repo: "MkThingsHQ/mkgame-blocks"
name: "mkgame-blocks"
description: "A lightweight browser block puzzle game built with TanStack Start and Cloudflare Workers."
readmeQualityOk: true
url: "https://github.com/MkThingsHQ/mkgame-blocks"
homepage: "https://blocks.mksaas.link"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [70, 30]
topics: ["browser-game", "cloudflare-workers", "react", "tanstack-start", "typescript"]
stars: 15
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-25T00:35:01Z"
lastCommitAt: "2026-11-03T11:14:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 72
undervaluedScore: 20
maintainers: ["open-fox", "i0ivi0i"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1311540820/6f8d26c3-38df-4ce1-be36-91fd5659f426"
---

# Super Blocks

A lightweight, browser-based block puzzle game built with TanStack Start,
React, and Cloudflare Workers.

**Play online:** https://blocks.mksaas.link

## Features

- Classic endless mode
- Deterministic daily challenge
- Mouse, touch, and keyboard-friendly controls
- English and Chinese interfaces
- Local best scores and score history
- Session restore after refresh
- Music, sound, haptics, hints, and reduced-motion preferences
- Responsive desktop and mobile layouts

## Tech stack

- TanStack Start
- TanStack Router
- React 19
- TypeScript
- Cloudflare Workers
- Playwright
- Biome

## Development

Requirements:

- Node.js 22+
- pnpm 10+

```bash
pnpm install
pnpm dev
```

The local application is available at `http://localhost:3000`.

## Test

```bash
pnpm check
pnpm test
pnpm e2e
pnpm build
```

## Deployment

Log in to Cloudflare once:

```bash
pnpm exec wrangler login
```

Deploy the production Worker:

```bash
pnpm run deploy
```

The application does not require runtime environment variables or Worker
secrets. Wrangler uses your local Cloudflare CLI login to deploy; those
credentials must not be added to the Worker configuration or uploaded with
`wrangler…
