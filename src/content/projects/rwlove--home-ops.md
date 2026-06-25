---
repo: "rwlove/home-ops"
name: "home-ops"
description: "Lovenet Cluster Configuration"
url: "https://github.com/rwlove/home-ops"
homepage: "https://rwlove.github.io/home-ops/"
language: "YAML"
languages: ["YAML", "JSON"]
languagePcts: [66, 20]
topics: ["k8s-at-home", "flux", "flux2", "gitops", "home-operations", "home-ops", "kubernetes", "renovate", "selfhosted"]
stars: 20
forks: 0
openIssues: 16
closedIssues: 735
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-03-09T20:03:13Z"
lastCommitAt: "2026-06-25T02:06:58Z"
lastReleaseAt: "2024-12-01T01:03:31Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 67
maintainers: ["lovenet-renovate-operator[bot]", "rwlove"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b5803e8413b6a2727cff4374eb2173fc12accc59ffc46707a0e71667ef71360/rwlove/home-ops"
---

# Lovenet Home Operations Repository

_Production-grade Kubernetes for a household._
**GitOps** with Flux · **Automated dependency updates** with Renovate · **Self-hosted by design**

<br/>

<br/>

![apps](https://img.shields.io/badge/apps-189-blue?style=for-the-badge)
![helmreleases](https://img.shields.io/badge/HelmReleases-203-326CE5?style=for-the-badge&logo=helm&logoColor=white)
![nodes](https://img.shields.io/badge/k8s_nodes-11-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![cnpg](https://img.shields.io/badge/Postgres_clusters-24-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![secrets](https://img.shields.io/badge/secrets-120-0572EC?style=for-the-badge&logo=1password&logoColor=white)
![age](https://img.shields.io/badge/cluster_age-5%2B_years-success?style=for-the-badge)

</div>

---

## 📖 Overview

This is the live configuration for a multi-node Kubernetes cluster that runs a household — home automation, security cameras, media, document management, AI workloads, and the operational tooling required to keep it all up. Every change lands in Git first; Flux reconciles the cluster from there, and Renovate keeps dependencies current via PRs.

The repo…
