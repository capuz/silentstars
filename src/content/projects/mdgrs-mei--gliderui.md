---
repo: "mdgrs-mei/GliderUI"
name: "GliderUI"
description: "Cross-platform Desktop GUI framework for PowerShell powered by Avalonia"
readmeQualityOk: true
url: "https://github.com/mdgrs-mei/GliderUI"
language: "C#"
languages: ["C#"]
languagePcts: [89]
stars: 145
forks: 6
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 2
recentReleases: 2
createdAt: "2026-03-08T13:29:51Z"
lastCommitAt: "2026-11-23T13:32:16Z"
lastReleaseAt: "2026-11-23T13:01:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 33
maintainers: ["mdgrs-mei"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1175997272/3a02a000-1f2b-4385-b9f5-f4b2435d00f3"
discussionCount: 3
---

# GliderUI

Cross-platform Desktop GUI framework for PowerShell powered by Avalonia.

https://github.com/user-attachments/assets/aa53a0b8-d478-4897-bc82-d10c804c98b1

## Requirements

- PowerShell 7.4 or newer
- Windows (win-x64/win-arm64), macOS (osx-arm64) or Linux (linux-x64/linux-arm64)

## Installation

```powershell
Install-PSResource -Name GliderUI
```

After installing the core module, you need to install the server for your current platform:

```powershell
Install-GLIServer
```

When updating the module, always run `Install-GLIServer` as well to update the server. Since the server executable is relatively large, we recommend using the `-UninstallOldVersions` parameter to remove older versions:

```powershell
Update-PSResource -Name GliderUI
Install-GLIServer -UninstallOldVersions
```

## Quick Start

This code creates a Window that has a clickable button:
