---
repo: "openbraininstitute/obi-one"
name: "obi-one"
description: "Standardized workflows for biophysically-detailed brain modeling"
readmeQualityOk: true
url: "https://github.com/openbraininstitute/obi-one"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [78, 22]
stars: 5
forks: 1
openIssues: 30
closedIssues: 301
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2025-01-23T12:52:34Z"
lastCommitAt: "2026-11-17T14:35:21Z"
lastReleaseAt: "2025-06-13T15:49:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 76
maintainers: ["eleftherioszisis", "obi-one-release[bot]", "ilkilic"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a391b5c4b4ff10e24142fe94d942c892d2d0c6d429eafbf8bf404520dfbe999/openbraininstitute/obi-one"
---

# OBI-ONE

OBI-ONE is a standardized library of workflows for biophysically-detailed brain modeling, with the following features:
- Integration with a standardized cloud database for neuroscience and computational neuroscience through [**entitysdk**](https://github.com/openbraininstitute/entitysdk).
- Standardized provenance of workflows.
- Standardized parameter scans across different modeling workflows.
- Corresponding OpenAPI schema and service generated from Pydantic.

# Installation

## For Most Users (Default)

```bash
# Install core + science dependencies
make install
```

This installs everything needed for running tasks and data processing scripts.

## For Development (Full Setup)

```bash
# Install all dependencies + dev tools
make install-dev
```

This installs everything needed for development: all optional dependencies + dev tools (pytest, ruff, etc.).

## For Specific Use Cases

```bash
# Service deployment
make install-service

# Notebook development
make install-notebooks

# Production build (all deps, no dev tools)
make install-all
```

## Pre-installation Requirements

```bash
brew install uv open-mpi boost cmake
```

# Launch-script Dependencies

The scripts…
