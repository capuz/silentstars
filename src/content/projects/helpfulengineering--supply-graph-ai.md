---
repo: "helpfulengineering/supply-graph-ai"
name: "supply-graph-ai"
description: "Open-source Hardware Package Manager"
readmeQualityOk: true
url: "https://github.com/helpfulengineering/supply-graph-ai"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["hardware-design", "open-hardware", "open-source"]
stars: 11
forks: 4
openIssues: 106
closedIssues: 33
watchers: 11
contributors: 13
recentReleases: 7
createdAt: "2024-09-03T21:49:33Z"
lastCommitAt: "2026-07-07T06:38:47Z"
lastReleaseAt: "2026-07-06T21:40:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 64
maintainers: ["MakerNetwork", "touchthesun"]
openGraphImageUrl: "https://opengraph.githubassets.com/f98cf2977b29cb44a4eaaeb1833413604f2a20d41c952cdaca952fc51ffd2497/helpfulengineering/supply-graph-ai"
discussionCount: 2
---

# Open Hardware Manager (OHM)

## Overview

The Open Hardware Manager (OHM) is a flexible, domain-agnostic framework designed to solve complex requirements-to-capabilities matching problems across various domains. The system matches requirements (what needs to be done) with capabilities (what can be done) to create viable solutions.

OHM exposes a FastAPI-based HTTP API that can be run locally via Docker Compose, from a [published Docker image](https://hub.docker.com/r/touchthesun/openhardwaremanager), or deployed serverlessly using the configurations in `deploy/`.

**Current release:** `0.8.7` — see [CHANGELOG.md](https://github.com/helpfulengineering/supply-graph-ai/blob/HEAD/CHANGELOG.md) and [Release process](https://github.com/helpfulengineering/supply-graph-ai/blob/HEAD/docs/RELEASE.md).

## Quick Start for New Users

### Prerequisites

| Tool | Purpose | Install |
|------|---------|---------|
| **Git** | Clone the repository | https://git-scm.com/downloads |
| **Docker Desktop** | Run the API server | https://www.docker.com/products/docker-desktop/ |
| **uv** | Python env + CLI (local dev) | `curl -LsSf https://astral.sh/uv/install.sh \| sh` or `brew install uv` |
|…
