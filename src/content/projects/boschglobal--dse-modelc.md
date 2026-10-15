---
repo: "boschglobal/dse.modelc"
name: "dse.modelc"
description: "Model C Library of the Dynamic Simulation Environment Core Platform."
readmeQualityOk: true
url: "https://github.com/boschglobal/dse.modelc"
homepage: "https://boschglobal.github.io/dse.doc/"
language: "C"
languages: ["C"]
languagePcts: [72]
stars: 8
forks: 7
openIssues: 2
closedIssues: 8
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2023-03-21T10:12:39Z"
lastCommitAt: "2026-10-15T08:31:55Z"
lastReleaseAt: "2023-11-02T07:45:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 85
maintainers: ["timrulebosch", "kirangowdabosch", "jsmidtbosch"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8ef7ca5f7242b681425627a407ddb77ff00953a2e4404fa155a9600b9dd6994/boschglobal/dse.modelc"
---

# Dynamic Simulation Environment - Model C Library

## Introduction

Model C Library of the Dynamic Simulation Environment (DSE) Core Platform.

### User Guide

* [Simer - Simulation Runner](https://boschglobal.github.io/dse.doc/docs/user/simer/)

### Project Structure

```text
dse.modelc
├── doc                     <-- Project documentation.
├── dse/modelc              <-- Model C Library source code.
├── extra
│   ├── go                  <-- Go packages.
│   └── tools
│       ├── simer           <-- Simer simulation runner.
│       └── trace           <-- Simulation trace tool.
├── licenses                <-- Third-party licenses.
├── tests
│   ├── cmocka              <-- Unit and integration tests (C/CMocka).
│   └── e2e                 <-- End-to-end (E2E) tests.
├── Makefile                <-- Repo-level Makefile.
└── Taskfile.yml            <-- Taskfile containing supporting automation.
```

## Usage

Simulations can be run using the Simer tool, which is part of this project.

```bash
# Define a shell function for the Simer tool.
export SIMER_IMAGE=ghcr.io/boschglobal/dse-simer:latest
simer() { ( cd "$1" && shift && docker run -it --rm -v "$(pwd):/sim" "$SIMER_IMAGE" "$@"; )…
