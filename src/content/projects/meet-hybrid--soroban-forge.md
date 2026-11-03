---
repo: "Meet-hybrid/soroban-forge"
name: "soroban-forge"
description: "Reusable Soroban smart-contract foundations and developer tooling for the Stellar ecosystem."
readmeQualityOk: true
url: "https://github.com/Meet-hybrid/soroban-forge"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [66, 26]
topics: ["developer-tools", "github-actions", "rust", "smart-contracts", "soroban", "stellar"]
stars: 14
forks: 57
openIssues: 100
closedIssues: 174
watchers: 0
contributors: 51
recentReleases: 0
createdAt: "2026-07-10T13:24:54Z"
lastCommitAt: "2026-11-03T11:14:38Z"
lastReleaseAt: "2026-08-05T00:14:38Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 56
maintainers: ["Meet-hybrid", "dependabot[bot]", "lewistemple22"]
openGraphImageUrl: "https://opengraph.githubassets.com/b554c71ed174e60698f879e465cf046377c65d1ef8f803c7e4fe10171211a523/Meet-hybrid/soroban-forge"
---

# Soroban Forge

**Soroban Forge** is a library of reusable Soroban smart-contract foundations
and developer tooling for the Stellar ecosystem — escrow, vesting, multi-
signature wallets, DAO governance, subscription payments, and marketplace
royalties, plus a developer CLI and TypeScript bindings.

## Proof at a glance

The escrow contract is **deployed and verified on Stellar testnet**. Every
step below was executed live; run `bash scripts/demo-testnet.sh` to reproduce
([step-by-step walkthrough with expected output](https://github.com/Meet-hybrid/soroban-forge/blob/HEAD/docs/WALKTHROUGH.md)).

| Artifact         | Value                                                                       |
| ---------------- | --------------------------------------------------------------------------- |
| Network          | Stellar Testnet (`Test SDF Network ; September 2015`)                       |
| Escrow contract  | `CC227UDF6WBLRTOKKVRIJN7BGSBK67ZGV6IDARJ2AMATGSQ7UZNBZHSB`                  |
| WASM sha256      | `ccbb6603cce6d194407b822df110c91324939cea92ba21937a6d9f1e2c9e48b9`          |
| soroban-sdk      | 28.0.0 · macros 27.0.6 · stable Rust · `wasm32v1-none` · 18,054 bytes       |
|…
