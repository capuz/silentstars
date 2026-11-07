---
repo: "wegamekinglc/Derivatives-Algorithms-Lib"
name: "Derivatives-Algorithms-Lib"
description: " AAD enabled and scripting included derivatives modeling."
readmeQualityOk: true
url: "https://github.com/wegamekinglc/Derivatives-Algorithms-Lib"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["finance", "derivatives", "mathematics", "quantitative-finance", "quant", "fixed-income", "scripting", "mathematical-finance", "excel", "cpp"]
stars: 27
forks: 7
openIssues: 1
closedIssues: 63
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2017-12-19T06:44:43Z"
lastCommitAt: "2026-11-07T13:54:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 63
maintainers: ["wegamekinglc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/064a410adba3418a667b557a6c232594032b13102c42538abc7e2a575d95ee0a/wegamekinglc/Derivatives-Algorithms-Lib"
---

# DAL - Derivatives Algorithms Library

A C++17 quantitative finance library with built-in Automatic Adjoint Differentiation (AAD). Features include yield curve construction, cross-currency pricing and calibration, Monte Carlo simulation, finite difference PDE solvers, a scripting engine for exotic payoffs with tree-walk and compiled evaluators, and parallel model evaluation.

## CI

Pull requests with source, configuration, or build changes build and test the
native AAD compiler matrix below. Documentation-only changes run the
documentation integrity check and stable Linux/Windows gates without starting
the compile or sanitizer jobs. Pushes to `master` (merges and direct
master pushes) run a lean GCC 14 + Clang 20 subset,
because the pull request already covered every combination. GitHub publishes
one status badge per workflow; open a workflow run for per-job results.
Path-matched pull requests run [Python wheel CI](https://github.com/wegamekinglc/Derivatives-Algorithms-Lib/blob/HEAD/.github/workflows/dal-python-ci.yml)
for installed-package tests on Linux, Windows, and macOS (Intel and Apple
Silicon); PyPI publication remains in
the tag-only [release…
