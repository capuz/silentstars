---
repo: "zingolabs/zingolib"
name: "zingolib"
description: "An API and test-app that exposes zcash functionality for app consumption"
readmeQualityOk: true
url: "https://github.com/zingolabs/zingolib"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["app", "orchard", "wallet", "wasm", "zcash"]
stars: 32
forks: 52
openIssues: 227
closedIssues: 374
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2022-06-23T16:33:00Z"
lastCommitAt: "2026-10-21T21:14:53Z"
lastReleaseAt: "2024-11-19T21:05:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 65
maintainers: ["zancas", "Oscar-Pepper", "juanky201271"]
openGraphImageUrl: "https://opengraph.githubassets.com/3af89cf9323b1f29781a5df11e48c8da94ca08484efc4de36fb7c858b3a10943/zingolabs/zingolib"
---

## Zingolib
This repo provides both a library for zingo-mobile, as well as an included cli application to interact with the Zcash blockchain through a chain indexer.

# Security Vulnerability Disclosure

If you believe you have discovered a security issue, please contact us at:

zingodisclosure@proton.me

## Zingo CLI
`zingo-cli` is a command line indexer client. Its own README,
[zingo-cli/README.md](https://github.com/zingolabs/zingolib/blob/HEAD/zingo-cli/README.md), holds everything specific to it:
the one procedure that builds it, which bundles the `nym-proxy` binary beside
it, and how to launch it, take it online, choose a network (regtest included),
create or restore a wallet, and set its session options. Releases are currently
only provisional, we will update the README as releases come out.

## Privacy
* While all the keys and transaction detection happens on the client, the server can learn what blocks contain your shielded transactions.
* The server also learns other metadata about you like your ip address etc...
* Also remember that t-addresses are publicly visible on the blockchain.
* Price information is retrieved from Gemini exchange.

### Note Management
Zingo-CLI…
