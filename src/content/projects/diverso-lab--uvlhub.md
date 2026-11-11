---
repo: "diverso-lab/uvlhub"
name: "uvlhub"
description: "Repository of feature models in UVL format integrated with Zenodo and flamapy following Open Science principles - Developed by DiversoLab"
readmeQualityOk: true
url: "https://github.com/diverso-lab/uvlhub"
homepage: "https://docs.uvlhub.io"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["featuremodel", "flask", "openscience", "repository", "uvl", "softwareproductline"]
stars: 15
forks: 643
openIssues: 2
closedIssues: 87
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2023-05-16T11:16:47Z"
lastCommitAt: "2026-11-11T17:22:22Z"
lastReleaseAt: "2024-03-22T08:09:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 82
maintainers: ["drorganvidez", "EstherRocio012"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1761e161aecfb7ab1633252f0e1cec80dd37cb8763e1be31bdf213940e4dbfc/diverso-lab/uvlhub"
---

# uvlhub

The open repository of UVL feature models, live at <https://www.uvlhub.io>.
uvlhub 3.0 is built with SPLENT and derived from the `openhubs_spl` product line
(OpenHubs).

This repository is a thin shell. It declares which features the product installs
(see `pyproject.toml`) and SPLENT composes, validates and runs them.

## Run it locally

Your machine only needs **Docker**, **Git** and **GNU Make**. Python, Node and
the database all live inside containers, so nothing else has to be installed.

### 1. Create a workspace

A SPLENT product is not standalone. It lives in a workspace folder next to the
SPLENT tooling repositories.

```bash
mkdir splent_workspace && cd splent_workspace
git clone https://git.splent.io/splent-io/splent_framework.git
git clone https://git.splent.io/splent-io/splent_cli.git
git clone https://github.com/diverso-lab/uvlhub.git uvlhub
```

Those three are all you need to run the product. The variability model this
product derives from is not one of them: `pyproject.toml` records its DOI under
`[tool.splent.spl_model]`, so the CLI downloads it once from UVLHub and caches
it under `.splent_cache/spls/`.

### 2. Check your Git config file

The CLI…
