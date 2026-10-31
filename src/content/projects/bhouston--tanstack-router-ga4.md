---
repo: "bhouston/tanstack-router-ga4"
name: "tanstack-router-ga4"
description: "Google Analytics (GA4) integration for TanStack Router and TanStack Start."
readmeQualityOk: true
url: "https://github.com/bhouston/tanstack-router-ga4"
homepage: "https://tanstack-router-ga4.benhouston3d.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ga4", "google-analytics", "gtag", "react", "tanstack", "tanstack-router", "tanstack-start", "typescript"]
stars: 22
forks: 1
openIssues: 1
closedIssues: 27
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-16T14:00:15Z"
lastCommitAt: "2026-10-31T02:00:13Z"
lastReleaseAt: "2026-09-24T17:43:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 49
maintainers: ["bhouston"]
openGraphImageUrl: "https://opengraph.githubassets.com/f40283cc436a10b6706591f1104d35c1ccc73dc29567137dd2995902f7752bae/bhouston/tanstack-router-ga4"
---

# tanstack-router-ga4

[Google Analytics (GA4)](https://marketingplatform.google.com/about/analytics/) integration for [TanStack Router](https://tanstack.com/router) and [TanStack Start](https://tanstack.com/start), built for modern React apps that need reliable analytics with minimal setup.

Documentation: [GitHub Pages](https://bhouston.github.io/tanstack-router-ga4/). The existing [Cloud Run demo](https://tanstack-router-ga4.ben3d.ca) remains available during the transition.

See [packages/tanstack-router-ga4/README.md](https://github.com/bhouston/tanstack-router-ga4/blob/HEAD/packages/tanstack-router-ga4/README.md) for full documentation.

## Development

This repo contains the library, a static Docusaurus documentation website, and a browser test fixture:

- **Library:** `packages/tanstack-router-ga4`
- **Website:** `packages/website` (guides, examples, and generated API reference)
- **Analytics test fixture:** `packages/analytics-fixture` (Vite + TanStack Router, not deployed)

```bash
pnpm install
pnpm dev # documentation dev server
pnpm tsc
pnpm build
pnpm lint # oxlint
pnpm lint:fix
pnpm format # oxfmt
pnpm test # library unit tests
pnpm test:e2e # analytics fixture and…
