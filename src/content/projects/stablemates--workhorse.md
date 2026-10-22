---
repo: "stablemates/workhorse"
name: "workhorse"
description: "A durable task queue for PostgreSQL, with TypeScript, Python, Go, Rust and Ruby workers on one SQL protocol."
readmeQualityOk: true
url: "https://github.com/stablemates/workhorse"
homepage: "https://workhorse.run"
language: "PLpgSQL"
languages: ["PLpgSQL", "TypeScript"]
languagePcts: [36, 29]
stars: 36
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-22T18:20:07Z"
lastCommitAt: "2026-10-22T08:51:33Z"
lastReleaseAt: "2026-09-29T03:24:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 48
maintainers: ["skyeagle", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3f31bf869c8d1132adabbd028e9e65b0e136ed6906267ffc11b82da63eae239/stablemates/workhorse"
---

# Workhorse

A durable task queue for PostgreSQL, with TypeScript, Python, Go, Rust, Ruby, Java, and Kotlin
workers on one SQL protocol.

Workhorse is versioned SQL functions inside the database you already run. Every language gets the
same workers, the same durable waits, and the same dashboard, with no broker or server beside
PostgreSQL.

> **Public beta:** Workhorse is usable for evaluation and early production adoption. A 0.x minor
> release may change behaviour, so read the changelog before you upgrade. It will not ask you to
> recreate your database: migrations are ordered, and inside a major line a migration only adds, so
> a running deployment upgrades in place.

[Documentation](https://workhorse.run/docs) · [Quickstart](https://workhorse.run/docs/quickstart) ·
[Live demo](https://demo.workhorse.run) · [Compatibility](https://github.com/stablemates/workhorse/blob/HEAD/docs/compatibility.md) ·
[Security policy](https://github.com/stablemates/workhorse/blob/HEAD/SECURITY.md) · [For AI agents](https://workhorse.run/llms.txt)

## Why Workhorse

Applications often need a database change and a background task to succeed together. Workhorse
enqueues through the same PostgreSQL…
