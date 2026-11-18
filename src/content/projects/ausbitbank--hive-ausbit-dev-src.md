---
repo: "ausbitbank/hive.ausbit.dev-src"
name: "hive.ausbit.dev-src"
description: "A blockchain explorer, post viewer and general toolkit for the Hive blockchain"
readmeQualityOk: true
url: "https://github.com/ausbitbank/hive.ausbit.dev-src"
homepage: "https://hive.ausbit.dev"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [65, 33]
topics: ["hive", "blockchain", "explorer", "ausbit", "dapp", "decentralized"]
stars: 13
forks: 5
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-03-30T09:51:59Z"
lastCommitAt: "2026-11-18T12:02:14Z"
lastReleaseAt: "2021-02-05T18:04:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 78
maintainers: ["ausbitbank"]
openGraphImageUrl: "https://opengraph.githubassets.com/1270aead86b048c4fce1967bc208345ed0c32e2a71431935a099b90e23ec3a1e/ausbitbank/hive.ausbit.dev-src"
---

# hive.ausbit.dev

An open-source block explorer, wallet and toolkit for the [Hive](https://hive.io) blockchain.

hive.ausbit.dev reads directly from public Hive APIs and lets you explore blocks,
transactions, accounts, posts, governance, witnesses, markets and Hive-Engine
tokens. Signing is handled by Hive Keychain or the built-in encrypted SmartLock.

## Screenshots

Home dashboard:

Markets and HBD tools:

Wallet:

## Feature tour

| Route | What it does |
| --- | --- |
| `/` | Live block card, prices, top witnesses, trending posts and recent author posts |
| `/blocks`, `/b/:blockNum`, `/tx/:txId` | Latest blocks, block detail with grouped operations, transaction detail and raw JSON |
| `/@:username` | Account overview, activity filters, authorities, authority risk review, delegations, rewards and profile links |
| `/@:username/wallet` | Portfolio, liquid/saved/staked balances, pending actions, history, Hive-Engine tokens and transfers |
| `/@:username/delegations` | Incoming/outgoing Hive Power delegations, effective HP and recent delegation changes |
