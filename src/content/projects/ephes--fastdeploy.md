---
repo: "ephes/fastdeploy"
name: "fastdeploy"
description: "A deployment automation platform with web interface and real-time monitoring"
readmeQualityOk: true
url: "https://github.com/ephes/fastdeploy"
homepage: "https://fastdeploy-ephes.readthedocs.io/en/latest/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [44, 43]
topics: ["ansible", "automation", "deployment", "devops", "fastapi", "python", "typescript", "vue", "websockets"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 24
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-10-11T08:11:14Z"
lastCommitAt: "2026-11-12T11:41:36Z"
lastReleaseAt: "2022-03-21T06:24:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 81
maintainers: ["ephes"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbcf962c25050844ec07ad2425cd1f98081f2c02ace0b29b56a4e3503c2ba7f4/ephes/fastdeploy"
---

# fastDeploy

A deployment automation platform that enables both technical and non-technical users to deploy web applications via API or web interface. Features real-time deployment monitoring through WebSockets and manages infrastructure using Ansible playbooks.

## 📚 Full Documentation

**[Read the full documentation on Read the Docs](https://fastdeploy-ephes.readthedocs.io/en/latest/)**

## Requirements

- Python 3.11+ (fully compatible with Python 3.14)
- PostgreSQL
- Node.js and npm (for frontend development)
- uv (for Python package management)

## Quick Start

```shell
# Install dependencies
just install

# Initialize and setup database
just db-init        # First time only
just db-start       # In a separate terminal
just db-create      # Create deploy and deploy_test databases
just createuser     # Create initial user

# Start all development services
just dev            # Starts postgres, fastapi, frontend, and docs

# Note: The project uses a src layout for Python code.
# The backend package 'deploy' is located at src/deploy/
```

## Installation for development

### Create a venv & activate it and install the dev requirements
```shell
uv venv -p python3.13  # or…
