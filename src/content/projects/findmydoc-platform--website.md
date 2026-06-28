---
repo: "findmydoc-platform/website"
name: "website"
description: "Main repo for the platform"
url: "https://github.com/findmydoc-platform/website"
homepage: "https://findmydoc.eu"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["payloadcms", "portal", "react", "typescript", "website"]
stars: 6
forks: 0
openIssues: 16
closedIssues: 412
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-02-14T21:56:07Z"
lastCommitAt: "2026-06-28T06:57:43Z"
lastReleaseAt: "2025-07-04T06:43:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 82
maintainers: ["SebastianSchuetze", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68e0601db7347a725f2bd5b6f66cfa884e3a5f3ad8b687c488acf4c88cd0f29b/findmydoc-platform/website"
discussionCount: 17
---

# findmydoc portal

The findmydoc portal is a PayloadCMS‑powered platform that helps international patients discover trusted clinics and specialists.

## License

This repository is proprietary and source-available. The source code may be visible, but the project is not open source and no permission is given to use, copy, modify, publish, distribute, redistribute, sublicense, or create derivative works from any part of this repository.

All rights are reserved by findmydoc. See [LICENSE.md](./LICENSE.md) for the full license terms and [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution terms.

## Quick Start

1. git clone https://github.com/findmydoc-platform/website.git
2. cp .env.example .env
3. pnpm install
4. start development:
   a. `docker compose up` or
   b. `docker compose run --rm postgres` & `pnpm run dev`
5. Open http://localhost:3000

## Environment variables

- `NEXT_PUBLIC_SUPABASE_RESET_REDIRECT` — absolute URL that Supabase uses when sending password recovery emails. Point it to the public password reset completion page (for example, `https://example.com/auth/password/reset/complete`).

## Development

- Connect to Vercel: see [Setup…
