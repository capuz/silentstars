---
repo: "adpena/molt"
name: "molt"
description: "High-performance Python subset compiler for native binaries and WASM."
url: "https://github.com/adpena/molt"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [47, 47]
topics: ["compiler", "programming-languages", "python", "rust", "wasm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-02T10:23:03Z"
lastCommitAt: "2026-06-29T07:21:54Z"
lastReleaseAt: "2026-01-22T17:23:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["adpena"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc91f44b8159c95d74078a941a19381f588c1ce4ba25c686d300824e80bbf5e8/adpena/molt"
---

# Molt

Molt compiles Python into standalone native binaries and WASM with a Rust-owned
runtime, deterministic tooling, and explicit compatibility boundaries.

It is not trying to be a hidden CPython launcher. Molt targets a verified,
production-minded subset that can keep expanding without giving up control over
performance, packaging, or runtime semantics.

## Why Molt

- **Standalone output**: compiled binaries do not rely on a host Python installation.
- **Rust-first runtime**: hot semantics and stdlib behavior are pushed down into
  runtime primitives and intrinsics instead of Python fallbacks.
- **Deterministic engineering**: parity, performance, and security are treated
  as measurable gates, not vague goals.
- **Cross-target ambition**: native and WASM are both first-class targets.

## Project Contract

- CPython `>=3.12` parity target for supported Molt semantics.
- Full product target: full CPython `>=3.12` parity for the supported subset
  without hidden host fallback.
- Compiled artifacts must work without a host Python installation.
- By design, Molt does not support unrestricted `exec`/`eval`/`compile`,
  runtime monkeypatching, or unrestricted reflection in compiled…
