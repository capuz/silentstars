---
repo: "firebolt-db/firebolt-kubernetes-operator"
name: "firebolt-kubernetes-operator"
description: "Run and manage Firebolt on Kubernetes with the Firebolt Operator"
readmeQualityOk: true
url: "https://github.com/firebolt-db/firebolt-kubernetes-operator"
homepage: "https://www.firebolt.io"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["firebolt", "kubernetes", "operator"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 41
recentReleases: 10
createdAt: "2026-06-11T14:46:46Z"
lastCommitAt: "2026-07-14T05:52:42Z"
lastReleaseAt: "2026-06-24T15:29:16Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 53
maintainers: ["fstr", "gm42", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/10111e9e5002628479b7af371c85d84bd5c66f761a74fd76510a4183105bdaa9/firebolt-db/firebolt-kubernetes-operator"
---

# Firebolt Kubernetes Operator

A Kubernetes operator that manages Firebolt infrastructure: metadata services, an Envoy query-routing proxy, and compute engines with zero-downtime scaling via blue-green deployments.

## Overview

The operator manages three custom resources:

- **FireboltInstance** provisions the shared infrastructure that engines depend on: PostgreSQL, the metadata service, and an Envoy gateway proxy.
- **FireboltEngine** deploys stateful compute nodes. Each engine references a `FireboltInstance` and cannot operate without one.
- **FireboltEngineClass** *(optional, namespaced)* holds a reusable pod-template fragment that multiple engines in the same namespace can share via `spec.engineClassRef` — service account / IAM binding, scheduling, sidecars, and the engine container image. Namespaced (not cluster-scoped) because the template carries namespace-resolved identifiers like ServiceAccount names and Secret/PVC volume references.

When you change an engine's configuration (e.g., scale from 3 to 5 nodes), the operator performs a zero-downtime blue-green transition: it creates a new generation, waits for readiness, switches traffic, drains the old generation, and…
