---
repo: "pmh-only/lab"
name: "lab"
description: "🔦 lab | Kubernetes resource manifest files for my Homelab"
readmeQualityOk: true
url: "https://github.com/pmh-only/lab"
homepage: "https://argo.pmh.codes"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-07T11:02:58Z"
lastCommitAt: "2026-07-24T06:09:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 75
maintainers: ["pmh-only", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/768584873/8efd0aba-929b-4ab2-8925-55f0851d5574"
fundingLinks: ["GITHUB:https://github.com/pmh-only", "KO_FI:https://ko-fi.com/pmh_only", "CUSTOM:https://paypal.me/pmhon1y"]
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
