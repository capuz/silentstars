---
repo: "lucadonnoh/gwei-names"
name: "gwei-names"
description: "Ownerless, neutral fork of wei-names: .gwei names on Ethereum. Fixed length-based fees, burned not collected, no admin. Contracts + dapp + gns-utils SDK."
readmeQualityOk: true
url: "https://github.com/lucadonnoh/gwei-names"
homepage: "https://gwei.domains"
language: "HTML"
languages: ["HTML", "Solidity", "JavaScript"]
languagePcts: [45, 23, 23]
stars: 12
forks: 8
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-06-26T11:35:36Z"
lastCommitAt: "2026-10-24T08:19:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 55
maintainers: ["lucadonnoh", "nodestarQ", "jefag"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2f162139a0698bafb2dfe600e05b48d5b4e3a6eda1aa37a93b62cfab5e4b0ed/lucadonnoh/gwei-names"
---

# Gwei Name Service (GNS)

A simple, ownerless namespace on Ethereum named after **gwei** — the unit Ethereum gas is priced in.

GNS is an ownerless, neutral fork of [wei-names](https://github.com/z0r0z/wei-names). It keeps everything that made wei-names good and removes the two things that made it un-neutral:

- **No owner.** wei-names has an `Ownable` admin who can change fees and withdraw the contract's ETH. GNS has **no owner, no admin, and no upgrade path** — there is nothing to rug.
- **Fees are burned, not collected.** Registration/renewal still cost a *fixed*, length-based fee (the same anti-squat schedule wei-names uses — shorter names cost more), but that ETH is **locked in the contract forever** — there is no `withdraw()`, so nobody profits. Like the EIP-1559 base fee, every `.gwei` registration simply burns ETH.

The result is a neutral public good: fixed rules nobody can change, and money nobody can extract.

**Status:** live + verified on **Ethereum mainnet and Sepolia**. The core contracts share addresses across both networks; `HumanRegistrar` has a network-specific address.

| Contract | Mainnet | Sepolia |
|---|---|---|
| `NameNFT.sol` |…
