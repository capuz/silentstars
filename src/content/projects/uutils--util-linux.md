---
repo: "uutils/util-linux"
name: "util-linux"
description: "Rust reimplementation of the util-linux project "
readmeQualityOk: true
url: "https://github.com/uutils/util-linux"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 215
forks: 56
openIssues: 25
closedIssues: 25
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2024-01-15T22:11:43Z"
lastCommitAt: "2026-07-21T06:11:24Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 87
undervaluedScore: 38
maintainers: ["renovate[bot]", "cakebaker", "sylvestre"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd7825ef82695b99263afad9d1f72d43b9387dc8c2abd24852c6f7f1d1834b6b/uutils/util-linux"
discussionCount: 0
---

# util-linux

This projects aims at doing the same as https://github.com/uutils/coreutils for util-linux.

We are rewriting [these tools](https://github.com/util-linux/util-linux) in Rust as drop-in replacements.

First, reimplement the most important tools from util-linux:

## System Information
- `dmesg`: Displays kernel messages.
- `lscpu`: Shows CPU architecture information.
  Started
- `lsipc`: Lists IPC facilities.
- `lslocks`: Lists system locks.
- `lsmem`: Lists memory ranges and status.
- `lsns`: Lists namespaces.

## Hardware Management
- `chcpu`: Manages CPU state.
- `rtcwake`: Manages system sleep states.
- `zramctl`: Manages zram devices.
- `wdctl`: Shows watchdog status.
- `chmem`: Manages kernel memory usage.

## Filesystem Tools
- `findmnt`: Lists mounted filesystems.
- `mountpoint`: Checks if a directory is a mountpoint.
  Started
- `fsck`: Checks and repairs filesystems.
- `fsfreeze`: Freezes/unfreezes filesystems.
  Done
- `fstrim`: Discards unused blocks on filesystems.
- `wipefs`: Wipes filesystem signatures.

## Partition Management
- `blkdiscard`: Discards sectors on a device.
- `blkid`: Identifies block device attributes.
- `blkzone`: Manages zoned block…
