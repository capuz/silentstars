---
repo: "Xavi-Xav/foundry-windows-deployment"
name: "foundry-windows-deployment"
description: "Open-source Windows 11 deployment with drivers firmware and Autopilot"
readmeQualityOk: true
url: "https://github.com/Xavi-Xav/foundry-windows-deployment"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["active-directory", "autopilot", "bootable-usb", "csharp", "deployment-automation", "device-provisioning", "dotnet", "endpoint-management", "intune", "osd"]
stars: 58
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T20:59:43Z"
lastCommitAt: "2026-11-08T14:14:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: ["github-actions[bot]", "Xavi-Xav"]
openGraphImageUrl: "https://opengraph.githubassets.com/66bad1aaca9570e739d0bf8c13514607ab0d297f3d297b4c63fcf652c0cce8ee/Xavi-Xav/foundry-windows-deployment"
---

# Foundry: Open-Source Windows 11 Deployment Tool for Enterprise IT on Windows 11

---

Foundry is an open-source Windows 11 deployment solution for enterprise IT teams that builds bootable USB or ISO media on an administrator workstation and guides technicians through network setup and Windows installation on target devices. It deploys Windows with the correct drivers, firmware, and configuration, and supports both Windows Autopilot and Active Directory domain join.

## Features

- **Three-stage workflow** — a single build host creates the media, a lightweight WinPE environment validates connectivity, and a guided installer handles disk selection, drivers, and provisioning. Each stage has a dedicated application, so responsibilities stay clear and technicians only see what they need at that moment.

- **Bootable media builder** — produce ISO images for virtual or network boot, or write directly to USB. Both x64 and ARM64 output are supported from the same configuration, so mixed-fleet teams do not need separate tooling.

- **Curated content catalog** — Windows releases, editions, language packs, driver packs, firmware, and WinPE components are resolved from a maintained catalog…
