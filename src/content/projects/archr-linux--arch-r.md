---
repo: "archr-linux/Arch-R"
name: "Arch-R"
description: "A Arch Linux Based for Retro Consoles"
readmeQualityOk: true
url: "https://github.com/archr-linux/Arch-R"
homepage: "https://arch-r.io"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [45, 44]
stars: 163
forks: 12
openIssues: 16
closedIssues: 26
watchers: 4
contributors: 383
recentReleases: 0
createdAt: "2026-02-04T17:08:57Z"
lastCommitAt: "2026-11-09T03:30:16Z"
lastReleaseAt: "2026-06-30T18:51:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 34
maintainers: ["dgateles"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c1264c5a97bcb1c86d4e90023d2e5ea6ebe1a426d1423e6c01169fcdcaa166f/archr-linux/Arch-R"
discussionCount: 3
---

---

Arch R is an **Arch Linux** distribution for the **R36S** handheld gaming console and its many variants. In the same spirit as SteamOS, it pairs a genuine Arch userland (pacman, systemd, up-to-date packages) with a curated console experience: flash it, turn the device on, play. System updates are delivered through the built-in updater, kernel included; reflashing is only needed for a fresh install or recovery.

The image build pipeline descends from the LibreELEC family of embedded build systems (through JELOS and ROCKNIX), but the operating system it assembles is Arch Linux ARM, not a JELOS derivative.

## Features

- Genuine Arch Linux ARM base with pacman and signed package repositories (stable, next and dev channels).
- Built-in system updater in EmulationStation; kernel and device trees update through it too, with checksum-verified writes to the boot partition.
- Mainline kernel 6.12 LTS with board auto-detection via SARADC.
- Memory clock trained at 666MHz from boot (twice the BSP-era default) and tuned Mali-G31 graphics.
- EmulationStation frontend with RetroArch and 18+ cores pre-installed, plus PortMaster.
- Full audio support with speaker/headphone auto-switch…
