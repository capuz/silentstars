---
repo: "litentry/heima"
name: "heima"
description: "Heima network main-net"
readmeQualityOk: true
url: "https://github.com/litentry/heima"
homepage: "https://www.heima.network"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
stars: 69
forks: 18
openIssues: 2
closedIssues: 1109
watchers: 7
contributors: 31
recentReleases: 0
createdAt: "2021-01-14T02:48:43Z"
lastCommitAt: "2026-07-05T20:18:19Z"
lastReleaseAt: "2022-04-07T18:56:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 54
maintainers: ["dependabot[bot]", "Kailai-Wang", "libai0610"]
openGraphImageUrl: "https://opengraph.githubassets.com/b27801352cadb013f3b4c5a7e7787f69ce13c956384c56b57df84f01193a8673/litentry/heima"
---

</div>

Evolved from Litentry, **Heima Network** is a substrate-based, EVM-compatible L1 that connects to a Polkadot-class relay chain for shared security and interoperability. It is built for chain abstraction and cross-chain operations, with:

- **HEI token** — the native token: transfers, governance, staking.
- **Runtime & pallets** — omni-account (cross-chain account abstraction), parachain-staking, omni-bridge, TEE worker registration (teebag), extrinsic filtering, and full EVM support.
- **omni-executor** — a TEE (Gramine/SGX) worker that executes cross-chain UserOperations (EIP-4337 account abstraction) across Ethereum, Solana and other chains.

### Repository layout

- [`parachain/`](https://github.com/litentry/heima/blob/HEAD/parachain/) — the node, runtimes (`heima`, `paseo`) and pallets.
- [`tee-worker/omni-executor/`](https://github.com/litentry/heima/blob/HEAD/tee-worker/omni-executor/) — the cross-chain TEE worker.
- [`local-setup/`](https://github.com/litentry/heima/blob/HEAD/local-setup/) — helper scripts for local development.

All commands below are run from the repository root unless noted otherwise.

## Parachain

The parachain ships two runtimes:…
