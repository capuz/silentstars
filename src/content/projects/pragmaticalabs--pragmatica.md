---
repo: "pragmaticalabs/pragmatica"
name: "pragmatica"
description: "Pragmatica Monorepo — Functional Core • JBCT Tooling • Aether Unified Application Runtime"
readmeQualityOk: true
url: "https://github.com/pragmaticalabs/pragmatica"
language: "Java"
languages: ["Java"]
languagePcts: [96]
stars: 34
forks: 5
openIssues: 511
closedIssues: 1041
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-02T15:24:03Z"
lastCommitAt: "2026-10-29T10:20:58Z"
lastReleaseAt: "2026-03-21T17:39:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 45
maintainers: ["siy"]
openGraphImageUrl: "https://opengraph.githubassets.com/12d7d2e3442c02bc4e7d9f901b45893937d9a207cb4d766cddd09543960ada06/pragmaticalabs/pragmatica"
---

# Pragmatica

A monorepo for building reliable Java backends with functional programming patterns and a unified application runtime.

**Current release branch: `release-1.0.0-rc5`.** Development integrates here and pull requests target this branch, not `main`; once the release ships, find the current one with `git ls-remote origin 'release-*'`. See [CONTRIBUTING.md](https://github.com/pragmaticalabs/pragmatica/blob/HEAD/CONTRIBUTING.md).

**Pre-GA release candidate — not production-ready.** Read the [Aether known limitations](https://github.com/pragmaticalabs/pragmatica/blob/HEAD/aether/docs/reference/known-limitations.md) before evaluating.

## What's Inside

**[Pragmatica Core](https://github.com/pragmaticalabs/pragmatica/blob/HEAD/core/README.md)** — Functional primitives for Java: `Result<T>`, `Option<T>`, `Promise<T>`. No exceptions, no nulls, composable error handling.

**[Pragmatica Integrations](https://github.com/pragmaticalabs/pragmatica/blob/HEAD/integrations/)** — Ready-made integrations: PostgreSQL (async + JDBC + jOOQ), HTTP server/client, serialization (Kryo, Fury), consensus protocols, distributed storage, messaging, metrics.

**[JBCT…
