---
repo: "RTLDeutschland/talos-operator"
name: "talos-operator"
description: "A talosctl-inspired Kubernetes operator for managing Talos clusters"
readmeQualityOk: true
url: "https://github.com/RTLDeutschland/talos-operator"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["kubernetes", "kubernetes-operator", "talos", "talos-linux"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-09T08:04:51Z"
lastCommitAt: "2026-09-28T10:06:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 33
maintainers: ["SapphicCode"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ea9efa1e6a5dcb517a611800ea1d5fb4d5ec4b0b925bf72fd8d791db1fc4b9e/RTLDeutschland/talos-operator"
---

# Talos operator

A talosctl-inspired Kubernetes operator for managing Talos clusters.

Supporting versions: **Talos v1.12–v1.14**, **Kubernetes 1.34–1.37** (operator cluster)

## Motivation

talosctl is great, but there is large potential for human error. Some of this could be mitigated by using wrapper scripts and CI, but this often results in poor visibility and inflexibility.

The Talos operator aims to give cluster operators a single pane of glass to configure and maintain Talos clusters, declaratively, at a large scale.

The operator also strives for safety and correctness in day-to-day operations such as Kubernetes drains. To that effect, the operator respects things like PodDisruptionBudgets and fails early if they can't be met.

## Features

### Configuration management

All of the config patching knobs and dials `talosctl gen config` provides, and more:

- `--config-patch`: `Cluster.spec.patches` (inline YAML), `Cluster.spec.patchRefs` (ConfigMap), `Node.spec.patches`, `Node.spec.patchRefs`
- `--config-patch-control-plane`: `Cluster.spec.controlPlanePatches`, `Cluster.spec.controlPlanePatchRefs`
- `--config-patch-worker`: `Cluster.spec.workerPatches`,…
