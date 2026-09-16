---
repo: "lukashankeln/Homelab"
name: "Homelab"
description: "Setup for my private Homelab infrastructure"
readmeQualityOk: true
url: "https://github.com/lukashankeln/Homelab"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["argo", "homelab", "kubernetes", "self-hosted", "argocd", "helm", "metallb", "postgres", "k8s-at-home", "talos-linux"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-04-29T13:36:57Z"
lastCommitAt: "2026-09-16T08:46:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 77
maintainers: ["lukashankeln"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb374ab36c0321daf8c0820483fff0cfc21f2f601107a22117d10476ca45fad3/lukashankeln/Homelab"
---

# Homelab
This repository contains the applications and configurations for my private home server infrastructure.

> [!IMPORTANT]
> This repository is developed in my privately hosted Gitea instance.
> The version on GitHub is a push mirror. Any changes made there will be overwritten during the next sync.

## Infrastructure
The infrastructure runs on a Talos Linux Kubernetes cluster composed of two nodes.

- Controlplane: Intel N100 mini-PC with 8GB RAM
- Worker: Intel N97 mini-PC with 16GB RAM

Talos is an immutable, minimal Kubernetes OS designed for security and ease of management. Configuration is managed declaratively in the `.talos/` directory.

## GitOps with ArgoCD
ArgoCD manages itself and all other applications from this repository. The primary ArgoCD Application is `applications/argocd.yaml` and ArgoCD reconciles the rest of the repo.

Key locations:

- `applications/argocd.yaml` — ArgoCD self-management manifest.
- `applications/` — ArgoCD Application manifests for all services.
- `kubernetes/` — plain Kubernetes manifests deployed via ApplicationSets.
- `custom-resources/applicationsets/` — ApplicationSet manifests (generators and templates).
-…
