---
repo: "manuelhoefler17-gif/WinTuner-GUI"
name: "WinTuner-GUI"
description: "A Gui for WinTuner that allows you to Package and Update Apps in your Tenant"
readmeQualityOk: true
url: "https://github.com/manuelhoefler17-gif/WinTuner-GUI"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
stars: 41
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-08-14T05:55:52Z"
lastCommitAt: "2026-09-09T08:18:50Z"
lastReleaseAt: "2026-04-09T13:42:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 55
maintainers: ["manuelhoefler17-gif"]
openGraphImageUrl: "https://opengraph.githubassets.com/f62df67aca0f7f403d45230f579094d4e1f2bb1e4eae153792e86f9c11be8cd7/manuelhoefler17-gif/WinTuner-GUI"
---

# WinTuner GUI

> 🚀 A PowerShell-based graphical interface for packaging, deploying, discovering and updating Microsoft Intune Win32 applications with WinGet and WinTuner.

## 🎯 Overview

**WinTuner GUI** provides a graphical workflow around the WinTuner PowerShell module by Stephan van Rooij.

It simplifies common Microsoft Intune Win32 application tasks:

- Search WinGet packages
- Select current or older package versions
- Create WinTuner packages
- Upload packages to Microsoft Intune
- Scan existing applications for updates
- Discover applications reported by Intune and match them to WinGet
- Bulk-package and update multiple applications
- Cache expensive WinGet and Microsoft Graph lookups
- Keep long-running discovery operations responsive and cancellable

WinTuner GUI requires **PowerShell 7**.

---

## ✨ Key Features

### 📦 WinGet packaging and deployment

- Search WinGet packages directly from the GUI
- Select a specific package version when required
- Package applications through WinTuner
- Reuse the same successfully built package version during the current GUI session
- Validate package metadata before upload
- Validate the exact `.intunewin` referenced by…
