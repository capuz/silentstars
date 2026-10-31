---
repo: "Oichkatzelesfrettschen/gororoba-open"
name: "gororoba-open"
description: "Pure-Rust computational physics workspace: Cayley-Dickson algebra (4D-16384D), multi-spacecraft heliosphere analysis, GPU lattice-Boltzmann, formal verification (262 Rocq proofs), and 1400+ tracked claims across 68 crates."
readmeQualityOk: true
url: "https://github.com/Oichkatzelesfrettschen/gororoba-open"
homepage: "https://oichkatzelesfrettschen.github.io/gororoba-open/"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [54, 28]
topics: ["algebra", "cayley-dickson", "computational-physics", "formal-verification", "gpu-computing", "heliophysics", "lattice-boltzmann", "rust"]
stars: 5
forks: 0
openIssues: 14
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-05T17:03:44Z"
lastCommitAt: "2026-10-31T01:59:29Z"
lastReleaseAt: "2026-09-06T03:35:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 83
undervaluedScore: 59
maintainers: ["Oichkatzelesfrettschen"]
openGraphImageUrl: "https://opengraph.githubassets.com/2268aa0c86fcae4bce07edea2337f7d36955c901ab7adb6c1b3193d47506e2d4/Oichkatzelesfrettschen/gororoba-open"
---

# open\_gororoba

A pure-Rust computational physics workspace bridging Cayley-Dickson
algebra, heliospheric plasma dynamics, lattice-Boltzmann turbulence,
GPU-accelerated simulations, formal verification, and multi-spacecraft
observational analysis -- from quaternions to 16384-dimensional algebras,
from 0.05 AU (Parker Solar Probe) to 137 AU (Voyager interstellar).

## Quick start

```bash
# Prerequisites: Rust nightly (pinned via rust-toolchain.toml)
git clone https://github.com/Oichkatzelesfrettschen/open_gororoba.git
cd open_gororoba

# Build the entire workspace
cargo build --workspace

# Run the quality gates
make governance-gate       # Full 7-check registry + integrity gate
make rust-clippy           # Clippy with warnings-as-errors
cargo test --workspace     # Full test suite
```

## Project layout

```
open_gororoba/
  crates/              68 Rust crates (libraries + CLI binaries)
  registry/            TOML registries (claims, insights, experiments, binaries)
  registry/canonical/  SQLite source-of-truth database (control_plane.sqlite3)
  proofs/              262 Rocq 9.2.0 formal proofs (105 verified theories)
  data/                External datasets and computed…
