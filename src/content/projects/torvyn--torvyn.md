---
repo: "torvyn/torvyn"
name: "torvyn"
description: "Ownership-aware reactive streaming runtime on the WebAssembly Component Model"
readmeQualityOk: true
url: "https://github.com/torvyn/torvyn"
homepage: "https://torvyn.github.io/torvyn/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["contract-first", "observable", "polyglot", "reactive-streams", "rust", "rust-library", "streaming-pipeline", "ownership-aware", "streaming-runtime"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-13T20:23:00Z"
lastCommitAt: "2026-07-16T05:58:48Z"
lastReleaseAt: "2026-04-04T23:56:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 25
maintainers: ["ashutoshm1771"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a9699a49903894590e0ea96b1e23ee16e36745261ec355471a88623ba97925c/torvyn/torvyn"
---

# Torvyn

**The contract-first runtime for safe, observable, low-copy reactive streaming.**

[Documentation](https://torvyn.github.io/torvyn/) · [API Reference](https://docs.rs/torvyn) · [Getting Started](https://github.com/torvyn/torvyn/blob/HEAD/documents/getting-started.md) · [Architecture](https://github.com/torvyn/torvyn/blob/HEAD/documents/ARCHITECTURE.md) · [FAQ](https://github.com/torvyn/torvyn/blob/HEAD/documents/FAQ.md) · [Contributing](https://github.com/torvyn/torvyn/blob/HEAD/CONTRIBUTING.md)

</div>

---

## What is Torvyn?

Torvyn is an ownership-aware reactive component runtime for building safe, low-latency, polyglot streaming pipelines. It composes sandboxed WebAssembly components into pipelines on a single node, using typed WIT contracts with explicit ownership semantics. The runtime manages all buffer memory, enforces backpressure, tracks every data copy, and exports fine-grained observability. Components can be written in any language that compiles to WebAssembly Components.

## Why Torvyn?

Modern infrastructure teams face a persistent trade-off. Traditional microservices provide isolation and deployment flexibility, but every service boundary introduces…
