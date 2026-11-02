---
repo: "Tiagura/k8s-gitops"
name: "k8s-gitops"
description: "GitOps-driven Kubernetes configuration powered by ArgoCD, built for my homelab,  for a fully automated cluster setup."
readmeQualityOk: true
url: "https://github.com/Tiagura/k8s-gitops"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["argocd", "gitops", "homelab", "k8s", "kubernetes", "self-hosted", "cicd", "helm", "k8s-at-home", "k8s-gitops"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-14T13:41:14Z"
lastCommitAt: "2026-11-02T15:17:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 60
maintainers: ["Tiagura"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e4bbe23f0895c317eb5aac62e07a6b571cc3360bdcfba1f74538955c9f57b98/Tiagura/k8s-gitops"
---

# GitOps-Driven Kubernetes Cluster with ArgoCD

This repository contains the configuration and manifests for a **GitOps-driven Kubernetes cluster** managed entirely through **ArgoCD**, built for my homelab using GitOps best practices and patterns.

## Table of Contents

- [GitOps-Driven Kubernetes Cluster with ArgoCD](#gitops-driven-kubernetes-cluster-with-argocd)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Cluster Components and Apps](#cluster-components-and-apps)
    - [Infrastructure](#infrastructure)
      - [CI/CD](#cicd)
      - [Networking](#networking)
      - [Policies and Security](#policies-and-security)
      - [Storage and Databases](#storage-and-databases)
    - [Monitoring](#monitoring)
    - [Applications](#applications)
  - [Prerequisites](#prerequisites)
  - [Bootstrapping the Cluster](#bootstrapping-the-cluster)
    - [1. Install cluster-wide scheduling resources](#1-install-cluster-wide-scheduling-resources)
    - [2. Install Cilium CNI and wait for it to be ready](#2-install-cilium-cni-and-wait-for-it-to-be-ready)
    - [3. Configure External Secrets Operator authentication](#3-configure-external-secrets-operator-authentication)…
