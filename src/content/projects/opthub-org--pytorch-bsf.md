---
repo: "opthub-org/pytorch-bsf"
name: "pytorch-bsf"
description: "PyTorch implementation of Bezier simploid fitting"
readmeQualityOk: true
url: "https://github.com/opthub-org/pytorch-bsf"
homepage: "https://pypi.org/project/pytorch-bsf/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["machine-learning", "manifold-learning"]
stars: 12
forks: 5
openIssues: 8
closedIssues: 193
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2021-06-28T12:03:04Z"
lastCommitAt: "2026-11-01T22:59:04Z"
lastReleaseAt: "2024-09-21T19:40:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 79
maintainers: ["NaokiHamada", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4295f701e0bcfb30b3add80b33df8f656ade66bf2cb8001fe794f549dc36887/opthub-org/pytorch-bsf"
---

# PyTorch-BSF

**Bézier Simploid Fitting in PyTorch.**

PyTorch-BSF is a Python library for fitting parametric curves, surfaces and
higher-dimensional models to data. It is useful for approximating Pareto fronts
in multi-objective optimization, building surrogate response models and
interpolating observations on meshes.

A Bézier simplex generalizes a Bézier curve to a simplex, such as a triangle
or tetrahedron. A **simploid** is a product of simplices, allowing domains such
as squares and prisms. Cells can also be joined along shared faces. These
geometries use the same `BezierSpace`, `BezierModel` and regression API.

[Documentation](https://opthub-org.github.io/pytorch-bsf/) ·
[PyPI](https://pypi.org/project/pytorch-bsf/) ·
[Changelog](https://github.com/opthub-org/pytorch-bsf/blob/master/CHANGELOG.md) ·
[Issue tracker](https://github.com/opthub-org/pytorch-bsf/issues)

## Features

- **Regression and point cloud fitting:** fit known parameter-response pairs,
  or estimate unknown coordinates for points on a single Bézier simplex or simploid.
- **Controlled geometry:** use simplex, product and joined-cell domains, with
  shared control points, exact fixed controls and quadratic…
