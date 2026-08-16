---
repo: "thewafflehaus/butter"
name: "butter"
description: "Melt away latency with ultra-smooth local inference"
readmeQualityOk: true
url: "https://github.com/thewafflehaus/butter"
homepage: "https://ffai.dev"
language: "Swift"
languages: ["Swift"]
languagePcts: [81]
topics: ["ai", "llm", "metal", "swift", "cuda", "inference", "rust"]
stars: 20
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-15T08:24:49Z"
lastCommitAt: "2026-08-16T04:09:30Z"
lastReleaseAt: "2026-05-17T08:12:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 44
maintainers: ["TheTom"]
openGraphImageUrl: "https://opengraph.githubassets.com/cae620a174690740297571337a7df1eedab7319584971f82b5c1f84e98977368/thewafflehaus/butter"
---

# Butter

**Melt away latency with ultra-smooth local inference.**

A minimal, dependency-light LLM inference library for Apple Silicon, built on pre-compiled Metal kernels generated from the [iron](https://github.com/thewafflehaus/iron) DSL. No Python. No MLX. No C compilation. No JIT. No four-repo dependency chain.

**Just really smooth, fast AI on your Mac!** 🚀

## Status

Early bootstrap — the dense-text, hybrid, vision-language, and audio model waves have all landed; end-to-end inference runs real HuggingFace checkpoints across every shipped family.

- [`planning/plan.md`](https://github.com/thewafflehaus/butter/blob/HEAD/planning/plan.md) — phased build-out, what we're shipping when
- [`planning/architecture.md`](https://github.com/thewafflehaus/butter/blob/HEAD/planning/architecture.md) — visual reference for kernel generation, model loading, and the inference dispatch loop
- [`documentation/`](https://github.com/thewafflehaus/butter/blob/HEAD/documentation/README.md) — user-facing docs

## Features

| Functionality | Description | Status |
|---|---|---|
| **Apple Silicon native** | Built ground-up for M-series GPUs. No fallbacks dragging it down. | ✅ |
| **Pre-compiled…
