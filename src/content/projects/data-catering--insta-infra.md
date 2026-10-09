---
repo: "data-catering/insta-infra"
name: "insta-infra"
description: "Quickstart for any service"
readmeQualityOk: true
url: "https://github.com/data-catering/insta-infra"
homepage: "https://data-catering.github.io/insta-infra/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [44, 39]
topics: ["docker", "docker-compose", "infrastructure", "local-environment"]
stars: 170
forks: 14
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-05-29T02:19:21Z"
lastCommitAt: "2026-10-09T10:49:57Z"
lastReleaseAt: "2025-08-06T10:55:11Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 43
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/39e39fd32e46601be67e3225f8bc04bdf36270ccff025f073e58dba737969f90/data-catering/insta-infra"
fundingLinks: ["PATREON:https://patreon.com/DataCatering", "KO_FI:https://ko-fi.com/peterflook"]
---

# insta-infra

A simple, fast CLI tool for spinning up data infrastructure services using Docker or Podman.

> [!NOTE]
> [Check out the demo UI](https://data-catering.github.io/insta-infra/demo/ui/index.html)

## Features

- Run any service and it's dependencies with a single command
- Supports both Docker and Podman container runtimes
- Single binary for easy distribution
- Optional data persistence and data setup scripts

## Installation

```bash
curl -fsSL https://raw.githubusercontent.com/data-catering/insta-infra/main/install.sh | sh
```
OR
```bash
wget -q -O - https://raw.githubusercontent.com/data-catering/insta-infra/main/install.sh | sh
```

### Using Homebrew

```bash
# Add the tap and install
brew tap data-catering/insta-infra
brew install insta-infra
```

### From Source

```bash
# Clone the repository
git clone https://github.com/data-catering/insta-infra.git
cd insta-infra
make install
```

### Using Go

```bash
go install github.com/data-catering/insta-infra/v2/cmd/insta@v3.0.0
```

### Manual Installation

If you prefer to install manually from release archives:

1. Visit the [GitHub releases page](https://github.com/data-catering/insta-infra/releases)
2. Download…
