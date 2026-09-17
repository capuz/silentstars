---
repo: "port-labs/ocean"
name: "ocean"
description: "🌊 Ocean 🌊 is an innovative solution developed by Port to seamlessly integrate various third-party systems with our developer portal product, empowering engineers to effortlessly prioritize key features and streamline the integration process."
readmeQualityOk: true
url: "https://github.com/port-labs/ocean"
homepage: "https://ocean.getport.io"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["developerportal", "devportal", "integration-framework", "portio", "servicecatalog", "datasourceintegrations", "getportio", "portintegration"]
stars: 192
forks: 165
openIssues: 38
closedIssues: 29
watchers: 11
contributors: 104
recentReleases: 0
createdAt: "2023-05-22T14:32:13Z"
lastCommitAt: "2026-09-17T08:52:03Z"
lastReleaseAt: "2023-07-18T13:15:20Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 88
undervaluedScore: 45
maintainers: ["portmachineuser", "omby8888", "Hadar-Vaknin"]
openGraphImageUrl: "https://opengraph.githubassets.com/09b506992e48cbc251d44c0cb82182b5148717c3951c87ef38b087838270286c/port-labs/ocean"
discussionCount: 1
---

# Ocean <img src="./assets/OceanSymbol.svg" alt="Ocean" width="100" height="100" align="right">

Ocean is an innovative solution developed by Port to seamlessly integrate various third-party systems with our developer portal product,
empowering engineers to effortlessly prioritize key features and streamline the integration process.

## Prerequisites

- Python 3.11

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
│     ├────…
