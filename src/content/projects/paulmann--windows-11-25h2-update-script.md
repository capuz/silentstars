---
repo: "paulmann/Windows-11-25H2-Update-Script"
name: "Windows-11-25H2-Update-Script"
description: "Enables Windows 11 25H2 on 24H2 machines with the official enablement package (KB5054156): architecture detection, signature validation, BITS fallback, retries, logging and controlled reboot."
readmeQualityOk: true
url: "https://github.com/paulmann/Windows-11-25H2-Update-Script"
homepage: "https://paulmann.github.io/Windows-11-25H2-Update-Script/"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [84]
topics: ["25h2", "automation", "batch", "deployment", "powershell", "sysadmin", "upgrade", "windows-11", "windows-update", "enablement-package"]
stars: 28
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2025-09-23T15:11:52Z"
lastCommitAt: "2026-11-07T09:29:20Z"
lastReleaseAt: "2026-10-25T16:24:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/14216ccf7a317e24c5cf9c6128ebbfe5215e7c59478fdbba74ed009b1d3c30f7/paulmann/Windows-11-25H2-Update-Script"
---

# Windows 11 25H2 & 26H2 Update Script 🚀✨

> **Enablement-package upgrades for Windows 11: 24H2 → 25H2 (KB5054156) and 24H2/25H2 → 26H2 (KB5121794) — one small package, one restart**

This repository ships two enablement-package upgrade paths. **25H2** (1.0.0) upgrades 24H2 to 25H2 with KB5054156. **26H2** (1.1.0) upgrades 24H2 *or* 25H2 straight to 26H2 with KB5121794. Both come as a full PowerShell implementation and a reduced `cmd.exe` alternative, detect the architecture (including the `ARM 64-bit Processor` case), validate the package with SHA-1 and Authenticode, and keep transcripts. The 26H2 pair additionally refuses LTSC and server editions, supports a true read-only `-WhatIf`, and ships 57 Pester tests. The 25H2 scripts are unchanged.

## ⚡ Quick Start

### PowerShell Version (Recommended)
```powershell
# Clone and install
git clone https://github.com/paulmann/Windows-11-25H2-Update-Script.git
cd Windows-11-25H2-Update-Script

# Run as Administrator
.\Upgrade-Win11-To-25H2.ps1

# With custom parameters
.\Upgrade-Win11-To-25H2.ps1 -ForceReboot -RetryCount 5

# One-time bypass execution policy
powershell.exe -ExecutionPolicy Bypass -File ".\Upgrade-Win11-To-25H2.ps1"
```…
