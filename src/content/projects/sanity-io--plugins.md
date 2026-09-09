---
repo: "sanity-io/plugins"
name: "plugins"
description: "This monorepo is the home for Sanity Studio plugins maintained by Sanity staff and the community. It provides a centralized place for developing, testing, and publishing plugins that extend Sanity Studio's functionality."
readmeQualityOk: true
url: "https://github.com/sanity-io/plugins"
homepage: "https://www.sanity.io/plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 19
forks: 15
openIssues: 227
closedIssues: 70
watchers: 0
contributors: 225
recentReleases: 0
createdAt: "2025-11-20T12:00:20Z"
lastCommitAt: "2026-09-09T08:16:40Z"
lastReleaseAt: "2025-11-25T12:55:03Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 59
maintainers: ["squiggler-app[bot]", "stipsan", "wiiiimm"]
openGraphImageUrl: "https://opengraph.githubassets.com/217296be8d8fc1a6dda06742bd663049b20dc61afed2b672e5de9f922cfdc099/sanity-io/plugins"
---

# Sanity Plugins Monorepo

This monorepo is the home for Sanity Studio plugins maintained by Sanity staff and the community. It provides a centralized place for developing, testing, and publishing plugins that extend Sanity Studio's functionality.

## Repository Structure

```
.
├── plugins/           # Sanity Studio plugins
├── packages/          # Shared packages and utilities
│   └── @repo/          # Internal monorepo utilities (not published)
└── dev/
    └── test-studio    # Local Sanity Studio for testing plugins
```

### Plugins ([`./plugins`](https://github.com/sanity-io/plugins/blob/HEAD/plugins))

This is where all Sanity Studio plugins live.

### Packages ([`./packages`](https://github.com/sanity-io/plugins/blob/HEAD/packages))

The packages folder contains two types of packages:

1. **Published utilities** - Helpful libraries used by plugins that are published to npm
2. **Internal packages** (`@repo/*`) - Shared configurations for tooling (TypeScript, ESLint, etc.) that are **not** published to npm and are only used within this monorepo

## Getting Started

### Prerequisites

- Node.js (latest LTS)
- [pnpm](https://pnpm.io/) v11 or later (managed via corepack)

###…
