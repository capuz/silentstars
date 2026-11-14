---
repo: "BioGRID/BIOGRID-REST-EXAMPLES"
name: "BIOGRID-REST-EXAMPLES"
description: "Sample code for working with the BioGRID REST Service API in Python"
readmeQualityOk: true
url: "https://github.com/BioGRID/BIOGRID-REST-EXAMPLES"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bioinformatics", "rest", "rest-api", "python", "python3", "examples", "biogrid", "pandas", "pandas-dataframe"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-09-13T18:59:21Z"
lastCommitAt: "2026-11-14T21:59:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 33
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5961d809116ebab14bd95133b97f9b67d36db06aec3ba071f1693258cfbb1deb/BioGRID/BIOGRID-REST-EXAMPLES"
---

# BIOGRID-REST-EXAMPLES
Sample code for accessing the BioGRID Rest Service and working with the resulting datasets.

## Development Status
+ **Status**: Stable
+ **Version**: 2.0

## Requirements
+ Python 3.12+
+ [uv](https://docs.astral.sh/uv/) for Python and dependency management. Install it with `curl -LsSf https://astral.sh/uv/install.sh | sh` (see the uv docs for other options).
+ Dependencies are declared in `pyproject.toml` and pinned in `uv.lock`: [httpx](https://www.python-httpx.org/) for HTTP requests, [loguru](https://loguru.readthedocs.io/) for logging, [pandas](https://pandas.pydata.org/) and [polars](https://pola.rs/) for dataframes, and PyYAML for configuration.

## Installation
From inside this directory, run:

```bash
uv sync
```

This installs Python 3.12 (if needed), creates a `.venv` virtual environment, and installs all dependencies, including the development tools.

## Configuration
+ All configuration options are located in the config/config.sample.yml file in YAML format. Simply copy the file to config/config.yml and update the options contained within to reflect your own environment.
+ All access to the BioGRID REST Webservice requires an individual access…
