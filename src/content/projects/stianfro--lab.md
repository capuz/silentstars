---
repo: "stianfro/lab"
name: "lab"
description: "My new Talos homelab."
readmeQualityOk: true
url: "https://github.com/stianfro/lab"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [63, 29]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-08T23:56:15Z"
lastCommitAt: "2026-08-08T04:35:25Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 47
maintainers: ["stianfro", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/1621fd2e62e0d69249f726303b4344f5ac49ecf3b176c9f2cfd9ca69a42c9018/stianfro/lab"
---

# Lab

Homelab Kubernetes cluster running Talos Linux on three Minisforum UM790 Pro
mini PCs. The cluster is managed with Flux GitOps.

## Hardware

- 3x Minisforum UM790 Pro Mini-PC
- 1x TP-Link TL-SG108-M2 8-Port 2.5G Switch

## Network

| Hostname | IP            | MAC               |
| -------- | ------------- | ----------------- |
| talos-0  | 192.168.1.100 | 58-47-CA-7F-C3-47 |
| talos-1  | 192.168.1.101 | 58-47-CA-7F-C2-9C |
| talos-2  | 192.168.1.102 | 58-47-CA-7F-C3-46 |

## GitOps

- Flux is bootstrapped from `clusters/talos/flux-system`.
- The root Flux `Kustomization` reconciles `clusters/talos`.
- Each app or infrastructure concern has an explicit Flux `Kustomization` in
  `clusters/talos/apps.yaml`.
- Helm charts are represented as Flux `HelmRelease` objects in the app
  directories.
- Argo CD, Kargo, and Argo Rollouts are intentionally not part of this setup.

## Bootstrap

```bash
just bootstrap
just reconcile
```

## Common Checks

```bash
flux check
flux get sources git -A
flux get sources helm -A
flux get kustomizations -A
flux get helmreleases -A
kubectl get pods -A
```

## Talos

Talos machine configuration lives under `talos/`.

- `talos/controlplane.yaml`
-…
