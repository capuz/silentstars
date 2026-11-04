---
repo: "LKlinke/Prodigy"
name: "Prodigy"
description: "A tool that analyses probabilistic programs, allows for automatic invariance checking and handles inference all based on Generatingfunctionology."
readmeQualityOk: true
url: "https://github.com/LKlinke/Prodigy"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 6
forks: 2
openIssues: 13
closedIssues: 57
watchers: 1
contributors: 10
recentReleases: 4
createdAt: "2022-05-02T15:01:58Z"
lastCommitAt: "2026-11-04T11:28:14Z"
lastReleaseAt: "2026-11-03T22:09:26Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 88
maintainers: ["LKlinke", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/067d982aa227033b145a24157c4c5f7a9d6e796b609fef1f1effa18751fb5278/LKlinke/Prodigy"
---

# prodigy: PRObability DIstributions via GeneratingfunctionologY

prodigy is a prototypical tool for the analysis of probabilistic non-negative integer programs with `while`-loops. It is based on (probability) generating functions.

It provides a command-line interface and a web GUI.

## Contents

1. Installation
2. Basic Usage

## Installation

### With pip

Prodigy is on PyPI as `prodigy-ppl` (the command and the Python package are called `prodigy`):

```bash
pip install prodigy-ppl
```

This needs Python 3.11 or newer and contains the SymPy, SymEngine and the faster GiNaC engine (`--engine ginac`).
The GiNaC engine comes from [`prodigy-ppl-ginac`](https://pypi.org/project/prodigy-ppl-ginac/), whose wheels bundle
GiNaC; pip installs it on Linux (x86_64, aarch64, glibc) and macOS with Python 3.11–3.14. Elsewhere, the extra `ginac`
builds it from source, which needs a C++17 compiler, CMake and [GiNaC](https://www.ginac.de/Download.html):

```bash
pip install "prodigy-ppl[ginac]"
```

### With Docker

The image contains the command line and the web GUI with the SymPy, GiNaC and SymEngine engines, for amd64 and arm64
(tags: version, e.g. `3.1.0`, minor version `3.1`, and `latest`).…
