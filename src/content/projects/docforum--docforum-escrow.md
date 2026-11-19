---
repo: "DocForum/docforum-escrow"
name: "docforum-escrow"
description: "Rust Soroban smart contract (create/release/refund escrow) + a thin TypeScript client SDK wrapping it. No Postgres, no PHI, no healthcare domain logic at all — deliberately generic, same category as Trustless Work's repo."
readmeQualityOk: true
url: "https://github.com/DocForum/docforum-escrow"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [47, 39]
topics: ["escrow", "rust", "smart-contract", "soroban", "stellar", "typescript"]
stars: 21
forks: 46
openIssues: 123
closedIssues: 93
watchers: 0
contributors: 48
recentReleases: 2
createdAt: "2026-09-10T09:06:53Z"
lastCommitAt: "2026-11-19T05:05:29Z"
lastReleaseAt: "2026-09-15T12:32:08Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 54
maintainers: ["afeezorobsco-cyber", "abiolatousin-design", "rajiabdulrahmon2020-ui"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8d2ade471e44206bb76ca9eed9ec3e7998c31acdd2fb60d3040ec9810763741/DocForum/docforum-escrow"
---

# docforum-escrow

**🔗 Live on testnet:** [`CB7WHNBNHEVPFTGDOWHFMDOWKLTA2Z4CBR3KZGYIVSSJNUT3OGWYSW2H`](https://stellar.expert/explorer/testnet/contract/CB7WHNBNHEVPFTGDOWHFMDOWKLTA2Z4CBR3KZGYIVSSJNUT3OGWYSW2H) — contract 3.0.0 from upstream main (storage reclaim for settled escrows, split payouts, vesting, split settlement, storage TTL, refund-deadline extension), verified with real create, release and refund calls. History and transaction links: [`docs/testnet-deployments.md`](https://github.com/DocForum/docforum-escrow/blob/HEAD/docs/testnet-deployments.md).

A [Soroban](https://developers.stellar.org/docs/build/smart-contracts) (Stellar) smart contract for conditional payment escrow — lock funds, and release them to the payee only when release is authorized, or return them to the payer on refund. Paired with a TypeScript client SDK, `@docforum/escrow-sdk`.
