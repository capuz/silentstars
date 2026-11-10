---
repo: "lachlanjc/chlobe"
name: "chlobe"
description: "A 15KB React choropleth globe for visualizing country data, inspired by cobe."
readmeQualityOk: true
url: "https://github.com/lachlanjc/chlobe"
homepage: "https://chlobe.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-06T08:14:09Z"
lastCommitAt: "2026-11-10T11:38:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 41
maintainers: ["lachlanjc"]
openGraphImageUrl: "https://opengraph.githubassets.com/66fa9caee7a7deea25ff88f04e631dad997cfb0165c049d517e100dda233c656/lachlanjc/chlobe"
---

# chlobe

[cobe](https://cobe.vercel.app/) is a brilliant, 5kb library for rendering globes on the web.

This library is a superfast superset (15kb total) for visualizing country-level data (e.g. population density per country) on a cobe-style WebGL choropleth globe. Give it country values and a color ramp; it renders the globe while you can control labels, value formatting, and tooltip UI.

## Install

```sh
pnpm add @lachlanjc/chlobe
```

`react` 18 or later is a peer dependency. The component needs a browser with WebGL support. Use it inside a Client Component (`'use client'`).

## Quick start

```tsx
'use client';

import { ChoroplethGlobe } from '@lachlanjc/chlobe';

const emissions = [
  { alpha2: 'US', value: 6 },
  { alpha2: 'BR', value: 1.3 },
  { alpha2: 'IN', value: 4.1 },
];

export const EmissionsGlobe = () => (
  <ChoroplethGlobe
    aria-label="Emissions by country"
    colors={{
      filled: [
        [219, 234, 254],
        [29, 78, 216],
      ],
      missing: [226, 232, 240],
    }}
    data={emissions}
    formatValue={(value) => `${value}B metric tons CO₂e`}
  />
);
```

Each entry needs a unique ISO 3166-1 alpha-2 `alpha2` country code and a numeric…
