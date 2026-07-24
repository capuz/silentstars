---
repo: "barmag/fanous-llm-lens"
name: "fanous-llm-lens"
description: "A lantern (فانوس) for looking inside small language models — mechanistic interpretability tooling with a focus on Egyptian Arabic (Masri)."
readmeQualityOk: true
url: "https://github.com/barmag/fanous-llm-lens"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-30T11:27:39Z"
lastCommitAt: "2026-07-24T06:08:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["barmag"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9e083a972c6cd9985d92b56d7670789fae3d2df7f18176a7d4b5b306b41bedb/barmag/fanous-llm-lens"
---

# fanous-llm-lens

**A lantern (فانوس) for looking inside small language models — mechanistic interpretability tooling with a focus on Egyptian Arabic (Masri).**

> *Status: pre-alpha. Phase 0 (foundation) closed 2026-04-30; Phase 1 (probing on Arabic) in flight — first artefacts in [`notebooks/`](https://github.com/barmag/fanous-llm-lens/blob/HEAD/notebooks/).*

## Why this exists

Mechanistic interpretability — the project of reverse-engineering what circuits, features, and computations live inside trained neural networks — has produced rich tooling for English-language models. Coverage of Arabic is thin. Coverage of **dialectal** Arabic, including Egyptian Arabic (*Masri*, مصري), is thinner still.

`fanous-llm-lens` is a small, deliberate attempt to close that gap, on a substrate that fits the work:

- **Small models** (Pythia-70m through ~1.5B params, GPT-2 family, TinyStories-class) — the regime where mech interp is tractable
- **A consumer iGPU** (AMD Strix Halo, ROCm) — proves the work doesn't require a datacentre
- **Egyptian Arabic eval inputs** — distinct from Modern Standard Arabic (Fusha, الفصحى); the dialect distinction is the experimental moat

## Project layout

```…
