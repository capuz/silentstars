---
repo: "martinohmann/home-ops"
name: "home-ops"
description: "Wife approved HomeOps driven by Kubernetes and GitOps using Flux"
readmeQualityOk: true
url: "https://github.com/martinohmann/home-ops"
language: "YAML"
languages: ["YAML"]
languagePcts: [86]
topics: ["flux", "home-ops", "kubernetes", "kubesearch"]
stars: 22
forks: 0
openIssues: 1
closedIssues: 41
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-11-08T12:19:29Z"
lastCommitAt: "2026-10-26T20:59:46Z"
lastReleaseAt: "2024-09-01T01:18:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 62
maintainers: ["renovate[bot]", "martinohmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/58f1de9972c4acf4e6dd5ca232796979b39aad4c64b85e4ef2c78313bfd3fb7b/martinohmann/home-ops"
fundingLinks: ["GITHUB:https://github.com/martinohmann"]
---

### Kubernetes at Home

_... managed with Terraform, Ansible, Flux, Renovate, and GitHub Actions_

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster. I
try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools
like [Ansible](https://www.ansible.com/),
[Terraform](https://www.terraform.io/), [Kubernetes](https://kubernetes.io/),
[Flux](https://github.com/fluxcd/flux2),
[Renovate](https://github.com/renovatebot/renovate), and [GitHub
Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

There is a template over at
[onedr0p/flux-cluster-template](https://github.com/onedr0p/flux-cluster-template)
if you want to try and follow along with some of the practices I use here.

### Installation

My cluster is [k3s](https://k3s.io/) provisioned over
[Proxmox](https://www.proxmox.com/) Ubuntu VMs using the
[Ansible](https://www.ansible.com/) galaxy role
[ansible-role-k3s](https://github.com/PyratLabs/ansible-role-k3s). The VMs are
managed via [Terraform](https://github.com/martinohmann/home-ops/blob/HEAD/terraform/proxmox).

This is a semi-hyper-converged cluster, workloads and block storage are sharing
the…
