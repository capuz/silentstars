---
repo: "SouthpawIN/turbofit"
name: "turbofit"
description: "Adaptive local inference for Hermes — TurboFit Check, evidence-built TurboFit List, repaired discovery/benchmark campaigns, Qwen 3.8 DFlash2, Bonsai DSpark, FreeToken, and Sirvir."
readmeQualityOk: true
url: "https://github.com/SouthpawIN/turbofit"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["adaptive-runtime", "benchmarking", "gguf", "gpu", "hermes-agent", "llama-cpp", "local-llm"]
stars: 114
forks: 26
openIssues: 3
closedIssues: 6
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2026-06-22T02:26:22Z"
lastCommitAt: "2026-10-24T00:15:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 30
maintainers: ["SouthpawIN", "Sahil-SS9", "mojomast"]
openGraphImageUrl: "https://opengraph.githubassets.com/adb870208a2450fb6a30b1f81d25692318d19290266b5d3822d53f1675ff8746/SouthpawIN/turbofit"
---

# TurboFit

**One model provider. Every machine. The best local configuration the hardware can safely sustain.**

TurboFit is a first-class [Hermes Agent](https://github.com/NousResearch/hermes-agent) provider and adaptive local-inference runtime. It inventories your physical compute and total usable memory, then **populates your model list with every model that fits your hardware tier** — the single best sustainable fit on top (your `auto` model), the rest below as explicit choices. It recommends an evidence-backed **Fit Ladder**, launches a native backend, and exposes one OpenAI-compatible endpoint. Pick the `auto` model and it runs the largest model your machine can sustain — with a measured, reproducible fallback if a rung can't hold.

> **TurboFit is the whole project. TurboSouth is the dedicated service-tech bot** that helps you install it, land it on a machine that's never been tested, configure it, answer questions, and send tested fixes back upstream to TurboFit.

---

## Install

**One package.** Installing TurboFit brings **TurboSouth** along with it (and TurboSouth ships the **sovthpaw pet** as its default) 

The fastest path — **paste this into your Hermes** and it…
