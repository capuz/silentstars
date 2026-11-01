---
repo: "SimplyProgrammer/Invidious-podman-LXC-VM"
name: "Invidious-podman-LXC-VM"
description: "Simple, fast, and automated \"just works\" setup for running a self-hosted Invidious instance on Proxmox LXCs or VMs, utilizing podman."
readmeQualityOk: true
url: "https://github.com/SimplyProgrammer/Invidious-podman-LXC-VM"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["invidious", "lxc", "lxc-containers", "no-ads", "privacy", "proxmox", "self-hosting", "vm", "youtube-alternative", "youtube-alternative-user-interface"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T12:52:47Z"
lastCommitAt: "2026-10-19T17:31:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 13
maintainers: ["SimplyProgrammer"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fb660c5781f25f69ca3416a015a9f3cc84fdbeb373287eb6b568811f3fafc34/SimplyProgrammer/Invidious-podman-LXC-VM"
---

# Invidious-podman-LXC-VM
This repo provides a simple, fast, and automated "just works" setup for running a self-hosted Invidious instance on Proxmox LXCs or VMs, utilizing podman.\
Inspired by https://github.com/NapoleonWils0n/cerberus/blob/master/invidious/invidious-2025.org

## Setup
### Prerequirements
Debian 12+ VM or an unprivileged Debian 12+ LXC container with:
* Name "invidious" (or something similar)
* 4GB+ of RAM
* 2+ x86_64 cores, 4 is ideal (ARM is also possible but `compose.yml` has to be modified accordingly).
* 20+GB of storage
* Static IP or static DHCP lease on your router.

### Networking
Further, you will need a DNS domain, paid or local one to point to this IP of your LXC/VM with Invidious. 
It would be great if your router would allow/do this by default, and automatically assign something like `invidious.lan` or even better, `invidious.home.arpa` to your LXC/VM. For example, [OpenWrt](https://forum.openwrt.org/t/use-home-arpa-as-default-tld-for-local-network/165056/11) does this by default. For other routers, extra config might be needed.
If you have your own domain, reversed-proxy etc., setup might differ for you...

### Installation
Run this script (with…
