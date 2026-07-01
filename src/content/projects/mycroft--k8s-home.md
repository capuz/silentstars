---
repo: "mycroft/k8s-home"
name: "k8s-home"
description: "Mirror of my homelab's k8s configuration"
url: "https://github.com/mycroft/k8s-home"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-31T09:23:43Z"
lastCommitAt: "2026-07-01T05:16:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 71
maintainers: ["mycroft"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b279212480a3d55062d36ac2fa4cc413d4b8b1bbfb1204e90c9750f2bec4131/mycroft/k8s-home"
---

# k8s-home

> cdk8s-based GitOps CLI for managing a personal homelab Kubernetes cluster.

This project uses Go code to programmatically define and generate Flux CD `HelmRelease` manifests for a k3s cluster running on multiple Mini PCs with Fedora. Source code in `charts/` is compiled and synthesized into YAML manifests in `dist/`, which are pushed to the `generated` branch on merge. Flux CD polls that branch every 2 minutes and reconciles the cluster state.

## Features

- **Chart generation** — Go-based cdk8s code synthesizes Kubernetes manifests for 70+ apps, infrastructure, observability, and security components
- **Version management** — Single `versions.yaml` file tracks all Helm chart and container image versions with optional regex filters
- **Automated PR creation** — CLI commands check for outdated versions and create pull requests on Gitea
- **GitOps deployment** — Gitea Actions pipeline builds charts on merge to `main`, Flux CD applies them to the cluster

## Getting Started

### Prerequisites

- Go 1.23+ (toolchain go1.24.2)
- [mise](https://mise.jdx.dev/) task runner
- [golangci-lint](https://golangci-lint.run/) for linting
- [cdk8s](https://cdk8s.io/) CLI for…
