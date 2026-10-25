---
repo: "Quantova/QVRF"
name: "QVRF"
description: "The verifiable random function for Quantova, composed entirely from NIST post quantum primitives, no elliptic curve anywhere."
readmeQualityOk: true
url: "https://github.com/Quantova/QVRF"
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
createdAt: "2026-07-14T05:15:00Z"
lastCommitAt: "2026-10-25T09:01:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 27
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9243158262dded25740b6f94ebe44942532e6844a305396c22e4c674c506ae6/Quantova/QVRF"
---

# QVRF

QVRF is the verifiable random function of Quantova. It drives the sortition randomness for the QORUS consensus and the name service, and it rests on hashing alone, with no elliptic curve and no number theory that a quantum computer could break. The crate carries two constructions that answer two different needs.

The first is a one time key hash function built entirely from the SHA3 family. It is tiny, it checks itself in the height of a Merkle tree, and it is what belongs on the block path. The second is a zero knowledge function that proves a keyed output was computed correctly without ever revealing the key, for any input, with no per use state. It is heavier and it lives off the block path.

Quantova is a sovereign post quantum Layer 1 built from scratch, sharing no code, no wire, and no trust assumption with any other chain. It is post quantum end to end and not a classical chain with a post quantum signature bolted on.

## The one time key construction

A key commits a Merkle root over a set of one time secrets, one secret for each position. The secret at a position comes from the master seed and the position. The leaf at a position is the hash of that secret. The…
