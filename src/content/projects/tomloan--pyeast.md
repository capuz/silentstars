---
repo: "TomLoan/PYEAST"
name: "PYEAST"
description: "PYEAST, a python program to help with cloning in Saccharomyces cerevisiae"
readmeQualityOk: true
url: "https://github.com/TomLoan/PYEAST"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2025-03-11T04:42:33Z"
lastCommitAt: "2026-07-15T05:54:25Z"
lastReleaseAt: "2026-07-09T06:30:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 69
maintainers: ["TomLoan"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f27d97daed97564fa061ae4af9ff1b45ffcb19da0534958ac7df0619bcddbc9/TomLoan/PYEAST"
---

# PYEAST

PYEAST is a command-line toolkit and Python library that automates the design of DNA cloning experiments in *Saccharomyces cerevisiae* (baker's yeast). Given a set of genetic parts, it designs the PCR primers and liquid-handling instructions for common yeast genetic engineering techniques — reducing manual design work and minimising errors.

If you are new to yeast cloning, PYEAST is designed to complement standard wet-lab protocols: it handles the computational design steps so you can focus on the biology.

For full methodological details, see our [publication](https://doi.org/10.1038/s41540-026-00712-4).

## Prerequisites

- **Python** (3.12 or later) - [python.org](https://www.python.org/downloads/)
- **Git** - [git-scm.com](https://git-scm.com/downloads) (used by `pyeast init` to download the sequence data)
- **uv** (optional) - [docs.astral.sh](https://docs.astral.sh/uv/getting-started/installation/), only needed for the isolated `uv tool install` route below

## Installation

```bash
pip install pyeast

# Download the sequence data automatically
pyeast init
```

Prefer an isolated install for the command-line tool? Use [uv](https://docs.astral.sh/uv/) or…
