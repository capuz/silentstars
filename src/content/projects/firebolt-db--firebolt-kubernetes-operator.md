---
repo: "firebolt-db/firebolt-kubernetes-operator"
name: "firebolt-kubernetes-operator"
description: "Run and manage Firebolt on Kubernetes with the Firebolt Operator"
readmeQualityOk: true
url: "https://github.com/firebolt-db/firebolt-kubernetes-operator"
homepage: "https://www.firebolt.io"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["firebolt", "kubernetes", "operator"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-06-11T14:46:46Z"
lastCommitAt: "2026-10-26T09:17:44Z"
lastReleaseAt: "2026-06-24T15:29:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 45
maintainers: ["fireboltdb-ci-writer[bot]", "dependabot[bot]", "fstr"]
openGraphImageUrl: "https://opengraph.githubassets.com/d349540fc5c5c15379d7a5c937e656b7a2635a046969005291f6947199ce1175/firebolt-db/firebolt-kubernetes-operator"
---

# Firebolt Operator

A Kubernetes operator that manages Firebolt infrastructure: metadata services, an Envoy query-routing proxy, and compute engines with zero-downtime scaling via blue-green deployments.

## Overview

The operator manages five custom resources:

- **FireboltInstance** provisions the shared infrastructure that engines depend on: PostgreSQL, the metadata service, and an Envoy gateway proxy.
- **FireboltEngine** deploys stateful compute nodes. Each engine references a `FireboltInstance` and cannot operate without one.
- **FireboltEngineClass** *(optional, namespaced)* holds a reusable pod-template fragment that multiple engines in the same namespace can share via `spec.engineClassRef` — service account / IAM binding, scheduling, sidecars, and the engine container image.
- **ClusterFireboltEngineClass** *(optional, cluster-scoped)* is a SKU catalog of the same name: instance type, resources, affinity/tolerations, and optional engine image. It does not carry ServiceAccount names, Secret refs, IAM annotations, storage, or rollout/autoStop. `spec.engineClassRef` resolves namespaced-first: a `FireboltEngineClass` in the engine's namespace wins over a cluster object of…
