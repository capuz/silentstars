---
repo: "rwlove/home-ops"
name: "home-ops"
description: "Lovenet Cluster Configuration"
readmeQualityOk: true
url: "https://github.com/rwlove/home-ops"
homepage: "https://rwlove.github.io/home-ops/"
language: "YAML"
languages: ["YAML"]
languagePcts: [67]
topics: ["k8s-at-home", "flux", "flux2", "gitops", "home-operations", "home-ops", "kubernetes", "renovate", "selfhosted"]
stars: 25
forks: 0
openIssues: 23
closedIssues: 794
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-03-09T20:03:13Z"
lastCommitAt: "2026-11-22T02:14:24Z"
lastReleaseAt: "2024-12-01T01:03:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 64
maintainers: ["rwlove", "lovenet-renovate-operator[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/61392054875a9f0a6b224151d3f979bf6fe0298254c4e62c2fc90947d6f9883f/rwlove/home-ops"
---

# Lovenet Home Operations Repository

_Production-grade Kubernetes for a household._
**GitOps** with Flux · **Automated dependency updates** with Renovate · **Self-hosted by design**

---

## 📖 Overview

This is the live configuration for a multi-node Kubernetes cluster that runs a household — home automation, security cameras, media, document management, AI workloads, and the operational tooling required to keep it all up. Every change lands in Git first; Flux reconciles the cluster from there, and Renovate keeps dependencies current via PRs.

The repo is GitOps-strict: applications are declared as `HelmRelease` resources, secrets are pulled from 1Password through External Secrets Operator, and clusters are mostly identical except for app selection and sizing. Operational quirks, durability tiers, and security defaults live alongside the manifests in [`.agents/instructions/`](https://github.com/rwlove/home-ops/tree/main/.agents/instructions) so the conventions are enforceable, not folklore.

---
