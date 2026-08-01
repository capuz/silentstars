---
repo: "zackees/soldr"
name: "soldr"
description: "Soldr makes Rust Tools appear instantly, caching makes build finish instantly. Powered by crgx and zccache"
readmeQualityOk: true
url: "https://github.com/zackees/soldr"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 8
forks: 3
openIssues: 9
closedIssues: 722
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-13T01:24:52Z"
lastCommitAt: "2026-08-01T06:12:56Z"
lastReleaseAt: "2026-04-19T22:30:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["zackees"]
openGraphImageUrl: "https://opengraph.githubassets.com/e566fc14d66108772e267e8dbe41d7e44816a4791c9bfff2f6e95a9f324487fd/zackees/soldr"
---

# Soldr / Rust

*A tool to download rust tool sets and aggressive cache your build. **2× faster cross-PR builds** via content-addressed caching that swatinem's per-key cache cannot share. GH and local builds. Just add soldr before all your build commands.*

Third-party comparison (soldr vs Swatinem/rust-cache vs ...): published from `zackees/setup-soldr` — see its `comparison-cluster` workflow and the rendered page once the migration in soldr#674 completes. The legacy `https://zackees.github.io/soldr/` page is being repurposed for soldr-internal per-scenario regression history (no third-party comparison surface lives on this repo anymore).

## Performance

*[performance details](https://zackees.github.io/soldr/)*

Cold builds are a wash; clean-target reconstruction from a warm compiler cache and cross-worktree sharing are where soldr's wrapper architecture pays off. The README chart's clean-target row intentionally deletes `target/`; it does not claim Cargo's intact-target freshness fast path. Full historical trend + interactive view: [zackees.github.io/soldr](https://zackees.github.io/soldr/). For the swatinem/rust-cache comparison (GHA target-dir caching, a different layer) see…
