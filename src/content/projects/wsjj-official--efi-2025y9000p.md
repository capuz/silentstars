---
repo: "wsjj-official/EFI-2025Y9000P"
name: "EFI-2025Y9000P"
description: "2025 Y9000P Hackintosh EFI, compatible with macOS 15 and macOS 26"
originalDescription: "2025款Y9000P黑苹果EFI适用MacOS15和MacOS26"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wsjj-official/EFI-2025Y9000P"
language: "ASL"
languages: ["ASL"]
languagePcts: [97]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-10-14T07:26:48Z"
lastCommitAt: "2026-11-06T13:19:40Z"
lastReleaseAt: "2026-11-02T02:31:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6f9c62748d4ca1c59a85ebf802ec3120056833d6873177d3cddeb308e8371c6f/wsjj-official/EFI-2025Y9000P"
---

# Lenovo Legion Y9000P IAX10H（83F5）— OpenCore EFI（macOS 15 + macOS 26）

OpenCore EFI for **Lenovo Legion Y9000P IAX10H / board 83F5 / Intel Core Ultra 9 275HX / RTX 5070 Ti Laptop**.

**The repository now contains two EFI folders. Use the one that matches your system version:**

| Directory | Target system | Status |
| --- | --- | --- |
| [`EFI-Sequoia/EFI/`](https://github.com/wsjj-official/EFI-2025Y9000P/blob/HEAD/EFI-Sequoia/EFI) | **macOS 15 Sequoia**（15.2+） | Primary, long-term verified: speakers (ALC287 + dual AW88399), BE200 Wi-Fi, Bluetooth A2DP, and brightness all working |
| [`EFI-Tahoe/EFI/`](https://github.com/wsjj-official/EFI-2025Y9000P/blob/HEAD/EFI-Tahoe/EFI) | **macOS 26 Tahoe**（26.4+） | New, tested to **boot to desktop**. **Before the NVIDIA driver is installed it is extremely laggy (about 1–3 FPS); it runs normally once the driver is installed** |

> Both are placed inside their own `EFI/` directories (`EFI-Sequoia/EFI/`, `EFI-Tahoe/EFI/`). **Copy the whole `EFI` directory directly to the ESP root without renaming it** (it overwrites the existing `EFI`, but keep `EFI\Microsoft`, otherwise Windows boot will be lost).
> **Do not mix the two**: the Wi-Fi /…
