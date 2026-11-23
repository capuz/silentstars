---
repo: "bedrock-engineer/symeval"
name: "symeval"
description: "Symbolic, unit-aware evaluation of SymPy equations"
readmeQualityOk: true
url: "https://github.com/bedrock-engineer/symeval"
homepage: "https://bedrock-engineer.github.io/symeval"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 12
forks: 2
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-04-22T15:01:46Z"
lastCommitAt: "2026-11-23T10:19:57Z"
lastReleaseAt: "2026-07-22T23:53:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 39
maintainers: ["JoostGevaert", "claude", "JulesBlm"]
openGraphImageUrl: "https://opengraph.githubassets.com/87a9326f1bc804a403a68817216242702f5ce2467045985a5885c48cb797740b/bedrock-engineer/symeval"
---

# SymEval

**Symbolic, unit-aware evaluation of SymPy equations.**

Write a [SymPy](https://docs.sympy.org) equation, substitute [Pint](https://pint.readthedocs.io/) quantities, and SymEval shows how you arrive at the result the way you were taught in school:

|  |  |
|-----------------------------------------|-------------------------------|
| 1\. Formula | $\rho = \dfrac{m}{V}$ |
| 2\. Formula with substituted quantities (value + unit) | $\rho = \dfrac{0.998\ \mathrm{kg}}{1\ \mathrm{L}}$ |
| 3\. Result (density of water) | $\rho = 998\ \dfrac{\mathrm{kg}}{\mathrm{m}^3}$ |

SymEval integrates seamlessly with [marimo](https://docs.marimo.io) and [Quarto](https://quarto.org), such that you can make [explorable explanations ](https://worrydream.com/ExplorableExplanations) in Python notebooks or websites, and automate calculation report generation.

[Get started](https://bedrock-engineer.github.io/symeval/getting-started.html) [GitHub](https://github.com/bedrock-engineer/symeval) [PyPI](https://pypi.org/project/symeval/)
