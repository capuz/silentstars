---
repo: "ion-elgreco/rivers"
name: "rivers"
description: "Rivers is an orchestration platform for data and ML pipelines, written in Rust for native performance with a Python-first development experience."
url: "https://github.com/ion-elgreco/rivers"
homepage: "https://ion-elgreco.github.io/rivers/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [67, 30]
stars: 76
forks: 6
openIssues: 30
closedIssues: 12
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-05-14T00:40:48Z"
lastCommitAt: "2026-06-30T06:50:49Z"
lastReleaseAt: "2026-06-16T18:50:12Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 83
undervaluedScore: 35
maintainers: ["ion-elgreco", "dependabot[bot]", "FredrikBakken"]
openGraphImageUrl: "https://opengraph.githubassets.com/72ba1e9b30df99f1943a653eb960cc121fab633b5ac1c88ff6f7435a237d980e/ion-elgreco/rivers"
fundingLinks: ["GITHUB:https://github.com/ion-elgreco"]
discussionCount: 1
---

**Orchestration platform for tasks and assets, fully backed by Rust.**

rivers is a Rust-powered orchestration platform built around data assets. Define pipelines in Python; rivers resolves the graph, plans execution - no Python interpreter on the control plane.

[Documentation](https://ion-elgreco.github.io/rivers/) · [Issues](https://github.com/ion-elgreco/rivers/issues) · [Discussions](https://github.com/ion-elgreco/rivers/discussions)

## Key features

- **Asset-based orchestration** — define data assets as Python functions; rivers resolves the dependency graph automatically.
- **Rust core** — graph resolution, execution planning, partition logic, and the scheduler all run in compiled Rust.
- **Multiple asset types** — single, multi-output, graph (composing `Task`s into sub-DAGs), and external assets.
- **Partitioning** — static, time-window (daily/hourly/custom cron), multi-dimensional, and runtime-extensible dynamic partitions.
- **Pluggable IO** — built-in handlers for in-memory, pickle (any object store), and Delta Lake with merge support.
- **Parallel & distributed execution** — `Executor.parallel()` for concurrent subprocess workers, `Executor.kubernetes()` for…
