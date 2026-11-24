---
repo: "pyeconomics-dev/pyeconomics"
name: "pyeconomics"
description: "Open economics and finance models with typed inputs, verified outputs and reproducible results. 1.0 in development; 0.2.x on legacy/0.2.x."
readmeQualityOk: true
url: "https://github.com/pyeconomics-dev/pyeconomics"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 11
forks: 2
openIssues: 58
closedIssues: 64
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2024-05-06T02:25:38Z"
lastCommitAt: "2026-11-24T01:59:55Z"
lastReleaseAt: "2026-11-20T02:31:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 89
undervaluedScore: 75
maintainers: ["nathanramoscfa", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/796473097/c95b3cb6-10b3-4dd7-b56b-968014239979"
fundingLinks: ["GITHUB:https://github.com/pyeconomics-dev", "THANKS_DEV:https://thanks.dev/u/gh/pyeconomics-dev"]
discussionCount: 0
---

# pyeconomics

> **Status: 1.0.0rc2 is the release candidate for 1.0.0, a pre-release on
> PyPI.** Install explicitly with `pip install --pre pyeconomics==1.0.0rc2`
> (Python 3.12 or later). Plain `pip install pyeconomics` still installs
> **0.2.6**, the stable release, until 1.0.0. The
> [public API](https://docs.pyeconomics.dev/en/main/public-api.html) is frozen:
> 1.0.0 is this candidate with its version changed.

pyeconomics provides 50 tested, cited economics and finance model
families across 13 domains: foundations, fixed income, derivatives,
international, equity, corporate, accounting, portfolio, performance, risk,
econometrics, macroeconomics and asset pricing. The data platform adds 31
providers, 171 catalog concepts and live bindings with real-time vintages.
Every model is served identically through the Python API, the `pyeconomics`
command line, the REST API (`pyeconomics serve`), the MCP server
(`pyeconomics mcp`) and tabular or reproducibility-bundle exports.
Typed inputs declare units and bounds; every result carries
a reproducible provenance manifest. Rates and percentages are decimals:
`0.05` means 5%.
