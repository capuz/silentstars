---
repo: "DeWebProtocol/malt"
name: "malt"
description: "Merkle-DAG alternative for authenticating mutable, graph-structured application data with direct root+path reads, fixed-size ProofList evidence, HTTP(S) proof headers, and low rewrite amplification over content-addressed storage."
readmeQualityOk: true
url: "https://github.com/DeWebProtocol/malt"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["authenticated-data-structure", "merkle-dag", "data-authentication", "high-performance-data-authentication", "ipfs", "vector-commitments", "verifiable-storage"]
stars: 21
forks: 0
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-27T03:15:46Z"
lastCommitAt: "2026-07-08T05:41:46Z"
lastReleaseAt: "2026-06-02T12:45:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["BernardLowe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0281ebd0f1074f620acd154447d64d15e5e0e74ec2a50b8277dfe7791bca64e/DeWebProtocol/malt"
discussionCount: 1
---

# MALT

**MALT is a Merkle-DAG alternative for authenticating mutable application data.**

It gives applications direct `root + path` reads, dedicated `ProofList`
evidence, and low rewrite amplification while keeping payload bytes in ordinary
content-addressed storage.

This repository is the MALT core specification implementation. It owns the
verifier-facing semantics, ProofList behavior, root/query/result contracts,
wire formats, reference runtime, and core benchmark/evaluation framework. The
managed product gateway lives outside this repository.

[Documentation](https://github.com/DeWebProtocol/malt/blob/HEAD/docs/README.md) · [Architecture](https://github.com/DeWebProtocol/malt/blob/HEAD/ARCHITECTURE.md) ·
[Concepts](https://github.com/DeWebProtocol/malt/blob/HEAD/docs/concepts/README.md) ·
[Threat Model](https://github.com/DeWebProtocol/malt/blob/HEAD/docs/policy/threat-model.md) ·
[Compatibility](https://github.com/DeWebProtocol/malt/blob/HEAD/docs/policy/compatibility.md) · [Evaluation](https://github.com/DeWebProtocol/malt/blob/HEAD/docs/evaluation.md) ·
[MIPs](https://github.com/DeWebProtocol/malt/blob/HEAD/docs/mips/README.md) ·…
