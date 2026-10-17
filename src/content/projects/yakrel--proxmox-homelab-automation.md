---
repo: "Yakrel/proxmox-homelab-automation"
name: "proxmox-homelab-automation"
description: "Shell-based automation for deploying containerized services in LXC containers on Proxmox VE. Features automated stack deployments, monitoring with Grafana/Prometheus, and comprehensive homelab management tools."
readmeQualityOk: true
url: "https://github.com/Yakrel/proxmox-homelab-automation"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["automation", "docker", "homelab", "infrastructure-as-code", "lxc", "monitoring", "proxmox", "self-hosted"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-20T08:43:23Z"
lastCommitAt: "2026-10-17T07:58:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 49
maintainers: ["Yakrel"]
openGraphImageUrl: "https://opengraph.githubassets.com/0afec78addf84b035f6680e23ed98b0c3368dd24e6722c2667339c90717db300/Yakrel/proxmox-homelab-automation"
---

# Proxmox Homelab Automation

Personal Proxmox VE homelab running services across 7 unprivileged LXC containers. The repository contains the LXC definitions, Docker Compose stacks, deployment scripts, firewall setup, and encrypted deployment secrets.

The setup is built around Proxmox VE, ZFS, Docker Compose, Tailscale, Cloudflare Tunnel, Nginx Proxy Manager, AdGuard Home, Restic/Backrest, and a shared NVIDIA GPU for selected workloads.

- **Overview:** https://infra.byetgin.com/
- **Network topology:** https://infra.byetgin.com/topology.html

---

## Quick Start

Run this command on the Proxmox host:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Yakrel/proxmox-homelab-automation/main/installer.sh)"
```

This opens the interactive deployment menu.

To run an operation directly, append one of the following arguments to the command:

| Arguments | Action |
| --- | --- |
| `ai` | Deploy a specific stack; replace `ai` with another stack name |
| `redeploy ai` | Fast redeploy a single running stack |
| `redeploy all` | Fast redeploy all running stacks |

Encrypted environment files are decrypted with the homelab master key during deployment.

---

## Architecture…
