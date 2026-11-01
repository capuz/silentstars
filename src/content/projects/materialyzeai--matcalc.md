---
repo: "materialyzeai/matcalc"
name: "matcalc"
description: "A python library for calculating materials properties from the PES"
readmeQualityOk: true
url: "https://github.com/materialyzeai/matcalc"
homepage: "http://matcalc.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["learning", "machine", "materials", "pes", "properties"]
stars: 157
forks: 38
openIssues: 0
closedIssues: 45
watchers: 8
contributors: 17
recentReleases: 0
createdAt: "2023-07-25T02:04:04Z"
lastCommitAt: "2026-11-01T22:50:37Z"
lastReleaseAt: "2025-03-27T16:54:31Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 47
maintainers: ["rul048", "shyuep", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/badb7383d77b94977f2626295636239035f1ddd7c5c5d0751af01a576c13aeb8/materialyzeai/matcalc"
discussionCount: 2
---

width="200" alt="MatCalc" style="vertical-align: middle;" /><br>

## Introduction

MatCalc is a Python library for calculating and benchmarking material properties from the potential energy surface
(PES). The PES can come from DFT or, more commonly, from machine learning interatomic potentials (MLIPs).

Calculating material properties often requires involved setups of various simulation codes. The
goal of MatCalc is to provide a simplified, consistent interface to access these properties with any
parameterization of the PES.

MatCalc is part of the MatML ecosystem, which includes [MatGL] (Materials Graph Library) and [MAML] (MAterials
Machine Learning), the [MatPES] (Materials Potential Energy Surface) dataset, and the [MatCalc] documentation site.

## Documentation

The API documentation and tutorials are available at https://matcalc.ai.

## Installation

```bash
pip install matcalc
```

For MatGL foundation potential support (TensorNet, M3GNet, CHGNet):

```bash
pip install matcalc[matgl]
```

For MAML classical potential support (MTP, GAP, NNP, SNAP):

```bash
pip install matcalc[maml]
```

For benchmarking support:

```bash
pip install matcalc[benchmark]
```

For phonon band…
