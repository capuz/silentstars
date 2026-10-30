---
repo: "ourfuturehealth/design-system-toolkit"
name: "design-system-toolkit"
description: "Our Future Health design system dev toolkit"
readmeQualityOk: true
url: "https://github.com/ourfuturehealth/design-system-toolkit"
language: "Nunjucks"
languages: ["Nunjucks", "TypeScript"]
languagePcts: [47, 31]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 53
recentReleases: 0
createdAt: "2022-03-24T10:26:21Z"
lastCommitAt: "2026-10-30T11:04:21Z"
lastReleaseAt: "2024-05-17T09:46:08Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 86
undervaluedScore: 54
maintainers: ["mwiercinska", "diogo-filipe-costa", "grug"]
openGraphImageUrl: "https://opengraph.githubassets.com/524a7f7a577d49b9755532355009e37392c42d1e2263adc33621297974b8383f/ourfuturehealth/design-system-toolkit"
---

# Our Future Health design system toolkit

> **Note** <br>
> This toolkit is based on the [NHS.UK frontend](https://github.com/nhsuk/nhsuk-frontend), forked as of early 2022, and adapted for Our Future Health needs (which includes a rename of the prefix for all CSS classes to `ofh-`).
>
> We are indebted to the original work carried out by NHS Digital and GDS.

Our Future Health design system toolkit contains the code you need to start building user interfaces for Our Future Health websites and services.

## Monorepo Structure

This repository is organized as a monorepo containing:

- **Core toolkit** - SCSS/CSS design system and vanilla JavaScript components
- **React components** (`packages/react-components/`) - React implementation of the design system
- **Example consumer app** (`packages/example-react-consumer-app/`) - Standalone in-repo example of consuming the published React tarball contract

## Prerequisites

**Required:**

- **Node.js 20.19.0+** (minimum required by Vite 7)
  - Recommended: **Node 24.22.1 LTS** (see [.nvmrc](https://github.com/ourfuturehealth/design-system-toolkit/blob/HEAD/.nvmrc) for nvm users)
  - Any version >= 20.19.0 will work (e.g., 20.x, 22.x,…
