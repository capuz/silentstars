---
repo: "QSMxT/QSM-CI"
name: "QSM-CI"
description: "An online QSM challenge"
readmeQualityOk: true
url: "https://github.com/QSMxT/QSM-CI"
homepage: "https://qsmxt.github.io/QSM-CI/"
language: "Python"
languages: ["Python"]
languagePcts: [54]
stars: 9
forks: 9
openIssues: 18
closedIssues: 55
watchers: 2
contributors: 8
recentReleases: 5
createdAt: "2023-06-22T03:48:20Z"
lastCommitAt: "2026-10-31T09:55:36Z"
lastReleaseAt: "2026-09-20T19:30:02Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 95
maintainers: ["astewartau"]
openGraphImageUrl: "https://opengraph.githubassets.com/80b623e4bb136b218b947d0adabe3d872bfddd835df1734bff338b2f161448b9/QSMxT/QSM-CI"
discussionCount: 0
---

# QSM-CI

**An open benchmarking platform and leaderboard for Quantitative Susceptibility Mapping (QSM) reconstruction.**

Submit a QSM algorithm — in any language, as a container — and QSM-CI runs it on standardized data,
scores it against ground truth, and publishes the result to an interactive leaderboard.
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
qsm-ci run sharp-qsmrs --totalfield tf.nii.gz --mask mask.nii.gz
```

Algorithms are fetched from Zenodo and run in their pinned container, so results…
