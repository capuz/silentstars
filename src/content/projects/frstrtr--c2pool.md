---
repo: "frstrtr/c2pool"
name: "c2pool"
description: "C2pool: decentralized, DoS-resistant,  Hop-Proof PoW mining  pool."
url: "https://github.com/frstrtr/c2pool"
homepage: "http://voidbind.com"
language: "C++"
languages: ["C++"]
languagePcts: [76]
topics: ["p2pool", "c2pool", "mining", "pool", "sharechain", "weakchain", "dex", "hashrate", "nft", "blockchain"]
stars: 35
forks: 14
openIssues: 0
closedIssues: 3
watchers: 6
contributors: 4
recentReleases: 3
createdAt: "2020-02-01T12:30:02Z"
lastCommitAt: "2026-06-25T01:38:06Z"
lastReleaseAt: "2026-05-06T19:40:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 69
maintainers: ["frstrtr"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a572aa291b3cb2845fff4e1883fc6820f6175bf56a31a7956aee215891e6c7c/frstrtr/c2pool"
discussionCount: 3
---

# c2pool — P2Pool rebirth in C++

C++ reimplementation of [forrestv/p2pool](https://github.com/p2pool/p2pool) targeting the **V36 share format** with Litecoin + multi-chain merged mining (DOGE, PEP, BELLS, LKY, JKC, SHIC). DigiByte Scrypt support planned as an additional parent chain.

Bitcoin wiki: <https://en.bitcoin.it/wiki/P2Pool>
Original forum thread: <https://bitcointalk.org/index.php?topic=18313>

> **First merged-mined DOGE block:** [#6135703](https://blockchair.com/dogecoin/block/f84500c25a4cce2a08887f29763726bd5ecec7b66fed65a88b181fb0b0ab2383) (2026-03-23) — decentralized LTC+DOGE merged mining via P2Pool V36, cross-validated with c2pool on shared share chain
>
> **First daemonless DOGE block:** (2026-03-27) — DOGE block accepted on testnet4alpha via embedded SPV P2P, no dogecoind RPC needed
>
> **First V36 Twin Block:** LTC [#3085349](https://blockchair.com/litecoin/block/3085349) + DOGE [#6154761](https://blockchair.com/dogecoin/block/6154761) (2026-04-05) — simultaneous LTC+DOGE block found by v36-signalling nodes running p2pool v36 producing V35 shares with `desired_version=36`; detected and displayed by c2pool's embedded block scanner
>
> **Sharechain Transparency…
