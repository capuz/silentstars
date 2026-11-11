---
repo: "column-tax/tax-calc-bench"
name: "tax-calc-bench"
description: "Code & data for TaxCalcBench"
readmeQualityOk: true
url: "https://github.com/column-tax/tax-calc-bench"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 147
forks: 27
openIssues: 9
closedIssues: 15
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2025-06-22T17:23:08Z"
lastCommitAt: "2026-11-11T19:49:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 37
maintainers: ["michaelrbock", "dependabot[bot]", "detail-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/75f724f546d9cf62adc50598157792ef0a6ae953e15629b87e24d96a6f3cfc0a/column-tax/tax-calc-bench"
---

# TaxCalcBench: evaluating frontier models on the tax calculation task

_Note: this repo has drifted since the original [TaxCalcBench paper](https://arxiv.org/abs/2507.16126) was published as we've benchmarked additional models. If you'd like to see the repo at its state as of the paper release, see the repo as of [this commit](https://github.com/column-tax/tax-calc-bench/tree/8b0470d30dfa802f1cd602f243eef9381041d89c)._

## Update: (v2) Tax Year 2025 edition

As of Jun 2026, we've released v2 of TaxCalcBench for Tax Year (TY) 2025 with
the following features:

- Inputs (e.g. W-2s, 1099s, etc.) are realistic PDFs
- The cases cover state returns in addition to federal returns
- The cases cover much more complex tax/financial situations

## Leaderboard

> [!TIP]
> These results are also available as an interactive leaderboard at **[TaxCalcBench.ai](https://taxcalcbench.ai)**.

### Tax Year (TY) 2025

| **Model**                                  | **Correct returns (strict)** | **Correct returns (lenient)** | **Correct (by line)** | **Correct (by line, lenient)** | **Cost per return** | **Time per return** |
| ------------------------------------------ | ---------------------------: |…
