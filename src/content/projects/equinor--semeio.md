---
repo: "equinor/semeio"
name: "semeio"
description: "Semeio is a collection of forward model steps and workflow jobs used in ert (https://github.com/equinor/ert)."
readmeQualityOk: true
url: "https://github.com/equinor/semeio"
homepage: "https://github.com/equinor/semeio"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["python", "ert"]
stars: 11
forks: 33
openIssues: 15
closedIssues: 238
watchers: 9
contributors: 54
recentReleases: 0
createdAt: "2019-11-25T08:41:34Z"
lastCommitAt: "2026-09-02T08:03:24Z"
lastReleaseAt: "2020-02-20T11:58:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 80
maintainers: ["larsevj", "dependabot[bot]", "berland"]
openGraphImageUrl: "https://opengraph.githubassets.com/67ef89dad3ba4085f3a029b585da85ca2518395ce4726b5045229cb8c2d43e79/equinor/semeio"
---

# semeio

Semeio is a collection of forward models and workflows used in [ERT](https://github.com/equinor/ert). These are
exposing end points which is considered the API of semeio. If there are submodules that can be applied
more generally, or have use outside these forward models and workflows, please create an issue and it can be exposed in
the API.

# Installation

Semeio is available on [pypi](https://pypi.org/project/semeio/) and can be installed using `pip install semeio`.

```sh
# Install
pip install semeio
```

# Usage

Once installed semeio will automatically register its workflows and forward models with
[ERT](https://github.com/equinor/ert). Through the plugin hooks it will also add its own documentation to the [ERT](https://github.com/equinor/ert)
documentation. See the [ERT](https://github.com/equinor/ert) documentation for examples on
how to run workflows and forward models, and build the [ERT](https://github.com/equinor/ert) documentation to get
documentation for the workflows and forward models.

## Developing

We use uv to have one synchronized development environment for all packages.
See [installing uv](https://docs.astral.sh/uv/getting-started/installation/).…
