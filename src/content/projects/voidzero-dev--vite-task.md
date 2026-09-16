---
repo: "voidzero-dev/vite-task"
name: "vite-task"
description: "Task runner for Vite+"
readmeQualityOk: true
url: "https://github.com/voidzero-dev/vite-task"
homepage: "https://viteplus.dev/guide/run"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 466
forks: 41
openIssues: 41
closedIssues: 136
watchers: 3
contributors: 19
recentReleases: 0
createdAt: "2025-10-14T11:22:48Z"
lastCommitAt: "2026-09-16T08:48:07Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 33
maintainers: ["wan9chi", "renovate[bot]", "liangmiQwQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e2677bbf4423a056d12dfb6fc3e7951e3608d78c340b817d445aa24d3b4431c/voidzero-dev/vite-task"
---

# Vite Task

Monorepo task runner with intelligent caching and dependency-aware scheduling, powering [`vp run`](https://github.com/voidzero-dev/vite-plus) in [Vite+](https://viteplus.dev).

## Getting Started

Install [Vite+](https://viteplus.dev), then run tasks from your workspace. See the [documentation](https://viteplus.dev/guide/run) for full usage.

```bash
vp run build              # run a task in the current package
vp run -r build           # run across all packages in dependency order
vp run -t @my/app#build   # run in a package and its transitive dependencies
vp run --cache build      # run with caching enabled
```

## Sponsors

Thanks to [namespace.so](https://namespace.so) for powering our CI/CD pipelines with fast, free macOS and Linux runners.

## License

[MIT](https://github.com/voidzero-dev/vite-task/blob/HEAD/LICENSE)

Copyright (c) 2026-present [VoidZero Inc.](https://voidzero.dev/)
