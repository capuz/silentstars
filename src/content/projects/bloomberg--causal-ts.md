---
repo: "bloomberg/causal-ts"
name: "causal-ts"
description: "Causal Discovery for Time Series"
readmeQualityOk: true
url: "https://github.com/bloomberg/causal-ts"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [62, 38]
topics: ["research"]
stars: 14
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 4
createdAt: "2026-06-29T19:28:29Z"
lastCommitAt: "2026-08-30T00:43:47Z"
lastReleaseAt: "2026-08-16T16:25:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 53
maintainers: ["fesanghary", "dependabot[bot]", "chaimhaas"]
openGraphImageUrl: "https://opengraph.githubassets.com/997b7658efdf50df88f5e64c56fdccb0870ee07afc7ecc9acec9194a7cdd52de/bloomberg/causal-ts"
---

# Causal-TS

## About the Project

📚 **[Full documentation is on Read the Docs](https://causal-ts.readthedocs.io/en/latest/)** — algorithm deep-dives, CI test guide, CLI reference, and worked example notebooks.

Causal-TS is a Python framework for causal discovery in time series data. It implements four discovery algorithms and a suite of GPU-accelerated conditional independence tests, both linear and nonlinear, along with built-in visualization and evaluation tools.

**Algorithms:**

- **CDNOTS** — Constraint-based discovery handling nonstationarity via a time-index node.
- **CDNOTS+** — PCMCI+-style two-phase skeleton (MCI conditioning) for improved precision on dense graphs.
- **CEDAR** — Scalable pairwise discovery using minimum-lag selection. O(d²) complexity.
- **GRACE** — Hybrid: CDNOTS skeleton + neural gated refinement with L0 regularization for high-dimensional data.

**CI Tests:** Run `causal-ts ci-test-info` for a full selection guide.

| Test | Type | Speed |
|------|------|-------|
| `parcorr-gpu` | Linear | instant |
| `gcmi` | Monotone nonlinear | instant |
| `splitkci` | Nonlinear (kernel) | fast |
| `rcot` | Nonlinear (RFF) | fast |
| `sigkci` | Path-space…
