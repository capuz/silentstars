---
repo: "komira-ai/jobscheduler"
name: "jobscheduler"
description: "A generic job and compute scheduler: capacity providers that acquire, renew and release hosts of a shape, placement, and sizing from request history."
readmeQualityOk: true
url: "https://github.com/komira-ai/jobscheduler"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 41
closedIssues: 30
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-26T21:57:59Z"
lastCommitAt: "2026-11-21T12:33:07Z"
lastReleaseAt: "2026-10-27T23:31:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 88
undervaluedScore: 53
maintainers: ["asuresh8"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c47e878df627a670fe552685c3b3c3fb82c6ef510815f689bdce0230c9b5d04/komira-ai/jobscheduler"
---

# jobscheduler
A generic job and compute scheduler: capacity providers that acquire and release hosts of a shape, placement, and sizing from request history.

The design is in `docs/design.md` (it arrives with the design pull request). The code is a Cargo workspace of crates under `crates/`, built with the toolchain pinned in `rust-toolchain.toml`. Build with `cargo build --workspace --locked` and test with `cargo test --workspace --locked` (add `--features js-sim-cell/slow-families` for the four longest simulation binaries, docs/simulation.md); CI also requires `cargo fmt --all --check`, `cargo clippy --workspace --all-targets --locked -- -D warnings` and per-crate line and branch coverage: `crates/js-coverage` compares each crate with its line in `coverage-baseline` (zero uncovered lines and branches to start), so a change must cover the code it adds.

Scheduler behaviour is also tested without hosts in a whole-cell simulation, the real lease server under a deterministic kernel with many fake agents (`cargo test -p js-sim-cell --features slow-families --test smoke`); how to run, write and read its scenarios is in `docs/simulation.md`.
