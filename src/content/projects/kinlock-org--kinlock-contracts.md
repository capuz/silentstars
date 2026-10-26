---
repo: "Kinlock-Org/kinlock-contracts"
name: "kinlock-contracts"
description: "Soroban smart contract for Kinlock: lock USDC on Stellar for a verified school or landlord, worldwide."
readmeQualityOk: true
url: "https://github.com/Kinlock-Org/kinlock-contracts"
homepage: "https://kinlock-app.vercel.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["rust", "smart-contracts", "soroban", "stellar", "usdc"]
stars: 17
forks: 8
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-05T12:47:49Z"
lastCommitAt: "2026-10-26T18:06:56Z"
lastReleaseAt: "2026-10-07T08:21:55Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 47
maintainers: ["YazarAyobami", "abrcrmb"]
openGraphImageUrl: "https://opengraph.githubassets.com/d284065e73cd05a48923d9f5e495e37a9b7462fec5f09b11de05f559b458129e/Kinlock-Org/kinlock-contracts"
---

# kinlock-contracts

The `kinlock` Soroban contract — payee registry and lock vault in one contract, modular code — plus its tests, deploy tooling, and generated TypeScript bindings.

> **Status: functionally complete, hardening open.** All 18 entry points — `__constructor` plus 17 callable functions, all in the single `#[contractimpl]` in `contracts/kinlock/src/lib.rs` — are implemented with 107 unit tests and property tests over invariants 1–10, deployed to testnet behind a 2-of-3 multisig. Budget tests (`M1-16`), the integration suite (`M1-15`), the internal review (`M1-22`), and the external audit (`H-04`) are still open — which is exactly the gap between "testnet pilot" and "mainnet". See `ROADMAP.md`.

**Try it live (testnet):** [kinlock-app.vercel.app](https://kinlock-app.vercel.app) · **Docs:** [kinlock-org.github.io](https://kinlock-org.github.io) · **Deployment:** [`DEPLOYMENTS.md`](https://github.com/Kinlock-Org/kinlock-contracts/blob/HEAD/DEPLOYMENTS.md)

## The contract

One contract, `kinlock`. `#![no_std]`, no floating point, `i128` amounts with checked arithmetic, USDC via the Stellar Asset Contract from an admin allowlist.

| Caller | Entry points |
|---|---|
|…
