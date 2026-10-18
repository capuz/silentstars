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
lastCommitAt: "2026-10-18T08:16:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 10
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/fff1c8fb6c8ac0ab9b9d7b23991b2eebb11061dfdb1d8c165879ebaaf23e11c2/Quantova/Q-Attest"
---

# Quantova Consensus Spec Test

Public verification labs for inspecting Quantova consensus. Point the labs at a Quantova node, either the public testnet or your own, and they check over the gateway that signatures are post quantum, that there is no elliptic curve recovery path, that leadership runs through the QORUS committee sortition, and that hashing is SHA-3.

Quantova is a post quantum Layer 1 blockchain, written to its own specification. The virtual machine is the QVM, a register machine that runs compiled containers. Consensus is QORUS, where a committee is sampled each round to attest to a proposed block and finality is recorded as a single aggregated certificate under ML-DSA-65, with the committee bounded by the budget the chain reports. Cryptography is Q-Crypto, a NIST post quantum suite written from scratch against the published FIPS documents, with ML-DSA-65 under FIPS 204 for signatures, ML-KEM-768 under FIPS 203 for key exchange, SLH-DSA under FIPS 205, SHA-3 and SHAKE under FIPS 202, and ChaCha20-Poly1305 for the transport channel.

This is a hands on companion to the consensus specification. The specification says how consensus works. These labs let anyone confirm…
