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
openIssues: 42
closedIssues: 14
watchers: 29
contributors: 8
recentReleases: 1
createdAt: "2026-06-11T01:24:17Z"
lastCommitAt: "2026-10-25T02:47:36Z"
lastReleaseAt: "2026-08-26T18:58:51Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 85
undervaluedScore: 26
maintainers: ["matrixarkai"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc7498e4ee3bb3531bf3af752ff71f774d0f6855bd5dde9d156d233004843727/matrixarkai/TemporalStore"
---

# TemporalStore

**A distributed, time-aware serving engine, written in Rust.**
One durable store for the read paths that sit in front of a model or a request: ranked context,
long sequences, aggregated features, frequency caps, and control state.
Apache-2.0 · self-hostable · no vector database · [temporalstore.ai](https://temporalstore.ai)

📊 **Benchmarks & docs — [temporalstore.ai/benchmarks.html](https://temporalstore.ai/benchmarks.html)**

TemporalStore is general-purpose serving infrastructure. Every workload below is a first-class
tenant of the same temporal index — not a feature bolted onto a memory product. Keys are
time-ordered, writes are append-structured, and reads are answered from one engine rather than from
a vector database beside a feature store beside a counter tier. It runs locally with one Docker
command and scales out to a replicated, shared-storage cluster.

---

## What it serves

| | |
|---|---|
| 🧠 **Context management** | Ingest → extract → retrieve a ranked, token-budgeted **ContextPack**. Cross-session, cross-device, cross-agent. **No vector database.** |
| 📜 **Long sequences** | Append-mostly series per key, read by instant or window. Sorted owned…
