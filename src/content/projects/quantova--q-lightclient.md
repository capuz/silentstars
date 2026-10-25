---
repo: "Quantova/Q-Lightclient"
name: "Q-Lightclient"
description: "Post quantum light client for Quantova. Header sync and hash based proof verification, embedded by wallets and QCore."
readmeQualityOk: true
url: "https://github.com/Quantova/Q-Lightclient"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 29
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T01:38:01Z"
lastCommitAt: "2026-10-25T09:00:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 27
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/037d97e66b6760da0912f74825928ada4e5d193c2bd38f2fa69d1e04843063d1/Quantova/Q-Lightclient"
---

# Q-Lightclient

The embedded light client for Quantova. It follows the chain by verifying block headers and checking proofs against them, so a wallet or the SDK can trust chain data without running a full node and without ever reaching for classical cryptography.

Quantova is a sovereign post quantum Layer 1, built from scratch, sharing no code, no wire, and no trust assumption with any other chain. The light client inherits that posture end to end. It follows only Quantova headers, checks only Quantova proofs, and holds only Quantova identifiers. Nothing classical secures any part of it. Foreign chains are read only by the oracle, in its own repository, never here.

## What it is for

A light client is the smallest amount of code that can decide, on its own, whether a piece of chain data is real. It does not replay every transaction. It follows the chain of block headers, checks that each header carries a valid consensus attestation, and then verifies short proofs that a given account, transaction, or state value belongs under a header it already trusts.

In the Quantova stack this client is the verification core embedded by the wallet, by the QCore SDK, and by the validator…
