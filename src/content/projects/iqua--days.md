---
repo: "iQua/days"
name: "days"
description: "Days: a Performant Discrete-Event Simulator for Network Simulations"
readmeQualityOk: true
url: "https://github.com/iQua/days"
homepage: "https://days.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["async", "discrete-event", "rust", "simulation"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2023-11-14T20:34:55Z"
lastCommitAt: "2026-07-06T07:02:59Z"
lastReleaseAt: "2025-01-03T00:28:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 46
maintainers: ["baochunli"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a0d7ae08fe32d79e1ffddc6dab144341d052e3fc39d674abb1753cddb97e77f/iQua/days"
---

# Days: A Performant Discrete-Event Simulator for Network Simulations

Days is a discrete-event network simulator written in Rust. It models network components as actors (async coroutines) that communicate via message passing, with pluggable schedulers, flow models (packet distributions, TCP, optional DCQCN), and optional link-layer PFC support.

## Quick start

```bash
cargo run --release --bin days -- configs/simple.toml
```

Simulation outputs are written under `log_path` (default: `./output/`) as CSV files.

## Documentation

All design and configuration documentation lives under `docs/`:

```bash
cd docs/
bun install
bun dev
```

Alternatively, one can directly visit the [documentation website](https://days.sh/docs/).

## Examples

- Config-driven runs: `cargo run --release --bin days -- configs/tcp_simple.toml`
- Rust examples: `cargo run --release --example basic`

## Tests

```bash
cargo nextest run --all-features
```

## Feature flags

- `l2` / `l2_pfc`: optional L2/PFC pipeline
- `dcqcn`: DCQCN flow type and models
- `lean`: additional DCQCN event logging for the Lean checker
- `test`: extra assertions and test helpers
