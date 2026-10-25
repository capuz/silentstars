---
repo: "Quantova/Q-Attest"
name: "Q-Attest"
description: "Verification labs for Quantova consensus over the gateway, post quantum signature checks and deterministic slot leadership, evidence not a substitute for audit"
readmeQualityOk: true
url: "https://github.com/Quantova/Q-Attest"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-25T14:32:54Z"
lastCommitAt: "2026-10-25T09:01:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 63
undervaluedScore: 15
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb05e20f71118513f71c0789fea6036a75f6a5f61e394999b464f649680e3fc6/Quantova/Q-Attest"
---

# Quantova Consensus Spec Test

Public verification labs for inspecting Quantova consensus. Point the labs at a Quantova node, either one on the live `Q-test-net-01` network or your own, and they check over the gateway that signatures are post quantum, that the gateway exposes no elliptic curve recovery method by the names they probe, that the committee and proposer of each recent finalized block follow the QORUS draw, that hashing is SHA-3, and that finalized blocks carry certificates signed by two thirds of the committee stake.

Quantova is a post quantum Layer 1 blockchain, written to its own specification. The virtual machine is the QVM, a register machine that runs compiled containers. Consensus is QORUS, where a committee is sampled each round to attest to a proposed block and finality is recorded as a single aggregated certificate under ML-DSA-65. Cryptography is Q-Crypto, a NIST post quantum suite written from scratch against the published FIPS documents, with ML-DSA-65 under FIPS 204 for signatures, ML-KEM-768 under FIPS 203 for key exchange, SLH-DSA under FIPS 205, SHA-3 and SHAKE under FIPS 202, and ChaCha20-Poly1305 for the transport channel.

This is a hands on…
