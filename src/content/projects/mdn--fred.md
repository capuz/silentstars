---
repo: "mdn/fred"
name: "fred"
description: "MDN's frontend since late 2025, built with Web Components, Lit, and SSR for a fast, clean documentation experience. Fred = /fr(ont)e(n)d/."
readmeQualityOk: true
url: "https://github.com/mdn/fred"
homepage: "https://developer.mozilla.org"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [62, 28]
topics: ["web-components", "lit", "ssr"]
stars: 234
forks: 61
openIssues: 98
closedIssues: 274
watchers: 7
contributors: 40
recentReleases: 0
createdAt: "2025-03-13T10:54:18Z"
lastCommitAt: "2026-09-15T08:54:20Z"
lastReleaseAt: "2025-09-01T16:39:44Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 42
maintainers: ["dependabot[bot]", "LeoMcA", "caugner"]
openGraphImageUrl: "https://opengraph.githubassets.com/670dd640e816a0d56497d469c519b14ceaf45ad45f9f33d561b48744c32b2db8/mdn/fred"
---

# Fred

MDN's next fr(ont)e(n)d.

## Getting started

1. Copy `.env-dist` to `.env` and update values as needed. The file contains comments for guidance:

```bash
   cp .env-dist .env
```

2. Install dependencies `npm install`
3. Bring up the dev environment with `npm run start`

## Commands

- `npm run start`
  - runs the rari server and the live-reloading development server together
  - run with `NODE_ENV=production` to run rari with the preview server, you'll need to have run `npm run build` first
- `node --env-file=.env --run rari -- serve`
  - runs the rari server
  - necessary for `npm run dev` and `npm run preview`
- `npm run dev`
  - brings up the live-reloading development server, likely what you want for doing local development
- `npm run build`
  - builds the production js/css/asset bundles
  - must be run at least once for `npm run preview` to work
- `npm run preview`
  - runs the preview server: using the production bundles with the rari server: useful for testing our prod rspack config
- `npm run test`
  - runs linting and tests with various options, read more in [the testing README](https://github.com/mdn/fred/blob/HEAD/test/README.md)

## L10n

See [the l10n…
