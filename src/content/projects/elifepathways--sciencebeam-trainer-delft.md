---
repo: "eLifePathways/sciencebeam-trainer-delft"
name: "sciencebeam-trainer-delft"
description: "Wrapper around https://github.com/kermitt2/delft"
readmeQualityOk: true
url: "https://github.com/eLifePathways/sciencebeam-trainer-delft"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["sciencebeam"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 3
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2019-06-18T14:34:50Z"
lastCommitAt: "2026-09-18T14:02:49Z"
lastReleaseAt: "2020-11-18T18:12:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 78
maintainers: ["de-code", "dependabot[bot]", "HazalCiplak"]
openGraphImageUrl: "https://opengraph.githubassets.com/65cf48ec73bcd7e5b4ff1d8d5cbf7deb4576582c81a70a9ccf9cffe3958cf789/eLifePathways/sciencebeam-trainer-delft"
---

# ScienceBeam Trainer DeLFT

## Overview

Work in-progress..

A thin(ish) wrapper around [DeLFT](https://github.com/kermitt2/delft) to enable training in the cloud.

Some of the main features:

- resources (model, data etc.) can be loaded from remote sources, currently:
  - HTTP (`https://`, `http://`)
  - Google Storage (`gs://`)
- resources can be saved to remote buckets, currently:
  - Google Storage (`gs://`)
- on-demand embedding download
- Docker container(s)
- Support for Wapiti models

## Prerequisites

- Python 3

When using [pyenv](https://github.com/pyenv/pyenv),
you may need `libsqlite3-dev` and have Python installed with the `--enable-shared` flag.

For example:

```bash
apt-get install libsqlite3-dev
```

```bash
PYTHON_CONFIGURE_OPTS="--enable-shared" pyenv install --force 3.9.17
```

## Installing

Two dependency groups select which PyTorch wheel is installed, and they
conflict, so exactly one is named:

```bash
uv sync --extra delft --extra gcs \
  --no-default-groups --group dev --group cpu   # or --group gpu
```

`--all-groups` therefore does not work.

The groups apply to this project only: they are not published, and a uv source
does not cross a registry…
