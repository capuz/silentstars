---
repo: "yearn/yPartners"
name: "yPartners"
description: "Partners website"
readmeQualityOk: true
url: "https://github.com/yearn/yPartners"
homepage: "https://partners.yearn.fi/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 7
forks: 6
openIssues: 0
closedIssues: 27
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2022-06-24T08:19:13Z"
lastCommitAt: "2026-09-03T18:21:05Z"
status: "quiet"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 76
maintainers: ["engn33r", "murderteeth", "matheus1lva"]
openGraphImageUrl: "https://opengraph.githubassets.com/50f59dca62b688f900e93866a70162d1023177e285f410aaf8fcc375cbc52043/yearn/yPartners"
---

# Yearn B2B Partners Dashboard

Marketing site and analytics dashboard for Yearn's partner program. The landing page highlights fees and vault counts, the Team Up form pings a Telegram bot, and partner dashboards (e.g. `/dashboard/0x...treasury`) display balances and payouts pulled via the local API routes.

- Live site: https://partners.yearn.fi
- Tech: Next.js 16 + TypeScript, TailwindCSS, SWR, Recharts, Framer Motion, Headless UI
- Token/chain icons: loaded from `https://token-assets-one.vercel.app` (see `lib/crypto/tokenLogos.ts` and `next.config.js`)
- Supported chains: Ethereum (1), Base (8453), Arbitrum (42161), Katana (747474)

## Quick start

1. Copy environment defaults: `cp .env.example .env`
2. Install dependencies (pnpm recommended because the lockfile is present): `pnpm install`
3. Run the dev server: `pnpm dev` then open http://localhost:3000
4. Use address 0x93A62dA5a14C80f265DAbC077fCEE437B1a0Efde for login testing

Other scripts:
- `pnpm lint` – run ESLint
- `pnpm lintfix` – run ESLint with auto-fix
- `pnpm start` – start the built app

## Configuration

- Public metadata is set in `pages/_app.tsx` (site name, description, theme color, OG image). Update those…
