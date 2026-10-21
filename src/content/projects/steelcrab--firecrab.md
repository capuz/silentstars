---
repo: "SteelCrab/firecrab"
name: "firecrab"
description: "A self-hosted MicroVM platform for operations, hosting, and AI agents"
readmeQualityOk: true
url: "https://github.com/SteelCrab/firecrab"
homepage: "https://firecrab.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
stars: 53
forks: 13
openIssues: 50
closedIssues: 56
watchers: 0
contributors: 6
recentReleases: 8
createdAt: "2026-06-29T15:34:19Z"
lastCommitAt: "2026-10-21T23:36:51Z"
lastReleaseAt: "2026-10-06T14:49:24Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 42
maintainers: ["SteelCrab", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dfac57b6d61e9466bd9718a48762683e4c0aad8e2e564c0dfa5f195d981c1a3/SteelCrab/firecrab"
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
