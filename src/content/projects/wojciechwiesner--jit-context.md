---
repo: "wojciechwiesner/jit-context"
name: "jit-context"
description: "Architectural Moat: JIT-JEV Context OS — Epistemic runtime & JEV System 1 context gate for AI agents (L0 SQLite WAL <3ms, Epistemic Invariants I1–I10, CERN Zenodo DOI: 10.5281/zenodo.22649542)"
readmeQualityOk: true
url: "https://github.com/wojciechwiesner/jit-context"
homepage: "https://doi.org/10.5281/zenodo.22649542"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [69, 26]
topics: ["agent-memory", "agent-runtime", "context-engineering", "jev", "llm-agents", "prompt-caching", "swe-bench", "epistemic-context", "jit-context", "jit-jev"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-31T09:15:22Z"
lastCommitAt: "2026-11-04T08:04:33Z"
lastReleaseAt: "2026-10-14T11:11:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 50
maintainers: ["wojciechwiesner"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ce15b2c93f8dfc33e195b22e8477748c3ca9c37f316e272bef59f250514f0cd/wojciechwiesner/jit-context"
---

# JIT-JEV Context OS: Epistemic Runtime & System 1 Gate for AI Agents

---

### Where it helps, where it does not (measured)

Every number below links to a committed artifact. Single runs are marked N=1; treat them as case studies, not population estimates.

| Run | Setup | Turns | Wall time | Prompt tokens | Pass |
| :--- | :--- | :---: | :---: | :---: | :---: |
| [Synthapse feature, 45 modules](https://github.com/wojciechwiesner/jit-context/blob/HEAD/benchmarks/EXP-005-REAL-WORLD-SYNTHAPSE.json) | gemini-3.8-flash, N=1 | **171 → 66 (−61%)** | **568 s → 238 s (2.38x)** | not recorded | both |
| [10-task SWE-style fixtures](https://github.com/wojciechwiesner/jit-context/blob/HEAD/benchmarks/results/swe_10_three_mode_1to1.json) | 10 tasks × 3 modes, N=1 each | **69 → 49 (−29%)**, fewer in 9/10 | **208 s → 132 s (−36%)**, faster in 7/10 | median −1.1%; total +11% (one outlier +189%) | 10/10 vs 10/10 |
| A/B on claude-opus-5-5, Hermes CLI (2026-10-30), 8 tasks × 3 reps × 2 arms | **all 48 runs** | API calls: see rows | – | **+14% (ON 11.54M vs OFF 10.10M)** | 23/24 vs 24/24 |
| same | feature task (median) | API calls 18 → 15 (−17%) | – | −18% | 3/3 vs 3/3 |
| same | single-file…
