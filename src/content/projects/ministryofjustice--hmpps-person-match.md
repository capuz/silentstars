---
repo: "ministryofjustice/hmpps-person-match"
name: "hmpps-person-match"
description: "An API wrapper around a model developed by the MoJ Analytical Platform for scoring the confidence of people matches across MoJ systems. (bootstrapped 2025-01-08)"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/hmpps-person-match"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["hmpps", "api"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 7
watchers: 17
contributors: 13
recentReleases: 0
createdAt: "2025-01-08T15:34:40Z"
lastCommitAt: "2026-09-29T10:04:55Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "community_watch"]
healthScore: 99
undervaluedScore: 66
maintainers: ["renovate[bot]", "lbevan", "ADBond"]
openGraphImageUrl: "https://opengraph.githubassets.com/d622e41e208d9451c90489c329de6b0ce53face6169d3601ed1b1c0582ca8c6a/ministryofjustice/hmpps-person-match"
---

<# HMPPS Person Match API

An API wrapper around a model developed by the MoJ Analytical Platform for scoring the confidence 
of people matches across MoJ systems.

## Pre-Requisites

* Python 3.14
* [uv](https://docs.astral.sh/uv/)

```shell
curl -LsSf https://astral.sh/uv/0.9.7/install.sh | sh
```

Keep `uv` up to date by running `uv self update` to make sure it matches the version specified in the Dockerfile

If you need to update a transitive dependency (for example to fix a security vulnerability), do this:

0. make sure you are on the latest version of uv
1. `uv lock --upgrade-package <package-name>==<package-version>`

This should result in a small change to the lockfile updating the transitive dependency to the desired version.

## Quickstart

### Install

To install the dependencies and setup the virtual environment, run the following command:

```shell
make install
```

### Run locally

To start the development server locally, run the following command:

```shell
make run-local
```

Utilises hot reloading so you can make changes to the application without having to restart the server.

Which means you can now call the locally running application.

Calling the health…
