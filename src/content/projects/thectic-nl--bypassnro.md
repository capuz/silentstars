---
repo: "THectic-NL/BypassNRO"
name: "BypassNRO"
description: "Fixing and Re-implementing Microsoft's removal of BypassNRO with PowerShell, Sysprep and AutoUnattend."
readmeQualityOk: true
url: "https://github.com/THectic-NL/BypassNRO"
homepage: "https://bypassnro.thectic.nl"
language: "PowerShell"
languages: ["PowerShell", "HTML"]
languagePcts: [51, 35]
topics: ["bypass", "oobe", "powershell", "re-implementation", "windows", "windows11", "26h2", "25h2"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-13T22:59:21Z"
lastCommitAt: "2026-09-03T08:13:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 61
maintainers: ["Stensel8", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c80eefc3b9e52a4b805ff2ee0a7d28b554b8d2f74e02f02e3da64972f5b2544/THectic-NL/BypassNRO"
---

# Bypass NRO

## Status of Bypass Methods (August 2026)

Since March 2025, Microsoft's `oobe\bypassnro` command has been removed from Windows 11 (24H2/25H2). The alternative `start ms-cxh:localonly` (and `start ms-cxh://setaddlocalonly`) was blocked starting with Insider build 26220.6772 (October 6, 2025). Whether that block reached the retail 25H2 branch (26200.x) has not been re-tested here, so check your own image before relying on it.

The **BypassNRO method in this project still works** because it uses Sysprep with a custom unattend.xml. This approach remains functional for now, because unattend.xml is part of Windows' official enterprise deployment tools and cannot easily be blocked by Microsoft without breaking enterprise scenarios.

Rufus, and on Pro/Enterprise "Set up for work or school" > "Sign-in options" > "Domain join instead", can still be used to create a local account.

**Timeline:**
- Removal of `oobe\bypassnro`: March 2025
- Blocking of `ms-cxh:localonly`: October 6, 2025 (Insider builds 26220.6772 / 26120.6772)

## Download and Run (Shift+F10 during OOBE)

### PowerShell
```powershell
iex(irm bypassnro.thectic.nl/bypass.ps1)
```

### CMD Wrapper
```powershell…
