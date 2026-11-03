---
repo: "SteelCrab/firecrab"
name: "firecrab"
description: "A self-hosted MicroVM platform for operations, hosting, and AI agents"
readmeQualityOk: true
url: "https://github.com/SteelCrab/firecrab"
homepage: "https://firecrab.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [66]
stars: 56
forks: 13
openIssues: 49
closedIssues: 105
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-06-29T15:34:19Z"
lastCommitAt: "2026-11-03T10:51:42Z"
lastReleaseAt: "2026-10-29T23:09:25Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 43
maintainers: ["SteelCrab"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fbd58663ed6a884415fc305ea912f7294739e5bf3e80df84f0278c6e6cdf618/SteelCrab/firecrab"
discussionCount: 4
---

```text
███████ ██ ██████  ███████  ██████ ██████   █████  ██████
██      ██ ██   ██ ██      ██      ██   ██ ██   ██ ██   ██
█████   ██ ██████  █████   ██      ██████  ███████ ██████
██      ██ ██   ██ ██      ██      ██   ██ ██   ██ ██   ██
██      ██ ██   ██ ███████  ██████ ██   ██ ██   ██ ██████
```

[DeepWiki](https://deepwiki.com/SteelCrab/firecrab)

## Overview

Run Firecracker microVMs on one Linux host you control, managed through a browser dashboard, CLI, or REST API. Built for personal servers, homelabs, and development environments.

- **VMs** — create, start, stop, and delete microVMs; access a browser serial console.
- **Images and disks** — M2Image templates, OCI image imports, and MicroStorage disk locations.
- **Networks** — MicroNetwork subnets and per-VM internet or isolated egress.
- **Host platforms** — Linux directly; macOS and Windows through microManager (Windows Preview).

| Key point | **Firecrab** | [KVM + libvirt](https://libvirt.org/) | [OpenStack](https://docs.openstack.org/nova/latest/) |
| --- | --- | --- | --- |
| Focus | Single-host microVMs | General-purpose VMs | Private cloud |
| Virtualization | Firecracker + KVM | QEMU/KVM | Usually QEMU/KVM |…
