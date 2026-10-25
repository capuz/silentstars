---
repo: "Quantova/QONCORD"
name: "QONCORD"
description: "Quantova on chain governance. Post quantum ballots, STARK proven tallies, and a constitution the protocol enforces."
readmeQualityOk: true
url: "https://github.com/Quantova/QONCORD"
language: "Rust"
languages: ["Rust", "Q#"]
languagePcts: [64, 36]
stars: 28
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T03:47:16Z"
lastCommitAt: "2026-10-25T09:01:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 18
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/badc251a2cb924a619dce9341f744573e7d13f1f2e57933b4c2503e1fa4a2b44/Quantova/QONCORD"
---

# QONCORD

The governance protocol of Quantova. Its ballots are post quantum signatures, its asset recovery is bound to the exact scope that was voted, and its constitution gate is enforced by the protocol rather than by convention. The guiding rule is that no vote is above the law.

Quantova is a sovereign post quantum Layer 1 with only NIST standardized schemes and no classical escape hatch anywhere. QONCORD is built to that same standard. Every ballot is a module lattice signature, and no classical cryptography appears anywhere in the pipeline.

## Overview

QONCORD is the governance design repository for Quantova. The governance that runs on chain lives in the `qtv-governance` crate and its ledger wiring in the Quantova-Chain repository, and those rules are the source of truth. This README states them as the chain enforces them. The crates and contracts in this repository are early stubs from an earlier design and are not what the chain runs.

## The five tracks

Every proposal is raised on exactly one of five parallel tracks. Each track has its own deposit, voting period, enactment delay, and pass threshold, all fixed in code.

Chain upgrades takes a deposit of 225 thousand…
