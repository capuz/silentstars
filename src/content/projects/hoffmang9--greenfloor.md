---
repo: "hoffmang9/greenfloor"
name: "greenfloor"
description: "GreenFloor is a market-making system for Chia CATs and XCH, with a manager CLI and daemon to build, post, and monitor on-chain Offers using chia-wallet-sdk, coinset.org, expiry-first policies, and low-inventory alerts."
url: "https://github.com/hoffmang9/greenfloor"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["chia-blockchain", "offers", "splash", "cat"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T06:45:27Z"
lastCommitAt: "2026-06-23T23:17:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 49
maintainers: ["hoffmang9", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6cc06dc8528b03fc9e5deff36871e011c3f74d927e4b4c6dfbbd807df6a4666/hoffmang9/greenfloor"
---

# GreenFloor

GreenFloor is a Chia CAT market-making system with native Rust operator binaries
backed by the canonical `greenfloor-engine` crate.

- `greenfloor-manager` and `greenfloord` are Cargo binaries (no Python entrypoints).
- Rust owns vault signing, offer construction, coin-op execution, daemon cycles,
  config validation for operator commands, and SQLite persistence.
- Python remains for `scripts/` only (bootstrap + subprocess adapters). See [AGENTS.md](AGENTS.md) → **Python (scripts and test harnesses only)** for scope rules.
- **No PyO3 extension.**

## Components

- `greenfloor-manager`: native manager CLI for config validation, key onboarding, coin inventory/reshaping, offer building/posting, and operational checks. Script adapters: `program-fields`, `markets-fields`, `cats-fields`, `materialize-minimal-program`.
- `greenfloord`: native daemon process that evaluates configured markets, executes offers, and runs the market cycle.
- `greenfloor-engine/`: Rust crate for canonical signing, offer, coin-op, and cycle policy.

## V1 Plan

- Scope and architecture: `docs/plan.md`
- Operator deployment/recovery: `docs/runbook.md`
- Architecture decisions index:…
