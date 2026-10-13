---
repo: "DarkHater01/slopbench"
name: "slopbench"
description: "Measures how much code LLM agents waste. 5 tasks, sandboxed, weekly snapshots, contestable references."
readmeQualityOk: true
url: "https://github.com/DarkHater01/slopbench"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [53, 40]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-10T07:47:47Z"
lastCommitAt: "2026-10-13T10:58:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["DarkHater01"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1412918389/da74cd71-94cb-4425-9999-d2febc04cae0"
---

# SlopBench

**Code benchmarks measure whether a model solves the task. None measure how much code it wastes.**

SlopBench reports two numbers per model — and one that nobody else publishes:

| metric | what it answers |
|---|---|
| `pass@k` | Can the model solve the task at all? |
| `inflation` | **How many lines does it write to do it?** |
| `ponytail Δ` | **How many lines does a minimalism system prompt shave off?** |

> Reference solutions are in-repo, hand-written, and contestable via PR. The denominator is public on purpose.

---

---

## The number

`inflation = LOC generated ÷ LOC of the reference solution`

A model that solves a 12-line task in 96 lines has inflation ≈ 8.0×. It passed the tests. It is also responsible for the review burden every engineer using AI agents is drowning in.

**Inflation is only counted for runs that pass the tests.** A two-line obfuscated one-liner that fails nothing? It doesn't qualify. Neither does a 3-line solution that passes 1 out of 5 tries. A model must reach `pass@1 ≥ 0.6` on a task before its LOC counts there. See [ADR-001](https://github.com/DarkHater01/slopbench/blob/HEAD/docs/adr/ADR-001-metric.md).

| model | pass@1 | inflation |…
