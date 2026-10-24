---
repo: "zarnautovic/kubernetes-homelab"
name: "kubernetes-homelab"
description: "TalosOS, kubernetes, cilium, flux, for my 3 node cluster"
readmeQualityOk: true
url: "https://github.com/zarnautovic/kubernetes-homelab"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-26T22:04:04Z"
lastCommitAt: "2026-10-24T08:07:30Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 54
maintainers: ["zarnautovic", "fluxcdbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ecb75a37b5cb4600bf83000bd12c433979831d751d9ea7b6030bd13c93ca5f6/zarnautovic/kubernetes-homelab"
---

# Homelab

GitOps repository for my homelab Kubernetes cluster.

## Stack

| Component | Technology |
|---|---|
| OS | Talos Linux v1.14.3 |
| Kubernetes | v1.36.5 |
| CNI | Cilium v1.20.3 (kube-proxy replacement, native routing, Gateway API, L2 announcements) |
| GitOps | Flux CD v2.9 (+ image automation for tdeemon: upgrade with `--components-extra=image-reflector-controller,image-automation-controller`) |
| Secrets | SOPS + age |
| Storage | Longhorn v1.12.1 + TrueNAS NFS |

## Nodes

Each Talos node is a Proxmox VM (16GB RAM allocated), one per physical **HP EliteDesk G4 Mini** host (32GB RAM each). All three are control-plane nodes with scheduling enabled (hyperconverged).

| Node | Host | IP | VM RAM |
|---|---|---|---|
| talos-icw-nam | zeus | 192.168.1.143 | 16GB |
| talos-pv0-ntu | poseidon | 192.168.1.135 | 16GB |
| talos-node-hades | hades | 192.168.1.136 | 16GB |

- **API VIP**: 192.168.1.100
- **LB IP pool**: 192.168.1.240/28 (Cilium L2 announcements)

## Networking

Two Cilium Gateways in the `network` namespace share one wildcard certificate (`*.example.com`, cert-manager DNS-01 via Cloudflare):

```
Public:  Internet → Cloudflare (proxied) → Cloudflare Tunnel…
