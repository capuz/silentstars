---
repo: "Quantova/Q-Scaffold"
name: "Q-Scaffold"
description: "A minimal starter template for building on Quantova, read chain state, deploy QAsset contracts to the QVM, and send signed transactions through the gateway"
readmeQualityOk: true
url: "https://github.com/Quantova/Q-Scaffold"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-25T14:32:21Z"
lastCommitAt: "2026-10-25T09:01:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 22
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f46033c9952ef200fd065c60518c49ff78845e3e2a3116e6b180501e9e19a72/Quantova/Q-Scaffold"
---

# Quantova Dev Base Template

A minimal starter template for building on Quantova, a post quantum Layer 1 blockchain. Use this template to scaffold a project that reads chain state, deploys a contract to the Quantova Virtual Machine, and sends signed transactions through the gateway. It targets the live Quantova network Q-test-net-01, whose native asset TQTOV is a test asset.

Quantova's cryptography, virtual machine, contract language, and consensus are built on the NIST post quantum standards, so the keys, signatures, finality, and randomness that secure the network are designed to withstand both classical and quantum attack. Signatures use ML-DSA-65 and key exchange uses ML-KEM-768.

## What this template shows

1. Reading chain state from the gateway with a small client.
2. A QAsset fungible token written in Quanta and compiled to a QVM container.
3. The shape of a deploy transaction, signed with QCore.js and submitted to the gateway.

## The stack in one paragraph

The virtual machine is the QVM, which executes compiled containers on a deterministic register machine, with post quantum signature verification, hashing, and Merkle proof checking as native instructions. Consensus…
