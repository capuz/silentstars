---
repo: "mmalyska/home-ops"
name: "home-ops"
description: "Repository for home infrastructure and monorepo for kubernetes cluster"
url: "https://github.com/mmalyska/home-ops"
homepage: "https://mmalyska.github.io/home-ops/"
language: "YAML"
languages: ["YAML"]
languagePcts: [92]
topics: ["k8s-at-home", "argocd", "gitops", "homelab", "homelab-setup", "iac", "kubernetes", "self-hosted"]
stars: 23
forks: 3
openIssues: 4
closedIssues: 18
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-09-21T14:37:41Z"
lastCommitAt: "2026-06-27T00:48:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 65
maintainers: ["bendo-bot[bot]", "mmalyska"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ee8e2995baa8aeb669308479b1b889f58c2962ea532e06a9aff25eb10de589a/mmalyska/home-ops"
---

# Home k8s infrastructure

Deploying a cluster with [Talos](https://www.talos.dev) and [Terraform](https://www.terraform.io) backed by [ArgoCD](https://argo-cd.readthedocs.io/) and [Bitwarden Secrets Manager](https://bitwarden.com/products/secrets-manager/).

## Overview

- [Core components](https://github.com/mmalyska/home-ops#-components)
- [Setup](https://github.com/mmalyska/home-ops#-setup)
- [Repository structure](https://github.com/mmalyska/home-ops#-repository-structure)
- [Deployment](https://github.com/mmalyska/home-ops#-deployment)
- [Post installation](https://github.com/mmalyska/home-ops#-post-installation)

## 🧱 Core components

### 🚚 Provisioning

For provisioning the following tools are used:

- [Talos](https://www.talos.dev) - this is used to provision all nodes within cluster with uniform system and configuration as gitops
- [Terraform](https://www.terraform.io) - in order to help with the DNS settings this is used to provision an already existing Cloudflare domain and DNS settings

### 📦 Kubernetes

- [cert-manager](https://cert-manager.io/) - SSL certificates - with Cloudflare DNS challenge
- [Cilium](https://cilium.io/) - CNI (container network interface),…
