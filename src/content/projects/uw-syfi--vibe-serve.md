---
repo: "uw-syfi/vibe-serve"
name: "vibe-serve"
description: "Can AI Agents Build Bespoke LLM Serving Systems?"
readmeQualityOk: true
url: "https://github.com/uw-syfi/vibe-serve"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["agent", "llm-serving"]
stars: 81
forks: 16
openIssues: 39
closedIssues: 14
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2026-05-07T11:13:13Z"
lastCommitAt: "2026-07-04T22:53:28Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 27
maintainers: ["kamahori", "vic-lsh", "zatchbell1311-wq"]
openGraphImageUrl: "https://opengraph.githubassets.com/32229d54b52765819c904ad966b4d7bae1d3a221eb69bf245eb891a5b08cdd31/uw-syfi/vibe-serve"
---

# VibeServe: Can AI Agents Build Bespoke LLM Serving Systems?

**An agentic loop that synthesizes bespoke LLM serving systems — one per (model, hardware, workload) target — instead of forcing every deployment through a single general-purpose runtime.**

</p>

## Updates

- **2026-05** — Blog post: [Let AI Agents Write Your Serving Stack with VibeServe](https://syfi.cs.washington.edu/blog/2026-05-12-introducing-vibeserve/).
- **2026-05** — Paper released on arXiv: [2605.06068](https://arxiv.org/abs/2605.06068).

## Introduction

VibeServe explores a new approach to LLM serving: instead of relying on one general-purpose runtime to support every model, workload, and hardware target, we use AI agents to generate bespoke serving systems for each deployment scenario. The project asks whether long-horizon coding agents can synthesize complete LLM serving stacks end-to-end, including scheduling, caching, runtime logic, correctness checks, and performance optimizations tailored to a specific target.

The system is organized as a multi-agent optimization loop. An outer loop plans the search over system designs using persistent state such as issues, memory, and git history, while an inner…
