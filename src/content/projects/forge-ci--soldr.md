---
repo: "forge-ci/soldr"
name: "soldr"
description: "Soldr makes Rust Tools appear instantly, caching makes build finish instantly. Powered by crgx and zccache"
readmeQualityOk: true
url: "https://github.com/forge-ci/soldr"
homepage: "https://forge-ci.github.io/soldr/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["build-cache", "cargo", "ci", "compiler-cache", "rust", "toolchain", "zccache"]
stars: 14
forks: 3
openIssues: 80
closedIssues: 1315
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-13T01:24:52Z"
lastCommitAt: "2026-10-30T09:36:01Z"
lastReleaseAt: "2026-04-19T22:30:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["zackees"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a17604e092f667cdbb7d2104ae8f5ca65f1bd262f1420abac5e1d2b2eafdfef/forge-ci/soldr"
---

# Soldr / Rust

*Beta software, please pin*

*A tool to download rust tool sets and aggressive cache your build. **2× faster cross-PR builds** via content-addressed caching that swatinem's per-key cache cannot share. GH and local builds. Just add soldr before all your build commands.*

## Performance

*[performance details](https://zackees.github.io/soldr/)*

Cold builds are a wash; clean-target reconstruction from a warm compiler cache and cross-worktree sharing are where soldr's wrapper architecture pays off. The README chart's clean-target row intentionally deletes `target/`; it does not claim Cargo's intact-target freshness fast path. Full historical trend + interactive view: [zackees.github.io/soldr](https://zackees.github.io/soldr/). For the swatinem/rust-cache comparison (GHA target-dir caching, a different layer) see [PERF.md](https://github.com/forge-ci/soldr/blob/HEAD/PERF.md#readme-comparison-bars-issue-785). Running many agent worktrees? See [docs/FILESYSTEMS.md](https://github.com/forge-ci/soldr/blob/HEAD/docs/FILESYSTEMS.md) for which filesystem gives cache hits as free clones and how to keep btrfs/ZFS from slowing builds down.

**Instant tools. Instant builds. One…
