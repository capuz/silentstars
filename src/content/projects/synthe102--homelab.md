---
repo: "synthe102/homelab"
name: "homelab"
description: "GitOps config of my homelab"
readmeQualityOk: true
url: "https://github.com/synthe102/homelab"
language: "Just"
languages: ["Just", "Nix"]
languagePcts: [60, 40]
stars: 9
forks: 0
openIssues: 5
closedIssues: 16
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-01-22T20:13:51Z"
lastCommitAt: "2026-07-22T06:09:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 69
maintainers: ["renovate[bot]", "synthe102"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8286fe51014479c2089c5add75a993dcf774cd26161cca11d2df2db61f7e9f7/synthe102/homelab"
---

# Synthe102's Homelab

This repo holds the configuration of my homelab, it consists of an Intel NUC running:

- [Talos](https://talos.dev) for the OS
- Kubernetes for the workload orchestration
- ArgoCD for the develivery
- BitWarden and external-secrets for secret management
- Rook/Ceph for the storage backend
- External DNS for the automated DNS records creation
- Cert Manager for the SSL certificates generation
