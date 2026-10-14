---
repo: "AlessandroZanatta/homelab-v2"
name: "homelab-v2"
description: "Infrastructure as Code for my homelab! "
readmeQualityOk: true
url: "https://github.com/AlessandroZanatta/homelab-v2"
language: "HCL"
languages: ["HCL"]
languagePcts: [88]
stars: 6
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-02T21:59:54Z"
lastCommitAt: "2026-10-14T08:57:48Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 73
maintainers: ["renovate[bot]", "AlessandroZanatta"]
openGraphImageUrl: "https://opengraph.githubassets.com/f144bd3cf1687be392fdda1725a78d68664973aa0dff2e6af99c316142573ca3/AlessandroZanatta/homelab-v2"
---

# kalexlab - GitOps Homelab

## Overview

This repository keeps all the Infrastructure as Code (IaC) for my homelab, composed of:

| Host   | Hardware                                 | IP           | Role                            |
| ------ | ---------------------------------------- | ------------ | ------------------------------- |
| zeus   | HP EliteDesk 800 G3M, i7-6700T, 16G DDR4 | 192.168.10.4 | Control plane (schedulable)     |
| hermes | Dell Optiplex 3050M, i5-6600T, 16G DDR4  | 192.168.10.3 | Worker                          |
| athena | Raspberry Pi 4B, 4G                      | 192.168.10.2 | Worker, VPN egress gateway      |
| -      | TP-Link Archer AX23 (OpenWRT)            | 192.168.10.1 | Router, WireGuard remote access |

The Kubernetes API is exposed on the control plane VIP `192.168.10.9`.

Cluster nodes run [Talos](https://www.talos.dev/), whose configuration is managed with [topf](https://github.com/AlessandroZanatta/homelab-v2/blob/HEAD/topf). Secrets are encrypted with [SOPS](https://github.com/getsops/sops) using an AGE key.

Once the cluster is up and running, the…
