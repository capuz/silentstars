---
repo: "pmh-only/lab"
name: "lab"
description: "🔦 lab | Kubernetes resource manifest files for my Homelab"
readmeQualityOk: true
url: "https://github.com/pmh-only/lab"
homepage: "https://argo.pmh.codes"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["argocd", "homelab", "kubernetes"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-03-07T11:02:58Z"
lastCommitAt: "2026-10-21T08:49:03Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 72
maintainers: ["pmh-only", "lab-argocd"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/768584873/f2dc6ca4-8cf8-482f-aca7-5d0b7eeb6ecd"
fundingLinks: ["GITHUB:https://github.com/pmh-only"]
---

# pmh-only/lab

**lab** is the Single source of truth repository contains Kubernetes resource manifest files for my Homelab GitOps environment powered by ArgoCD.

Covered domains include, but are not limited to, apex and subdomains of https://pmh.codes and https://pmh.so.

An ArgoCD instance continuously monitors the apps folder, which contains manifest files that reference each application's manifest directory. When updates occur, these manifests trigger full resource synchronization. More information of this pattern is [here: [App of Apps]](https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/#app-of-apps-pattern-alternative)

At the same time, the ArgoCD Image Updater ensures that container images always stay up to date with the latest versions.

## Contents
This repository defines many components of Kubernetes cluster such as:
* Public Domain Name Server / Private Resolver (Technitium DNS Server)
* HTTP Routings/Rewrites (Customized DaemonSet Gateway, Envoy Gateway)
* TLS Certificate Management/Ordering (cert-manager)
* Static Website Serving (RustFS)
* SQL/No-SQL Databases (MySQL, PostgreSQL, MongoDB, Redis)
* Observabilities (Grafana, Prometheus,…
