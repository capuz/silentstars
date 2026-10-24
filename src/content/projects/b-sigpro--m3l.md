---
repo: "b-sigpro/m3l"
name: "m3l"
description: "Multi-modal machine listerning toolkit"
readmeQualityOk: true
url: "https://github.com/b-sigpro/m3l"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-06T06:19:12Z"
lastCommitAt: "2026-10-24T08:05:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["yoshipon"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffab676f56a57e0dc75de12ca83907a84f0c81949443dc200862c392e02364b7/b-sigpro/m3l"
---

# M3L: Multi-Modal Machine Listening Toolkit

M3L is a research toolkit for multi-modal machine listening, including audio representation learning, sound event detection, and reproducible experiment recipes.

## Key features

- **Reproducible recipes** – End-to-end pipelines document every stage (data prep, training, inference, evaluation) for reproducible studies.
- **HPC ready** – Recipes and Makefiles are tuned for ABCI, TSUBAME, and other clusters, yet remain runnable on a single workstation.
- **Highly modular** – Lightning tasks, common datasets, models, and utilities are built to swap components and run ablations with minimal friction.

## Getting started

For inference or use as a Python dependency, install M3L from GitHub:

```bash
pip install git+https://github.com/b-sigpro/m3l
```

For development, use [Pixi](https://pixi.sh/) to manage the project environment.

```bash
git clone git@github.com:b-sigpro/m3l.internal.git
cd m3l.internal
pixi install
pixi run pre-commit install
```

> [!NOTE]
> The Pixi workspace currently supports Linux (`linux-64`), with a GPU-oriented default environment and a CPU environment for CI.

## Recipes

Example experiment recipes are…
