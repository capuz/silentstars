---
repo: "digitalservicebund/a2j-rechtsantragstelle"
name: "a2j-rechtsantragstelle"
description: "⚖️ Zugang zu Recht - Access to Justice - A2J ⚖️"
readmeQualityOk: true
url: "https://github.com/digitalservicebund/a2j-rechtsantragstelle"
homepage: "https://service.justiz.de"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["a2j", "rast", "zov"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 10
watchers: 5
contributors: 36
recentReleases: 0
createdAt: "2023-02-07T14:16:41Z"
lastCommitAt: "2026-07-06T07:03:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 72
maintainers: ["dependabot[bot]", "Spencer6497", "aaschlote"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a4248a9213b356dd737cbd23c7db2f5bf35d0dbfd77b742f5305fd84ce3bc0d/digitalservicebund/a2j-rechtsantragstelle"
---

# A2J / Access to Justice / Zugang zu Recht

This repository runs https://service.justiz.de/. We provide user-centered access to digital justice services. To find out more, check our [project homepage](https://www.zugang-zum-recht-projekte.de/)

## Requirements

- Node (>= 24)
- Docker (Redis, S3 bucket)

### Local development

With Node installed, enable `corepack` (this only needs to happen once):

```sh
corepack enable
```

Then, install dependencies, start necessary services and run the app:

```sh
pnpm install
docker compose up -d
pnpm run dev
```

The app will be served on http://localhost:3000, assets are rebuilt on file save.

To explore the codebase, you can use this [interactive code map](https://mango-dune-07a8b7110.1.azurestaticapps.net/?repo=digitalservicebund%2Fa2j-rechtsantragstelle).

### Content

There are several options for fetching content: Local CMS, staging CMS, local content file. To find out more, check `/doc/content.md`.

### Tests

#### Unit tests

- run: `pnpm run test`
- run in [watch mode](https://vitest.dev/guide/features.html#watch-mode): `pnpm run test:watch`
- run with coverage: `pnpm run test:coverage`
- run subset: `pnpm run test…
