---
repo: "SchweizerischeBundesbahnen/pandoc-service"
name: "pandoc-service"
description: "A Dockerized service providing a REST API interface to leverage Pandoc's functionality for converting documents from one format into another"
readmeQualityOk: true
url: "https://github.com/SchweizerischeBundesbahnen/pandoc-service"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["polarion", "polarion-alm"]
stars: 6
forks: 2
openIssues: 5
closedIssues: 88
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-02-05T16:14:07Z"
lastCommitAt: "2026-11-05T08:05:44Z"
lastReleaseAt: "2026-01-22T10:32:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 80
maintainers: ["renovate[bot]", "grigoriev", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eda5c86154e28b4b83b5ed5c47b2e0a56668e1e99fd21483fc937d6946551e3d/SchweizerischeBundesbahnen/pandoc-service"
discussionCount: 0
---

# Pandoc Service

A Dockerized service providing a REST API interface to leverage [Pandoc](https://pandoc.org/)'s functionality for converting documents
from one format into another.

## Features

- Simple REST API to access [Pandoc](https://pandoc.org/)
- Direct subprocess calls to the pandoc binary (no Python module dependency)
- Embedded SVG diagrams drawn with weasysvg, vector where the target allows it, so SVGs (e.g. draw.io / mxgraph) render correctly in targets with weak SVG support such as Word
- Prometheus metrics endpoint on dedicated port (9182) for monitoring and Grafana integration
- Compatible with amd64 and arm64 architectures
- Easily deployable via Docker

## Getting Started

### Installation

To install the latest version of the Pandoc Service, run the following command:

```bash
docker pull ghcr.io/schweizerischebundesbahnen/pandoc-service:latest
```

### Running the Service

To start the Pandoc service container, execute:

```bash
docker run --init --detach \
  --publish 9082:9082 \
  --publish 9182:9182 \
  --name pandoc-service \
  --env REQUEST_BODY_LIMIT_MB=500 \
  ghcr.io/schweizerischebundesbahnen/pandoc-service:latest
```

The service will be accessible…
