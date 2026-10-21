---
repo: "port-labs/ocean"
name: "ocean"
description: "🌊 Ocean 🌊 is Port's open source framework for bringing live data from third-party systems into Port, the platform for building your AI software factory."
readmeQualityOk: true
url: "https://github.com/port-labs/ocean"
homepage: "https://ocean.port.io"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["integration-framework", "portio", "servicecatalog", "datasourceintegrations", "portintegration", "context-lake"]
stars: 194
forks: 167
openIssues: 31
closedIssues: 37
watchers: 11
contributors: 107
recentReleases: 0
createdAt: "2023-05-22T14:32:13Z"
lastCommitAt: "2026-10-21T08:50:28Z"
lastReleaseAt: "2023-07-18T13:15:20Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 46
maintainers: ["portmachineuser", "VenfiOranai", "omby8888"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3b5683a6aa79fe76378976d2d3ebf9cdd8f7623baaabb955e03e966aad32154/port-labs/ocean"
discussionCount: 1
---

# Ocean <img src="./assets/OceanSymbol.svg" alt="Ocean" width="100" height="100" align="right">

Ocean is Port's open source integration framework. It makes it easy to ingest data from your third-party tools and infrastructure into Port, the platform for building your AI software factory.

## Prerequisites

- Python 3.12

## Installation

In order to install the Ocean Framework, run the following command:

```bash
pip install "port-ocean[cli]"
```

Or

```bash
poetry add "port-ocean[cli]"
```

## Run Integration

1. source the integration venv

   ```bash
   . .venv/bin/activate
   ```

2. Run

   ```bash
   ocean sail ./path/to/integration
   ```

# Export Architecture

## Real-Time updates Architecture

## Integration Lifecycle

## Folder Structure

The Ocean Integration Framework follows a specific folder structure within this mono repository. This structure ensures proper organization and easy identification of integration modules. The suggested folder structure is as follows:

```
port-ocean/
├── port_ocean (framework)/
│ ├── ocean.py
│ ├── core/
| └── ...
└── integrations/
│  └─── integration_name/
│     ├──── main.py
│     ├──── pyproject.toml
│     └──── Dockerfile
├── ...…
