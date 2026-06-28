---
repo: "synthe102/homelab"
name: "homelab"
description: "GitOps config of my homelab"
url: "https://github.com/synthe102/homelab"
language: "Just"
languages: ["Just", "Nix"]
languagePcts: [60, 40]
stars: 8
forks: 0
openIssues: 5
closedIssues: 16
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-01-22T20:13:51Z"
lastCommitAt: "2026-06-28T01:45:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 71
maintainers: ["renovate[bot]", "synthe102"]
openGraphImageUrl: "https://opengraph.githubassets.com/93dab400cd3cdcba54de6f9e3876edaa635908227d1c2305ec10511535b3fc59/synthe102/homelab"
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
