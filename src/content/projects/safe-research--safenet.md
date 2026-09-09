---
repo: "safe-research/safenet"
name: "safenet"
description: "Safenet enforces transaction security onchain by preventing high-risk transactions from executing."
readmeQualityOk: true
url: "https://github.com/safe-research/safenet"
homepage: "https://docs.safefoundation.org/safenet"
language: "Rust"
languages: ["Rust", "Solidity"]
languagePcts: [44, 31]
stars: 8
forks: 3
openIssues: 16
closedIssues: 32
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-10-30T15:00:57Z"
lastCommitAt: "2026-09-09T08:18:26Z"
lastReleaseAt: "2026-06-02T11:57:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 71
maintainers: ["nlordell", "rmeissner", "remedcu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b028675399381411c581721170f24743ee198215bff4ab3687a3ef2435e8608e/safe-research/safenet"
---

# Safenet

This is a work-in-progress. Don't use it yet!

## Project Organisation

- [Contracts](https://github.com/safe-research/safenet/blob/HEAD/contracts) Safenet contracts (Solidity & Foundry)
- [Examples](https://github.com/safe-research/safenet/blob/HEAD/examples) Interact with Safenet on test networks (Typescript & npm)
- [Explorer](https://github.com/safe-research/safenet/blob/HEAD/explorer) Explorer web interface (Typescript & npm)
- [Services core crate](https://github.com/safe-research/safenet/blob/HEAD/crates/core) Shared logic between the offchain Safenet services (Rust)
- [Sentinel](https://github.com/safe-research/safenet/blob/HEAD/crates/sentinel) Service that watches proposals and puts up bonds for its onchain votes (Rust)
- [Sentinel engine](https://github.com/safe-research/safenet/blob/HEAD/crates/sentinel-engine) Keyless transaction-verification API used by sentinels ([operator guide](https://github.com/safe-research/safenet/blob/HEAD/docs/sentinel-engine.md)) (Rust)
- [Validator](https://github.com/safe-research/safenet/blob/HEAD/crates/validator) Validator service that participates in FROST signing rounds and epoch rollovers

## Developing

### Requirements…
