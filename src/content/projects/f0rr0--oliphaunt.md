---
repo: "f0rr0/oliphaunt"
name: "oliphaunt"
description: "Embedded Postgres inside your apps and tests. No Docker, Node.js, or server. As easy as SQLite."
readmeQualityOk: true
url: "https://github.com/f0rr0/oliphaunt"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [48, 22]
topics: ["pglite", "postgres", "rust", "wasm"]
stars: 93
forks: 10
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2025-09-27T01:50:23Z"
lastCommitAt: "2026-07-31T06:29:03Z"
lastReleaseAt: "2026-06-04T08:03:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 40
maintainers: ["f0rr0", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ddc8fea46b346d2dcfa036a2003ee749a93ac3c3c996692144591ce62bed0a5/f0rr0/oliphaunt"
---

</p>

<h1 align="center">Oliphaunt</h1>

  <strong>Native-first embedded PostgreSQL 18 for desktop, mobile, and WASIX applications.</strong>
</p>

Oliphaunt is a family of peer SDKs and runtime products over the same embedded
PostgreSQL model. Applications own their database roots, choose an honest
runtime mode for their platform, and package only the exact PostgreSQL
extensions they select.

> **Release availability:** Oliphaunt products are independently versioned and
> can become visible on different registries at different times during a
> publication transaction. Release Please-generated version metadata in the
> exact source tree is the version authority; an install example is a contract,
> while the corresponding registry entry or promoted GitHub product tag is the
> availability evidence.

## Product model

Oliphaunt is a multi-product monorepo, not one repository-wide version:

- `liboliphaunt-native` owns the PostgreSQL 18 C ABI runtime and native target
  carriers.
- `liboliphaunt-wasix` owns portable WASIX runtime assets and host AOT
  carriers.
- Rust, Swift, Kotlin/Android, React Native, TypeScript, and WASIX Rust are
  separately versioned SDK products.
- Broker and…
