---
repo: "uw-syfi/vibesys"
name: "vibesys"
description: "Can AI Agents Build Bespoke Systems?"
readmeQualityOk: true
url: "https://github.com/uw-syfi/vibesys"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["agent", "llm-serving", "systems"]
stars: 103
forks: 34
openIssues: 124
closedIssues: 307
watchers: 2
contributors: 15
recentReleases: 2
createdAt: "2026-05-07T11:13:13Z"
lastCommitAt: "2026-10-09T18:49:16Z"
lastReleaseAt: "2026-08-13T06:54:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 35
maintainers: ["vic-lsh", "AyanBinRafaih", "kamahori"]
openGraphImageUrl: "https://opengraph.githubassets.com/9072ff6fcccc0cf1baa364287ae3fe80e06b82be6084f8c5bec46c6a35523402/uw-syfi/vibesys"
---

# VibeSys: Generating Bespoke Systems with AI Agents

**An agentic framework that generates bespoke systems from application requirements, workload characteristics, and the underlying hardware.**

One of VibeSys's first initiatives is **VibeServe**, which asks whether AI agents
can generate a bespoke LLM serving system for each model, workload, and hardware
target. The figures, blog post, and paper below document that initiative.

## Updates

- **2026-05** — VibeServe blog post: [Let AI Agents Write Your Serving Stack with VibeServe](https://syfi.cs.washington.edu/blog/2026-05-12-introducing-vibeserve/).
- **2026-05** — Paper released on arXiv: [2605.06068](https://arxiv.org/abs/2605.06068).

## Introduction

VibeSys explores a broader approach to systems development: use application
requirements, workload characteristics, and hardware capabilities as the inputs
to an agentic search process that creates a purpose-built system. Each target
defines its own implementation contract, correctness checks, and performance
benchmark, allowing VibeSys to work across domains rather than assuming a single
runtime, programming language, or deployment shape.

The framework is organized as a…
