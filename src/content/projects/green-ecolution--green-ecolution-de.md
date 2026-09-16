---
repo: "green-ecolution/green-ecolution.de"
name: "green-ecolution.de"
description: "Landing Page for Green Ecolution"
readmeQualityOk: true
url: "https://github.com/green-ecolution/green-ecolution.de"
homepage: "https://green-ecolution.de"
language: "TypeScript"
languages: ["TypeScript", "Astro", "MDX"]
languagePcts: [44, 25, 25]
stars: 5
forks: 1
openIssues: 0
closedIssues: 51
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2024-05-21T21:30:15Z"
lastCommitAt: "2026-09-16T08:48:03Z"
lastReleaseAt: "2025-12-31T00:04:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 88
maintainers: ["dependabot[bot]", "choffmann", "green-ecolution[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eb54e55c28420442c82a4a15ea913a491279009c247e1d95e2b6ce989372a7e/green-ecolution/green-ecolution.de"
---

# Green Ecolution – Landing Page

This is the landing page for [Green Ecolution](https://green-ecolution.de), a research project focused on data-driven irrigation of urban trees.

## About the Project

Green Ecolution is a collaboration between the University of Applied Sciences Flensburg and the Technisches Betriebszentrum Flensburg (TBZ). The project uses sensor technology, data analysis, and digital route planning to optimize tree irrigation – saving water and resources in urban environments.

The system is currently being developed towards production readiness for real-world deployment.

## Tech Stack

- [Astro](https://astro.build/) with [React](https://react.dev/) islands and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Release notes and blog as MDX content collections
- Deployed via GitHub Actions as a static nginx image to Kubernetes

## Development

```bash
pnpm install
pnpm dev
```

The site runs on http://localhost:4321

## Build

```bash
pnpm build
```

## Press downloads

The press page links its files straight from the S3 bucket, so a new logo or a
new pitch deck is a bucket upload, not a deploy.

`ASSET_BASE_URL` in…
