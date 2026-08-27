---
repo: "unive-alvie/alvie"
name: "alvie"
description: "The ALVIE tool, accompanying the paper: \"Bridging the Gap: Automated Analysis of Sancus\""
readmeQualityOk: true
url: "https://github.com/unive-alvie/alvie"
homepage: "https://unive-alvie.github.io/"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [68]
stars: 8
forks: 0
openIssues: 10
closedIssues: 9
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-02-13T12:52:40Z"
lastCommitAt: "2026-08-27T14:25:52Z"
lastReleaseAt: "2024-02-14T09:32:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 64
maintainers: ["matteobusi", "mcaos42"]
openGraphImageUrl: "https://opengraph.githubassets.com/4068387ab710130e43f79e8b5be068c8d6af4245fff6dc55e4b0af4095725c19/unive-alvie/alvie"
---

# ALVIE

ALVIE is an open-source security-analysis framework that learns finite-state models of a system's observable behavior and compares them for information-flow differences.
It combines active automata learning with model checking to produce witness traces when selected behaviors are distinguishable.
**ALVIE/Sancus** is the current backend and workflow for Sancus/openMSP430 systems.

[Homepage](https://unive-alvie.github.io/alvie/) · [Documentation](https://unive-alvie.github.io/alvie/guides/walkthrough-repro/) · [Getting Started](https://unive-alvie.github.io/alvie/getting-started/) · [Docker Hub](https://hub.docker.com/r/matteobusi/alvie) · [Paper](https://ieeexplore.ieee.org/abstract/document/10664425)

## Quick Start

The published Docker image is the quickest way to run ALVIE/Sancus:

```bash
docker pull matteobusi/alvie
docker run --rm -it matteobusi/alvie
```

Inside the container, start with the [Getting Started guide](https://unive-alvie.github.io/alvie/getting-started/).
It builds the project, runs the included example, renders a witness graph, and explains the resulting artifacts.

For a local development checkout, build the OCaml project with:

```bash
cd…
