---
repo: "w3c0929/myscoop"
name: "myscoop"
description: "Comprehensive collection of productivity tools, resource curation, and PC tips"
originalDescription: "效率工具大全，资源整理，电脑小技巧"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/w3c0929/myscoop"
language: "Python"
languages: ["Python", "PowerShell"]
languagePcts: [51, 48]
stars: 32
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-28T14:10:06Z"
lastCommitAt: "2026-11-25T13:17:29Z"
lastReleaseAt: "2026-06-29T22:44:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["w3c0929"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0ec95a98e56d4f0ff3fc7b64276bce6a67f992c68cab86bcfb4ada27a9e71b5/w3c0929/myscoop"
---

# myscoop

Personal Scoop Bucket repository that collects Windows software from GitHub, with support for one-click installation and automatic updates.

## Quick Install (Recommended)

If you don't want to run the commands below one by one, use the one-click restore script:

> **Before running the script for the first time (required)**: open PowerShell and run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` once (this allows local scripts; remote scripts still need to be signed).

**Windows 10 / 11**

1. Download [`restore-scoop-backup.ps1`](https://github.com/w3c0929/myscoop/raw/main/restore-scoop-backup.ps1) (right-click → Save as)
2. Right-click the script → **Run with PowerShell**
3. The script automatically installs Scoop and Git and adds all buckets
4. When it finishes, go to `D:\scoop\buckets\myscoop` and **run `symlink.bat` as administrator** to complete the deployment

**Windows 7**

The PowerShell version bundled with Windows 7 is too old, so you need to install WMF 5.1 first:
