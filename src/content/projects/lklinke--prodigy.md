---
repo: "LKlinke/Prodigy"
name: "Prodigy"
description: "A tool that analyses probabilistic programs, allows for automatic invariance checking and handles inference all based on Generatingfunctionology."
readmeQualityOk: true
url: "https://github.com/LKlinke/Prodigy"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 6
forks: 3
openIssues: 35
closedIssues: 81
watchers: 1
contributors: 10
recentReleases: 5
createdAt: "2022-05-02T15:01:58Z"
lastCommitAt: "2026-11-07T09:30:22Z"
lastReleaseAt: "2026-11-05T14:00:57Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 89
maintainers: ["LKlinke"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ace0635826bced5f3916a77ebfee25b76d6a52025d0df7762ad83603f6ba0d5/LKlinke/Prodigy"
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
