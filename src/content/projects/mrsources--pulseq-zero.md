---
repo: "MRsources/pulseq-zero"
name: "pulseq-zero"
description: "Automatic optimization of pulseq sequences"
readmeQualityOk: true
url: "https://github.com/MRsources/pulseq-zero"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 7
openIssues: 5
closedIssues: 29
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-04-11T06:43:40Z"
lastCommitAt: "2026-11-11T11:20:26Z"
lastReleaseAt: "2025-05-07T11:05:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 71
maintainers: ["J-Endres", "claude", "SWeinmueller"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fdeef11604a175b45a785ce36011981f70a0337b7ffcd43d70f0e9f6bcafe5b/MRsources/pulseq-zero"
---

# Pulseq-zero

Pulseq-zero allows to define MRI sequences with the Python[^1] port of Pulseq[^2]: PyPulseq[^3], and use them within MR-zero[^4].
This way they are deeply integrated in a differentiable digital twin, enabling not only the simulation of the defined sequence but also the efficient optimization of any sequence parameter and any loss function, using the power of PyTorch[^5] and gradient-descent with backpropagation.

Pulseq-zero uses PDG[^6], a fast, analytical and physically exact simulation model that calculates signals that are comparable to in-vivo measurements within seconds.
At the same time, the required changes to the sequence code are minimal; Pulseq-zero exports the optimized sequence works by simply using the installed PyPulseq without any interference.

## Table of contents

1. [General Information](#1-general-information)
2. [Usage](#2-usage)
3. [Development](#3-development)
4. [API](#4-api)
5. [References](#5-references)

## 1. General Information

Pulseq-zero can be cloned from this repository but is also hosted on [PyPI](https://pypi.org/project/pulseqzero/), install it locally with:
```bash
pip install pulseqzero
```

> [!NOTE]
> Pulseq-zero supports…
