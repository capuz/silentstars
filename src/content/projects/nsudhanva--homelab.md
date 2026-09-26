---
repo: "nsudhanva/homelab"
name: "homelab"
description: "@nsudhanva & @maanasanarayan personal bare-metal K3s homelab on Ubuntu 26.04 LTS. 100% GitOps via ArgoCD, Tailscale Gateway API, HashiCorp Vault, local AI inference, Home Assistant, and Prometheus. Docs: https://homelab.sudhanva.me"
readmeQualityOk: true
url: "https://github.com/nsudhanva/homelab"
homepage: "https://homelab.sudhanva.me"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ansible", "argocd", "gitops", "homelab", "kubernetes", "tailscale", "ai", "grafana", "home-assistant", "nvidia-gpu"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-21T15:08:07Z"
lastCommitAt: "2026-09-26T08:48:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 63
maintainers: ["argocd-image-updater"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a38d4c96685d2ccd657bb8ed9b66e5c5f53330ceaf332c81352fa9553419683/nsudhanva/homelab"
---

# Homelab

A self-hosted bare-metal Kubernetes cluster on Ubuntu 26.04 LTS (node `legion`) powered by K3s `v1.36+` (`v1.36.4+k3s1`) and managed 100% via GitOps with ArgoCD.

- Provisioned from scratch using automated Ansible playbooks for zero-touch bare-metal bring-up
- Traffic flows through Tailscale for secure ingress and Envoy Gateway for routing, with Vault and External Secrets handling credentials
- High-performance local SSD storage backed by K3s Local-Path Provisioner on `/home/k3s-storage`
- Full hardware GPU acceleration with NVIDIA GTX 1050 Ti passed through via NVIDIA GPU Operator `v26.7.0` with Container Device Interface (CDI)
- Automated zero-downtime K3s upgrades orchestrated by Rancher System Upgrade Controller
- Immutable GitOps operations where ArgoCD reconciles all infrastructure and user applications from this repository

## Table of contents

- [Features](#features)
- [Architecture](#architecture)
  - [Core systems map](#core-systems-map)
  - [Platform services map](#platform-services-map)
  - [Network topology](#network-topology)
  - [Cluster network ports](#cluster-network-ports)
- [Quick start](#quick-start)
  - [Automated bare metal…
