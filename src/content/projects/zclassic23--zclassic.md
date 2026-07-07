---
repo: "ZclassiC23/zclassic"
name: "zclassic"
description: "ZClassic full node in one ~15 MB pure-C23 binary — Equihash 200,9 PoW, Sapling shielded transactions, embedded Tor onion service, block explorer, wallet, and an MCP server for AI-native operation"
readmeQualityOk: true
url: "https://github.com/ZclassiC23/zclassic"
language: "C"
languages: ["C"]
languagePcts: [100]
topics: ["blockchain", "c23", "cryptocurrency", "equihash", "full-node", "mcp", "tor", "zclassic", "zk-snarks"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 379
recentReleases: 1
createdAt: "2026-06-09T19:20:49Z"
lastCommitAt: "2026-07-07T06:37:13Z"
lastReleaseAt: "2026-06-26T06:09:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["RhettCreighton"]
openGraphImageUrl: "https://opengraph.githubassets.com/86fd84254425b034a7b587c315117f84c485f684d73c5efbe122b3c28b549d31/ZclassiC23/zclassic"
discussionCount: 0
---

# ZClassic23

One self-contained ~15 MB pure-C23 binary: a full ZClassic node (Equihash 200,9
PoW, Sapling shielded transactions), an embedded Tor onion service, a block
explorer, a shielded wallet, and a built-in MCP server that lets an AI agent
operate the node through ~100 typed tools.

**One binary, one onion, one stack.**

## Status

**Pre-v1 — not yet production-ready.** Of the eight v1 acceptance criteria in
[`docs/MVP.md`](https://github.com/ZclassiC23/zclassic/blob/HEAD/docs/MVP.md), four pass their local operator proof (MRS 4/8);
none are yet end-to-end CI-verified across a live soak. Don't rely on it as your
only mainnet node yet.

It runs on ZClassic mainnet on the `zclassicd` consensus floor and **reaches the
network tip** via a **borrowed-but-consensus-bound stopgap**: it seeds from a
UTXO snapshot whose anchor hash is bound to the in-binary PoW header, rather than
folding that set from its own checkpoint. The **sovereign cold-start cure** —
fold real block bodies forward from the verified checkpoint, then delete the
borrowed-seed machinery — is in flight; its design is in…
