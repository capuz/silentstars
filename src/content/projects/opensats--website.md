---
repo: "OpenSats/website"
name: "website"
description: "Live at opensats.org"
readmeQualityOk: true
url: "https://github.com/OpenSats/website"
homepage: "https://opensats.org"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [71, 21]
topics: ["bitcoin", "floss", "non-profit", "nostr", "open-source"]
stars: 53
forks: 40
openIssues: 5
closedIssues: 73
watchers: 13
contributors: 51
recentReleases: 0
createdAt: "2022-04-02T15:09:03Z"
lastCommitAt: "2026-11-06T13:20:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["dergigi", "Arvin21M", "TumaBitcoiner"]
openGraphImageUrl: "https://opengraph.githubassets.com/48cf82e9e144a40bc315487b6eaf45f1b69a070ac5cb0d720a2a05f296db8764/OpenSats/website"
fundingLinks: ["GITHUB:https://github.com/OpenSats"]
---

# OpenSats.org

This is the codebase behind [OpenSats.org](https://opensats.org).

## Getting started

This website was bootstrapped with [`tailwind-nextjs-starter-blog`](https://github.com/timlrx/tailwind-nextjs-starter-blog).

Use Node.js 22.x, as specified in `package.json` and used by CI and Vercel.
To run a development environment locally, run:

- `npm ci` to install the locked dependencies
- `npm run dev` to run the local development version

Please refer to their [Quick Start Guide](https://github.com/timlrx/tailwind-nextjs-starter-blog#quick-start-guide) for further details.

## Social preview images

`npm run build` generates social cards and checks that every card is exactly
1200×630 and under 1 MB. To regenerate blog cards locally after changing artwork,
run `npx contentlayer2 build` followed by `npm run generate:blog-og`.
`npm run check:og` validates all generated card families after a full build.

Blog OG and Twitter images use compressed JPEG copies; the original article
artwork stays in place. Cards fill the frame without padding or stretching.
Spotlight crop adjustments live in `scripts/generate-blog-og.mjs`. Review both
the featured and alternate card individually…
