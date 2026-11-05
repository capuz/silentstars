---
repo: "ages2001/MMCSDNT"
name: "MMCSDNT"
description: "SD/SDHC/SDXC and MMC/eMMC Driver for Windows NT3.1/NT3.50/NT3.51/NT4/2000/XP and Windows 95/98/Me x86/x64"
readmeQualityOk: true
url: "https://github.com/ages2001/MMCSDNT"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-10-17T10:49:40Z"
lastCommitAt: "2026-11-05T11:25:00Z"
lastReleaseAt: "2026-11-05T11:25:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 20
maintainers: ["ages2001"]
openGraphImageUrl: "https://opengraph.githubassets.com/953b29cf5ecac60d43a89696d63ec25692e4f783f137d667b65cd25e027ee4a6/ages2001/MMCSDNT"
---

# MMCSDNT — SD/SDHC/SDXC and MMC/eMMC Driver for Windows 95/98/Me and Windows NT 3.1 to XP x64

**MMCSDNT** is a SCSI miniport driver for SD cards and eMMC on standard SD host controllers (SDHCI). It presents every card as a **fixed, bootable disk**, so Windows 95, 98 and Me, Windows NT 3.1, 3.50, 3.51 and 4.0, and Windows 2000, XP and Server 2003 (x86 and x64) can be installed on, boot from and use the eMMC or SD card of tablets, thin clients, netbooks and embedded boards — storage none of these systems knows.

| | |
|---|---|
| **Version** | 1.2.0.0 |
| **Operating systems** | Windows 95 / 98 / Me · Windows NT 3.1 / 3.50 / 3.51 / 4.0 · Windows 2000 / XP / Server 2003 (x86) · Windows XP x64 / Server 2003 x64 |
| **Hardware** | SD host controllers (SDHCI 1.00–3.00) on PCI (class code `08-05`) or described only by ACPI (Intel Bay Trail, Cherry Trail, Braswell, Apollo Lake, AMD and others); up to 6 slots per controller, 32 controllers |
| **Cards** | SD, SDHC and SDXC (up to UHS-I SDR104), MMC and eMMC (up to HS400) |
| **Binaries** | `mmcsd9x.mpd` (Windows 9x/Me) · `mmcsdnt.sys` (NT 3.1–4.0) · `mmcsdnt.sys` (2000/XP/2003, x86 and x64) · `mmccfg.exe` (port program, NT 3.1–4.0 and…
