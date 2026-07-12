---
repo: "Stellarlyacrochet22/hardware-id-manager"
name: "hardware-id-manager"
description: "HWID Spoofer, read/backup/restore tool for Windows 10/11. Open-source, research and admin use."
readmeQualityOk: true
url: "https://github.com/Stellarlyacrochet22/hardware-id-manager"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 23
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-26T20:00:46Z"
lastCommitAt: "2026-07-12T06:17:37Z"
lastReleaseAt: "2026-06-21T10:17:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 32
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/99d31210cdd685acefbaa8e6ccc3d0efd51b299824b2e2d58c394d3c808b6dee/Stellarlyacrochet22/hardware-id-manager"
---

</p>

<h1 align="center">HWID Spoofer</h1>

  <strong>Hardware identifier management tool for Windows 10 / 11 (x64)</strong>
</p>

</p>

</p>

---

## Overview

**HWID Spoofer** is an open-source Windows utility for reading, backing up, and temporarily modifying hardware identifiers used by software and games for device fingerprinting. Built for researchers, developers, and power users who need to test fingerprinting logic on their **own machines**.

- Read current disk serial, SMBIOS UUID, MAC address, and volume IDs
- One-click backup of original identifiers before any change
- Restore original values on reboot or via manual restore
- Clean CLI and optional GUI — no bundled third-party tools
- Fully auditable C++ source — build it yourself

> **Disclaimer:** Use only on systems you own. You are responsible for compliance with applicable laws and software terms of service.

---

## Features

| Module | Description |
|--------|-------------|
| **Disk Serial** | Reads and spoofs ATA/NVMe serial strings exposed to user-mode |
| **SMBIOS** | Handles system UUID, baseboard serial, and product strings |
| **Network MAC** | Randomizes or sets custom MAC on selected adapters |
| **Volume…
