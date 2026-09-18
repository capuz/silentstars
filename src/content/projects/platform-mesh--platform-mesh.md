---
repo: "platform-mesh/platform-mesh"
name: "platform-mesh"
description: "Discover, order, and orchestrate services across any provider through kubectl"
readmeQualityOk: true
url: "https://github.com/platform-mesh/platform-mesh"
homepage: "https://platform-mesh.io"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 13
forks: 30
openIssues: 74
closedIssues: 37
watchers: 2
contributors: 47
recentReleases: 0
createdAt: "2025-02-23T08:23:18Z"
lastCommitAt: "2026-09-18T08:15:45Z"
lastReleaseAt: "2026-06-19T13:48:49Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 76
maintainers: ["akafazov", "hellsontime", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d48856c76d526a10ba40e3425016037fbdf850261160bb32cac8e52aa35575a/platform-mesh/platform-mesh"
---

> [!WARNING]
> This Repository is under development and not ready for productive use. It is in an alpha stage. That means APIs and concepts may change on short notice including breaking changes or complete removal of apis.

# Platform Mesh

## Description

Platform Mesh is an open, multi-tenant developer platform built on [kcp](https://github.com/kcp-dev/kcp). It provides account-based tenancy, relationship-based authorization (ReBAC via [OpenFGA](https://openfga.dev/)), search, and UI extensibility on top of a Kubernetes-like control plane.

This repository is the Platform Mesh **monorepo**: it consolidates the shared libraries, operators, services, and tooling that make up the platform. Each component is its own Go module, linked together through the repository-root [`go.work`](https://github.com/platform-mesh/platform-mesh/blob/HEAD/go.work) workspace, and released independently via component-scoped tags.

## Components

### Libraries

| Module | Description |
|--------|-------------|
| [apis](https://github.com/platform-mesh/platform-mesh/blob/HEAD/apis) | Shared CRD Go types, deepcopy, and scheme for the `*.platform-mesh.io` API groups. |
|…
