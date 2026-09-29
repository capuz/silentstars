---
repo: "redhat-appstudio/infra-common-deployments"
name: "infra-common-deployments"
description: "A  GitOps repository for managing shared infrastructure components across multiple Konflux clusters using ArgoCD and Kustomize."
readmeQualityOk: true
url: "https://github.com/redhat-appstudio/infra-common-deployments"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 58
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 95
recentReleases: 0
createdAt: "2025-08-14T14:17:28Z"
lastCommitAt: "2026-09-29T08:11:05Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 87
maintainers: ["flacatus", "hugares", "enkeefe00"]
openGraphImageUrl: "https://opengraph.githubassets.com/33342e91e6956b329f30cd5a0c71a1b4fa3e9c7a997b2cdd6d81a0c55f1b7fcf/redhat-appstudio/infra-common-deployments"
---

# Infra Common Clusters

A GitOps repository for managing shared infrastructure components across multiple Konflux common clusters using ArgoCD and Kustomize.

## Overview

This repository provides reusable infrastructure components and ArgoCD application definitions for deploying common services across different cluster types (internal/external) and environments (staging/production). It follows a GitOps approach where infrastructure changes are managed through Git and automatically deployed by ArgoCD.

## Repository Structure

```
infra-common-deployments/
├── argo-cd-apps/                           # ArgoCD Application definitions
│   ├── base/
│   │   ├── all-clusters/                   # Components deployed to ALL clusters
│   │   ├── external/                       # Components only for external clusters
│   │   └── internal/                       # Components only for internal clusters
│   └── overlays/                           # Environment-specific configurations
│       ├── external-production/            # External production cluster config
│       ├── external-staging/               # External staging cluster config
│       ├── internal-production/            #…
