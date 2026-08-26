---
repo: "nifanfa/BootTo.NET"
name: "BootTo.NET"
description: "Providing a minimalist C# UEFI runtime with asynchronous support"
readmeQualityOk: true
url: "https://github.com/nifanfa/BootTo.NET"
language: "C#"
languages: ["C#"]
languagePcts: [96]
stars: 46
forks: 6
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-08-31T13:45:32Z"
lastCommitAt: "2026-08-26T04:15:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 44
maintainers: ["nifanfa"]
openGraphImageUrl: "https://opengraph.githubassets.com/36a5f70ddc4e316543f83e2de97e1416bd951bfa70398e545888455e30ef4985/nifanfa/BootTo.NET"
---

# BootTo.NET Project

## Debugging
1. **Open Project**: Open the `BootTo.NET.sln` solution in Visual Studio.
2. **Launch**: Select **QEMU** from the launch profile dropdown, or simply press **F5**.
</p>

## Synopsis
*When will hobby OS developers realize that we don't need to implement everything from scratch? With a clean environment providing basic network, graphics, filesystem, and USB support, there's no need to build it yourself—just load a DXE driver and go ahead with your 'OS'.*  

Publishing updates the boot files in `Drive`, then starts the repository-local QEMU x64 emulator with that directory exposed directly as a writable virtual FAT disk. QEMU, its Windows runtime dependencies, and the EDK2 UEFI firmware are included in `qemu`; no system QEMU installation and no administrator privileges are required.

Use `dotnet publish --tl:off -c Release ConsoleApp1` to publish and run with live build output. Pass `-p:RunQemu=false` to publish without starting QEMU.

QEMU mounts the bundled UEFI variable template through a temporary snapshot. Variable changes are discarded when QEMU exits, so stale physical-network settings cannot override the `-netdev user` DHCP configuration and…
