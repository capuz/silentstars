---
repo: "ximeiorg/XimeYao"
name: "XimeYao"
description: "Windows Wubi/Pinyin input method based on Rime"
originalDescription: "基于 Rime 的 Windows 五笔/拼音输入法"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ximeiorg/XimeYao"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 41
forks: 5
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-06T10:27:43Z"
lastCommitAt: "2026-09-30T09:56:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 20
maintainers: ["kingzcheung"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae73e0023d717eadb1f6222e2dfdd9bd883124213243c8281f71627af9376a33/ximeiorg/XimeYao"
---

# Xime Yao Input Method (Windows)

Windows Wubi input method based on RIME engine, built with Rust + TSF.

> ⚠️ Note: This project is still in development. Do not use in production.

## Quick Start

```powershell
# Development build (build + register + start server)
.\rebuild.ps1

# Package MSI installer
.\msi-build.ps1

# Package MSIX app package
.\msix-bundle.ps1

# Package and test installation (no signature required)
.\msix-bundle.ps1 -InstallUnsigned
```

## Installation

### MSI Installation (Administrator privilege)

```powershell
msiexec /i target\wix\ximeyao-{version}-x86_64.msi
```

### MSIX Installation

```powershell
# Package and install directly (development testing, no signature required)
.\msix-bundle.ps1 -InstallUnsigned

# Package, sign, and install
.\msix-bundle.ps1 -Sign

# Generate unsigned MSIX (for store submission)
.\msix-bundle.ps1
```

After installation, press `Win+Space` to switch to Xime Yao input method.

## Development Build

### Prerequisites

- Rust toolchain (nightly, with `rust-toolchain.toml` included in the project)
- Visual Studio Build Tools (C++ support)
- CMake
- WiX Toolset v3.14 (for MSI packaging)
- Windows SDK (for MSIX packaging)

###…
