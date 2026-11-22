---
repo: "SharmaLlama/ticktack"
name: "ticktack"
description: "An open-source carbon box model implementation built on JAX."
readmeQualityOk: true
url: "https://github.com/SharmaLlama/ticktack"
homepage: "https://sharmallama.github.io/ticktack"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [92]
stars: 11
forks: 2
openIssues: 4
closedIssues: 28
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2021-07-15T08:41:38Z"
lastCommitAt: "2026-11-22T02:10:15Z"
lastReleaseAt: "2023-03-21T00:49:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 65
maintainers: ["benjaminpope"]
openGraphImageUrl: "https://opengraph.githubassets.com/706045727eaf00a85af2fc64a72786a56d42be3f9192ec14836307664ecac715/SharmaLlama/ticktack"
discussionCount: 2
---

# ticktack

Open-source carbon-box forward modelling and Bayesian inference for tree-ring radiocarbon ($\Delta^{14}\mathrm{C}$) time series in JAX.

## Contributors

[Utkarsh Sharma](https://github.com/SharmaLlama), [Qingyuan Zhang](https://github.com/qingyuanzhang3), [Jordan Dennis](https://github.com/Jordan-Dennis), [Benjamin Pope](https://github.com/benjaminpope)

## Overview (`ticktack 2.0`)

Radiocarbon ($\Delta^{14}\mathrm{C}$) measurements from annually resolved tree rings record past cosmic-ray production events (Miyake events), solar modulation cycles, and carbon-cycle dynamics. Inferring cosmic-ray production rates $Q(t)$ from $\Delta^{14}\mathrm{C}$ data requires propagating $^{14}\mathrm{C}$ through coupled atmospheric, biospheric, and oceanic carbon reservoirs while accounting for seasonal growth windows and inter-laboratory offsets.

`ticktack 2.0` is a ground-up JAX (`float64`) redesign built on [`zodiax`](https://github.com/LouisDesdoigts/zodiax) / [`equinox`](https://github.com/patrick-kidger/equinox):
