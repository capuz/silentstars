---
repo: "ZclassiC23/zclassic"
name: "zclassic"
description: "ZClassic full node in one ~pure-C23 binary — Equihash 200,9 PoW, Sapling shielded transactions, embedded Tor onion service, block explorer, wallet, and a server for AI-native operation"
readmeQualityOk: true
url: "https://github.com/ZclassiC23/zclassic"
language: "C"
languages: ["C"]
languagePcts: [100]
topics: ["blockchain", "c23", "cryptocurrency", "equihash", "full-node", "tor", "zclassic", "zk-snarks"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 379
recentReleases: 1
createdAt: "2026-06-09T19:20:49Z"
lastCommitAt: "2026-07-24T06:01:58Z"
lastReleaseAt: "2026-06-26T06:09:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["RhettCreighton"]
openGraphImageUrl: "https://opengraph.githubassets.com/b42b22dc72e741756c5145a61bf2e416ddecd2d1b2e59c0254c81544ea652e17/ZclassiC23/zclassic"
discussionCount: 0
---

# ZClassic23

One self-contained pure-C23 binary: a full ZClassic node (Equihash 200,9
PoW, Sapling shielded transactions), an embedded Tor onion service, a block
explorer, a shielded wallet, a P2P file marketplace, a ZNAM on-chain name
registry, ZCL messaging, cross-chain atomic-swap scaffolding, and a native
command registry that lets an AI agent operate the node through ~130 typed
commands (`zclassic23 <command>`) — a **personal sovereignty stack**: a
secure personal-computing OS whose only trust foundation is the ZClassic
proof-of-work network and the compiled binary itself, with no DNS, CAs, or
registries anywhere in the path.

**One binary, one onion, one stack — your sovereign personal computing surface.**

## Status

**Pre-v1 — not yet production-ready.** The v1 bar is the eight acceptance
criteria in [`docs/MVP.md`](https://github.com/ZclassiC23/zclassic/blob/HEAD/docs/MVP.md) (v1 = MRS 8/8). Don't rely on it as
your only mainnet node yet.

It runs on ZClassic mainnet on the `zclassicd` consensus floor. The node's
UTXO/anchor/nullifier state is either self-derived by folding real block
bodies forward from the in-binary SHA3/PoW checkpoint…
