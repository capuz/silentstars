---
repo: "korabench/benchmark"
name: "benchmark"
description: "Everything needed to run the KORA benchmark for AI Child Safety."
readmeQualityOk: true
url: "https://github.com/korabench/benchmark"
homepage: "https://korabench.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 41
forks: 18
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 1
createdAt: "2026-02-02T18:39:31Z"
lastCommitAt: "2026-10-15T08:31:42Z"
lastReleaseAt: "2026-09-07T09:52:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 48
maintainers: ["Thibaut-Fatus", "Clemalfroy"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7298b622f6a1ca72fba47666f96abafdf655feb20a49b845cf2083322482295/korabench/benchmark"
---

# KORA Benchmark

The first public benchmark for AI child safety. Learn more at [korabench.ai](https://korabench.ai).

## Overview

KORA measures the safety of AI models interacting with children across 8 risk categories, 26 individual risks, 3 age groups (7–9, 10–12, 13–17), 10 child motivations, and 7 cross-cutting conversation mechanisms. It produces per-risk grades — failing, adequate, or exemplary — for both safety and each of the 7 mechanisms.

The benchmark uses a 3-stage pipeline: **seed generation** creates short scenario outlines from the risk taxonomy, **scenario expansion** turns each seed into a detailed test scenario with validation, and **test runs** execute multi-turn conversations and judge the results.

For how each stage works internally — persona allocation, what each prompt asks for, and where the guardrails sit — see [EVALUATION_PROCESS.md](https://github.com/korabench/benchmark/blob/HEAD/EVALUATION_PROCESS.md).

For how a run's seed population is drawn — the two generation modes, and which parameters are allocated in code versus left to the model — see [SCENARIO_CREATION.md](https://github.com/korabench/benchmark/blob/HEAD/SCENARIO_CREATION.md).

Each test…
