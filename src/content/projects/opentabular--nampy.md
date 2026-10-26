---
repo: "OpenTabular/NAMpy"
name: "NAMpy"
description: "Interpretable additive models for tabular data: classical GAMs (with REML smoothness selection, inference, shape constraints & diagnostics) plus neural additive models (NAM, NBM, NodeGAM, GPNAM, SIAN, SPAM, and more) for regression, classification, and distributional regression."
readmeQualityOk: true
url: "https://github.com/OpenTabular/NAMpy"
homepage: "https://nampy.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["additive-models", "distributional-regression", "gamlss", "interpretable-deep-learning", "interpretable-ml", "neural-additive-models", "splines", "tabular-deep-learning", "smoothness-selection"]
stars: 24
forks: 2
openIssues: 1
closedIssues: 6
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2024-06-27T21:14:06Z"
lastCommitAt: "2026-10-26T18:06:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 63
maintainers: ["Ananyapam7"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5db5efbb8cea77e22bf6b14f53b1ea75a0a4049c38d701d294a7853f352ccc1/OpenTabular/NAMpy"
---

# NAMpy — Statistical and Neural Additive Models in Python

NAMpy brings serious statistical additive modeling and a broad collection of
neural additive models into one Python workflow. Fit nonlinear relationships,
inspect individual effects, impose shape constraints, and model changing
distributions for regression and classification tasks. Its Python-native GAM
engine covers formulas, smooth construction, penalized fitting, automatic
smoothness selection, inference, and diagnostics without requiring R, while
architectures such as NAM, NBM, IGANN, GPNAM, SIAN, SPAM, and NodeGAM retain
their neural training semantics. Public estimators follow scikit-learn's
`BaseEstimator` interface and use `Regressor`, `Classifier`, or `LSS` suffixes
for their supported objectives.

## Installation

NAMpy supports Python 3.11 and 3.12. Install it with:

```bash
pip install nampy
```

## Interpreting predictions

An additive model represents its predictor as a baseline plus contributions from its terms:

$$
\eta(x)=\beta_0+\sum_{t\in\mathcal T}f_t(x_{S_t})+o(x),
\qquad
\mu(x)=g^{-1}\{\eta(x)\}.
$$

A term may describe one feature or an interaction. Some architectures also include a global…
