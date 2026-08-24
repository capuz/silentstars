---
repo: "geekdojo/rasputin-control-plane"
name: "rasputin-control-plane"
description: "The brain of Rasputin, the open-source homelab cluster system: single-binary Go API + web UI + node agent. Passkey auth, atomic A/B updates, Compose apps"
readmeQualityOk: true
url: "https://github.com/geekdojo/rasputin-control-plane"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 9
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-25T21:07:52Z"
lastCommitAt: "2026-08-24T04:22:55Z"
lastReleaseAt: "2026-06-13T21:51:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 59
maintainers: ["BryceAshey", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1249576574/430c0321-6297-4df8-b815-aa9af1352a47"
fundingLinks: ["GITHUB:https://github.com/geekdojo"]
---

# rasputin-control-plane

The brain of **Rasputin** — an open-source homelab cluster system: a small
fleet of nodes (Raspberry Pi or Intel N100) plus a dedicated firewall node,
managed from one web UI. Atomic A/B OS updates with automatic rollback,
passkey-only auth, Docker Compose apps behind a catalog — opinionated where
you want guidance, open where you want control, and built to work in the
first hour.

> **Want to run Rasputin, not build it?** Flashable images and a four-step
> quickstart live at
> [rasputin.geekdojo.com/download](https://rasputin.geekdojo.com/download/).

This monorepo holds the control plane: API, web UI, and node agent (system
overview: [ARCHITECTURE.md](https://github.com/geekdojo/rasputin-control-plane/blob/HEAD/ARCHITECTURE.md)). The bootable images live in
[`rasputin-os`](https://github.com/geekdojo/rasputin-os) (compute/controlplane
nodes) and
[`rasputin-openwrt-firewall`](https://github.com/geekdojo/rasputin-openwrt-firewall)
(firewall node).

> **Status: pre-alpha.** Rasputin is in its commodity-hardware proof phase.
> APIs, wire formats, and schemas change without notice. Nothing here is
> ready to protect a network you care about — yet.

**Start…
