---
repo: "cvxgrp/cvxcla"
name: "cvxcla"
description: "critical line algorithm for efficient frontier"
readmeQualityOk: true
url: "https://github.com/cvxgrp/cvxcla"
homepage: "http://www.cvxgrp.org/cvxcla"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["critical-line-algorithm", "efficient-frontier", "markowitz"]
stars: 23
forks: 6
openIssues: 1
closedIssues: 126
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2023-06-29T23:32:12Z"
lastCommitAt: "2026-09-19T02:46:04Z"
lastReleaseAt: "2025-05-26T17:46:00Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["tschm", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb11c3e02e3f0112cbd48e634bd13489c73eb6ba303504fbf95bcdb54c416de0/cvxgrp/cvxcla"
---

# 📈 [cvxcla](https://www.cvxgrp.org/cvxcla) - Critical Line Algorithm for Portfolio Optimization

---

**Quick Links:**
[📖 Documentation](https://www.cvxgrp.org/cvxcla) •
[🐛 Report Bug](https://github.com/cvxgrp/cvxcla/issues) •
[💡 Request Feature](https://github.com/cvxgrp/cvxcla/issues)

---

</div>

## 📋 Overview

`cvxcla` is a Python package that implements the Critical Line Algorithm (CLA)
for portfolio optimization.
The CLA efficiently computes the entire efficient frontier for portfolio optimization
problems with linear constraints and bounds on the weights.

The same parametric active-set engine also traces the **LASSO** regularisation path
(the `Lasso` class) — including general inequality constraints `Gβ ≤ h` and the
non-negative LASSO `β ≥ 0` — so the Critical Line Algorithm and the LARS/LASSO
homotopy come out as two instances of one path-following engine.

The Critical Line Algorithm was introduced by Harry Markowitz
in [The Optimization of Quadratic Functions Subject to Linear Constraints](https://www.rand.org/pubs/research_memoranda/RM1438.html)
and further described in his book [Portfolio…
