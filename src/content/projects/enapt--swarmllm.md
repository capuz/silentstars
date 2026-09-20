---
repo: "enapt/SwarmLLM"
name: "SwarmLLM"
description: "Decentralized peer-to-peer LLM inference network. Single Rust binary, BitTorrent-inspired incentives, OpenAI-compatible API."
readmeQualityOk: true
url: "https://github.com/enapt/SwarmLLM"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["anthropic-api", "candle", "decentralized", "distributed-inference", "gguf", "huggingface", "inference", "kv-cache", "libp2p", "llm"]
stars: 43
forks: 8
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-02-24T04:55:25Z"
lastCommitAt: "2026-09-20T08:44:11Z"
lastReleaseAt: "2026-07-22T13:59:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 42
maintainers: ["enapt"]
openGraphImageUrl: "https://opengraph.githubassets.com/eafc20aa47ae6d8628cedbe99ac85bce77f9041c6be399ccdab873a8be5d2177/enapt/SwarmLLM"
discussionCount: 1
---

# SwarmLLM

A peer-to-peer LLM inference network in a single Rust binary. Pool hardware with other nodes to run 70B+ parameter models on machines that couldn't host them alone — no API tokens, no cloud fees, and encrypted traffic between every peer.

**Join the swarm. Run AI together — for free.**

> **Status — alpha**, actively developed. Distributed inference is stable across multi-node deployments. 2811 lib tests + 79 integration tests run on every PR; continuous security sweeps. [Report issues](https://github.com/enapt/SwarmLLM/issues).
>
> **Recent work (September 2026) — a model that does not quite fit your graphics card no longer loses the card.** Placement used to be all or nothing: a model needing a little more graphics memory than was free ran *entirely* on the processor while the card sat idle beside it. Since v0.3.145 the node splits it — the first layers on the card, the rest on the processor, the count chosen automatically — measured on an RTX 3070 at **1.8× the processor-only speed** for a 7B that no longer fits, against 7–8× when it does (see [Benchmarks](#benchmarks)). The same month: **a model no single node can hold is served** by chaining peers (a 14B across…
