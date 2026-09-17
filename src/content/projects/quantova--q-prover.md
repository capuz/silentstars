---
repo: "Quantova/q-prover"
name: "q-prover"
description: "Hash based STARK prover for Quantova. FRI and ML-DSA-65 arithmetization, no pairings and no elliptic curves anywhere."
readmeQualityOk: true
url: "https://github.com/Quantova/q-prover"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 28
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T05:12:27Z"
lastCommitAt: "2026-09-17T08:51:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 35
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b0a0cfbfa1d11c724f40840cc7157d10df228eaecaae58f6303d2be28f49428/Quantova/q-prover"
---

# q-prover

The hash based STARK proving system for Quantova. It proves statements about the chain, above all that a batch of module lattice signatures verify, and it produces a certificate a light client can check. Every proof rests on hashing alone. There is no pairing and no elliptic curve operation anywhere in this system.

Quantova is a sovereign post quantum Layer 1 with only NIST standardized schemes and no classical escape hatch anywhere. A proving system is where most chains reach for an elliptic curve. Quantova does not. The soundness here comes from a collision resistant hash and a low degree test over a prime field, so the proof stands on the same footing as the rest of the stack.

## What it is

`qtv-stark` is the backend. It carries a prime field, Merkle commitments over SHA-3, the FRI low degree test, and a constraint framework, and on top of those it arithmetizes the module lattice signature so that a proof can attest the signature relation without revealing or re running it.

### The proof backend

- Field and transforms. Arithmetic over the Goldilocks prime with a number theoretic transform for interpolation and evaluation.
- Commitments. A Merkle tree that…
