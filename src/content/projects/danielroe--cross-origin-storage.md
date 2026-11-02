---
repo: "danielroe/cross-origin-storage"
name: "cross-origin-storage"
description: "Load shared dependencies from Cross-Origin Storage (COS)."
readmeQualityOk: true
url: "https://github.com/danielroe/cross-origin-storage"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cross-origin-storage", "experimental", "nuxt", "vite", "vite-plugin"]
stars: 34
forks: 2
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-06-25T16:45:36Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-10-23T13:42:02Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 38
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56667d7bf97dc74aa682ef2c7c63d87c35749276f286827db4c26245c04e999/danielroe/cross-origin-storage"
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
