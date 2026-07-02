---
repo: "notjuliet/pdsls"
name: "pdsls"
description: "atmosphere explorer"
url: "https://github.com/notjuliet/pdsls"
homepage: "https://pdsls.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["atproto"]
stars: 38
forks: 3
openIssues: 0
closedIssues: 20
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2024-10-25T15:27:16Z"
lastCommitAt: "2026-07-02T06:33:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 58
maintainers: ["notjuliet", "Jack5079"]
openGraphImageUrl: "https://opengraph.githubassets.com/822e46616db0e87a0e7f7fef72def4855dc9bac914f25d986bfa2f8cff42521b/notjuliet/pdsls"
---

# PDSls - Atmosphere Explorer

Lightweight web app to navigate [atproto](https://atproto.com/).

## Hacking

You will need `bun` to get started:

```
bun install              # install deps
bun run dev              # runs local dev server
bun run build            # bundles the production app
bunx wrangler pages dev  # runs worker locally
```

Set `APP_DOMAIN` (default: `pdsls.dev`) and `APP_PROTOCOL` (default: `https`) to configure the base URL used in the generated OAuth and OpenSearch metadata files.

Cloudflare Pages builds should use `bun run pages:build` with `dist` as the build output directory.

## Logo

The shareable SVG logo lives in `public/pdsls-logo.svg`.
