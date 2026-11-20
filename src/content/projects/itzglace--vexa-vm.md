---
repo: "ItzGlace/vexa-vm"
name: "vexa-vm"
description: "Free open-source KVM virtualization platform and Rust web panel for QEMU/libvirt: VM lifecycle, REST API, noVNC, IPv4/IPv6, quotas, firewall controls, Guest Tools, metrics and audit logs."
readmeQualityOk: true
url: "https://github.com/ItzGlace/vexa-vm"
homepage: "https://github.com/ItzGlace/vaxa-vm"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["cloud-computing", "homelab", "hypervisor", "infrastructure", "ipv6", "kvm", "libvirt", "linux", "novnc", "open-source"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-09T22:30:33Z"
lastCommitAt: "2026-11-20T12:03:56Z"
lastReleaseAt: "2026-09-01T10:36:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 53
undervaluedScore: 27
maintainers: ["ItzGlace", "iranmonitor"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8811cb572da8771ebd6e229fe2b242d5a39f1a518c10db506d7919d9f6e3d89/ItzGlace/vexa-vm"
discussionCount: 0
---

A free, open-source KVM virtualization control panel and API written in Rust.

Vexa-VM turns a Linux KVM/libvirt host into a modern virtual-machine platform. One Rust service
provides the web panel, versioned REST API, customer self-service portal, noVNC console gateway,
dual-stack address inventory, traffic accounting, VM firewall controls, image library, jobs, metrics,
and audit trail.

It is designed for operators who want a self-hosted, open-source alternative to closed VM
management panels without assembling a separate frontend, API, job runner, and console proxy.
Version `0.2.0` manages one KVM node. It is not yet a drop-in replacement for multi-node clustering,
live migration, or distributed storage in Proxmox VE, VMware vSphere, or OpenStack.
