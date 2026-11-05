---
repo: "kubev2v/assisted-migration-agent"
name: "assisted-migration-agent"
description: "A self-contained agent that discovers and assesses VMware environments for migration to OpenShift Virtualization."
readmeQualityOk: true
url: "https://github.com/kubev2v/assisted-migration-agent"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 10
forks: 18
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 29
recentReleases: 0
createdAt: "2025-12-09T03:34:17Z"
lastCommitAt: "2026-11-05T00:21:22Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 81
maintainers: ["red-hat-konflux[bot]", "nirarg", "migration-planner-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a2c30e43439c3775ee0db08beeab4141c6fc449ff77f0c8b3ed72062ca05ab9/kubev2v/assisted-migration-agent"
---

# Assisted Migration Agent

An agent for collecting vSphere inventory data and reporting to the Migration Planner console.

## Build

```bash
make build
```

This produces the binary at `bin/agent`.

Agent-specific code lives under `agent/`: `main.go` is the CLI entry point,
`cmd/` defines its commands, and `app/` assembles the application. `api/v2/`
defines the HTTP contract, and `handlers/v2/` implements it. Shared
implementation remains in `internal/` and `pkg/`. The RVTools proof of
concept remains available as an Agent mode and uses `agent/Containerfile.rvtools`.

## Container images

`build-config/ui-image` pins `AGENT_UI_IMAGE_TAG` to a UI commit SHA for both
`agent/Containerfile` and `agent/Containerfile.rvtools`. Local Make targets and
all Agent/RVTools Konflux pipelines use this config:

```bash
make image
```

For a direct Podman/Buildah build, pass the config explicitly:

```bash
podman build --build-arg-file build-config/ui-image --build-arg-file build-config/min-upgrade-version --build-arg APPLIANCE_VERSION=main-release-0.31-383f77d -f agent/Containerfile .
podman build --build-arg-file build-config/ui-image --build-arg APPLIANCE_VERSION=main-release-0.31-383f77d -f…
