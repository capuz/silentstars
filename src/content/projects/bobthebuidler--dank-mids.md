---
repo: "BobTheBuidler/dank_mids"
name: "dank_mids"
description: "Async web3py middleware that collects eth calls and batches them into multicalls, then batches those multicalls into jsonrpc batches along with all your other calls in the background."
readmeQualityOk: true
url: "https://github.com/BobTheBuidler/dank_mids"
homepage: "https://bobthebuidler.github.io/dank_mids/"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["evm", "multicall", "python", "web3", "web3py", "ethereum", "jsonrpc", "asyncio"]
stars: 89
forks: 11
openIssues: 5
closedIssues: 2
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2022-05-16T22:01:16Z"
lastCommitAt: "2026-07-15T05:54:44Z"
lastReleaseAt: "2022-06-23T03:55:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 44
maintainers: ["BobTheBuidler", "renovate[bot]", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f279ca13921bc24104af91b2b7198e107dd2775dd9dd6634c36605beccb340b/BobTheBuidler/dank_mids"
---

# Dank Mids

Dank Mids is a EVM RPC batching library that helps reduce the number of HTTP requests to a node, saving time and resources. It automatically collects eth_call calls into [multicalls](https://github.com/makerdao/multicall#multicall-) and bundles all RPC calls together in [jsonrpc](https://www.jsonrpc.org/specification#batch) [batch](https://geth.ethereum.org/docs/interacting-with-geth/rpc/batch) calls. 

##### tl;dr: its fast as fuck.

The goal of this tool is to reduce the workload on RPC nodes and allow users to make calls to their preferred node more efficiently. This optimization is especially useful for developers writing scripts that perform large-scale blockchain analysis, as it can save development time and resources.

### Why is Dank so fast?

There are a number of optimizations that went into making Dank the fastest way to pull rpc data to Python.
1. Implemented (mostly) in C.
2. Bypasses the default formatters in [web3.py](https://github.com/ethereum/web3.py)
3. JSON encoding and decoding is handled by [msgspec](https://jcristharif.com/msgspec/). All responses are decoded to specialized [msgspec.Struct](https://jcristharif.com/msgspec/structs.html) objects…
