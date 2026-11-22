---
repo: "franvz9/Rime_vision"
name: "Rime_vision"
description: "A cross-platform visual configuration tool for the Rime input method, supporting macOS (Squirrel) and Windows (Weasel). It lets you manage all settings through an intuitive graphical interface, without manually editing YAML."
originalDescription: "Rime 输入法跨平台可视化配置工具，支持 macOS（鼠须管）和 Windows（小狼毫），无需手动编辑 YAML，通过直观的图形界面管理所有配置。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/franvz9/Rime_vision"
language: "Rust"
languages: ["Rust", "Swift", "Vue"]
languagePcts: [39, 30, 27]
stars: 29
forks: 0
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-06-21T13:51:20Z"
lastCommitAt: "2026-11-22T02:13:17Z"
lastReleaseAt: "2026-08-31T11:55:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 26
maintainers: ["franvz9"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc5a5d25dcf004eacf9e45e91bbc6efef3cc986f39307f475984c15ddabc2879/franvz9/Rime_vision"
---

# RimeVision

A visual configuration tool for the Rime input method. The current version, **WeaselVision**, has been migrated to a native GPUI Rust UI (since v0.5.0). The earlier Tauri + Vue and Swift versions have been removed.

## Platform Support

| Platform | Architecture | File |
|------|------|------|
| macOS | Apple Silicon (arm64) | `WeaselVision_0.5.0_arm64.dmg` |
| macOS | Intel (x64) | `WeaselVision_0.5.0_x64.dmg` |
| Windows | ARM64 | `WeaselVision_0.5.0_Windows_arm64.zip` |
| Windows | x64 | `WeaselVision_0.5.0_Windows_x64.zip` |

## Installation and Usage

### Download from Release (recommended)

Go to [GitHub Releases](https://github.com/franvz9/Rime_vision/releases) and download the installer for your platform.

#### macOS Installation

After downloading the `.dmg`, you need to remove the quarantine flag before opening the app for the first time, because it is not signed by Apple:

```bash
sudo xattr -rd com.apple.quarantine /Applications/WeaselVision.app
```

Then double-click `WeaselVision.app` to run it.

#### Windows Installation

Extract `WeaselVision_0.5.0_Windows_<arch>.zip` and run `weasel-gpui.exe` directly (portable version, no installation required).
