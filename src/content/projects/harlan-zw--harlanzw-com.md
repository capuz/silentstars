---
repo: "harlan-zw/harlanzw.com"
name: "harlanzw.com"
description: "My personal website built with Nuxt 3 and Nuxt Content 2."
readmeQualityOk: true
url: "https://github.com/harlan-zw/harlanzw.com"
homepage: "https://harlanzw.com"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [59, 34]
topics: ["nuxt-content", "nuxt3", "windicss"]
stars: 214
forks: 20
openIssues: 1
closedIssues: 5
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2022-06-01T11:11:32Z"
lastCommitAt: "2026-08-27T14:26:04Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 42
maintainers: ["harlan-zw", "harlan-github-agent[bot]", "google-labs-jules[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/498703201/39a4dfce-bed2-48d9-9777-a076fb0f000f"
fundingLinks: ["GITHUB:https://github.com/harlan-zw"]
---

# harlanzw.com

Harlan Wilton's personal site and writing archive. Built with [Nuxt 4](https://nuxt.com), Comark, [Nuxt UI](https://ui.nuxt.com), and the current [Nuxt SEO](https://nuxtseo.com) stack.

The site enables Nuxt 5 compatibility behavior and SSR streaming ahead of the Nuxt 5 release.

The interactive canvas prototype lives at `/experimental`. The production routes remain content-driven and include generated RSS, Atom, and JSON feeds.

## Development

Requires [Node.js](https://nodejs.org) 24 or newer and [pnpm](https://pnpm.io) 11.

```bash
pnpm install
pnpm dev
```

Before submitting changes:

```bash
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```
