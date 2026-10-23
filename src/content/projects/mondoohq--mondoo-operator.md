---
repo: "mondoohq/mondoo-operator"
name: "mondoo-operator"
description: "☸️ Mondoo Client Kubernetes Operator"
readmeQualityOk: true
url: "https://github.com/mondoohq/mondoo-operator"
homepage: "https://mondoo.com"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["kubernetes", "kubernetes-operator", "security", "security-audit", "assessment", "operator"]
stars: 41
forks: 21
openIssues: 29
closedIssues: 238
watchers: 8
contributors: 26
recentReleases: 0
createdAt: "2022-01-10T08:19:23Z"
lastCommitAt: "2026-10-23T12:04:46Z"
lastReleaseAt: "2022-02-25T12:13:15Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 61
maintainers: ["dependabot[bot]", "slntopp", "MaxRink"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd585de9fd4122711c7aa1a21ace5c0660c573936a2d979d3e9e30d79e809046/mondoohq/mondoo-operator"
---

# Mondoo Operator for Kubernetes

> **Project Status**: This project is stable. Any API and CRD changes will be handled in way where previous versions are kept working or migrated.

## Overview

The **Mondoo Operator** provides a [Kubernetes](https://kubernetes.io/) native way to do continuous security assessment of your Kubernetes clusters. The purpose of this project is to simplify and automate the configuration for Mondoo-based security scanning.

It is backed by Mondoo's powerful policy-as-code engine [cnspec](https://mondoo.com/docs/cnspec/cnspec-about/) and [MQL](https://mondoo.com/docs/mql/resources/). Mondoo ships out-of-the-box security policies for:

- CIS Kubernetes Benchmarks
- CIS AKS/EKS/GKE/OpenShift Benchmarks
- NSA/CISA Kubernetes Hardening Guide
- Kubernetes Cluster and Workload Security
- Kubernetes Best Practices

## Deployment Modes

The Mondoo Operator supports two deployment modes that can be used independently or together:

### Self-Cluster Scanning

Install the operator in each cluster you want to scan. The operator scans the cluster it runs in using in-cluster credentials.

```
┌─────────────────────────────────────┐
│         Your Kubernetes Cluster…
