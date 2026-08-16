---
repo: "SouthpawIN/turbofit"
name: "turbofit"
description: "Adaptive local inference for Hermes Agent — Qwen 3.8 27B, DeepSeek V4 Flash, multimodal models, native runtimes, and evidence-gated auto-fit from 8–300+ GB."
readmeQualityOk: true
url: "https://github.com/SouthpawIN/turbofit"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [78, 21]
topics: ["adaptive-runtime", "benchmarking", "gguf", "gpu", "hermes-agent", "llama-cpp", "local-llm"]
stars: 63
forks: 9
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-06-22T02:26:22Z"
lastCommitAt: "2026-08-16T04:07:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 26
maintainers: ["SouthpawIN", "awknode", "KeyArgo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0897ebecb0802e295c71efe02326dc40b706cf6c96067e5a07c6c16ce3f29d0e/SouthpawIN/turbofit"
---

# Turbofit

**One model provider. Every machine. The best local configuration the hardware can safely sustain.**

Turbofit is a first-class [Hermes Agent](https://github.com/NousResearch/hermes-agent) provider and adaptive local-inference runtime. It inventories physical compute and total usable memory, recommends evidence-backed model configurations, launches native backends, and moves between quality, context, and speed rungs without changing the client-facing model name.

The provider is always:

```text
provider: custom:turbofit
model: auto
```

Turbofit can be the primary provider, one entry in an ordered fallback chain, or both.

> **Evidence policy:** catalog entries are candidates until they pass the physical benchmark campaign. A candidate is never presented as a winner merely because it compiles, downloads, or fits an estimated memory budget.

## Turbofit 2.2 — new model release

Turbofit 2.2 replaces every active GRM 2.6 variant with the released **Qwen 3.8 27B** family and adds the newly requested DeepSeek and multimodal model paths. GRM artifacts and routes are removed from active manifests; immutable historical evidence remains attached to the retired IDs and cannot…
