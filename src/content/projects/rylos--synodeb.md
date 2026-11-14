---
repo: "rylos/synodeb"
name: "synodeb"
description: "Debian 13 on Synology DS920+, DS923+ and DS423+: every piece of hardware working, installed with the official Debian installer over SSH"
readmeQualityOk: true
url: "https://github.com/rylos/synodeb"
homepage: "https://rylos.github.io/synodeb"
language: "Shell"
languages: ["Shell", "Python", "C"]
languagePcts: [47, 30, 23]
topics: ["debian", "debian-installer", "ds923", "linux-kernel", "nas", "synology", "ds920", "ds423"]
stars: 30
forks: 6
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-21T23:18:17Z"
lastCommitAt: "2026-11-14T21:56:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 42
maintainers: ["rylos", "prt1999", "vlw"]
openGraphImageUrl: "https://opengraph.githubassets.com/7737a84d6a1f504fdffb4f505be2366364f40e423e981d67c6ffdc096174f8d7/rylos/synodeb"
fundingLinks: ["CUSTOM:https://www.paypal.com/paypalme/marcoziliani78", "CUSTOM:https://github.com/rylos/.github/blob/main/DONATE.md#ethereum"]
discussionCount: 2
---

# synodeb

Debian 13 on Synology DS920+, DS923+ and DS423+, with the NAS hardware working:<br>
fans, LEDs, buttons, beeper, power schedule, UPS, watchdog, every bay and both M.2 slots.

synodeb turns a Synology NAS into a plain **Debian trixie** server. A Linux kernel (6.18 LTS,
or the newest stable 7.3) with drivers for the NAS is started by its own boot loader, and the
official **Debian installer** runs over **SSH**. You choose disks, RAID, LVM and filesystems as
on any Debian machine. DSM can stay on its own disks, and one command switches between the two.

> [!TIP]
> **Try it with [rynas](https://github.com/rylos/rynas)**, a web NAS manager for plain Debian:
> storage, shares, snapshots and Docker apps from the browser, plus the Synology hardware of
> synodeb (fans, LEDs, UPS, notifications).

> [!WARNING]
> Replacing the operating system of a NAS is risky. **You use synodeb at your own risk**: back
> up your data first, and keep the DOM backup that the setup script makes.

This project is not affiliated with, endorsed or supported by Synology Inc. "Synology",
"DiskStation" and "DSM" are trademarks of Synology Inc.

## Supported models

| model | CPU | status |
|---|---|---|
|…
