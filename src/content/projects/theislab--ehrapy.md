---
repo: "theislab/ehrapy"
name: "ehrapy"
description: "Electronic Health Record Analysis with Python."
readmeQualityOk: true
url: "https://github.com/theislab/ehrapy"
homepage: "https://ehrapy.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["scverse", "electronic-health-record", "electronic-medical-record", "ehr", "clinical-data", "epidemiology", "mimic", "omop", "physionet"]
stars: 367
forks: 53
openIssues: 5
closedIssues: 395
watchers: 2
contributors: 34
recentReleases: 0
createdAt: "2021-06-11T13:01:50Z"
lastCommitAt: "2026-10-09T10:49:52Z"
lastReleaseAt: "2025-01-06T16:13:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 40
maintainers: ["Zethson", "sueoglu", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/21d4da2bfe465025d5a036e8b76b04edb4ea2f6f97c3e7ab93e19186e6184787/theislab/ehrapy"
---

# ehrapy: electronic health record (EHR) analysis in Python

ehrapy is an open-source Python framework for exploratory and statistical analysis of electronic health records (EHR) and other clinical and epidemiological data.
It reads static and longitudinal patient data from OMOP databases, public datasets such as MIMIC and PhysioNet, or your own tables.
It is for clinical researchers, epidemiologists and data scientists who want to go from raw patient data to quality-controlled cohorts, patient groups, trajectories, statistical tests, survival curves and treatment effect estimates in one reproducible workflow.
With `ep.ml`, it also trains and evaluates prediction models on the same data, from gradient boosting to recurrent and transformer networks, with patient-level splits, calibration and subgroup metrics.

## Installation

You can install _ehrapy_ via [pip] from [PyPI]:

```console
$ pip install ehrapy
```

Optional extras enable dask-backed out-of-core arrays (`ehrapy[dask]`), Leiden clustering (`ehrapy[leiden]`), deep learning prediction models (`ehrapy[ml]`), and GPU acceleration through rapids-singlecell (`ehrapy[rapids12]` or `ehrapy[rapids13]`).

## Quickstart

Cluster…
