---
repo: "kmjayadeep/homelab-k8s"
name: "homelab-k8s"
description: "Manifests for my homelab kubernetes cluster"
readmeQualityOk: true
url: "https://github.com/kmjayadeep/homelab-k8s"
language: "CSS"
languages: ["CSS"]
languagePcts: [86]
stars: 9
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-04-23T20:32:56Z"
lastCommitAt: "2026-09-20T08:45:55Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 67
maintainers: ["kmjayadeep", "fluxcdbot", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e197fef439e645d0dae66997a60c92c655022178402236f73505d0b35b677cb/kmjayadeep/homelab-k8s"
---

# Homelab K8s

This is where I keep all my kubernetes manifests for my homelab. Here is a screenshot of my homer dashboard.

## Clusters

### Andromeda
A mini pc sitting at my home

### Milkyway
K3s running in hetzner cloud

### Cosmos
Migrated from Andromeda to use cilium as CNI. I moved from bare metal to proxmox LXC and made a copy of the manifests with the name `cosmos`.

## Automation

I used [FluxCD](https://fluxcd.io/) to automate deploying the manifests in the clusters. It follows a gitops style to continuously watch and update the cluster state according to the manifests in git.

### Folder structure

```bash
.
├── bases # Common bases across all clusters
│   ├── apps
│   │   ├── app1 # Application manifests (kustomization or helm)
│   │   │   ├── deployment.yaml
│   │   │   ├── ingress.yaml
│   │   │   ├── kustomization.yaml
│   │   │   └── service.yaml
│   └── infra # Infrastructure components
│       ├── infra-app1
│       │   ├── helm-release.yaml
│       │   ├── helm-repo.yaml
│       │   ├── kustomization.yaml
│       │   └── namespace.yaml
├── clusters
│   ├── cosmos # Customizations specific to cosmos cluster
│   │   ├── apps
│   │   │   ├── app1 # kustomization…
