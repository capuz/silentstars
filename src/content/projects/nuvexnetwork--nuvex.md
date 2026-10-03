---
repo: "NuvexNetwork/nuvex"
name: "nuvex"
description: "Solana-native verifiable compute and oracle protocol.  Programs accept a job, an input, constraints, and a callback. Randomness is the first job. An active node can fulfill a VRF request with an ECVRF proof after it locks the configured stake and sends a heartbeat. Fees still do not move."
readmeQualityOk: true
url: "https://github.com/NuvexNetwork/nuvex"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "crates", "ecvrf", "rust", "sdk", "solana", "vrf"]
stars: 107
forks: 69
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 0
recentReleases: 0
createdAt: "2026-10-02T15:38:29Z"
lastCommitAt: "2026-10-03T09:23:08Z"
status: "newborn"
tags: ["fork_magnet"]
healthScore: 70
undervaluedScore: 13
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d27b79a8e940e31ec80da610bcd7861714248aebaf94d3c5992332feb59e4686/NuvexNetwork/nuvex"
---

# Nuvex

Solana-native verifiable compute and oracle protocol.

Programs accept a job, an input, constraints, and a callback. Randomness is the first job. An active node can fulfill a VRF request with an ECVRF proof after it locks the configured stake and sends a heartbeat. Fees still do not move.

## Status

Milestone 3 verifies VRF proofs with `solana-ecvrf` 0.0.1 (RFC 9381 ECVRF-EDWARDS25519-SHA512-TAI, 80-byte proof, 64-byte output). No audit of that crate was found. A node fulfills only when it is active, its stake meets the configured minimum, its heartbeat is inside the configured window, and the key was registered before the request. The callback, when set, receives the output and no accounts. `max_fee` is stored and never charged. The node process still does not submit transactions. The SDK can prove on the host and still refuses to send a transaction. An operator who funds several keys can still choose among those outputs. The cost of each extra key is the configured minimum stake. A minimum of zero does not resist that. Off-chain, the indexer can copy those accounts into PostgreSQL and the read API can serve them. That copy is not protocol truth. `GET /v1/prices`…
