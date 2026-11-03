---
repo: "zjunlp/HarnessGrad"
name: "HarnessGrad"
description: "A platform for running and comparing harness self-improvement methods."
readmeQualityOk: true
url: "https://github.com/zjunlp/HarnessGrad"
homepage: "https://zjunlp.github.io/HarnessGrad-Hub/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agent", "benchmark", "evaluation", "harness", "llm", "research", "self-improvement"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-10-08T03:41:24Z"
lastCommitAt: "2026-11-03T12:48:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["Xubqpanda", "trancefornow", "crepuscular-drizzle"]
openGraphImageUrl: "https://opengraph.githubassets.com/7963dcfed50b0b591576db60a08e4f0e9d7d5c1da43546c15f2feaa722eb8739/zjunlp/HarnessGrad"
---

## What you can run

A run is one point in a **harness × method × benchmark** space: a *harness* solves tasks, a
*method* proposes edits to that harness between rounds, and a *benchmark* scores each
candidate. HarnessGrad supplies the three middle layers that every RSI paper re-implements
badly — tasks and scoring, an isolated sandbox, and version control over the candidate
harness — so an experiment is one command and a curve.

| axis | what ships | where |
| --- | --- | --- |
| **harnesses** | 8: `loop`, `codex`, `opencode`, `deepseek-harness`, `openclaw`, `miniagent`, `miniswe`, `oracle` | `base_harness/<name>/` |
| **RSI methods** | 19: `dgm`, `rrsi`, `adas`, `ahe`, `ace`, `skillopt`, `evoprompt`, `evo_harness`, `opro`, `tthe`, `dream_rsi`, `sica_ci`, `gepa`, `darwinx`, `arbor`, `hyperagents`, `meta_harness`, `harnessx`, `modular_rsi` | `experiments/method-<name>.json` |
| **benchmarks** | 59 declared, **55 runnable**, 4 refused (†) — every one listed: `agentdojo`, `aime`, `alfworld`, `api_bank` †, `appworld`, `authored_example_fix_bug`, `bbeh`, `bfcl_v3`, `bird_minidev`, `browsecomp`, `chessbench_puzzles`, `cooperbench`, `costbench`, `costbench_dynamic`, `deepsearchqa`,…
