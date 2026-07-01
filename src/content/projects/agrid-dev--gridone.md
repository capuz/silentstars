---
repo: "Agrid-Dev/gridone"
name: "gridone"
description: "An open, extensible BAS engine to future-proof any building"
url: "https://github.com/Agrid-Dev/gridone"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [60, 39]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2025-11-06T11:15:29Z"
lastCommitAt: "2026-07-01T07:05:37Z"
lastReleaseAt: "2026-05-29T14:02:10Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["guidon1", "github-actions[bot]", "iamastarcoder"]
openGraphImageUrl: "https://opengraph.githubassets.com/a274aac79deeed195ea9bcbbce47b84730c8140f538120c355cde3427773ff83/Agrid-Dev/gridone"
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
