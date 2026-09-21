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
stars: 71
forks: 23
openIssues: 90
closedIssues: 422
watchers: 17
contributors: 52
recentReleases: 0
createdAt: "2020-10-08T06:31:34Z"
lastCommitAt: "2026-09-21T09:14:13Z"
lastReleaseAt: "2021-03-23T14:41:40Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 52
maintainers: ["renovate[bot]", "Mark90", "pboers1988"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a8b23998f2fbee023a46550c237769a99de433746601f121c36e523b6bf37b8/workfloworchestrator/orchestrator-core"
discussionCount: 1
---

# Orchestrator-Core

## Documentation

The documentation can be found at [workfloworchestrator.org](https://workfloworchestrator.org/orchestrator-core/).

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

Create a postgres database:

```shell
createuser -sP nwa
createdb orchestrator-core -O nwa  # set password to 'nwa'
```

Configure the database URI in your local environment:

```
export DATABASE_URI=postgresql+psycopg://nwa:nwa@localhost:5432/orchestrator-core
```

### Step 3 - Create main.py and wsgi.py

Create a `main.py` file for running the CLI.

```python
from orchestrator.core.cli.main import app as core_cli

if __name__ == "__main__":
    core_cli()
```

Create a `wsgi.py` file for running the web server.

```python
from orchestrator.core import OrchestratorCore
from…
