---
repo: "adpena/molt"
name: "molt"
description: "High-performance Python subset compiler for native binaries and WASM."
readmeQualityOk: true
url: "https://github.com/adpena/molt"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [51, 45]
topics: ["compiler", "programming-languages", "python", "rust", "wasm"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-02T10:23:03Z"
lastCommitAt: "2026-10-07T10:30:08Z"
lastReleaseAt: "2026-01-22T17:23:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["adpena"]
openGraphImageUrl: "https://opengraph.githubassets.com/575295f2fed3af342223d7d380f0ef330245b887220d1b2582fdf9070f4eb365/adpena/molt"
---

# Molt

Molt is an optimizing Python-to-native and WebAssembly compiler with a Rust-owned
runtime and explicit compatibility boundaries.

Molt is under active development, not a drop-in replacement for CPython. It targets
an expanding verified subset without a hidden host-Python fallback. Language,
stdlib, third-party package support, and native/WASM parity remain incomplete;
see [current status](https://github.com/adpena/molt/blob/HEAD/docs/spec/STATUS.md) before choosing a workload.

The release priority is a stable `v1.0` contract, with a scoped, evidence-backed
`v0.0.1` as the initial milestone. Neither implies full
Python or ecosystem compatibility beyond its verified subset. See the
[release milestone](https://github.com/adpena/molt/blob/HEAD/ROADMAP.md#first-release-milestone).
Release readiness also requires the declared workload and resource budgets in
the [performance authority](https://github.com/adpena/molt/blob/HEAD/tools/PERF_AUTHORITY.md#v10-acceptance-scope).
Every release, including `v0.0.1`, requires the complete same-source E1-E4
exit bundle: the native/WASM NumPy/SciPy witness, native/LLVM performance,
verified-subset compatibility and structural gates. Stable…
