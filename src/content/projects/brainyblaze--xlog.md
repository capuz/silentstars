---
repo: "BrainyBlaze/xlog"
name: "xlog"
description: "XLOG is a GPU-native logic programming language for unified symbolic reasoning. GPU-accelerated Datalog engine with probabilistic inference, inductive logic programmimg, and neural-symbolic integration."
readmeQualityOk: true
url: "https://github.com/BrainyBlaze/xlog"
homepage: "https://xlog.md"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["cuda", "datalog", "gpu-accelerated", "logic-programming", "probabilistic-programming", "pytorch", "rust", "neural-symbolic-ai", "gpu-computing", "neurosymbolic-ai"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 34
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-13T13:15:15Z"
lastCommitAt: "2026-11-06T13:20:23Z"
lastReleaseAt: "2026-07-29T07:47:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 74
maintainers: ["levi770"]
openGraphImageUrl: "https://opengraph.githubassets.com/799d5e9a53e4b19f7b2812ae9ea1d6b7b85c4e1a962158cd96596904aea4ec8d/BrainyBlaze/xlog"
discussionCount: 1
---

# XLOG

**A GPU-native logic programming language for unified symbolic reasoning.**

**Documentation: [xlog.md](https://xlog.md)** · [Whitepaper (PDF)](https://github.com/BrainyBlaze/xlog/blob/HEAD/paper/main.pdf) · [Language reference](https://xlog.md/reference/language) · [Examples](https://github.com/BrainyBlaze/xlog/blob/HEAD/examples/)

When symbolic reasoning runs on the CPU and neural computation runs on the GPU,
training can pay for host–device transfers between the two. XLOG addresses that
boundary with a shared compiler and provider-owned CUDA runtime
services supporting four reasoning paradigms — deterministic Datalog, exact and approximate
probabilistic inference, epistemic reasoning, and differentiable neural-symbolic training —
with SAT/MaxSAT verification available as a shared solver service. Transfer-free claims are
route-specific: the certified resident recursive core and resident Monte Carlo sampled core
record zero tracked host–device transfers within their measured regions. The recursive
graph then reads one pinned terminal receipt; Monte Carlo reads a three-word postflight
record, with query results read separately when requested.

Implemented in Rust with…
