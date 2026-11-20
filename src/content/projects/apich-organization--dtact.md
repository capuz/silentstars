---
repo: "Apich-Organization/dtact"
name: "dtact"
description: "Dtact: The Universal Topology-Affinity Async Runtime"
readmeQualityOk: true
url: "https://github.com/Apich-Organization/dtact"
homepage: "http://dtact.apich.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
topics: ["async", "asynchronous", "cffi", "concurrency", "crate", "crates", "rust"]
stars: 16
forks: 4
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-04-30T10:19:40Z"
lastCommitAt: "2026-11-19T11:57:46Z"
lastReleaseAt: "2026-05-17T11:57:37Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 51
maintainers: ["panayang", "dependabot[bot]", "cn-starlabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/91ee76a2586f2fb20f12b3e668f6431918f14a45397595a0a2f2508aa59f4133/Apich-Organization/dtact"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/dtact"]
discussionCount: 18
---

# Dtact

Dtact is a non-preemptive, stackful coroutine runtime designed for hardware-level control and heterogeneous orchestration. It provides a unique architecture based on a lock-free context arena, peer-to-peer (P2P) mesh scheduling, and architecture-specific assembly context switchers.

## Design Philosophy

Dtact explores an alternative approach to asynchronous execution by leveraging stackful coroutines (fibers) rather than stackless state machines. This design choice brings several interesting architectural patterns:
