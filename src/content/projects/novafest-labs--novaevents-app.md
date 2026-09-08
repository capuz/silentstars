---
repo: "NovaFest-Labs/NovaEvents-app"
name: "NovaEvents-app"
description: "Transparent event management on Stellar — sponsorship funding, multi-tier ticketing, and on-chain payouts, settled in USDC."
readmeQualityOk: true
url: "https://github.com/NovaFest-Labs/NovaEvents-app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 11
openIssues: 28
closedIssues: 19
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-06-03T13:56:34Z"
lastCommitAt: "2026-09-08T08:16:49Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 81
undervaluedScore: 58
maintainers: ["OlaGreat", "tomide-oss", "tujanboss"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a581fcb45cf4ebe7dd8d6d4b6fb7aa2e44f36065fbc484168884e8008c4ff69/NovaFest-Labs/NovaEvents-app"
---

# NovaEvents App

Frontend for NovaEvents — a transparent event management platform on Stellar.

Built with Next.js, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styles:** Tailwind CSS
- **Contract interaction:** `@stellar/stellar-sdk` (to be integrated)

## Open for contributors

- Connect wallet (Freighter)
- Organizer dashboard — create events, manage tiers
- Attendee view — browse events, buy tickets
- Sponsor view — contribute to events, see public sponsorship breakdown

See the [Issues](https://github.com/NovaFest-Labs/NovaEvents-app/issues) tab for scoped tasks, and read [CONTRIBUTING.md](https://github.com/NovaFest-Labs/NovaEvents-app/blob/HEAD/CONTRIBUTING.md) before opening a pull request.

## Related repos

- [NovaEvents contract](https://github.com/NovaFest-Labs/NovaEvents) — Soroban smart contract (Rust)
- [NovaEvents API](https://github.com/NovaFest-Labs/NovaEvents-api) — off-chain indexing and notifications
