---
repo: "ovh/ovhcloud-docs"
name: "ovhcloud-docs"
description: "New GitHub repository for the OVHcloud public documentation"
readmeQualityOk: true
url: "https://github.com/ovh/ovhcloud-docs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 19
forks: 12
openIssues: 6
closedIssues: 3
watchers: 3
contributors: 763
recentReleases: 0
createdAt: "2026-05-19T14:45:22Z"
lastCommitAt: "2026-09-15T08:56:31Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 43
maintainers: ["Y0Coss", "bs-ovh", "benchbzh"]
openGraphImageUrl: "https://opengraph.githubassets.com/e669d4dd1f0f2b52e872b71e7c60d4658867f2e4f97668da382201290cf7a3be/ovh/ovhcloud-docs"
---

# OVHcloud Guides

Documentation site for OVHcloud built with [Rspress](https://rspress.dev/) v2.
Serves 7 locales (fr, en, de, es, it, pl, pt) with 9500+ MDX pages.

> Coming from [ovh/docs](https://github.com/ovh/docs)? See [CONTRIBUTING.md](https://github.com/ovh/ovhcloud-docs/blob/HEAD/CONTRIBUTING.md) for what changed (folder layout, frontmatter, MDX, images, links).

## Prerequisites

- Node.js 24+
- pnpm

## Quick Start

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Production build (all locales)
pnpm preview      # Preview production build
```

## Development

### Locale Selection

By default, `pnpm dev` serves **fr** and **en** locales only (for performance).
Use the `DEV_LOCALES` environment variable to control which locales are active:

```bash
DEV_LOCALES=fr pnpm dev          # French only (fastest)
DEV_LOCALES=fr,en,de pnpm dev    # French, English, German
DEV_LOCALES=fr,en pnpm dev       # French + English (default)
```

Only active locales have their content compiled, sidebar generated, and routes registered.
This significantly reduces SSR time on the large MDX codebase.

### Scoping to a route subtree (`DEV_PATH`) — blank-page…
