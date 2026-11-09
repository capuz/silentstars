---
repo: "Gooichand/blockchain-evidence"
name: "blockchain-evidence"
description: "Blockchain-powered digital evidence management system for law enforcement & courts"
readmeQualityOk: true
url: "https://github.com/Gooichand/blockchain-evidence"
homepage: "https://blockchain-evidence.onrender.com"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [51, 29]
topics: ["audit-trail", "blockchain", "chain-of-custody", "cybersecurity", "digital-forensics", "evidence-management", "ipfs", "legal-tech", "nodejs", "polygon"]
stars: 32
forks: 59
openIssues: 0
closedIssues: 201
watchers: 0
contributors: 31
recentReleases: 0
createdAt: "2025-12-05T16:12:18Z"
lastCommitAt: "2026-11-09T00:55:24Z"
lastReleaseAt: "2026-08-08T05:11:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 69
maintainers: ["Gooichand"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1110723725/db8f37f1-8130-499d-ba87-18fd46520e1c"
discussionCount: 2
---

> [!WARNING]
> **Testnet build, stated plainly.** All anchoring targets **Polygon Amoy**
> (chainId `80002`) — not economically final, contract unaudited. Anchoring also
> needs the signer authorised in the contract's `authorizedUsers` map; until it
> is, anchor transactions revert and uploads store with a warning. Not fit for
> production evidence yet.

---

## The one guarantee

| | |
|---|---|
| <img src="assets/badges/trust.svg" alt="Defence in depth, from transport to integrity, with the known limits beside it" width="100%"> | |

A custody log in a database is only as trustworthy as whoever can write to that
database — usually the people you are auditing. EVID-DGC removes the trust
requirement from **one** claim: *the bytes of this file have not changed since
collection.* Everything else here is conventional application work on top of it.

---

## Pipeline

Orchestrated in [`services/integratedEvidenceService.js`](https://github.com/Gooichand/blockchain-evidence/blob/HEAD/services/integratedEvidenceService.js).
Verification is the mirror: re-fetch from IPFS, recompute SHA-256, compare.

Steps 2 and 3 are wrapped so an **IPFS or chain failure does not fail the
upload** — the…
