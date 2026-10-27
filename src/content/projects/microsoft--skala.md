---
repo: "microsoft/skala"
name: "skala"
description: "Skala exchange-correlation functional"
readmeQualityOk: true
url: "https://github.com/microsoft/skala"
homepage: "https://aka.ms/dft"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["computational-chemistry", "deep-learning", "density-functional-theory", "exchange-correlation-functionals", "quantum-chemistry"]
stars: 266
forks: 38
openIssues: 3
closedIssues: 35
watchers: 4
contributors: 21
recentReleases: 0
createdAt: "2025-06-05T13:25:37Z"
lastCommitAt: "2026-10-27T12:40:15Z"
lastReleaseAt: "2026-07-16T10:11:17Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 41
maintainers: ["JensWehner", "tvogels", "awvwgk"]
openGraphImageUrl: "https://opengraph.githubassets.com/156f44b1b0e71e955dad47713ac0b84c4e7432d25ab342129bbb0dfc2b49ff17/microsoft/skala"
---

# Skala: Accurate and scalable exchange-correlation with deep learning

Skala is a neural network-based exchange-correlation functional for density functional theory (DFT), developed by Microsoft Research AI for Science. It uses deep learning to predict exchange-correlation energies from electron density features, surpasses state-of-the-art hybrid functionals in accuracy for main group thermochemistry, kinetics and non-covalent interactions, all at a computational cost similar to semi-local DFT.

Trained on a large, diverse dataset — including coupled-cluster atomization energies and public benchmarks — Skala uses scalable message passing and local layers to learn both local and non-local effects. The model has about 385,000 parameters and matches the accuracy of leading hybrid functionals.

The recommended neural functional is `skala-1.1`, which uses per-atom packed grids, multiple non-local layers, and symmetric contraction. The legacy `skala-1.0` traced model is still loadable via `load_functional("skala-1.0")`.

Learn more about Skala in our [ArXiv paper](https://arxiv.org/abs/2506.14665).

## What's in here

This repository contains five components:

1.…
