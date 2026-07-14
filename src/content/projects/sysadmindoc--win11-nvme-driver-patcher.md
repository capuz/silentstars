---
repo: "SysAdminDoc/win11-nvme-driver-patcher"
name: "win11-nvme-driver-patcher"
description: "GUI tool to enable the experimental Windows Server 2025 NVMe storage driver on Windows 11. "
readmeQualityOk: true
url: "https://github.com/SysAdminDoc/win11-nvme-driver-patcher"
language: "C#"
languages: ["C#"]
languagePcts: [85]
topics: ["driver", "nvme", "powershell", "gui", "windows11"]
stars: 51
forks: 2
openIssues: 2
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 2
createdAt: "2025-12-29T22:56:46Z"
lastCommitAt: "2026-07-14T05:58:02Z"
lastReleaseAt: "2026-06-11T03:14:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 34
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/f199d835270956b611557bc2ef685d74ab7ac8301c71e0def6ea6e0d0c30f949/SysAdminDoc/win11-nvme-driver-patcher"
---

</p>

# NVMe Driver Patcher for Windows 11

A GUI + CLI tool to enable the experimental Windows Server 2025 Native NVMe driver (nvmedisk.sys) on Windows 11, replacing the legacy SCSI translation layer for improved NVMe performance.

## Quick Start

**GUI (recommended)** — download [`NVMeDriverPatcher.exe`](https://github.com/SysAdminDoc/win11-nvme-driver-patcher/releases/latest/download/NVMeDriverPatcher.exe) from the latest release and run it. Administrator elevation is automatic; no install or prerequisites needed (self-contained single file).

**CLI (automation/fleets)** — download [`NVMeDriverPatcher.Cli.exe`](https://github.com/SysAdminDoc/win11-nvme-driver-patcher/releases/latest/download/NVMeDriverPatcher.Cli.exe):

```powershell
.\NVMeDriverPatcher.Cli.exe status
.\NVMeDriverPatcher.Cli.exe apply --safe
```

**Windows on ARM** releases also ship `*-win-arm64.exe` portable builds for GUI, CLI, tray,
and watchdog. These are diagnostic/status builds until Microsoft ships an ARM64 `nvmedisk.sys`;
use the x64 assets under emulation if you need the current native-NVMe enablement path.

**MSI (managed deployment)** — `NVMeDriverPatcher-<version>.msi` from the release installs GUI…
