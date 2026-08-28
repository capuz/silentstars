---
repo: "datarobot-community/datarobot-opentelemetry-integration"
name: "datarobot-opentelemetry-integration"
description: "DataRobot opentelemetry semantic conventions and helper tools"
readmeQualityOk: true
url: "https://github.com/datarobot-community/datarobot-opentelemetry-integration"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["dr-engineering"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-03-17T10:48:22Z"
lastCommitAt: "2026-08-28T14:36:35Z"
lastReleaseAt: "2026-08-28T14:37:13Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 50
maintainers: ["nek-taras", "dependabot[bot]", "andriykislitsyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2c4d94a34a69cdf54359c93ccd96e6fa3dfc4062d02bfe053fed12a79903676/datarobot-community/datarobot-opentelemetry-integration"
---

# datarobot-opentelemetry-integration

## Overview

This package provides OpenTelemetry semantic conventions and helper utilities used by DataRobot for telemetry collection.

## Requirements

- **Python**: 3.12 or higher
- **uv**: Package manager and Python virtualenv manager ([install uv](https://docs.astral.sh/uv/getting-started/installation/))
- **Docker**: Required for license header checks (for running `make license-check`)
- **make**: For running development tasks

## Local Development

### Setup

1. **Clone the repository**:
   ```bash
   git clone git@github.com:datarobot-community/datarobot-opentelemetry-integration.git
   cd datarobot-opentelemetry-integration
   ```

2. **Install dependencies**:
   ```bash
   cd python/datarobot-opentelemetry
   uv sync
   ```

3. **Verify setup**:
   ```bash
   make help
   ```

### Using the Makefile

The `Makefile` in `python/datarobot-opentelemetry/` provides convenient commands for development. Run `make help` to see all available commands:

**Common commands**:

- `make lint` - Run all linting checks (ruff, black, mypy)
- `make fmt` - Format code and fix imports
- `make test` - Run unit tests
- `make cov` - Run tests with coverage…
