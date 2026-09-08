---
repo: "ByteDance-Seed/EdgeBench"
name: "EdgeBench"
description: "EdgeBench: Unveiling scaling laws of learning from real-world environments"
readmeQualityOk: true
url: "https://github.com/ByteDance-Seed/EdgeBench"
homepage: "https://edge-bench.org/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [77, 23]
stars: 440
forks: 18
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T14:19:39Z"
lastCommitAt: "2026-09-08T08:16:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 21
maintainers: ["Odysseusqs", "Blizzard-cyber"]
openGraphImageUrl: "https://opengraph.githubassets.com/32c230092ebbea15ccf4e55c61baea2f783104031406667e7269e26248812257/ByteDance-Seed/EdgeBench"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.png">
  </picture>
</p>

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/title-dark.svg">
  </picture>
</p>

<br>

</p>

---

## Overview

**EdgeBench** is a benchmark of **134 real-world tasks** for evaluating how autonomous AI agents *learn from real-world environments*. Instead of measuring one-shot performance, EdgeBench places agents in executable task environments with realistic, multi-level feedback and lets them iterate for **12+ hours** per task — tracking the full trajectory of improvement, not just the final score. We publicly release **51 tasks** along with the full evaluation framework.

Analyzing ~38,000 hours of agent interaction on all 134 tasks, we find that **performance follows a log-sigmoid scaling law as a function of interaction time** ($R^2 = 0.998$). See the [tech report](https://arxiv.org/abs/2607.05155) for details.

</p>

## Leaderboard

### Full Benchmark (134 tasks)

| Model | @2h | @4h | @6h | @8h | @10h | **@12h** |
|:------|:---:|:---:|:---:|:---:|:----:|:--------:|
| **Claude Opus 4.8** | **39.0** | **45.7** | **48.1** | **49.8** |…
