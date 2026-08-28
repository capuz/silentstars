---
repo: "Agrid-Dev/gridone"
name: "gridone"
description: "An open, extensible BAS engine to future-proof any building"
readmeQualityOk: true
url: "https://github.com/Agrid-Dev/gridone"
homepage: "https://docs.gridone.a-grid.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [50, 49]
topics: ["building-automation", "building-management", "iot-platform"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-11-06T11:15:29Z"
lastCommitAt: "2026-08-28T14:32:43Z"
lastReleaseAt: "2026-05-29T14:02:10Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 63
maintainers: ["iamastarcoder", "github-actions[bot]", "bastienlandry1"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d5bff5a0cda268514972a9ef92e8f538999cb04aae43a808a1f0eb0b3c4b31b/Agrid-Dev/gridone"
---

# GRIDONE

_Gridone_ is an open-source Building Management System (BMS) designed for extensibility and portability.

Gridone is built by [AGRID](https://a-grid.com/) and under development 🏗️ (unstable).

## Project layout

Gridone is a monorepo including both packages and applications.

```
.
├── apps
│   ├── api_server
│   ├── cli
│   └── ui
├── packages
│   ├── api
│   ├── devices_manager
│   └── storage
├── pyproject.toml
├── README.md
└── uv.lock
```

## Storage

`devices_manager` uses pluggable storage configured with a single URL string:

- Local development: YAML file backend using a path (example: `.db` or `/tmp/gridone-db`)
- Production: PostgreSQL-compatible backend (example: `postgresql://...`)

TimescaleDB is PostgreSQL-compatible, so it uses the same `postgresql://` URL format.

## Setup

### Installation

This project is managed with [uv](https://docs.astral.sh/uv/) using `workspaces`. Run

```sh
uv sync --all-packages
```
To create a virtual environment and install all project dependencies.

### Tooling

Gridone uses [astral.sh](https://astral.sh) python development tools:
- [ruff](https://docs.astral.sh/ruff/) for linting and formatting,
-…
