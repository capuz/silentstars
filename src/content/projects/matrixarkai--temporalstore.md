---
repo: "matrixarkai/TemporalStore"
name: "TemporalStore"
description: "Open-source Rust TemporalStore for LLM context management, temporal features, and risk control"
readmeQualityOk: true
url: "https://github.com/matrixarkai/TemporalStore"
homepage: "https://github.com/matrixarkai/TemporalStore"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["feature-store", "matrixark", "open-source", "rust", "storage", "temporalstore", "ai-infrastructure", "context-engineering", "context-runtime", "llm"]
stars: 212
forks: 44
openIssues: 43
closedIssues: 14
watchers: 29
contributors: 9
recentReleases: 1
createdAt: "2026-06-11T01:24:17Z"
lastCommitAt: "2026-11-09T11:59:15Z"
lastReleaseAt: "2026-08-26T18:58:51Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 85
undervaluedScore: 26
maintainers: ["matrixarkai", "superhaiou"]
openGraphImageUrl: "https://opengraph.githubassets.com/b69976b142f20d0746b888c6fb442056a9407e9245c7b447f6dcb213398399bd/matrixarkai/TemporalStore"
---

# TemporalStore

**A distributed, time-aware serving engine, written in Rust.**
One durable store for the read paths that sit in front of a model or a request: ranked context,
long sequences, aggregated features, frequency caps, and control state.
Apache-2.0 · self-hostable · no vector database · [temporalstore.ai](https://temporalstore.ai)

📊 **Benchmarks & docs — [temporalstore.ai/benchmarks.html](https://temporalstore.ai/benchmarks.html)**

Keys are time-ordered, writes are append-structured, and every workload below is answered from one
temporal index rather than from several stores that each keep their own idea of time. It runs
locally with one Docker command and scales out to a replicated, shared-storage cluster.

**Every figure on this block is measured, and carries its denominator and its conditions** — store
size, routing range, payload size, node count. Each one names what reproduces it, and all of them
were re-measured on `main` for this document except the one that says it was not. Where a limit is
real it is stated plainly, and [What this store is bad at](#what-this-store-is-bad-at) is a section
rather than a footnote.

---

## Is this the store for your problem?

|…
