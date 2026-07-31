---
repo: "ravilushqa/homelab"
name: "homelab"
description: "Homelab automation and management using Proxmox, Kubernetes, Talos, and Terraform"
readmeQualityOk: true
url: "https://github.com/ravilushqa/homelab"
language: "HCL"
languages: ["HCL", "Python"]
languagePcts: [41, 29]
topics: ["api-gateway", "cilium", "homelab", "kubernetes", "proxmox", "talos", "terraform", "traefik"]
stars: 6
forks: 2
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-07T08:50:35Z"
lastCommitAt: "2026-07-31T06:29:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 70
maintainers: ["Zent7", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc48ad9aedb727e1b5410250bb2a9d9442edafdd983ecc456c8d2786209d3a3d/ravilushqa/homelab"
---

# HomeLab Project 🏠💻

This repository represents my **HomeLab setup**, showcasing an integration of various modern technologies for managing a
Kubernetes-based infrastructure. It includes configurations for virtualization, networking, storage, and application
deployment.

---

## Core Technologies 🛠️
- [Proxmox](https://www.proxmox.com/) Server management and virtualization.
- [Terraform](https://www.terraform.io/) Infrastructure as Code.
- [Talos Linux](https://www.talos.dev/) Kubernetes OS.
- [Cilium](https://cilium.io/) Network security and observability.
- [Traefik](https://traefik.io/) Edge Router due to its simplicity and TLS passthrough capabilities and my router limitations.
- [Cert-Manager](https://cert-manager.io/) Certificate management.
- [Proxmox CSI](https://github.com/sergelogvinov/proxmox-csi-plugin) Storage provisioning.
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) Encrypted secrets management, which is safe to store in Git.
- [Gateway API](https://gateway-api.sigs.k8s.io/) Next generation of Kubernetes Ingress.
- [Grafana Cloud](https://grafana.com/) Monitoring and observability of the cluster.
- [ArgoCD](https://argo-cd.readthedocs.io/)…
