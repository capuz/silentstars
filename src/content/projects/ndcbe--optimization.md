---
repo: "ndcbe/optimization"
name: "optimization"
description: "Nonlinear and Stochastic Optimization, CBE & ACMS 60499 / 40499 at U. Notre Dame"
readmeQualityOk: true
url: "https://github.com/ndcbe/optimization"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [98]
stars: 14
forks: 29
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 27
recentReleases: 0
createdAt: "2023-01-13T16:31:32Z"
lastCommitAt: "2026-10-28T22:54:01Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 87
undervaluedScore: 72
maintainers: ["adowling2"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf6ef281f8dfaeb88317fa8bccfe5b7f608cae5ccdd0dd997531d3ef389e47a9/ndcbe/optimization"
postedAt: "2026-10-17T08:05:51.284Z"
---

# Optimization for Decision Science

CBE/ACMS 40499 and 60499 at the University of Notre Dame

Prof. Alexander Dowling (dowlinglab.nd.edu)

https://ndcbe.github.io/optimization

---

## Running the notebooks

Most students should use **Google Colab** — nothing needs to be installed. Every notebook page on the website
has an **"Open in Colab"** button at the top; click it and the notebook opens in Colab ready to run. Its first
cell detects Colab and installs Pyomo, the solvers and the course helper module for you.

The instructions below are for running the notebooks locally, or for contributing to this website.

### 1. Install conda

[Miniforge](https://github.com/conda-forge/miniforge) (recommended) or
[Anaconda](https://www.anaconda.com/download).

### 2. Create the environment

One environment covers both jobs: running the notebooks and building the website.

```bash
conda env create -f environment.yml
conda activate optimization_fall2026
```

### 3. Install the optimization solvers

IDAES distributes prebuilt binaries for Ipopt and friends:

```bash
idaes get-extensions
```

They install to `~/.idaes/bin`. Add that directory to your `PATH` so Pyomo can find them:

```bash…
