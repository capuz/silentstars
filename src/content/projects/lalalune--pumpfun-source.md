---
repo: "lalalune/pumpfun-source"
name: "pumpfun-source"
description: "Reverse engineering the pump.fun smart contracts"
readmeQualityOk: true
url: "https://github.com/lalalune/pumpfun-source"
homepage: "https://pump.fun/coin/35fWL6pdJqpconRZPrawUAQegw1QF3p2tgN7mzhTpump"
language: "Rust"
languages: ["Rust", "Assembly"]
languagePcts: [65, 23]
stars: 161
forks: 76
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2026-10-24T23:37:50Z"
lastCommitAt: "2026-10-27T12:39:07Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 31
maintainers: ["lalalune", "startrack3r", "hongikAn"]
openGraphImageUrl: "https://opengraph.githubassets.com/e96d76ee785dce5e5dea1972c2bef42499f57cbae745f482c0d9c41a101b2d49/lalalune/pumpfun-source"
---

# pumpfun-source

Reconstructed Rust source for Pump.fun's Solana programs, with captured binaries,
reproducible builds and local differential tests.

**Progress as of 27 October 2026: all four core programs still differ from their
captured binaries. The selected Donation Relay reconstruction reproduces its complete meaningful
ELF and, through a separate loader deployment, its captured payload.**

## Current progress

[Current main-Pump parallel research snapshot](https://github.com/lalalune/pumpfun-source/blob/HEAD/research/main-pump-parallel-checkpoint-20261027/README.md) preserves the verified intermediates and in-progress source beyond the maintained checkpoint.

**Main Pump: 68.1% of function windows matched; 47.2% of original text covered. Complete reconstruction remains unfinished.**

Across the latest verified checkpoints, **2,789 / 3,338 inferred function windows
match (83.6%)**. Their matched windows cover **3,568,232 / 5,213,128 original text
bytes (68.4%)**. **One of five programs has complete meaningful-ELF identity**;
all four core contracts still differ from their captured binaries.

These percentages measure bounded binary-recovery progress, not a claim that
83.6%…
