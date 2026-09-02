---
repo: "Quantova/Quanta-Smart-Contract-language"
name: "Quanta-Smart-Contract-language"
description: "The Quanta smart contract language and compiler. A .qs source compiles to a QVM container, and reentrancy, overflow, forged auth, infinite mint, dropped value, and front running fail to compile."
readmeQualityOk: true
url: "https://github.com/Quantova/Quanta-Smart-Contract-language"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 29
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T01:23:09Z"
lastCommitAt: "2026-09-02T08:04:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 34
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/87c5be3c800747a51b4c4564c5e44ec6e8418baf9239812a5a094a5cd7f16f74/Quantova/Quanta-Smart-Contract-language"
---

# Quanta

Quanta is the smart contract language of Quantova. A contract is written in a `.qs` source file and compiles to a QVM container, the unit of code the Quantova virtual machine loads and runs. There is no EVM beneath it.

Quantova is a sovereign post quantum Layer 1 built from scratch, sharing no code, no wire, and no trust assumption with any other chain. It is post quantum end to end and not a classical chain with a post quantum signature bolted on, built on NIST standardized schemes alone with no classical escape hatch anywhere. Consensus is QORUS, the virtual machine is the QVM running compiled containers, addresses are Q1 bech32m, and the asset is QTOV with its base unit the Quon and TQTOV on the testnet.

The defining property of Quanta is that the classic smart contract exploits are not runtime hazards guarded by checks. They are errors that stop the compile. A contract that could reenter, overflow, forge authority, mint without limit, drop value, or be front run does not produce a container, because the shape that carries the exploit is not a valid program.

## Six exploits that fail to compile

- Reentrancy has no expression. The language has no synchronous…
