---
repo: "mattgrayling/jax-snana"
name: "jax-snana"
description: "JAX implementation of the SNANA supernova framework supporting GPU-acceleration"
readmeQualityOk: true
url: "https://github.com/mattgrayling/jax-snana"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-13T15:23:06Z"
lastCommitAt: "2026-11-11T11:22:51Z"
lastReleaseAt: "2026-11-02T19:19:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 33
maintainers: ["mattgrayling", "mcoughlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb864f932adb8bffd6aba18e306ff69e0750d90328f21cdce2ebbc6a5cfd4f48/mattgrayling/jax-snana"
---

# jax-snana

GPU-accelerated supernova simulation, light curve fitting and cosmology in JAX

Developed and maintained by Matt Grayling (@mattgrayling).

## About
jax-snana is a JAX reimplementation of the supernova analysis framework SNANA, supporting survey
simulations, light curve fitting, BBC distance fitting and cosmological inference on CPU or GPU. It
also provides a compiled simulator for simulation-based inference, as discussed in Grayling 2026
(https://arxiv.org/abs/2610.19000).

jax-snana is validated against SNANA v12_02f.

## Installation and usage
jax-snana can be pip-installed via the command `pip install jax-snana`.

Detailed instructions on how to install and run jax-snana can be found here:
https://jax-snana.readthedocs.io

## Support
If you find something unclear, come across any bugs or would like a feature that is not yet
implemented, please raise a GitHub issue.

## Citing the code
If you use jax-snana, please cite Grayling 2026 (arXiv:2610.19000) as well as SNANA, Kessler et al.
2009 (PASP 121, 1028). If you use any of the models included within jax-snana, please also cite the
papers that present them, listed here:…
