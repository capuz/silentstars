---
repo: "stellar-vortex-protocol/vortex-frontend"
name: "vortex-frontend"
description: "Next.js 14 app providing the user-facing swap interface and the solver dashboard. Built with TypeScript and Tailwind CSS. Part of the multi-repo Vortex stack "
readmeQualityOk: true
url: "https://github.com/stellar-vortex-protocol/vortex-frontend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 5
forks: 83
openIssues: 138
closedIssues: 235
watchers: 0
contributors: 58
recentReleases: 0
createdAt: "2026-06-19T16:40:22Z"
lastCommitAt: "2026-09-30T09:57:52Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 66
maintainers: ["james2177", "dependabot[bot]", "samuelisi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d4d4af73a7c4f57d940675dde883d16d8e2397372ba2a1a794a5001726a00d1/stellar-vortex-protocol/vortex-frontend"
---

# vortex-frontend

**Swap UI + solver portal for [Vortex Protocol](https://github.com/stellar-vortex-protocol).**

Next.js 14 app providing the user-facing swap interface, intent explorer,
and solver dashboard. Built with TypeScript, Tailwind CSS, Zustand, and
SWR, with Freighter wallet integration for signing swaps and solver
registrations. Part of the multi-repo Vortex stack — see also
[`vortex-contract`](https://github.com/stellar-vortex-protocol/vortex-contract) and
[`vortex-backend`](https://github.com/stellar-vortex-protocol/vortex-backend).

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Swap interface, live fills feed, and intent pipeline overview |
| `/analytics` | `src/app/analytics/page.tsx` | Protocol aggregation view for volume, route trends, and status distribution over the loaded live intent feed |
| `/explore` | `src/app/explore/page.tsx` | Browse all intents with status/chain filters, sorting, and pagination |
| `/explore/[id]` | `src/app/explore/[id]/page.tsx` | Single intent detail, with a settlement tx link once filled |
| `/solve` | `src/app/solve/page.tsx` | Solver leaderboard, open intents feed, and solver…
