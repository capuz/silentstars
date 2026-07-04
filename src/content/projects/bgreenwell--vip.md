---
repo: "bgreenwell/vip"
name: "vip"
description: "Variable Importance Plots (VIPs)"
url: "https://github.com/bgreenwell/vip"
homepage: "https://bgreenwell.github.io/vip/"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["variable-importance", "interaction-effect", "partial-dependence-plot", "supervised-learning-algorithms", "machine-learning", "variable-importance-plots"]
stars: 190
forks: 23
openIssues: 16
closedIssues: 108
watchers: 8
contributors: 7
recentReleases: 0
createdAt: "2017-08-01T12:30:12Z"
lastCommitAt: "2026-07-04T19:20:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 29
maintainers: ["bgreenwell"]
openGraphImageUrl: "https://opengraph.githubassets.com/479580f456aa2735079f909f6d71f0ba5031e7ec7ef957c95b3b7548a49d6f69/bgreenwell/vip"
---

# vip <img src="man/figures/logo-vip.png" align="right" width="130" height="150" />

Variable importance plots (VIPs) for R: quantify and visualize which features
drive a fitted model's predictions.

- **One interface, many models** — `vi()` and `vip()` work with dozens of
  model classes out of the box (randomForest, ranger, gbm, xgboost, lightgbm,
  glmnet, caret, tidymodels, mlr3, …)
- **Model-specific and model-agnostic methods** — native importance measures
  (`method = "model"`), permutation importance (`method = "permute"`),
  Shapley-based importance (`method = "shap"`), and variance-based importance
  (`method = "firm"`)
- **Works with *any* model** — the model-agnostic methods only require a
  user-supplied prediction wrapper
- **Lightweight plotting** via
  [tinyplot](https://grantmcdermott.com/tinyplot/) (base R graphics)
- **Minimal dependencies** — imports only base R packages plus tinyplot
  (itself dependency-free)

## Installation

**vip** is no longer available on CRAN due to CRAN's stringent and
ever-changing policies. It is now hosted on
[r-universe](https://bgreenwell.r-universe.dev/vip), which provides a reliable
alternative for distributing R packages.

```…
