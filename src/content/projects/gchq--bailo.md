---
repo: "gchq/Bailo"
name: "Bailo"
description: "Managing the lifecycle of machine learning to support scalability, impact, collaboration, compliance and sharing."
readmeQualityOk: true
url: "https://github.com/gchq/Bailo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["ml", "mlops", "nodejs", "typescript"]
stars: 97
forks: 22
openIssues: 18
closedIssues: 69
watchers: 5
contributors: 40
recentReleases: 0
createdAt: "2021-02-05T13:21:21Z"
lastCommitAt: "2026-11-03T11:14:34Z"
lastReleaseAt: "2024-08-14T14:54:33Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 47
maintainers: ["dependabot[bot]", "ARADDCC002", "PE39806"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/336277921/359d96fb-3ab8-4090-b7b7-ec05b6f0eb99"
---

Making it easy to compliantly manage the machine learning lifecycle
    ·

## About The Project

Bailo helps you manage the lifecycle of machine learning to support scalability, impact, collaboration, compliance and
sharing.

## Getting Started

### Running Locally with Docker or Podman

#### Requirements

Follow the instructions below to get a local development environment running. You will need:

- [Node v26](https://nodejs.org/en/download/current)
- [Docker / Docker Compose](https://www.docker.com/get-started/), or [Podman](https://podman.io/) 5.x with a compose
  provider

#### Choosing a container engine

The compose files work with both `docker compose` and `podman compose`. Every command below can be run with either -
substitute `podman compose` for `docker compose` throughout.

`podman compose` is only a thin wrapper: it delegates to the first external compose provider it finds on your `PATH`.
Install [podman-compose](https://github.com/containers/podman-compose), or point `compose_providers` in
`containers.conf` at a `docker-compose` v2 binary. Without a provider installed, `podman compose` will not run.

> [!NOTE]
> The `--progress` and `--parallel` flags are…
