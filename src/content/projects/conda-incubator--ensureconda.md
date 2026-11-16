---
repo: "conda-incubator/ensureconda"
name: "ensureconda"
description: "Simple installer for conda (and conda-likes)"
readmeQualityOk: true
url: "https://github.com/conda-incubator/ensureconda"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [59, 41]
topics: ["conda", "hacktoberfest"]
stars: 17
forks: 5
openIssues: 13
closedIssues: 9
watchers: 2
contributors: 31
recentReleases: 0
createdAt: "2020-08-03T23:13:29Z"
lastCommitAt: "2026-11-16T11:52:54Z"
lastReleaseAt: "2025-04-02T12:13:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 61
maintainers: ["maresb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/847f086688ae03723aa5b48c7ca185b2ab51e7e51f73e04a89a386e20b155564/conda-incubator/ensureconda"
---

# ensureconda

## Installation

### Python-based

ensureconda is distributed on [PyPI](https://pypi.org) as a universal
wheel and is available on Linux, macOS and Windows and supports
Python 3.8+ and PyPy.

```bash
$ pip install ensureconda
```

### Go based

ensureconda is also available as a statically linked Go binary. It finds or
installs an executable and prints its path. JSON output and configurable
minimum-version flags are currently available only in the Python CLI.

These can be downloaded from [releases](https://github.com/conda-incubator/ensureconda/releases/latest)

Alternatively if you have go installed you can install from githubg using

```shell
$ go install github.com/conda-incubator/ensureconda@latest
$ ensureconda --help
```

## Usage

Ensureconda is a cli tool that will

1. Find a preexisting conda/mamba executable
2. Install one if nothing was found and installation is allowed.
3. Return the path of the executable found/installed on stdout

```
ensureconda --help
Usage: ensureconda [OPTIONS]

  Ensures that a conda/mamba is installed.

Options:
  --mamba / --no-mamba            search for mamba
  --micromamba / --no-micromamba  search for micromamba, install if…
