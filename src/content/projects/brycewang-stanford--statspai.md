---
repo: "brycewang-stanford/StatsPAI"
name: "StatsPAI"
description: "StatsPAI is an Agent-native Python library for causal inference and applied econometrics — unified API, broad cross-method coverage, structured result objects, machine-readable schemas, Skills, an MCP server, and R/Stata parity validation."
readmeQualityOk: true
url: "https://github.com/brycewang-stanford/StatsPAI"
homepage: "https://brycewang-stanford.github.io/StatsPAI/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent-native", "ai-agents", "causal-discovery", "causal-inference", "data-science", "difference-in-differences", "double-machine-learning", "econometrics", "instrumental-variables", "llm"]
stars: 373
forks: 76
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-07-26T09:53:30Z"
lastCommitAt: "2026-11-12T11:34:45Z"
lastReleaseAt: "2026-04-21T04:08:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 40
maintainers: ["brycewang-stanford"]
openGraphImageUrl: "https://opengraph.githubassets.com/51a5bba7ebd42d8b772eb0bc69b526036811e99edc70ee009a20195715829455/brycewang-stanford/StatsPAI"
discussionCount: 2
---

[简体中文](https://github.com/brycewang-stanford/statspai/blob/main/README_CN.md) | English

# StatsPAI: an Agent&Python-native Stata/R replacement for applied causal inference

  &nbsp;&nbsp;&nbsp;&nbsp;
  Developed and maintained by the <strong>Stanford REAP</strong> team
  Published in the <strong><em>Journal of Open Source Software</em> (JOSS)</strong>: Wang &amp; Rozelle (2026), 11(125), 10604 · <a href="https://doi.org/10.21105/joss.10604">doi:10.21105/joss.10604</a>

StatsPAI is for empirical researchers who would normally jump between Stata, R,
and Python. Its goal is to make common Stata/R econometrics and causal-inference
workflows feel native in Python: load a dataset, estimate a model, inspect
diagnostics, export tables, and hand the result to an agent or notebook without
leaving one API.

It is meant to be a practical replacement path for new Python-first work:

- Stata-style routines: `regress`, `ivregress`, `reghdfe`, `csdid`, `rdrobust`,
  `synth`, `psmatch2`, `esttab` / `outreg2`.
- R-style routines: `lm`, `fixest`, `did`, `rdrobust`, `Synth`, `DoubleML`,
  `MatchIt`, `modelsummary`, `broom`.
- Stata conventions where they matter: `vce="robust"` / `vce="cluster firm"`…
