---
repo: "frstrtr/c2pool"
name: "c2pool"
description: "C2pool: decentralized, DoS-resistant,  Hop-Proof PoW mining  pool."
readmeQualityOk: true
url: "https://github.com/frstrtr/c2pool"
homepage: "http://voidbind.com"
language: "C++"
languages: ["C++"]
languagePcts: [88]
topics: ["p2pool", "c2pool", "mining", "pool", "sharechain", "weakchain", "dex", "hashrate", "nft", "blockchain"]
stars: 37
forks: 15
openIssues: 42
closedIssues: 63
watchers: 6
contributors: 4
recentReleases: 6
createdAt: "2020-02-01T12:30:02Z"
lastCommitAt: "2026-08-16T04:09:24Z"
lastReleaseAt: "2026-07-21T13:28:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 64
maintainers: ["frstrtr"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b938d2e6a42a1b01df6b614c2c42c7e2662959eb0d44f01f77863d8b28bed2b/frstrtr/c2pool"
fundingLinks: ["CUSTOM:https://www.paypal.com/donate/?hosted_button_id=9DF676HUWAHKY", "CUSTOM:https://github.com/frstrtr/c2pool/blob/master/DONATE.md"]
discussionCount: 3
---

# c2pool — P2Pool rebirth in C++

C++ reimplementation of [forrestv/p2pool](https://github.com/p2pool/p2pool) targeting the **V36 share format**, with **per-coin binaries** for five parent chains and their merged-mining children: **Litecoin** (flagship — LTC + DOGE, PEP, BELLS, LKY, JKC, SHIC), **Bitcoin** (+ Namecoin), **DigiByte** (Scrypt), **Bitcoin Cash**, and **Dash**. See [Supported chains](#supported-chains) for the full matrix and status.

Bitcoin wiki: <https://en.bitcoin.it/wiki/P2Pool>

Original forum thread: <https://bitcointalk.org/index.php?topic=18313>

## Supported chains

c2pool builds one binary per **parent chain** (`c2pool-<coin>`). Several parents also merge-mine **AuxPoW child chains** in the same coinbase.

| Parent chain | Algorithm | Merged-mining children | Status |
|---|---|---|---|
| **Litecoin** (LTC) | Scrypt | DOGE, PEP, BELLS, LKY, JKC, SHIC — external daemons | **Production** (V36; live LTC+DOGE blocks) |
| **Bitcoin** (BTC) | SHA256d | Namecoin (NMC) | Supported; NMC embedded merged mining in development |
| **DigiByte** (DGB) | Scrypt¹ | DOGE (embedded, `-DAUX_DOGE`) | In development |
| **Bitcoin Cash** (BCH) | SHA256d | — | In development |
|…
