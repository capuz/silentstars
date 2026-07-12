---
repo: "allenporter/k8s-gitops"
name: "k8s-gitops"
description: "Flux/Gitops managed k8s cluster"
readmeQualityOk: true
url: "https://github.com/allenporter/k8s-gitops"
language: "Jinja"
languages: ["Jinja", "Shell"]
languagePcts: [38, 34]
topics: ["kubernetes", "flux", "helm", "gitops", "k8s", "k8s-at-home"]
stars: 35
forks: 1
openIssues: 6
closedIssues: 118
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-02-07T22:31:23Z"
lastCommitAt: "2026-07-12T06:21:19Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 57
maintainers: ["renovate[bot]", "allenporter"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3564ff1f1c65e970d85782e0aba051e6fa5ba1adb3a9a87ed501a852e2df284/allenporter/k8s-gitops"
---

# k8s-gitops

## Introduction

This is a Flux/Gitops managed k8s cluster following the model used by [k8s@home](https://github.com/k8s-at-home). This repository defines the cluster, and flux watches for updates and pushes them.

## Bare Metal

The cluster is provisioned with [Talos](https://www.talos.dev/) high availability using [Virtual (shared) ip](https://www.talos.dev/v1.8/talos-guides/network/vip/) and [Flannel](https://github.com/flannel-io/flannel)
which is the default cluster networking.

The nodes have a mix of accelerators.

See [bootstrap](https://github.com/allenporter/k8s-gitops/blob/HEAD/bootstrap/talos/) for more background on provisioning of bare
metal nodes.

## Development Toolchain

This repository contains a `.devcontainer` which is the environment used to manage the k8s cluster
from the CLI. The `.devcontainer` has some default mounts including the private terraform
inventory and `.env` which is a local directory for local secret storage. More detail on
bootstrapping can be found in `bootstrap/env` and `k8s-gitops-env.yaml` performs the secret setup.

## Network Operations

The cluster follows best practices for a server [naming…
