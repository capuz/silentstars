---
repo: "uw-syfi/vibesys"
name: "vibesys"
description: "Can AI Agents Build Bespoke Systems?"
readmeQualityOk: true
url: "https://github.com/uw-syfi/vibesys"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["agent", "llm-serving", "systems"]
stars: 114
forks: 35
openIssues: 149
closedIssues: 576
watchers: 2
contributors: 15
recentReleases: 2
createdAt: "2026-05-07T11:13:13Z"
lastCommitAt: "2026-10-14T08:53:34Z"
lastReleaseAt: "2026-08-13T06:54:18Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 35
maintainers: ["vic-lsh", "AyanBinRafaih", "Ryclic"]
openGraphImageUrl: "https://opengraph.githubassets.com/77b4f28b248c6cd24502b4bf6e72657c06a8615f7e7d7a2a57160db26ba5a321/uw-syfi/vibesys"
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
