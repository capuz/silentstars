---
repo: "workfloworchestrator/orchestrator-core"
name: "orchestrator-core"
description: "The workflow orchestrator core repository"
readmeQualityOk: true
url: "https://github.com/workfloworchestrator/orchestrator-core"
homepage: "https://workfloworchestrator.org/orchestrator-core"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["orchestrator", "python"]
stars: 73
forks: 27
openIssues: 93
closedIssues: 446
watchers: 17
contributors: 54
recentReleases: 0
createdAt: "2020-10-08T06:31:34Z"
lastCommitAt: "2026-10-27T12:39:47Z"
lastReleaseAt: "2021-03-23T14:41:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 52
maintainers: ["renovate[bot]", "Mark90", "tvdven"]
openGraphImageUrl: "https://opengraph.githubassets.com/840bc47063234fcaffd8976543cb46b655b8c8fe8f7f019057fe370094914d87/workfloworchestrator/orchestrator-core"
discussionCount: 1
---

# Orchestrator-Core

## Documentation

The documentation can be found at [workfloworchestrator.org](https://workfloworchestrator.org/orchestrator-core/).
To run your orchestrator in containers or on Kubernetes, see
[Running your orchestrator](https://workfloworchestrator.org/orchestrator-core/getting-started/deployment/).

## Installation (quick start)

Simplified steps to install and use the orchestrator-core.
For more details, read the [Getting started](https://workfloworchestrator.org/orchestrator-core/getting-started/base/) documentation.

### Step 1 - Install the package

Create a virtualenv and install the orchestrator-core.

```shell
python -m venv .venv
source .venv/bin/activate
pip install orchestrator-core
```

### Step 2 - Setup the database

Create a postgres database. The server needs
[pgvector](https://workfloworchestrator.org/orchestrator-core/getting-started/deployment/#postgres-with-pgvector),
which the `pgvector/pgvector` Docker images include:

```shell
createuser -sP nwa
createdb orchestrator-core -O nwa  # set password to 'nwa'
```

Configure the database URI in your local environment:

```
export…
