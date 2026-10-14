---
repo: "brycewang-stanford/StatsPAI"
name: "StatsPAI"
description: "StatsPAI is the first Agent-native Python library for causal inference and applied econometrics — unified API, broad cross-method coverage, structured result objects, machine-readable schemas, Skills, an MCP server, and R/Stata parity validation."
originalDescription: "StatsPAI is the first Agent-native Python library for causal inference and applied econometrics — unified API, broad cross-method coverage, structured result objects, machine-readable schemas, Skills, an MCP server, and R/Stata parity validation."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/brycewang-stanford/StatsPAI"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent-native", "ai-agents", "causal-discovery", "causal-inference", "data-science", "difference-in-differences", "double-machine-learning", "econometrics", "instrumental-variables", "llm"]
stars: 339
forks: 72
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-07-26T09:53:30Z"
lastCommitAt: "2026-10-14T08:56:46Z"
lastReleaseAt: "2026-04-21T04:08:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 39
maintainers: ["brycewang-stanford"]
openGraphImageUrl: "https://opengraph.githubassets.com/35c4dc5d7833a1dbca815f7f5f4b4443782a91f6e24c55d209b90f6d221699bf/brycewang-stanford/StatsPAI"
discussionCount: 2
---

Simplified Chinese (default) | [English](https://github.com/brycewang-stanford/statspai/blob/main/README_EN.md)

# StatsPAI: A Stata/R Alternative Designed for Agents

  &nbsp;&nbsp;&nbsp;&nbsp;
  Developed and maintained by the <strong>Stanford REAP</strong> team
  Paper published in the <strong><em>Journal of Open Source Software</em> (JOSS)</strong>: Wang &amp; Rozelle (2026), 11(125), 10604 · <a href="https://doi.org/10.21105/joss.10604">doi:10.21105/joss.10604</a>

StatsPAI is for empirical researchers who previously had to switch back and forth between Stata, R, and Python. Its goal is straightforward: bring common econometrics, causal inference, diagnostics, robustness checks, table export, and agent-readable metadata into a single Python-native API.

You can think of it as a drop-in Stata/R alternative entry point for new projects:

- Stata-style: `regress`, `ivregress`, `reghdfe`, `csdid`, `rdrobust`, `synth`, `psmatch2`, `esttab` / `outreg2`.
- R-style: `lm`, `fixest`, `did`, `rdrobust`, `Synth`, `DoubleML`, `MatchIt`, `modelsummary`, `broom`.
- Key behaviors follow Stata conventions: `regress`, `ivreg`, and the various likelihood-based estimators all accept…
