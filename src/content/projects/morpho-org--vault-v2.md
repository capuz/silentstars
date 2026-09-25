---
repo: "morpho-org/vault-v2"
name: "vault-v2"
description: "Morpho's non-custodial vault protocol"
readmeQualityOk: true
url: "https://github.com/morpho-org/vault-v2"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [97]
stars: 104
forks: 76
openIssues: 8
closedIssues: 208
watchers: 8
contributors: 14
recentReleases: 0
createdAt: "2024-10-01T09:26:45Z"
lastCommitAt: "2026-09-25T09:01:44Z"
lastReleaseAt: "2025-12-04T09:49:24Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 52
maintainers: ["claude", "MathisGD", "bhargavbh"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2ffb2c408aa7f74a7c852619a24c58ba89344a49a74519d4ab95b9985a72f92/morpho-org/vault-v2"
---

# Vault V2

Vaults V2 enables anyone to create [non-custodial](#non-custodial-guarantees) vaults that allocate assets into different markets.
Depositors of Vault V2 earn from the underlying markets without having to actively manage their position.
The curation of deposited assets is handled by a set of different roles (owner, curator and allocators).
The [VaultV2Factory](https://github.com/morpho-org/vault-v2/blob/HEAD/src/VaultV2Factory.sol) deploys instances of Vaults V2.
All the contracts are immutable.

## Overview

### Adapters

Vaults allocate assets to underlying markets via separate contracts called adapters.
They hold positions on behalf of the vault.
Adapters are also used to know how much these investments are worth (interest and loss realization).

An [adapter registry](https://github.com/morpho-org/vault-v2/blob/main/src/VaultV2.sol#L89-L97) is used to constrain which adapters a vault can have and add.
This is notably useful when abdicated (see [timelocks](#timelocks)), to ensure that a vault will forever supply into adapters authorized by a given registry.

The following adapters are currently available:

- [Morpho Market V1 Adapter…
