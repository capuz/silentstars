---
repo: "multigres/multigres-operator"
name: "multigres-operator"
description: "Kubernetes operator for Multigres — deploys, scales, and manages horizontally scalable PostgreSQL clusters with automated topology orchestration, drain-safe rolling updates, and admission webhooks"
readmeQualityOk: true
url: "https://github.com/multigres/multigres-operator"
homepage: "https://multigres.com/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["cloud-native", "database", "go", "horizontal-scaling", "kubernetes", "kubernetes-operator", "operator", "postgresql"]
stars: 270
forks: 29
openIssues: 7
closedIssues: 19
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2025-09-25T10:03:51Z"
lastCommitAt: "2026-09-04T08:11:01Z"
lastReleaseAt: "2026-02-27T17:44:46Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 36
maintainers: ["Verolop", "niconosenzo", "multigres-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7707e732c6f3b90f65e3cecebd29c91e1295f77e045fc66f638b9ddda787b2a2/multigres/multigres-operator"
discussionCount: 1
---

# Multigres Operator

The **[Multigres](https://github.com/multigres/multigres) Operator** is the Kubernetes entry point for **[Multigres v0.1.0 Alpha](https://github.com/multigres/multigres/releases/tag/v0.1.0)**. It manages distributed, sharded PostgreSQL clusters across multiple failure domains (zones or regions) and provides a unified API to define the topology of your database system, handling the complex orchestration of `shards`, `cells` (failure domains), and `gateways`.

This alpha release is suitable for experimentation, demos, local testing, and feedback. It is not production-ready.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Compatibility](#compatibility)
- [How it Works](#how-it-works)
- [Configuration & Defaults](#configuration--defaults)
- [Backup & Restore](#backup--restore)
- [Observability](#observability)
- [Webhook & Certificate Management](#webhook--certificate-management)
- [GitOps & Webhook Defaults](#gitops--webhook-defaults)
- [Pool Replication & Quorum](#pool-replication--quorum)
- [Constraints & Limits](#constraints--limits-v1alpha1)
- [Further Reading](#further-reading)

## Features
- **Global Cluster Management**:…
