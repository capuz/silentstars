---
repo: "opera-adt/disp-s1"
name: "disp-s1"
description: "OPERA Displacement from Sentinel-1 workflows"
readmeQualityOk: true
url: "https://github.com/opera-adt/disp-s1"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [56, 42]
stars: 16
forks: 14
openIssues: 2
closedIssues: 50
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2023-08-10T18:44:30Z"
lastCommitAt: "2026-10-26T18:06:41Z"
lastReleaseAt: "2024-04-10T18:58:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 63
maintainers: ["mgovorcin", "mirzaees", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4954f9fa375d3b9d1185ae6151cedf83d4a0874f1f54c6106719cc7950047ac2/opera-adt/disp-s1"
---

# DISP-S1

Surface Displacement workflows for OPERA DISP-S1 products.

Creates the science application software (SAS) using the [dolphin](https://github.com/opera-adt/dolphin) library.

## Development setup

### Prerequisite installs
1. Download source code:
```bash
git clone https://github.com/isce-framework/dolphin.git
git clone https://github.com/isce-framework/tophu.git
git clone https://github.com/opera-adt/disp-s1.git
```
2. Install dependencies, either to a new environment:
```bash
mamba env create --name my-disp-env --file disp-s1/conda-env.yml
conda activate my-disp-env
```
or install within your existing env with mamba.

3. Install `tophu, dolphin` and `disp-s1` via pip in editable mode
```bash
python -m pip install --no-deps -e dolphin/ tophu/ disp-s1/
```

### Setup for contributing

We use [pre-commit](https://pre-commit.com/) to automatically run linting, formatting, and [mypy type checking](https://www.mypy-lang.org/).
Additionally, we follow [`numpydoc` conventions for docstrings](https://numpydoc.readthedocs.io/en/latest/format.html).
To install pre-commit locally, run:

```bash
pre-commit install
```
This adds a pre-commit hooks so that linting/formatting is done…
