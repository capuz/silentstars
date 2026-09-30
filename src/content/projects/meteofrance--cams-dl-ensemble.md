---
repo: "meteofrance/cams-dl-ensemble"
name: "cams-dl-ensemble"
description: "Copernicus CAMS_40_bis work package 4067 subtask 2, Deep Learning Ensemble for European air quality forecast."
readmeQualityOk: true
url: "https://github.com/meteofrance/cams-dl-ensemble"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 7
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-09-19T09:15:02Z"
lastCommitAt: "2026-09-30T09:56:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 48
maintainers: ["kalharko", "tourniert", "LBerth"]
openGraphImageUrl: "https://opengraph.githubassets.com/212f1e2d06d8c0f41cb44528b1f3f92d89b29d83bbd4ca2320ad32886c74d3d4/meteofrance/cams-dl-ensemble"
---

# CAMS_40_bis WP4067
_Deep Learning Ensemble pollutant prediction_

## Context
This project's goal is to train a machine learning model to produce an ensemble prediction to replace the current CAMS median ensemble.

## Installation instructions

### Using uv
```sh
git clone https://github.com/meteofrance/cams-dl-ensemble.git
cd cams-dl-ensemble
uv sync
```
> Using uv, the subsequent usage commands should be run with
> `uv run <file.py>` instead of `python <file.py>`

### Using pip
Check that you are using a version of python >= 3.12.
```sh
git clone https://github.com/meteofrance/cams-dl-ensemble.git
cd cams-dl-ensemble
python -m venv .venv
source .venv/bin/activate  # On windows: .venv/Script/Activate.ps1
pip install .
```

### Using `skew` or `kurtosis` statistics
To use `skew` or `kurtosis` statistics in the `ReplaceEnsembleByStatisctics` transform, you should export:
```bash
export SCIPY_ARRAY_API=1
```
This enables array API from `scipy`. Please see https://docs.scipy.org/doc/scipy/dev/api-dev/array_api.html for more details.

## Usage

* To **plot a sample** from the CAMS dataset:

```bash
python scripts/plot_sample.py [-h] [--save_dir SAVE_DIR] YYYY-MM-DD
```

* To **train…
