---
repo: "archetech/archon"
name: "archon"
description: "Full stack decentralized identity platform and reference implementation for the did:cid DID method"
readmeQualityOk: true
url: "https://github.com/archetech/archon"
homepage: "http://archetech.com/archon/"
language: "TypeScript"
languages: ["TypeScript", "Lean"]
languagePcts: [45, 32]
topics: ["agents", "credentials", "decentralized", "did", "encryption", "identity", "lightning", "reputation", "btc", "ipfs"]
stars: 6
forks: 6
openIssues: 41
closedIssues: 343
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-08T19:03:41Z"
lastCommitAt: "2026-11-07T22:51:48Z"
lastReleaseAt: "2026-06-26T16:13:05Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 87
maintainers: ["macterra", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e19c3124578819a25f839cd63797b3605cb98e7c37d2b31a1ad76c9118f442f2/archetech/archon"
discussionCount: 14
---

# Archon

Archon is a peer-to-peer decentralized identity platform built on the W3C **DID (Decentralized Identifier)** standard, and the reference implementation of `did:cid`, a [**DIF-recommended** DID method](https://github.com/decentralized-identity/did-methods/tree/main/dif-recommended). It lets anyone create, control, and resolve self-sovereign identities without a central authority — and without paying per-operation fees for routine use.

The protocol separates **DID creation** from **DID updates**: creation is instant and free, since a DID is derived from the content-address (CID) of its initial document in IPFS; updates are anchored to one or more pluggable registries (Hyperswarm for gossip-based propagation, Bitcoin mainnet/signet/testnet4 for blockchain-anchored consensus, with room for more). This split gives Archon the unusual combination of zero-cost identity creation with cryptographically verifiable, consensus-driven history.

An Archon node is a small constellation of interoperating microservices that you can run yourself in Docker:

- **Gatekeeper** — maintains the integrity of the local DID database and serves the resolution API. Available in TypeScript (default)…
