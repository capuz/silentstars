---
repo: "QSMxT/QSM-CI"
name: "QSM-CI"
description: "An online QSM challenge"
readmeQualityOk: true
url: "https://github.com/QSMxT/QSM-CI"
homepage: "https://qsmxt.github.io/QSM-CI/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [45, 24]
stars: 8
forks: 10
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 8
recentReleases: 5
createdAt: "2023-06-22T03:48:20Z"
lastCommitAt: "2026-08-08T04:36:07Z"
lastReleaseAt: "2026-08-01T04:57:14Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 98
undervaluedScore: 99
maintainers: ["astewartau", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d831dd0a561dc7c8c53ce96cde459edb1e393b17927028327b6b8a955359f8a1/QSMxT/QSM-CI"
discussionCount: 0
---

# QSM-CI

**An open benchmarking platform and leaderboard for Quantitative Susceptibility Mapping (QSM) reconstruction.**

Submit a QSM algorithm — in any language, as a container — and QSM-CI runs it on standardized data,
scores it against held-out ground truth, and publishes the result to an interactive leaderboard.
Every published algorithm gets a citable Zenodo DOI and can be run by anyone with one command.

## → https://qsmxt.github.io/QSM-CI

- **[Results](https://qsmxt.github.io/QSM-CI/results.html)** — per-stage tables, the
  background-removal × dipole-inversion combination matrix, and findings, with an interactive volume viewer.
- **[Run an algorithm](https://qsmxt.github.io/QSM-CI/running.html)** — locally or from a workflow
  engine (nipype, Pydra, CWL, Snakemake, Nextflow).
- **[Submit yours](https://qsmxt.github.io/QSM-CI/submit.html)** — open a pull request adding a folder
  under `algorithms/`.

## Run an algorithm

```bash
pip install qsm-ci
qsm-ci list                                   # the published algorithms you can run
qsm-ci run sharp --totalfield tf.nii.gz --mask mask.nii.gz
```

Algorithms are fetched from Zenodo and run in their pinned container, so…
