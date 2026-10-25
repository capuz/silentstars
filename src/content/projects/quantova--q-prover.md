---
repo: "Quantova/q-prover"
name: "q-prover"
description: "Hash based STARK prover for Quantova. FRI and ML-DSA-65 arithmetization, no pairings and no elliptic curves anywhere."
readmeQualityOk: true
url: "https://github.com/Quantova/q-prover"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T05:12:27Z"
lastCommitAt: "2026-10-25T09:01:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 33
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf15c6d900b053f7d1362aad88f84a08f0f7c21b6a300ee758cc9d41525e3d00/Quantova/q-prover"
---

# q-prover

The hash based STARK proving system for Quantova. Every proof rests on hashing alone. There is no pairing and no elliptic curve operation anywhere in this system.

## What it is

`qtv-stark` is the backend. It carries a prime field, Merkle commitments over SHA-3, the FRI low degree test and a constraint framework.

- Field and transforms. Arithmetic over the Goldilocks prime with a number theoretic transform for interpolation and evaluation.
- Commitments. A Merkle tree that commits an extended trace row under one leaf, so a single path opens a whole row.
- Low degree test. FRI folds an evaluation vector round by round against challenges drawn from a SHA-3 transcript, which makes the protocol non interactive. The `prover` and `verifier` modules are thin wrappers that run this low degree test on its own.
- Constraints. The AIR framework writes a computation as a trace of field cells with transition, single row and boundary constraints, and a permutation argument that lets a value written in one row be consumed in a distant row. The prover interpolates each column, extends it onto a coset, commits it, forms one composition and hands that to FRI. The verifier replays the…
