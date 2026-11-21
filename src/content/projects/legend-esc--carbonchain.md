---
repo: "legend-esc/carbonchain"
name: "carbonchain"
description: "CarbonChain is a Soroban-native platform for issuing, trading, and retiring tokenized carbon credits. It uses smart contracts to enforce real-world climate accountability through verifier approval, MRV (Monitoring, Reporting, and Verification) oracle integration, and permanent on-chain retirement records."
readmeQualityOk: true
url: "https://github.com/legend-esc/carbonchain"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [73, 24]
stars: 10
forks: 114
openIssues: 45
closedIssues: 851
watchers: 0
contributors: 110
recentReleases: 0
createdAt: "2026-05-04T11:52:48Z"
lastCommitAt: "2026-11-21T11:34:40Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 67
maintainers: ["legend-esc", "kingsebuks001", "Kingsman-99"]
openGraphImageUrl: "https://opengraph.githubassets.com/c997162510e0de1875987fd64f13dc47c03ab7152696b77f8e099340648b436f/legend-esc/carbonchain"
---

# CarbonChain 🌿

Transparent, tamper-proof carbon credit registry and marketplace built on the Stellar network.

CarbonChain is a Soroban-native platform for issuing, trading, and retiring tokenized carbon credits. It enables smart contracts to enforce real-world climate accountability — verifier multi-sig, MRV oracle integration, and permanent on-chain retirement receipts — in a trust-minimized way.

---

## Features

- Credit issuance with verifier multi-sig approval
- Permanent on-chain retirement with tamper-proof certificates
- On-chain offer-book marketplace for secondary market trading (Stellar DEX AMM integration is a Phase 3 roadmap item)
- MRV oracle interface for real-time carbon sequestration monitoring
- IPFS-anchored project documentation (methodology, satellite imagery, audits)
- Session-based audit trail for all credit lifecycle operations
- Replay attack protection on all contract state transitions
- Fractional credits (0.1 tonne resolution via i128 storage)
  - Unit convention: **1 tonne = 1,000,000 units**, minimum unit = 100,000 (= 0.1 tonne)
  - All `tonnes` values must be a positive multiple of 100,000; non-multiples are rejected
- Anchor info discovery for…
