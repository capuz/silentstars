---
repo: "foundry-osd/foundry"
name: "foundry"
description: "Open-source Windows 11 deployment solution for enterprise IT. Build bootable USB or ISO media, then deploy Windows with the right drivers, firmware, and configuration. Supports Autopilot and Active Directory domain join."
readmeQualityOk: true
url: "https://github.com/foundry-osd/foundry"
homepage: "https://docs.foundryosd.com"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["autopilot", "windows", "winpe", "deployment-automation", "device-provisioning", "endpoint-management", "intune", "osd", "provisioning", "windows-11"]
stars: 93
forks: 8
openIssues: 4
closedIssues: 50
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-15T16:58:10Z"
lastCommitAt: "2026-10-21T21:14:31Z"
lastReleaseAt: "2026-05-27T10:09:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 40
maintainers: ["mchave3"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1158614826/74a04ca2-c7fe-40a3-afb5-b2d1f83116e7"
---

Foundry is an open-source Windows 11 deployment solution for enterprise IT teams. Build bootable USB or ISO media on an administrator workstation, start the target device from it, and Foundry guides the technician through network setup and Windows installation.

  &nbsp;

[Quick start](https://docs.foundryosd.com/start-here/quick-start) · [Documentation](https://docs.foundryosd.com) · [Release notes and asset digests](https://github.com/foundry-osd/foundry/releases/latest)

---

## How it works

Foundry uses three applications, one for each stage of the deployment:

1. **Foundry OSD** — configure the deployment and build bootable ISO or USB media from an administrator workstation.
2. **Foundry Connect** — start the target device in WinPE and validate Ethernet, Wi-Fi, or enterprise connectivity.
3. **Foundry Deploy** — choose the Windows content, target disk, drivers, firmware, and provisioning options, then run the deployment.

All three applications are available in 38 languages.

Operating system, driver pack, firmware, and WinPE metadata come from the maintained [`foundry-osd/catalog`](https://github.com/foundry-osd/catalog).

## What you can configure

- **Windows** —…
