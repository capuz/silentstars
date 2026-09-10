---
repo: "cybozu/neco-containers"
name: "neco-containers"
description: "Dockerfiles for OSS products used in Neco"
readmeQualityOk: true
url: "https://github.com/cybozu/neco-containers"
language: "Go"
languages: ["Go", "Dockerfile"]
languagePcts: [72, 20]
stars: 47
forks: 12
openIssues: 2
closedIssues: 8
watchers: 16
contributors: 66
recentReleases: 0
createdAt: "2018-04-18T07:37:47Z"
lastCommitAt: "2026-09-10T08:20:10Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 52
maintainers: ["takahiro-yamada", "ystkfujii", "umezawatakeshi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/130022929/d7c18200-71a0-11e9-8f42-48d61905ad75"
---

# Neco Containers

This repository contains Dockerfiles to build OSS products
used in our project, Neco.  They are built from the official
sources, and based on our Ubuntu base image.

See also: [github.com/cybozu/ubuntu-base](https://github.com/cybozu/ubuntu-base).

Built images can be pulled from [ghcr.io/cybozu][ghcr].

## How it works

Subdirectories in this repository have `TAG` and `BRANCH` files
in addition to files to build Docker images.

Each directory that contains a `Dockerfile` must also have a
`build-targets.yaml` alongside it. This file declares the build entries
(image name, scan settings, platforms, etc.) for that Dockerfile, and
its enclosing directory is used as the build context. See the header of
[`generate_matrix`](https://github.com/cybozu/neco-containers/blob/HEAD/generate_matrix) for the full list of fields.

These will be used by GitHub Actions to tag the built images.
GitHub Actions does the following each time commits are pushed to a branch.

1. For each directory containing `TAG` file:
    1. Read `TAG` file and check if the repository at [ghcr.io/cybozu][ghcr] with the same name of the directory.
    2. If the repository contains the same tag in…
