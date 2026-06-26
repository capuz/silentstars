---
repo: "danielroe/cross-origin-storage"
name: "cross-origin-storage"
description: "Load shared dependencies from Cross-Origin Storage (COS)."
url: "https://github.com/danielroe/cross-origin-storage"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cross-origin-storage", "experimental", "nuxt", "vite", "vite-plugin"]
stars: 14
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-06-25T16:45:36Z"
lastCommitAt: "2026-06-26T21:30:45Z"
lastReleaseAt: "2026-06-26T21:02:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 76
undervaluedScore: 32
maintainers: ["danielroe", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3bb21200440c929c816f06f01e0a7e8cf2512fdbe0c2601a3d3eb89d8df988c/danielroe/cross-origin-storage"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# nuxt-cos

> [!WARNING]
> **Experimental**. The [Cross-Origin Storage API](https://github.com/WICG/cross-origin-storage) is an early-stage proposal with no native browser support yet, and the chunk format here is not stable.

Load shared dependencies (such as `vue`) from [Cross-Origin Storage (COS)](https://github.com/WICG/cross-origin-storage).

Most sites ship their own copy of common dependencies, and the browser re-downloads them per origin even though the bytes are identical. COS lets a browser keep one shared, content-addressed copy. This project extracts those dependencies into chunks whose filename and inter-chunk references are derived from a SHA-256 of their contents, so two independent sites building the same dependency at the same version produce the same chunk and can share it, with no central registry.

## Packages

| Package                                                                           | Description                                                                                  |
| --------------------------------------------------------------------------------- |…
