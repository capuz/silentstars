---
repo: "graphops/launchpad-namespaces"
name: "launchpad-namespaces"
description: "Preconfigured Kubernetes Namespaces using Helmfile"
readmeQualityOk: true
url: "https://github.com/graphops/launchpad-namespaces"
homepage: "https://docs.graphops.xyz/launchpad/intro"
language: "CUE"
languages: ["CUE", "Go Template"]
languagePcts: [52, 44]
topics: ["blockchain", "graph-protocol", "indexing", "infrastructure", "kubernetes", "the-graph", "web3"]
stars: 6
forks: 5
openIssues: 16
closedIssues: 19
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2023-05-16T10:56:58Z"
lastCommitAt: "2026-08-28T14:33:26Z"
lastReleaseAt: "2023-08-10T09:18:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 89
maintainers: ["graphops-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5bd89da64195650cc05b322d10b4c2d50f16a2180ed8584e2c692e06af23a95/graphops/launchpad-namespaces"
---

# Launchpad Namespaces

## Introduction

*Launchpad Namespaces*, part of the *Launchpad Toolkit*, leverages [*Helmfile*](https://github.com/helmfile/helmfile) to offer a declarative way for deploying and managing functionally related bundles of [helm charts](https://github.com/helm/helm) (called *releases* in *helmfile*).

It aims to:
- be easy to use, while extensible and adaptable
- provide sensible working defaults that can always be overridden
- service the requirements of Launchpad and GraphOps

## Features

- Actively maintained by [ *GraphOps*](https://graphops.xyz) [and contributors](https://github.com/graphops/launchpad-namespaces/graphs/contributors)
- Common values interfaces across all namespaces
- Flexible and adaptable, allowing defaults to be overridden
- Two release channels: `stable` and `canary`
- A large selection of Namespaces (listed below)

## Getting Started

> **Note**
> [*Launchpad Starter*](https://github.com/graphops/launchpad-starter) is a great way to make use of *Namespaces* and worth checking out as a starting point for every new *Launchpad* deployment.

To use *Namespaces* you will require both a [*Kubernetes*](https://kubernetes.io) cluster and…
