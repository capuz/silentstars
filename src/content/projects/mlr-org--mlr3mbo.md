---
repo: "mlr-org/mlr3mbo"
name: "mlr3mbo"
description: "Flexible Bayesian Optimization in R"
readmeQualityOk: true
url: "https://github.com/mlr-org/mlr3mbo"
homepage: "https://mlr3mbo.mlr-org.com"
language: "R"
languages: ["R"]
languagePcts: [93]
topics: ["machine-learning", "r", "optimization", "bayesian-optimization", "model-based-optimization", "bbotk", "mlr3", "r-package", "automl", "gaussian-process"]
stars: 26
forks: 1
openIssues: 24
closedIssues: 94
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2019-10-02T23:44:40Z"
lastCommitAt: "2026-07-21T06:11:16Z"
lastReleaseAt: "2024-11-22T09:02:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 85
undervaluedScore: 57
maintainers: ["be-marc", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/212462939/f0974680-4372-11ea-9827-e2f0f1caf51e"
fundingLinks: ["GITHUB:https://github.com/mlr-org"]
---

# mlr3mbo

Package website: [release](https://mlr3mbo.mlr-org.com/) \|
[dev](https://mlr3mbo.mlr-org.com/dev/)

A new R6 and much more modular implementation for single- and
multi-objective Bayesian Optimization.

## Get Started

The best entry point to get familiar with `mlr3mbo` is provided via the
[Bayesian
Optimization](https://mlr3book.mlr-org.com/chapters/chapter5/advanced_tuning_methods_and_black_box_optimization.html#sec-bayesian-optimization)
chapter in the `mlr3book`.

## Design

`mlr3mbo` is built modular relying on the following
[R6](https://cran.r-project.org/package=R6) classes:

- `Surrogate`: Surrogate Model
- `AcqFunction`: Acquisition Function
- `AcqOptimizer`: Acquisition Function Optimizer

Based on these, Bayesian Optimization (BO) loops can be written, see,
e.g., `bayesopt_ego` for sequential single-objective BO.

`mlr3mbo` also provides an `OptimizerMbo` class behaving like any other
`Optimizer` from the [bbotk](https://cran.r-project.org/package=bbotk)
package as well as a `TunerMbo` class behaving like any other `Tuner`
from the [mlr3tuning](https://cran.r-project.org/package=mlr3tuning)
package.

`mlr3mbo` uses sensible defaults for the `Surrogate`,…
