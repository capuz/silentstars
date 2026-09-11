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
forks: 57
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 91
recentReleases: 0
createdAt: "2025-08-14T14:17:28Z"
lastCommitAt: "2026-09-11T08:15:50Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 87
maintainers: ["flacatus", "enkeefe00", "hugares"]
openGraphImageUrl: "https://opengraph.githubassets.com/706b907d43db91775d22a044ac301738705947d19565ce05204f508add468025/redhat-appstudio/infra-common-deployments"
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
