---
repo: "findmydoc-platform/website"
name: "website"
description: "Main repo for the platform"
readmeQualityOk: true
url: "https://github.com/findmydoc-platform/website"
homepage: "https://findmydoc.eu"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["payloadcms", "portal", "react", "typescript", "website"]
stars: 7
forks: 0
openIssues: 34
closedIssues: 753
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-02-14T21:56:07Z"
lastCommitAt: "2026-10-24T08:21:31Z"
lastReleaseAt: "2025-07-04T06:43:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 81
maintainers: ["SebastianSchuetze", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78616ecf962d0c542c9306b6f11191f3f4c485cbf2b3216db1ee935ed8de5937/findmydoc-platform/website"
discussionCount: 17
---

# findmydoc portal

The findmydoc portal is a PayloadCMS‑powered platform that helps international patients discover trusted clinics and specialists.

## License

This repository is proprietary and source-available. The source code may be visible, but the project is not open source and no permission is given to use, copy, modify, publish, distribute, redistribute, sublicense, or create derivative works from any part of this repository.

All rights are reserved by findmydoc. See [LICENSE.md](https://github.com/findmydoc-platform/website/blob/HEAD/LICENSE.md) for the full license terms and [CONTRIBUTING.md](https://github.com/findmydoc-platform/website/blob/HEAD/CONTRIBUTING.md) for contribution terms.

## Quick Start

1. git clone https://github.com/findmydoc-platform/website.git
2. cp .env.example .env
3. pnpm install
4. start development:
   a. `docker compose up` or
   b. `docker compose run --rm postgres` & `pnpm run dev`
5. Open http://localhost:3000

## Environment variables

- `NEXT_PUBLIC_SUPABASE_RESET_REDIRECT` — absolute URL that Supabase uses when sending password recovery emails. Point it to the public password reset completion page (for example,…
