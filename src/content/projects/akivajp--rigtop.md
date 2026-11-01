---
repo: "akivajp/rigtop"
name: "rigtop"
description: "System monitor for workstations, laptops and NAS — terminal UI and native GUI, many hosts over SSH. A btop alternative."
readmeQualityOk: true
url: "https://github.com/akivajp/rigtop"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["btop", "btop-alternative", "btrfs", "egui", "gpu", "linux", "nvidia", "raid", "ratatui", "rust"]
stars: 41
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-23T16:40:29Z"
lastCommitAt: "2026-11-01T10:44:14Z"
lastReleaseAt: "2026-10-25T19:41:25Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 44
maintainers: ["akivajp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1431300026/34aa694f-c14c-40f8-bc5f-bfa5debda4df"
fundingLinks: ["GITHUB:https://github.com/akivajp", "BUY_ME_A_COFFEE:https://buymeacoffee.com/akivajp"]
---

# rigtop

> **Early development.** The TUI and GUI work on Linux and Windows and monitor several hosts over SSH with an overview.

A system monitor for workstations, laptops and NAS — an alternative to btop that also shows storage health, per-process GPU usage and many hosts over SSH. Two front-ends share one data-collection core:

- **`rigtop`** — terminal UI
- **`rigtop-gui`** — native GUI (no web view) with a btop-like layout and resizable panels

[日本語版 README](https://github.com/akivajp/rigtop/blob/HEAD/README.ja.md)

## Goals

- The btop overview on one screen: CPU (total, per core, temperatures), every GPU, memory, storage, network, and a process list with kill / force kill.
- **Storage health**, which existing monitors mostly skip: mdadm array state and resync progress, ZFS pools (layout such as raidz or mirror, each device's state and read, write and checksum errors, the last scrub, data errors), btrfs RAID profiles and per-device error counters, NVMe temperatures, and SMART health. ZFS details come from `zpool status`, which needs no root on most systems.
- Per-process GPU usage and VRAM (NVIDIA, via NVML), per-process disk I/O, and the container each process runs in…
