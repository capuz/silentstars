---
repo: "OpenAEV-Platform/client-python"
name: "client-python"
description: "OpenAEV Python client"
readmeQualityOk: true
url: "https://github.com/OpenAEV-Platform/client-python"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 6
forks: 5
openIssues: 17
closedIssues: 66
watchers: 2
contributors: 49
recentReleases: 0
createdAt: "2023-10-15T10:59:35Z"
lastCommitAt: "2026-10-23T08:46:25Z"
lastReleaseAt: "2024-06-06T14:48:14Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 86
maintainers: ["Filigran-Automation", "SamuelHassine", "guzmud"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5ec3f0465b1e6efb3c180b48a32f23b0e562819adc5914287ae46c9968815e1/OpenAEV-Platform/client-python"
---

# OpenAEV client for Python

The official OpenAEV Python client helps developers to use the OpenAEV API by providing easy to use methods and utils.
This client is also used by some OpenAEV components.

## Install

To install the latest Python client library, please use `pip`:

```bash
$ pip3 install pyoaev
```

## Local development

```bash
# Fork the current repository, then clone your fork
$ git clone https://github.com/YOUR-USERNAME/client-python
$ cd client-python
$ git remote add upstream https://github.com/OpenAEV-Platform/client-python.git
# Create a branch for your feature/fix
$ git checkout -b [branch-name]
# Create a virtualenv
$ python3 -m venv .venv
$ source .venv/bin/activate
# Install the client-python and dependencies for the development and the documentation
$ python3 -m pip install -e .[dev,doc]
# Set up the git hook scripts
$ pre-commit install
# Create your feature/fix
# Create tests for your changes
$ python -m pytest
# Push you feature/fix on Github
$ git add [file(s)]
$ git commit -m "[descriptive message]"
$ git push origin [branch-name]
# Open a pull request
```

### Install the package locally

```bash
$ pip install -e .
```

## Documentation

### Client…
