---
repo: "fenio/anylinuxfs-gui"
name: "anylinuxfs-gui"
description: "macOS GUI for anylinuxfs"
readmeQualityOk: true
url: "https://github.com/fenio/anylinuxfs-gui"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [55, 33]
topics: ["btrfs", "disk", "disk-management", "ext4", "filesystem", "linux", "macos", "mount", "zfs", "luks"]
stars: 185
forks: 3
openIssues: 1
closedIssues: 20
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-01-27T11:07:11Z"
lastCommitAt: "2026-08-29T10:21:03Z"
lastReleaseAt: "2026-02-09T06:44:35Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 30
maintainers: ["fenio", "renovate[bot]", "ecroteauwpi"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e05c368d324c0dce655b47bdd31bf2a4425d619c8047b3250071ee79ecab93f/fenio/anylinuxfs-gui"
fundingLinks: ["GITHUB:https://github.com/fenio", "KO_FI:https://ko-fi.com/fenio"]
---

</p>

A macOS GUI application for [anylinuxfs](https://github.com/nohajc/anylinuxfs) - mount Linux filesystems (ext4, btrfs, XFS, etc.) on macOS.

## Features

- **Disk Management** - Browse and mount Linux partitions (ext2/3/4, btrfs, XFS, ZFS, etc.)
- **Safe Eject** - Properly unmount and eject external drives with one click
- **Encrypted Drives** - Support for LUKS and BitLocker encrypted volumes
- **Embedded VM Shell** - Interactive terminal with image selector (Alpine Linux or FreeBSD)
- **Custom Actions** - Create and manage mount/unmount hooks with environment variables
- **Image Management** - Install/uninstall VM images (Alpine Linux, FreeBSD for ZFS)
- **Package Management** - Add/remove custom Alpine packages to extend VM capabilities
- **Real-time Monitoring** - Live mount status and log viewer with follow mode
- **VM Configuration** - Customize RAM, vCPUs, and log verbosity
- **System Tray** - Menu bar icon with quick access to show/hide, unmount, and quit
- **Admin Mode** - Privilege escalation for accessing disks that require sudo
- **Launch at Login** - Optional auto-start via macOS Launch Agent
- **Quit Protection** - Warns before quitting if a filesystem is still…
