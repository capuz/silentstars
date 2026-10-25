---
repo: "Quantova/quantova-cli"
name: "quantova-cli"
description: "The Quantova command line client. Post quantum accounts, signed transactions, contract deploy and call, and node queries over the gateway, built on the QCore Rust core."
readmeQualityOk: true
url: "https://github.com/Quantova/quantova-cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-27T13:47:34Z"
lastCommitAt: "2026-10-25T09:01:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 35
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ce3621c241d813c635a37084c57c01ec9f019fca17a96382849a193bdc806b8/Quantova/quantova-cli"
---

# quantova-cli

The Quantova command line client. It gives a developer one terminal tool to make a post quantum account, read chain state, sign and submit transactions, and deploy and call contracts, over the Quantova gateway.

The binary is named `qtv`. It is a thin layer over [QCore.rs](https://github.com/Quantova/QCore.rs), the one Quantova client core, so the CLI never restates a signature or a wire format. Every key derivation, every ML-DSA-65 signature, and every gateway request comes from the same audited core that the JavaScript and Python clients are generated over.

## What it does

The CLI covers the whole path a developer walks on a fresh chain.

- Make an account offline, back it up as a twenty five word phrase, and derive its address.
- Read an account balance, nonce, and key state from a node.
- Register the account key so the account can sign.
- Sign and submit a native transfer, with a fee ceiling that refuses an inflated gateway fee.
- Read node info, follow a transaction to finality, and read contract storage and block events.
- Deploy a Quanta container and call a contract.

## Install

The CLI is part of the Quantova stack and builds on the QCore Rust core…
