---
repo: "jlmelville/funconstrain"
name: "funconstrain"
description: "R Package of Functions for Testing Unconstrained Numerical Optimization"
readmeQualityOk: true
url: "https://github.com/jlmelville/funconstrain"
homepage: "https://jlmelville.github.io/funconstrain/"
language: "R"
languages: ["R", "TeX"]
languagePcts: [56, 44]
topics: ["r", "numerical-optimization"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2017-05-07T07:52:44Z"
lastCommitAt: "2026-07-05T20:54:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 57
maintainers: ["jlmelville"]
openGraphImageUrl: "https://opengraph.githubassets.com/a85ff91c9a6f0f2816daf198d8c78089d19ae84d802957ff82cefe6f6ce21e8d/jlmelville/funconstrain"
---

# funconstrain

An R Package of Functions for Testing Unconstrained Numerical Optimization.

`funconstrain` is a pure R implementation of the 35 test functions in the paper
by [Moré, Garbow, and Hillstrom](https://doi.org/10.1145/355934.355936) useful
(to varying degrees) for testing unconstrained numerical optimization methods,
e.g. those implementing the likes of steepest descent, Newton, BFGS, L-BFGS, 
conjugate gradient and so on.

## Installing

```R
# if needed, install devtools:
# install.packages("devtools")
devtools::install_github("jlmelville/funconstrain")
library(funconstrain)
```

## Documentation

```R
package?funconstrain
```

## Examples

It's pretty simple. You call a function named after the test problem at hand,
and get back a list. That list contains functions that implement the objective,
gradient, Hessian, and combined objective-plus-gradient calculation; a suggested
starting point, which is also a function if the test problem supports different
dimensionalities and is a plain numeric vector otherwise; and reported `fmin`
and `xmin` values from the source material.

```R
# The famous Rosenbrock function is a problem with two parameters
rbrock <- rosen()

#…
