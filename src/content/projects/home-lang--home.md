---
repo: "home-lang/home"
name: "home"
description: "There is no language like Home."
readmeQualityOk: true
url: "https://github.com/home-lang/home"
language: "Zig"
languages: ["Zig"]
languagePcts: [45]
topics: ["cross-platform", "systems", "apps", "mobile", "web", "desktop", "games", "binaries"]
stars: 13
forks: 1
openIssues: 8
closedIssues: 55
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-22T05:02:34Z"
lastCommitAt: "2026-07-04T22:19:59Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 55
maintainers: ["chrisbbreuer"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a4c1fdcbb083818c4da84f0a1314e67db26128e554479dafa4ad1dd6e668b7b/home-lang/home"
fundingLinks: ["GITHUB:https://github.com/chrisbbreuer"]
---

A modern programming language for systems, apps, and games. Combines the speed of Zig, the safety of Rust, and the joy of TypeScript.

> **Status**: Home is under active development. The lexer, parser, type
> inference, and tree-walking interpreter are usable today; native codegen,
> tooling, the TypeScript frontend, and the Bun-compatible runtime are
> still maturing. See the [parity status](#parity-status) section
> below for percentage-based numbers across every area, with
> per-feature drill-down pages in [`docs/PARITY-TYPESCRIPT.md`](./docs/PARITY-TYPESCRIPT.md),
> [`docs/PARITY-NODE.md`](./docs/PARITY-NODE.md),
> [`docs/PARITY-BUN.md`](./docs/PARITY-BUN.md), and the wider
> [`docs/CAPABILITY_MATRIX.md`](./docs/CAPABILITY_MATRIX.md).

For release notes see [`CHANGELOG.md`](./CHANGELOG.md).

## Parity status

The whole status, percentage-based. Every number is a **byte-for-byte,
file-count, or row-count measurement** against an external baseline —
not an aspirational target. Each row cites the package, harness, or
upstream source that produces it.

> Refreshed 2026-05-30. Coarse-mode TS corpus and per-slice exact mode
> are regression-gated on every PR; Bun port % is…
