---
repo: "Definisi/mikrotik-mirror"
name: "mikrotik-mirror"
description: "MikroTik RouterOS download mirror — auto-synced every 6 hours"
readmeQualityOk: true
url: "https://github.com/Definisi/mikrotik-mirror"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-30T16:41:19Z"
lastCommitAt: "2026-11-10T14:49:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 58
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4685d96aab08d46295727d2f8ceed32aa6e45b26586f057088f074fd0299a7dc/Definisi/mikrotik-mirror"
discussionCount: 1
---

# mikrotik-mirror

A local mirror for **MikroTik RouterOS** downloads. This tool pulls every package, install image, tool, and SHA256 checksum from `download.mikrotik.com` and keeps them in sync on a schedule.

Why run your own mirror? If you manage dozens (or hundreds) of MikroTik devices, downloading updates from the official server for each one wastes bandwidth and time. A local mirror lets you point all your routers at one internal source. It also helps in air-gapped networks or regions with slow international links.

## What gets mirrored

| Category | Examples |
|----------|----------|
| System packages | `routeros-7.20.8-arm64.npk` |
| Install images | `.iso`, `.zip` (IMG) |
| Extra packages | container, dude, iot, wireless, zerotier, and more |
| All-in-one bundles | `all_packages-arm64-7.20.8.zip` |
| SwitchOS | Firmware for all 29 switch models (SwitchOS + SwitchOS Lite) |
| CHR images | RAW disk, OVA, VDI, VHD, VHDX, VMDK (x86 + arm64) |
| WinBox | macOS, Linux, Windows (v4.0.1) |
| Tools | Netinstall (Win64/Win32/Linux), The Dude, Bandwidth Test, FlashFig |
| Checksums | `.sha256` for every file above |

**Architectures:** `arm64` `arm` `mipsbe` `mmips` `ppc` `smips`…
