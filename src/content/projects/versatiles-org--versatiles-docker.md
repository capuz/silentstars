---
repo: "versatiles-org/versatiles-docker"
name: "versatiles-docker"
description: "Docker images and build scripts for the VersaTiles ecosystem."
readmeQualityOk: true
url: "https://github.com/versatiles-org/versatiles-docker"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
stars: 44
forks: 6
openIssues: 2
closedIssues: 31
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-08-01T15:15:54Z"
lastCommitAt: "2026-11-23T10:28:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 52
maintainers: ["MichaelKreil", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b382d60008d60b2743ad5dbae6dfedd30ff4e605b1288c9fc7da211ff2793639/versatiles-org/versatiles-docker"
fundingLinks: ["GITHUB:https://github.com/versatiles-org"]
---

# VersaTiles Docker

Docker images for [VersaTiles](https://github.com/versatiles-org/versatiles-rs) - a fast map tile server. This repository contains Dockerfiles and GitHub workflows for building and publishing production-ready Docker images.

## Quick Start

Get up and running in seconds:

```bash
# Pull and run a map server with web frontend
docker run -p 8080:8080 -v $(pwd):/data \
  versatiles/versatiles-frontend:latest osm-vector.versatiles
```

Open http://localhost:8080/ in your browser to view your map.

## Prerequisites

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
