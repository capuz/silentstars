---
repo: "CPMpy/cpmpy"
name: "cpmpy"
description: "Constraint Programming and Modeling library in Python, based on numpy, with direct solver access."
readmeQualityOk: true
url: "https://github.com/CPMpy/cpmpy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 377
forks: 46
openIssues: 55
closedIssues: 341
watchers: 4
contributors: 33
recentReleases: 0
createdAt: "2017-08-20T15:08:56Z"
lastCommitAt: "2026-10-12T11:15:31Z"
lastReleaseAt: "2021-07-20T10:01:10Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 37
maintainers: ["IgnaceBleukx", "ThomSerg", "tias"]
openGraphImageUrl: "https://opengraph.githubassets.com/79cbd64d8567f1cee8c5f0f6948bb44b90145a7198366812a2a5280799b4c8a2/CPMpy/cpmpy"
---

---

**Documentation: [https://cpmpy.readthedocs.io/](https://cpmpy.readthedocs.io/)**

---

### Constraint solving at your finger tips

For combinatorial problems with Boolean and integer variables. With many high-level constraints that are automatically decomposed when not natively supported by the solver.

Lightweight, [well-documented](https://cpmpy.readthedocs.io/), used in research and industry. 

Install simply with `pip install cpmpy`

### 🔑 Key Features

* **Solver-agnostic**: use and compare CP, ILP, SMT, PB and SAT solvers
* **ML-friendly**: decision variables are numpy arrays, with vectorized operations and constraints
* **Incremental solving**: assumption variables, adding constraints and updating objectives
* **Extensively tested**: large test-suite and [actively fuzz-tested](https://github.com/CPMpy/fuzz-test)
* **Tools**: for parameter-tuning, debugging, explanation generation and XCSP3 benchmarking
* **Flexible**: easy to add constraints or solvers, also direct solver access

### 🔩 Solvers

CPMpy can translate to a wide variety of constraint solving paradigms, including both commercial and open-source solvers.

* **CP Solvers**: OR-Tools (default), IBM CP…
