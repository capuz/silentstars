---
repo: "aqarios/luna-model"
name: "luna-model"
description: "LunaModel: Fast, symbolic modeling for optimization. Build, translate, and transform optimization models."
readmeQualityOk: true
url: "https://github.com/aqarios/luna-model"
homepage: "https://luna-model.docs.aqarios.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [54, 44]
topics: ["higher-order-models", "milp", "operations-research", "optimization", "optimization-modeling", "quadratic-programming", "quantum-computing", "quantum-optimization"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-22T10:12:20Z"
lastCommitAt: "2026-11-03T11:14:47Z"
lastReleaseAt: "2026-07-27T08:07:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 41
maintainers: ["dependabot[bot]", "JFLXB", "dbucher97"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4793f277734b47d04c1bdcd99a45e099be74af4b3658178033446dfd558dfe4/aqarios/luna-model"
discussionCount: 0
---

Fast, symbolic modeling for optimization — a high-performance Rust core with a Python-first API.
  Build, translate, and transform optimization models.

  ·
  ·
  ·
  ·

## About

LunaModel is a high-performance symbolic modeling library for describing, translating, and
transforming optimization problems. It provides Rust crates for model representation,
translation, serialization, and transformation, with a Python-first API exposed through the
[`luna-model`](https://pypi.org/project/luna-model/) package.

Use LunaModel when you need to build optimization models programmatically, convert between
common model formats, or prepare models for solver- or platform-specific workflows. You can
use it standalone, or through [luna-quantum](https://pypi.org/project/luna-quantum/) to solve
your problems on the [Luna Platform](https://aqarios.com/platform).

- **Symbolic modeling** — define algebraic expressions of arbitrary degree, constraints, and
  optimization models (in the spirit of dimod, Gurobi, or CPLEX).
- **Translators** — convert to and from LunaModel for many common formats, including LP, MPS,
  QUBO, BQM, CQM, and several solution result formats.
- **Transformations** — a…
