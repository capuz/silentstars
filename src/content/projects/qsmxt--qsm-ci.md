---
repo: "QSMxT/QSM-CI"
name: "QSM-CI"
description: "An online QSM challenge"
readmeQualityOk: true
url: "https://github.com/QSMxT/QSM-CI"
homepage: "https://qsmxt.github.io/QSM-CI/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [52, 20]
stars: 8
forks: 10
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 7
recentReleases: 2
createdAt: "2023-06-22T03:48:20Z"
lastCommitAt: "2026-07-16T05:59:34Z"
lastReleaseAt: "2026-07-16T03:56:45Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 96
undervaluedScore: 96
maintainers: ["astewartau", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c73ce170d585f5426d2a7323825affd6a201a61fe2e751c5135d9f9e6e5cf166/QSMxT/QSM-CI"
discussionCount: 0
---

# QSM-CI

**An open challenge and leaderboard for Quantitative Susceptibility Mapping (QSM) reconstruction.**

Submit a QSM algorithm — in any language, as a container — and QSM-CI runs it on standardized data,
scores it against held-out ground truth, and publishes the result to an interactive leaderboard.
Every published algorithm gets a citable Zenodo DOI and can be run by anyone with one command.

## → https://qsmxt.github.io/QSM-CI

- **[Leaderboard](https://qsmxt.github.io/QSM-CI/leaderboard.html)** — per-stage tables and the
  background-removal × dipole-inversion combination matrix, with an interactive volume viewer.
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

Algorithms are fetched from Zenodo and run in their pinned container, so results are…
