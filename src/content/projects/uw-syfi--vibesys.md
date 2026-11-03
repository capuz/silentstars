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
stars: 124
forks: 42
openIssues: 169
closedIssues: 844
watchers: 1
contributors: 16
recentReleases: 3
createdAt: "2026-05-07T11:13:13Z"
lastCommitAt: "2026-11-03T12:40:56Z"
lastReleaseAt: "2026-11-02T23:19:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 37
maintainers: ["vic-lsh", "Ryclic"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad6217598741031416c9dbc8a61f1e327d2bd275902efad279ea3447c4d8d2c2/uw-syfi/vibesys"
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
