---
repo: "D-Ogi/amdgpu-wddm"
name: "amdgpu-wddm"
description: "Open Windows (WDDM) driver stack for AMD GPUs, developed first on the ASRock BC-250 (gfx1013). Not affiliated with AMD, ASRock or Microsoft."
readmeQualityOk: true
url: "https://github.com/D-Ogi/amdgpu-wddm"
language: "C"
languages: ["C"]
languagePcts: [76]
topics: ["amd", "bc-250", "cyan-skillfish", "gpu-driver", "mesa", "radv", "vulkan", "wddm", "windows-driver"]
stars: 87
forks: 7
openIssues: 11
closedIssues: 20
watchers: 6
contributors: 1
recentReleases: 10
createdAt: "2026-09-26T18:19:10Z"
lastCommitAt: "2026-10-31T07:45:56Z"
lastReleaseAt: "2026-10-13T08:47:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 35
maintainers: ["D-Ogi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1b31c9c477fae1b83bbef1eff8eaf491012f21cb465c9f85e3851c3eb32a43b/D-Ogi/amdgpu-wddm"
discussionCount: 1
---

Nagi is an open Windows driver for AMD GPUs, made first for the ASRock BC-250 (AMD Cyan Skillfish APU, gfx1013). The Windows
desktop, Direct3D 12, Direct3D 11 and Vulkan games run on the GPU of the board. Inside, the kernel driver uses AMD's
own amdgpu code, and Mesa RADV, DXVK and vkd3d-proton work behind the standard Windows runtimes. The driver is
experimental and has a test signature. Not affiliated with or endorsed by AMD, ASRock or Microsoft.

## Install

You need an ASRock BC-250 with Windows 11 x64, version 23H2 or newer, and an internet connection.

1. Download the setup program from the [latest release](https://github.com/D-Ogi/amdgpu-wddm/releases/latest).
2. Run it and click Install. It checks the board, downloads the AMD GPU firmware, turns on the test mode of
   Windows and restarts the computer.
3. After the restart, Nagi Control App shows the driver, the clocks, the temperature and the fan.

The installer stops on a computer that is not a BC-250 and changes nothing there. Secure Boot must be off. The stock
BC-250 BIOS has no Secure Boot, so it is off already. Removal, settings and what to do when something fails:
[installation…
