---
repo: "opennem/openelectricity"
name: "openelectricity"
description: "Open Electricity"
readmeQualityOk: true
url: "https://github.com/opennem/openelectricity"
homepage: "https://openelectricity.org.au"
language: "Svelte"
languages: ["Svelte", "JavaScript"]
languagePcts: [52, 47]
topics: ["aemo", "australia", "energy", "nem", "svelte", "sveltekit"]
stars: 10
forks: 4
openIssues: 12
closedIssues: 17
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2023-10-10T05:18:51Z"
lastCommitAt: "2026-07-17T05:58:33Z"
lastReleaseAt: "2024-06-11T08:40:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 72
maintainers: ["chienleng"]
openGraphImageUrl: "https://opengraph.githubassets.com/db5e494dff1a372ba8996842c91523787afcc679c48b3e5968fd6f24b38080f4/opennem/openelectricity"
---

# Open Electricity

The frontend for the [Open Electricity](https://openelectricity.org.au) platform — an open-source project exploring Australia's electricity system through data visualisation and analysis.

For the **Data Tracker** (a.k.a. OpenNEM), see [opennem/opennem-fe](https://github.com/opennem/opennem-fe).

## Tech Stack

- **SvelteKit** with **Svelte 5** (runes)
- **Tailwind CSS 4** with **shadcn-svelte** components
- **LayerCake** + **D3.js** for data visualisation
- **Sanity CMS** for editorial content
- **Cloudflare Pages** for deployment
- **Clerk** for authentication

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22.12.0
- [pnpm](https://pnpm.io/) — pinned via the `packageManager` field in `package.json`, so the easiest install is via [Corepack](https://nodejs.org/api/corepack.html): `corepack enable` (ships with Node 22+).

### Setup

```bash
pnpm install
cp .env.example .env   # fill in your own keys — see "Environment variables" below
pnpm run dev
```

The dev server starts at `http://localhost:5173`.

### Environment variables

Open Electricity is an open-source project, and contributors are expected to bring their own credentials…
