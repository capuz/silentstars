---
repo: "aehrc/ontoserver-deploy"
name: "ontoserver-deploy"
description: "Sample deployment project for Ontoserver"
readmeQualityOk: true
url: "https://github.com/aehrc/ontoserver-deploy"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [44, 35]
stars: 20
forks: 11
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 12
recentReleases: 6
createdAt: "2017-08-25T04:15:26Z"
lastCommitAt: "2026-08-13T05:17:57Z"
lastReleaseAt: "2026-08-13T05:18:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 81
undervaluedScore: 65
maintainers: ["attilaedelenyi", "github-actions[bot]", "edeati"]
openGraphImageUrl: "https://opengraph.githubassets.com/68bdaddbc017ea693fe0cc316a691ea9415b801e41c728930e355c8cc452fde4/aehrc/ontoserver-deploy"
---

# Ontoserver Deployment

> **Note for GHCR visitors:** The packages under `ghcr.io/aehrc/ontoserver-helm` are **Helm charts**, not Docker images. Install them with Helm, not `docker pull`:
> ```bash
> helm install ontoserver oci://ghcr.io/aehrc/ontoserver-helm/ontoserver --version <version> \
>   --set ontoserver.imageCredentials.username=<QUAY_USERNAME> \
>   --set ontoserver.imageCredentials.password=<QUAY_PASSWORD>
> ```

Deployment resources for [Ontoserver](https://ontoserver.csiro.au) — a FHIR terminology server — across different platforms and technologies.

| Directory | Description |
|-----------|-------------|
| [`charts/`](https://github.com/aehrc/ontoserver-deploy/blob/HEAD/charts/) | Helm charts for Kubernetes deployments |
| [`docker/`](https://github.com/aehrc/ontoserver-deploy/blob/HEAD/docker/) | Docker Compose and container images |
| [`azure/`](https://github.com/aehrc/ontoserver-deploy/blob/HEAD/azure/) | Azure infrastructure (Terraform, AKS setup) |
| [`legacy/`](https://github.com/aehrc/ontoserver-deploy/blob/HEAD/legacy/) | Archived charts — never publicly released; superseded by `charts/` |

## Helm Charts (Kubernetes)

Three charts are published from this…
