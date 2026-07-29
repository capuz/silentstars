---
repo: "msfreaks/EvergreenAdmx"
name: "EvergreenAdmx"
description: "Script to keep Admx files up-to-date."
readmeQualityOk: true
url: "https://github.com/msfreaks/EvergreenAdmx"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["evergreen", "automation", "admx"]
stars: 137
forks: 20
openIssues: 9
closedIssues: 58
watchers: 12
contributors: 7
recentReleases: 1
createdAt: "2020-12-26T09:26:58Z"
lastCommitAt: "2026-07-29T06:11:13Z"
lastReleaseAt: "2026-07-29T06:14:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 73
undervaluedScore: 36
maintainers: ["JonathanPitre", "msfreaks", "mcenirm"]
openGraphImageUrl: "https://opengraph.githubassets.com/d25c5f97f475fe4583817acf04c41de4510e8c85c9b95ff2a7c70e04f77c96c9/msfreaks/EvergreenAdmx"
---

# 🌲 EvergreenAdmx

After deploying several Azure Virtual Desktop environments I decided I no
longer wanted to manually download the Admx files I needed, and I wanted a
way to keep them up-to-date.

This script solves both problems.

- Automatically checks for newer versions of ADMX files and processes them
  when found
- Optionally copies the new ADMX files to your Policy Store or a custom
  location

Named as an homage to the [Evergreen module][evergreen-module] by Aaron Parker
[@stealthpuppy][stealthpuppy].

## 🚀 How to use

Quick start:

- Download the script to a location of your choosing
  (for example: `C:\Scripts\EvergreenAdmx`)
- Run or schedule the script

You can also install the script from the PowerShell Gallery
[EvergreenAdmx][poshgallery-evergreenadmx]:

```powershell
Install-Script -Name EvergreenAdmx
```

To register a weekly scheduled task (Sunday at 01:00, runs as SYSTEM), use
`-CreateScheduledTask`. Bound parameters are forwarded to the task; the
script exits after registration and does not download Admx files in that run.

### 💡 Examples

Run with defaults (Windows 11 25H2 plus Edge, OneDrive, 365 Apps,
Clipchamp, Notepad, Winget, and Windows Terminal) into…
