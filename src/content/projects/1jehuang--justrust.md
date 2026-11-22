---
repo: "1jehuang/justrust"
name: "justrust"
description: "Fast hosted Rust compile for coding agents"
readmeQualityOk: true
url: "https://github.com/1jehuang/justrust"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 30
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-07T05:03:22Z"
lastCommitAt: "2026-11-22T11:46:51Z"
lastReleaseAt: "2026-10-12T03:46:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 47
maintainers: ["1jehuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e58cb825f652d2cd69873602da85c82df8634873fdf0c902d1e79c71dc71c99/1jehuang/justrust"
---

# justrust

**Rust compile as a service.**

A faster, vertically integrated Rust build toolchain optimized for agents.

[Website](https://jcode.sh/rust) · [Install](#install) · [Use](#use) · [Remote builds](#remote-builds) · [Goal](#goal) · [Findings](https://github.com/1jehuang/justrust/blob/HEAD/FINDINGS.md) · [Changelog](https://github.com/1jehuang/justrust/blob/HEAD/CHANGELOG.md)

---

justrust vertically integrates and optimizes the Rust build toolchain to make
the entire edit, check, and test loop faster. Use it locally or with our remote
build service.

[uv benchmarks](https://github.com/1jehuang/justrust/blob/HEAD/docs/readme-uv-benchmark-20261014.md), median of three rounds. Factors are relative to Stock Cargo.

| Operation | Stock Cargo (local) | justrust (local) | justrust (remote) |
|---|---:|---:|---:|
| Fresh checkout, `check --workspace` | 81.2 s | **34.5 s (2.35×)** | **14.3 s (5.66×)** |
| Fresh checkout, `test -p uv-resolver --no-run` | 85.8 s | **33.3 s (2.58×)** | **15.2 s (5.63×)** |
| Warm one-line body edit, `check -p uv-resolver` | 0.96 s | 0.85 s (1.13×) | 0.89 s (1.07×) |
