---
repo: "CCS-HQ/lanflow"
name: "lanflow"
description: "Lanflow: a desktop proxy client for macOS and Windows, based on the Mihomo core (native MyGo UI, system proxy and TUN)"
originalDescription: "澜流 Lanflow：基于 Mihomo 内核的 macOS / Windows 桌面代理客户端（MyGo 原生界面，系统代理与 TUN）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/CCS-HQ/lanflow"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 6
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-11-10T02:03:46Z"
lastCommitAt: "2026-11-26T13:03:03Z"
lastReleaseAt: "2026-11-21T02:23:30Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["Owlbay", "funkpopo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/60507023e57177eff935d6804ef6dbec3bd9c19ae43c38cc45770bb5f63d2140/CCS-HQ/lanflow"
---

# Lanflow

A desktop proxy client built on the native MyGo UI, using Mihomo (Clash.Meta) as its core. It supports **system proxy** and **TUN mode** on macOS and Windows.

For the interface and features, see the [design document](https://github.com/CCS-HQ/lanflow/blob/HEAD/docs/design.md). For an interactive prototype, see [docs/prototype/index.html](https://github.com/CCS-HQ/lanflow/blob/HEAD/docs/prototype/index.html). For development, CI, and releases, see [docs/development.md](https://github.com/CCS-HQ/lanflow/blob/HEAD/docs/development.md).

## Installation

Download from the [latest Release](https://github.com/CCS-HQ/lanflow/releases/latest):

- **macOS**: For Apple silicon, choose `lanflow-<version>-arm64.dmg`. For Intel, choose `-amd64.dmg`. Drag Lanflow into “Applications”. The installer is not signed or notarized by Apple, so macOS will block it on first launch. Either click “Open Anyway” under “System Settings › Privacy & Security”, or run `xattr -dr com.apple.quarantine /Applications/Lanflow.app` in the Terminal.
- **Windows**: Run `lanflow-setup-<version>-amd64.exe`. The installer is unsigned. If SmartScreen appears, click “More info › Run anyway”.
