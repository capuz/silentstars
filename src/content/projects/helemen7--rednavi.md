---
repo: "Helemen7/RedNavi"
name: "RedNavi"
description: "Native macOS driver for AMD RDNA 3 GPUs (Navi 32 RX 7800 XT first): display, Vulkan (RADV) and Metal. Research prototype, contributors welcome."
readmeQualityOk: true
url: "https://github.com/Helemen7/RedNavi"
homepage: "https://discord.gg/7G3bVnKgQM"
language: "C"
languages: ["C", "C++"]
languagePcts: [54, 23]
topics: ["amd", "gpu-driver", "hackintosh", "kernel-extension", "macos", "metal", "opencore", "rdna3", "vulkan"]
stars: 29
forks: 6
openIssues: 7
closedIssues: 3
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-10-26T17:48:55Z"
lastCommitAt: "2026-11-21T11:17:26Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 82
undervaluedScore: 37
maintainers: ["Helemen7", "Frame121", "porcelainhorse"]
openGraphImageUrl: "https://opengraph.githubassets.com/956f92e702ecbfce6be7fe0ee786cd40519eb9a265a34a57b991206b780b6b83/Helemen7/RedNavi"
---

# RedNavi

**A native macOS display driver for AMD Navi 32 (RDNA 3) GPUs.**
Starting with the Radeon RX 7800 XT (`1002:747E`): native display, Vulkan through RADV, and Metal on the way.

*Research first, hardware claims backed by evidence.*

> **For developers only.** This is a research prototype, not a driver you can install and use. It needs OpenCore, SIP turned off and boot-args, it writes to the GPU from the kernel, and it can hang or crash your machine. Run it only on a system whose display does not depend on this card, with a backup EFI. Vulkan (Mesa's RADV, through a bridge to the kext) runs on the card in test programs. Metal is at an early stage: on the development machine WindowServer composes the desktop on the GPU through our plug-in, and since 2026-11-21 without the visual glitches it had.
