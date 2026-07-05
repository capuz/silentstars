---
repo: "zackees/soldr"
name: "soldr"
description: "Solder makes Rust Tools appear instantly, caching makes build finish instantly. Powered by crgx and zccache"
readmeQualityOk: true
url: "https://github.com/zackees/soldr"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 6
forks: 2
openIssues: 21
closedIssues: 428
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-13T01:24:52Z"
lastCommitAt: "2026-07-05T06:33:46Z"
lastReleaseAt: "2026-04-19T22:30:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["zackees"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8bdcabd981216529f4dedd95a653251c29e1e9ee1dcdea5f54e24aa62dcbbac/zackees/soldr"
---

# Soldr / Rust

*A tool to download rust tool sets and aggressive cache your build. **2× faster cross-PR builds** via content-addressed caching that swatinem's per-key cache cannot share. GH and local builds. Just add soldr before all your build commands.*

Third-party comparison (soldr vs Swatinem/rust-cache vs ...): published from `zackees/setup-soldr` — see its `comparison-cluster` workflow and the rendered page once the migration in soldr#674 completes. The legacy `https://zackees.github.io/soldr/` page is being repurposed for soldr-internal per-scenario regression history (no third-party comparison surface lives on this repo anymore).

## Performance

*[performance details](https://zackees.github.io/soldr/)*

Cold builds are a wash; warm and cross-worktree share are where soldr's wrapper architecture pays off. Full historical trend + interactive view: [zackees.github.io/soldr](https://zackees.github.io/soldr/). For the swatinem/rust-cache comparison (GHA target-dir caching, a different layer) see [PERF.md](https://github.com/zackees/soldr/blob/HEAD/PERF.md#readme-comparison-bars-issue-785).

**Instant tools. Instant builds. One command.**

soldr = [crgx](https://crgx.dev/) +…
