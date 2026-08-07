---
repo: "AlessandroZanatta/homelab-v2"
name: "homelab-v2"
description: "Infrastructure as Code for my homelab! "
readmeQualityOk: true
url: "https://github.com/AlessandroZanatta/homelab-v2"
language: "Just"
languages: ["Just", "Jinja"]
languagePcts: [57, 43]
stars: 6
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-02T21:59:54Z"
lastCommitAt: "2026-08-07T05:16:18Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 73
maintainers: ["renovate[bot]", "AlessandroZanatta"]
openGraphImageUrl: "https://opengraph.githubassets.com/8adaeb2cb2d9b8c900426973fba0bc302efc1e7d9f243f5eb5dd5f5f2651c3ca/AlessandroZanatta/homelab-v2"
---

# kalexlab - GitOps Homelab

## Overview

This repository keeps all the Infrastructure as Code (IaC) for my homelab, composed of:

- HP EliteDesk 800 G3M i7-6700T and 16G DDR4 (192.168.10.4)
- Dell Optiplex 3050M with i5-6600T and 16G DDR4 (192.168.10.3)
- Raspberry PI4B 4G (192.168.10.2)
- TP-Link Archer AX23

The TP-Link router has OpenWRT installed, and is also used for remote access via Wireguard.

Cluster nodes use Talos to spin up a Kubernetes cluster. A small ansible playbook is used to make the nodes ready (i.e. install Cilium, CoreDNS and ArgoCD).
When nodes are ready, the `bootstrap/app-of-apps.yaml` manifest is used to install all the ArgoCD applications, finalizing the cluster setup.

## Folder structure

The following is a general overview of the folders:

- [ansible](https://github.com/AlessandroZanatta/homelab-v2/blob/HEAD/ansible): everything related to Ansible
  - [playbooks](https://github.com/AlessandroZanatta/homelab-v2/blob/HEAD/ansible/playbooks)
    - [cluster](https://github.com/AlessandroZanatta/homelab-v2/blob/HEAD/ansible/playbooks/cluster): contains the Ansible playbook used to boostrap a Talos cluster with CNI, DNS and ArgoCD
    -…
