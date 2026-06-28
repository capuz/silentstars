---
repo: "allenporter/k8s-gitops"
name: "k8s-gitops"
description: "Flux/Gitops managed k8s cluster"
url: "https://github.com/allenporter/k8s-gitops"
language: "Jinja"
languages: ["Jinja", "Shell"]
languagePcts: [37, 36]
topics: ["kubernetes", "flux", "helm", "gitops", "k8s", "k8s-at-home"]
stars: 35
forks: 1
openIssues: 10
closedIssues: 112
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-02-07T22:31:23Z"
lastCommitAt: "2026-06-27T21:56:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 56
maintainers: ["renovate[bot]", "allenporter"]
openGraphImageUrl: "https://opengraph.githubassets.com/f482e2a5441b90a4dda827a604dc58598ade87e3b7d7f6c8bb9775e602457dbf/allenporter/k8s-gitops"
---

# k8s-gitops

## Introduction

This is a Flux/Gitops managed k8s cluster following the model used by [k8s@home](https://github.com/k8s-at-home). This repository defines the cluster, and flux watches for updates and pushes them.

## Bare Metal

The cluster is provisioned with [Talos](https://www.talos.dev/) high availability using [Virtual (shared) ip](https://www.talos.dev/v1.8/talos-guides/network/vip/) and [Flannel](https://github.com/flannel-io/flannel)
which is the default cluster networking.

The nodes have a mix of accelerators.

See [bootstrap](/bootstrap/talos/) for more background on provisioning of bare
metal nodes.

## Development Toolchain

This repository contains a `.devcontainer` which is the environment used to manage the k8s cluster
from the CLI. The `.devcontainer` has some default mounts including the private terraform
inventory and `.env` which is a local directory for local secret storage. More detail on
bootstrapping can be found in `bootstrap/env` and `k8s-gitops-env.yaml` performs the secret setup.

## Network Operations

The cluster follows best practices for a server [naming scheme](https://mnx.io/blog/a-proper-server-naming-scheme/)
including specifying…
