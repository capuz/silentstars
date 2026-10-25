---
repo: "rdvansloten/cert-manager-key-vault-sync"
name: "cert-manager-key-vault-sync"
description: "Kubernetes operator that syncs cert-manager Secrets to Azure Key Vault."
readmeQualityOk: true
url: "https://github.com/rdvansloten/cert-manager-key-vault-sync"
language: "Python"
languages: ["Python", "HCL"]
languagePcts: [52, 27]
stars: 18
forks: 1
openIssues: 2
closedIssues: 10
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2024-07-29T21:46:15Z"
lastCommitAt: "2026-10-25T09:00:56Z"
lastReleaseAt: "2026-10-23T18:40:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 70
undervaluedScore: 37
maintainers: ["rdvansloten"]
openGraphImageUrl: "https://opengraph.githubassets.com/5063fd26c7c1df27f43fc37f86855aa8df0980d06d6aaec4e283a853d9d0f22d/rdvansloten/cert-manager-key-vault-sync"
fundingLinks: ["GITHUB:https://github.com/rdvansloten", "KO_FI:https://ko-fi.com/rdvansloten"]
---

# cert-manager-key-vault-sync

> [!WARNING]  
> Due to an oversight when aligning versions, Helm Charts and Docker images were overwriting one another on the latest builds. This is now resolved by moving the Helm Charts to `docker.io/rdvansloten/cert-manager-key-vault-sync-chart`. Please update your install accordingly.

Kubernetes app that syncs [cert-manager](https://cert-manager.io) Secrets to Azure Key Vault.

| Component   | Version | Status                                                                                                                           |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Helm Chart  | v1.3.2  |  |
| Application | v1.4.1  |     |

## Features

- Supports Kubernetes Nodes running `linux/amd64` (Intel, AMD), `linux/arm64` (Apple M1, ARM)
- Synchronizes Kubernetes Secrets to Azure Key Vault Certificates
- Allows for passwordless authentication using [Workload Identity](https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview) or Service Principal with Client Secret
- Certificate is automatically rotated when…
