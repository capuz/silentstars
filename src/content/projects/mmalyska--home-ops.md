---
repo: "mmalyska/home-ops"
name: "home-ops"
description: "Repository for home infrastructure and monorepo for kubernetes cluster"
readmeQualityOk: true
url: "https://github.com/mmalyska/home-ops"
homepage: "https://mmalyska.github.io/home-ops/"
language: "YAML"
languages: ["YAML"]
languagePcts: [81]
topics: ["k8s-at-home", "argocd", "gitops", "homelab", "homelab-setup", "iac", "kubernetes", "self-hosted"]
stars: 24
forks: 3
openIssues: 4
closedIssues: 18
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-21T14:37:41Z"
lastCommitAt: "2026-10-21T20:00:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 64
maintainers: ["bendo-bot[bot]", "mmalyska"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf22084191a6303d5c059990fb12f52ddea73e6909ebd14e60f6455c81469f1f/mmalyska/home-ops"
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
