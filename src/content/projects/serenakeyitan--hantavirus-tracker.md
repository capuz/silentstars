---
repo: "serenakeyitan/hantavirus-tracker"
name: "hantavirus-tracker"
description: "Live hantavirus surveillance map: CDC NNDSS + WHO Disease Outbreak News"
url: "https://github.com/serenakeyitan/hantavirus-tracker"
homepage: "https://hantavirus-tracker-ten.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 45]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-10T23:54:37Z"
lastCommitAt: "2026-06-23T23:28:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 58
maintainers: ["github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/62d6b40481bfccfbfc800be2a40ca5e0f343b05441a4f72302e0eaf5d628ef4c/serenakeyitan/hantavirus-tracker"
---

# Hantavirus Tracker

Live map of hantavirus cases and outbreaks, combining two authoritative sources:

- **CDC NNDSS Weekly** — US state-level confirmed cases, last 3 years.
- **WHO Disease Outbreak News** — Global outbreak posts mentioning hantavirus, geocoded by mentioned country.

The map shows two tiers:

- 🔴 **Solid red circles** — Confirmed US cases (CDC). Size scales with cumulative count.
- 🔵 **Dashed blue circles** — WHO outbreak posts. Click to read the WHO writeup.

Data refreshes daily at 07:00 UTC via GitHub Actions.

## Develop

```bash
npm install
npm run fetch-data   # populates public/data.json
npm run dev          # http://localhost:3000
```

## Architecture

- **Next.js 16 (App Router)** + Tailwind v4.
- **Leaflet** loaded dynamically client-side (no SSR), no API keys.
- **`scripts/fetch-data.mjs`** runs in GitHub Actions; writes `public/data.json` which the page reads at build time.
- **No runtime API calls from the browser** — all data is baked into the deploy.

## Data caveats

- CDC NNDSS publishes weekly with a ~1-2 week lag.
- WHO DON only publishes outbreaks of international concern; expect sparse global coverage.
- Country extraction from WHO posts is…
