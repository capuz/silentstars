---
repo: "buidangminh23/quota-control"
name: "quota-control"
description: "Unofficial Windows, macOS & Linux port of OpenUsage: track AI coding subscription limits (Claude, Codex, Cursor and 80+ more) from the system tray or menu bar."
readmeQualityOk: true
url: "https://github.com/buidangminh23/quota-control"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [58, 32]
topics: ["ai-usage", "claude", "codex", "cursor", "linux", "system-tray", "tauri", "windows", "macos", "menu-bar"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-25T16:01:53Z"
lastCommitAt: "2026-10-23T09:32:26Z"
lastReleaseAt: "2026-09-26T13:19:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["buidangminh23"]
openGraphImageUrl: "https://opengraph.githubassets.com/231afab1088cbcf87fd9055fcc5266c6958417cdce9547f07cf131b3770ac48f/buidangminh23/quota-control"
---

# Quota Control

AI usage limits, reset countdowns and token history in your Windows/Linux system tray or macOS menu bar.

## Preview

https://github.com/user-attachments/assets/05afff30-24bb-41df-a1bd-a7db58bdaac7

**Usage at a glance in the system tray**

## Installation

[Download the latest release](https://github.com/buidangminh23/quota-control/releases/latest), or use the commands below.

### Windows (x64)

Run in **PowerShell** to download and open the latest installer:

```powershell
$release = Invoke-RestMethod 'https://api.github.com/repos/buidangminh23/quota-control/releases/latest' -ErrorAction Stop
$asset = $release.assets | Where-Object name -Like '*_x64-setup.exe'
Invoke-WebRequest $asset.browser_download_url -OutFile "$env:TEMP\quota-control-setup.exe" -ErrorAction Stop
Start-Process "$env:TEMP\quota-control-setup.exe"
```

Installs for the current user. The installer is not code-signed; Windows SmartScreen may ask for confirmation.

### macOS (Apple Silicon, macOS 14+)

```sh
curl -fsSL https://raw.githubusercontent.com/buidangminh23/quota-control/main/scripts/install-macos.sh | bash
```

Downloads the latest release, verifies its SHA-256 checksum, installs the…
