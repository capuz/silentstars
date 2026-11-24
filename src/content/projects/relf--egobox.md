---
repo: "relf/EGObox"
name: "EGObox"
description: "Efficient global optimization toolbox in Rust: bayesian optimization, mixture of gaussian processes, sampling methods "
readmeQualityOk: true
url: "https://github.com/relf/EGObox"
homepage: "https://relf.github.io/EGObox"
language: "Rust"
languages: ["Rust", "Jupyter Notebook"]
languagePcts: [48, 43]
topics: ["global-optimization", "gaussian-processes", "mixture-of-experts", "latin-hypercube-sampling", "surrogate-models"]
stars: 196
forks: 15
openIssues: 7
closedIssues: 40
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2020-08-27T08:07:45Z"
lastCommitAt: "2026-11-24T13:10:17Z"
lastReleaseAt: "2023-03-28T15:56:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 43
maintainers: ["relf"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b1bcb7c442bae4113c84f20c42c999187092896b19de57f591119228fd2ab11/relf/EGObox"
---

<img
    width="100"
    src="https://raw.githubusercontent.com/relf/EGObox/HEAD/website/static/img/LOGO_EGOBOX_v4_100x100.png"
    alt="Efficient Global Optimization toolbox in Rust"
  />

# EGObox - Efficient Global Optimization toolbox

Rust toolbox for Efficient Global Optimization method (arguably the most well-known bayesian optimization algorithm)
which adresses the gradient-free optimization of expensive objective functions.

**EGObox** is twofold:

1. for end-users: [a Python module](#the-python-module), the Python binding of the optimizer named `Egor` and the surrogate model `Gpx`, mixture of Gaussian processes, written in Rust.
2. for developers: [a set of Rust libraries](#the-rust-libraries) useful to implement bayesian optimization (EGO-like) algorithms,

## The Python module

### Installation

```bash
pip install egobox
```
