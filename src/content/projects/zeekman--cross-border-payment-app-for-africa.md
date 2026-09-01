---
repo: "zeekman/Cross-Border-Payment-App-for-Africa"
name: "Cross-Border-Payment-App-for-Africa"
description: "Cross-Border Payment App for Africa enables fast, low-cost money transfers across African countries using the Stellar Network. The platform provides a secure digital wallet, multi-currency support, and instant payments, helping individuals and businesses send and receive money easily while promoting financial inclusion."
readmeQualityOk: true
url: "https://github.com/zeekman/Cross-Border-Payment-App-for-Africa"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
stars: 5
forks: 138
openIssues: 58
closedIssues: 663
watchers: 0
contributors: 123
recentReleases: 0
createdAt: "2026-03-13T21:50:36Z"
lastCommitAt: "2026-09-01T08:49:18Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 71
maintainers: ["zeekman", "laddyr141-ui", "lawrencesunday311-sketch"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbb1b479a15cbf9d3f8ce9d67b8f4494e9fb8f25a0158036c6998704990765d5/zeekman/Cross-Border-Payment-App-for-Africa"
---

# AfriPay — Cross-Border Payment App for Africa

A production-ready cross-border remittance platform built on the **Stellar Network**, enabling fast, secure, and low-cost payments across African countries using USDC stablecoin and XLM.

AfriPay connects senders with registered payout agents who handle local fiat distribution, with the Stellar blockchain managing escrow, fee collection, and settlement. Designed for emerging markets where stablecoin remittance rails can significantly reduce cross-border payment costs.

---

## Overview

AfriPay implements an escrow-based remittance flow on Stellar:

1. A sender creates a remittance by depositing USDC/XLM into escrow via the Stellar network.
2. A registered payout agent handles fiat distribution to the recipient off-chain.
3. The agent confirms payout on-chain via the backend.
4. The platform releases funds to the agent minus a configurable platform fee.
5. Platform fees accumulate and are managed by the admin.

The system is transparent, auditable on Stellar Explorer, and modular enough to extend with Soroban smart contracts.

---

## Key Features

- **Escrow-Based Transfers** — Secure USDC/XLM deposits held until payout…
