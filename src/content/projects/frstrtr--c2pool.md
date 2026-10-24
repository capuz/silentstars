---
repo: "frstrtr/c2pool"
name: "c2pool"
description: "C2pool: decentralized, DoS-resistant,  Hop-Proof PoW mining  pool."
readmeQualityOk: true
url: "https://github.com/frstrtr/c2pool"
homepage: "http://voidbind.com"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["p2pool", "c2pool", "mining", "pool", "sharechain", "weakchain", "hashrate", "blockchain", "bitcoin", "cryptocurrency"]
stars: 42
forks: 24
openIssues: 61
closedIssues: 103
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2020-02-01T12:30:02Z"
lastCommitAt: "2026-10-24T08:07:39Z"
lastReleaseAt: "2026-07-21T13:28:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 59
maintainers: ["frstrtr"]
openGraphImageUrl: "https://opengraph.githubassets.com/70f3d991d80bc04bc2d7b0e1990d69de6a49124167d49b0274d582753a0a34af/frstrtr/c2pool"
fundingLinks: ["CUSTOM:https://www.paypal.com/donate/?hosted_button_id=9DF676HUWAHKY", "CUSTOM:https://github.com/frstrtr/c2pool/blob/master/DONATE.md"]
discussionCount: 3
---

# c2pool — P2Pool rebirth in C++

C++ reimplementation of [forrestv/p2pool](https://github.com/p2pool/p2pool) targeting the **V36 share format**, with **per-coin binaries** for six parent chains and their merged-mining children: **Litecoin** (flagship — LTC + DOGE, PEP, BELLS, LKY, JKC, SHIC), **Bitcoin** (+ Namecoin), **DigiByte** (Scrypt), **Bitcoin Cash**, **Dash**, and **BIP-110** (the Bitcoin Knots BLAKE2b minority hard fork — embedded daemonless, experimental). See [Supported chains](#supported-chains) for the full matrix and status.

Bitcoin wiki: <https://en.bitcoin.it/wiki/P2Pool>

Original forum thread: <https://bitcointalk.org/index.php?topic=18313>

## Daemonless Dash

Security model: no RPC and no local credentials. Older P2Pool forks need RPC
credentials to a local Dash Core daemon. c2pool speaks the Dash P2P wire protocol
itself, so it needs no RPC credentials, no local wallet access and no
administrative access to a daemon.

c2pool-dash builds valid Dash mainnet blocks from embedded coin-state. The
deterministic masternode list, LLMQ quorums, ChainLocks and the DIP-4 coinbase
are reconstructed inside c2pool. No Dash Core node is required on the serve path.
Blocks…
