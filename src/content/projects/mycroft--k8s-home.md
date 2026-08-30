---
repo: "mycroft/k8s-home"
name: "k8s-home"
description: "Mirror of my homelab's k8s configuration"
readmeQualityOk: true
url: "https://github.com/mycroft/k8s-home"
language: "Go"
languages: ["Go"]
languagePcts: [84]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-31T09:23:43Z"
lastCommitAt: "2026-08-30T05:16:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 71
maintainers: ["mycroft"]
openGraphImageUrl: "https://opengraph.githubassets.com/71c0d4d6768cf2e5266e22a1887195dae31c403edd805ab57d5ae39c652d2690/mycroft/k8s-home"
---

# k8s-home

> cdk8s-based GitOps CLI for managing a personal homelab Kubernetes cluster.

This project uses Go code to programmatically define and generate Flux CD `HelmRelease` manifests for a k3s cluster running on multiple Mini PCs with Fedora. Source code in `charts/` is compiled and synthesized into YAML manifests in `dist/`, which are pushed to the `generated` branch on merge. Flux CD polls that branch every 2 minutes and reconciles the cluster state.

## Features

- **Chart generation** — Go-based cdk8s code synthesizes Kubernetes manifests for 70+ apps, infrastructure, observability, and security components
- **Version management** — Single `versions.yaml` file tracks all Helm chart and container image versions with optional regex filters
- **Automated PR creation** — CLI commands check for outdated versions and create pull requests on Gitea
- **GitOps deployment** — Gitea Actions pipeline builds charts on merge to `main`, Flux CD applies them to the cluster
- **Managed PostgreSQL** — CloudNativePG provisions application databases, roles, extensions, and Vault credentials
- **Layered backups** — Velero/Kopia protects persistent volumes and daily logical PostgreSQL dumps…
