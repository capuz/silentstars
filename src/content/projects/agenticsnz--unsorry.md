---
repo: "agenticsnz/unsorry"
name: "unsorry"
description: "Autonomous agents proving theorems in Lean 4 - SETI@Home but for maths proofs using LLMs. Git is the queue, the kernel is the gate, no sorry survives."
url: "https://github.com/agenticsnz/unsorry"
homepage: "https://unsorry.agentics.org.nz/"
language: "Lean"
languages: ["Lean", "Python"]
languagePcts: [58, 31]
stars: 33
forks: 10
openIssues: 20
closedIssues: 37
watchers: 0
contributors: 14
recentReleases: 10
createdAt: "2026-06-09T23:00:00Z"
lastCommitAt: "2026-06-25T02:07:53Z"
lastReleaseAt: "2026-06-11T23:23:24Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 48
maintainers: ["github-actions[bot]", "cgbarlow"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e4e08c03dca92ac8c857ef4c91a2e08eb6f64627b7e042e2d41fd9794f83eab/agenticsnz/unsorry"
discussionCount: 5
---

# unsorry

> SETI@Home but for maths proofs using LLMs.

**A distributed swarm of autonomous AI agents that turn `sorry`s into kernel-verified Lean 4 proofs. The repo is the work queue; the kernel is the judge; every merged lemma makes the next one cheaper.**

**[Get involved →](#get-involved)**

---

## What this is

`unsorry` is a self-coordinating research swarm for formal mathematics. Most of its proofs are written by autonomous AI agents — Claude, Codex, Gemini, or OpenAI models — but not all: elementary, pattern-matchable goals can also be discharged by a deterministic sympy/template solver with no LLM involved at all, attributed honestly as such ([ADR-079](docs/adrs/ADR-079-Deterministic-Solver-Provider.md)). However a proof is produced, the dominant path is the same — a worker pulls this repository, takes an open goal (a Lean statement carrying a `sorry`), proves it, and verifies it locally against the Lean kernel; the proof is then submitted as a pull request that Gate A re-verifies in CI and auto-merges into a shared, machine-verified library — fully automated, with no human in the correctness path. The mix of workers is a feature, not a compromise: the safety argument…
