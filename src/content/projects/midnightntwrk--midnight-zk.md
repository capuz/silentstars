---
repo: "midnightntwrk/midnight-zk"
name: "midnight-zk"
description: "Midnight ZK"
readmeQualityOk: true
url: "https://github.com/midnightntwrk/midnight-zk"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["compact", "midnightntwrk"]
stars: 69
forks: 35
openIssues: 42
closedIssues: 77
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2025-06-02T14:43:11Z"
lastCommitAt: "2026-10-07T10:25:12Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 51
maintainers: ["miguel-ambrona", "chrisferry", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/67a808b03cb2fd2e957a1fed946e6c8c7b234b30dc0378dab96f1809ea3f1684/midnightntwrk/midnight-zk"
---

# Midnight ZK

This repository implements the proof system used in **Midnight**, along with tooling for building zero-knowledge circuits.

## Repository Structure

- `curves`: Implementation of elliptic curves used in Midnight, concretely BLS12-381 and JubJub.
- `proofs`: Plonk proof system using KZG commitments.
- `circuits`: Tooling for constructing ZK circuits.
- `aggregator`: Toolkit for proof aggregation of midnight-proofs.
- `zk_stdlib`: A high-level abstraction for building zero-knowledge circuits using `proofs` and `circuits`.

## Acknowledgments

This project was originally built upon the foundations of several outstanding open-source libraries:

- [`blstrs`](https://github.com/filecoin-project/blstrs) – by the Filecoin Project
- [`jubjub`](https://github.com/zcash/jubjub) – by the Zcash Project
- [`halo2curves`](https://github.com/privacy-scaling-explorations/halo2curves) v0.8.0 – by the Privacy Scaling Explorations (PSE) team
- [`halo2`](https://github.com/privacy-scaling-explorations/halo2) v0.3.0 – by the Privacy Scaling Explorations (PSE) team, itself originally derived from the [Zcash Sapling proving system](https://github.com/zcash/halo2)

We initially maintained…
