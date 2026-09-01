---
repo: "AI-sandbox/ADAMIXTURE"
name: "ADAMIXTURE"
description: "Fast population genetics clustering."
readmeQualityOk: true
url: "https://github.com/AI-sandbox/ADAMIXTURE"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["admixture", "ancestry-inference", "genetics", "machine-learning", "population-genetics"]
stars: 33
forks: 1
openIssues: 1
closedIssues: 5
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2025-04-24T06:21:44Z"
lastCommitAt: "2026-09-01T08:51:00Z"
lastReleaseAt: "2026-05-17T16:02:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 53
maintainers: ["joansaurina"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ea4e5be8c2020c9457105893ffb0f63b08adafac280a2fdcebae90d5a0f12cb/AI-sandbox/ADAMIXTURE"
---

</p>

<h3 align="center">
  Fast Biobank-Scale Population Genetics Clustering
</h3>

</p>

---

**ADAMIXTURE** is a fast CPU/GPU implementation of ADMIXTURE for biobank-scale genetic clustering. `.P` and `.Q` outputs remain compatible with ADMIXTURE.

## System requirements

### Hardware & Platform compatibility
ADAMIXTURE runs cross-platform on **Linux**, **macOS**, and **Windows**, supporting CPU computation as well as GPU acceleration on **NVIDIA GPUs** (CUDA) and **Apple Silicon** (MPS).

### Software requirements

We recommend creating a fresh Python 3.10+ virtual environment. For a faster installation experience, we highly recommend using [uv](https://github.com/astral-sh/uv).

> [!IMPORTANT]  
> If you plan to use GPU acceleration, ensure that the CUDA toolkit is correctly loaded (e.g., `module load cuda`) **before** starting the installation. This ensures that the dependencies and internal components are correctly configured for your hardware.

As an example, using `uv` (recommended):
```console
$ uv venv --python 3.10
$ source .venv/bin/activate
$ uv pip install adamixture
```

## Installation Guide

The package can be easily installed in at most a few minutes using `pip`…
