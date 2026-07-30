---
repo: "zhorvath83/home-ops"
name: "home-ops"
description: "My private Kubernetes (K3s) cluster managed by GitOps (Flux)."
readmeQualityOk: true
url: "https://github.com/zhorvath83/home-ops"
language: "Markdown"
languages: ["Markdown", "YAML"]
languagePcts: [60, 29]
topics: ["kubernetes", "helm", "k8s"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-06-30T20:01:51Z"
lastCommitAt: "2026-07-30T06:06:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 72
maintainers: ["zhorvath83", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/363d1b65a57697aa96f31994c306974bc337099b9f09eb7e6d2842047c81bf93/zhorvath83/home-ops"
---

# Home Infrastructure & Kubernetes Cluster

This is a mono repository for my home infrastructure and Kubernetes cluster. I try to
adhere to Infrastructure as Code (IaC) and GitOps practices using tools like Talos
Linux, Kubernetes, Flux, Helmfile, Just, mise, Renovate, and Terraform.

Agent note: this README remains human-facing. Tooling and AI assistants should use the repository guidance
files as the operational guide, starting at [CLAUDE.md](https://github.com/zhorvath83/home-ops/blob/HEAD/CLAUDE.md) and then following any more specific
`CLAUDE.md` files in subdirectories.

## 🏠 Hardware Infrastructure

The cluster runs on a single bare-metal Talos node. A second machine handles
file-level storage (NAS) and still hosts the OpenMediaVault VM under Proxmox;
the Phase 10 bare-metal OMV retirement of that hypervisor layer is a planned
post-cutover follow-up.

| Device | Qty | CPU | OS Disk | Data Disk | RAM | OS | Function |
| ------ | --- | --- | ------- | --------- | --- | -- | -------- |
| HP ProDesk 600 G6 Desktop Mini | 1 | Intel i7-10700T @ 2.0 GHz (Comet Lake) | NVMe (SK hynix PC801) | NVMe (SK hynix PC711) | 64 GB | Talos Linux | Single-node K8s control plane + workloads |…
