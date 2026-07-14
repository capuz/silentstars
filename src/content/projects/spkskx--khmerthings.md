---
repo: "spkskx/khmerthings"
name: "khmerthings"
description: "Deterministic Khmer language tools CLI and for Python"
readmeQualityOk: true
url: "https://github.com/spkskx/khmerthings"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-03T14:33:45Z"
lastCommitAt: "2026-07-14T05:53:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 33
maintainers: ["spkskx"]
openGraphImageUrl: "https://opengraph.githubassets.com/c61cd557375b13bf8383c92795884e8e4e4959a4e6f65e1e97790134a9f9e533/spkskx/khmerthings"
---

# khmerthings

Deterministic Khmer language tools for Python — built as **community
building blocks**: small, correct, dependency-free primitives you can
compose into bigger systems.

No machine-learning models, no third-party NLP dependencies, no network
calls. Every result is reproducible and explainable. Khmer script writes no
spaces between words, so even "simple" word operations need real language
handling — khmerthings implements that from first
principles.

**[Try it in your browser →](https://spkskx.github.io/khmerthings-demo/)**

## Tools

Each tool is available both as a Python API and a CLI subcommand, and has
its own detailed document:

| Tool | CLI | Python | Docs |
|---|---|---|---|
| **Word breaker** — split Khmer text into words | `khmerthings segment` | `break_words`, `mark_boundaries` | [docs/word-breaker.md](https://github.com/spkskx/khmerthings/blob/HEAD/docs/word-breaker.md) |
| **Word counter** — count words in Khmer/mixed text | `khmerthings count` | `count_words`, `analyze` | [docs/word-counter.md](https://github.com/spkskx/khmerthings/blob/HEAD/docs/word-counter.md) |
| **Normalizer** — spellfix + re-space into clean, ready-to-use text | `khmerthings…
