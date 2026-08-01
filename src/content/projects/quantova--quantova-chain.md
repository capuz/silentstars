---
repo: "Quantova/Quantova-Chain"
name: "Quantova-Chain"
description: "The Quantova node and ledger. Post quantum end to end, Q1 addresses, the QVM and QORUS wired into one chain."
readmeQualityOk: true
url: "https://github.com/Quantova/Quantova-Chain"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 105
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T01:28:31Z"
lastCommitAt: "2026-08-01T06:15:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 27
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/af8e56f544796e93047f4b5a9bb8fa3e932ee3f05e9aa22d3100beeb0ba9a033/Quantova/Quantova-Chain"
---

# Quantova-Chain

Quantova-Chain is the node and ledger of Quantova, a sovereign post quantum Layer 1 built from scratch with no classical escape hatch anywhere. It is the integration repository where the cryptography, the virtual machine, and the consensus come together into a running chain. It carries the identifier format, the canonical codec, the account model, the transaction and block and state formats, the post quantum network layer, the mempool, execution, the fee and staking and governance logic, persistence, the RPC gateway, and the `quantovad` daemon.

## What it is

A Cargo workspace of seventeen crates that compose into a state transition and finalization loop. The in repository crates hold the ledger and the formats, and the node crate wires in the three upstream repositories, the Q-Crypto primitives, the QVM execution engine, and the QORUS consensus core, each pinned by an exact git tag. Almost every crate carries `#![forbid(unsafe_code)]`, and a `cargo deny` policy bans classical cryptography from the entire dependency tree.

Nothing here is borrowed. The addresses are Q1 Bech32m, never a twenty byte hex string and never SS58. The unit is Quon. The signatures are…
