---
repo: "bayplan/bayplan"
name: "bayplan"
description: "Self-hosted multi-cluster Kubernetes management: one panel for every cluster, scoped RBAC, audited actions, SSO, Helm, GitOps and AI troubleshooting."
readmeQualityOk: true
url: "https://github.com/bayplan/bayplan"
homepage: "https://bayplan.io"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [61, 36]
topics: ["devops", "gitops", "golang", "helm", "kubernetes", "kubernetes-dashboard", "mcp", "multi-cluster", "oidc", "platform-engineering"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-26T11:54:45Z"
lastCommitAt: "2026-11-20T11:01:20Z"
lastReleaseAt: "2026-11-05T13:05:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 28
maintainers: ["bayplan"]
openGraphImageUrl: "https://opengraph.githubassets.com/367803bb5c62648e2fe1a2338554a37f44e8d7af6f0451f303a3b480f24f93c7/bayplan/bayplan"
discussionCount: 0
---

# Bayplan

*Every container, in its place.*

Spanish version: [README.es.md](https://github.com/bayplan/bayplan/blob/HEAD/README.es.md)

Lightweight, self-hosted multi-cluster Kubernetes management: a single binary (Go + embedded
React) plus Postgres, deployed on the customer's own container infrastructure, from which
several clusters (on-prem, kubeadm, k3s, RKE2, Talos, cloud…) are observed and
operated, with local login or OIDC SSO (Entra ID, Keycloak, Okta, Google…) and a per-cluster
permission model with three roles (`admin`, `editor`, `readonly`).

**What it does:** inventory and status of workloads, networking, configuration and storage
from an informer cache per cluster; logs and terminal; restart, scale, rollback, cordon/drain;
edit and apply YAML with prior validation in the cluster (server-side apply with dry-run);
immutable audit of everything. **What it does not do:** provision clusters or upgrade their
Kubernetes version, nor is it a full GitOps controller.

## Install

To try it, or on a single host, one container with its own database and HTTPS:
