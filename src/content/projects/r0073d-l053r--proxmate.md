---
repo: "r0073d-l053r/ProxMate"
name: "ProxMate"
description: "A lightweight, invite-only cloud dashboard built on Proxmox VE."
readmeQualityOk: true
url: "https://github.com/r0073d-l053r/ProxMate"
homepage: "https://proxmate.host"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["dashboard", "homelab", "kvm", "lxc", "multi-tenancy", "nextjs", "private-cloud", "proxmox", "proxmox-ve", "qemu"]
stars: 82
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-23T14:55:58Z"
lastCommitAt: "2026-08-20T04:08:00Z"
lastReleaseAt: "2026-06-29T16:27:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 31
maintainers: ["r0073d-l053r"]
openGraphImageUrl: "https://opengraph.githubassets.com/c918ba488e44f85afcecebdcd8cd269f32785b0816d51545a3b5551c8b2ffb77/r0073d-l053r/ProxMate"
discussionCount: 2
---

<br/>

<p>
</p>

**A lightweight, invite-only cloud dashboard built on Proxmox VE.**

ProxMate gives you a DigitalOcean-style WebUI on top of your existing Proxmox cluster.
Hand out invite links with resource quotas, let users spin up VMs and LXC containers —
from an ISO, a template, or a one-click cloud image (paste an SSH key → a ready-to-SSH
box in ~60 s) — and access them via an in-browser console, all without exposing your
Proxmox admin panel.

[Quick start](#quick-start) · [Features](#features) · [Screenshots](#screenshots) · [Production](#production-deployment) · [Docs](#documentation)

</div>

---

## Features

- **Invite-only multi-tenancy** — invite links carry CPU/RAM/disk quotas; a per-VM firewall keeps tenants off your LAN, your other guests, and the host **once the Proxmox cluster firewall is enabled** (ProxMate walks you through that in-app)
- **VMs & LXC containers** — create from an ISO, the Template Store, or 20 curated cloud images (16 x86-64 + 4 ARM64); resize, rebuild, rename, snapshots, power schedules, tags & bulk actions
- **Share a VM** — hand another tenant access at one of three preset levels (Viewer / Operator / Manager); no share level can delete,…
