---
repo: "Fu021/Clash-of-Rust"
name: "Clash-of-Rust"
description: "Rust + Slint + mihomo cross-platform proxy client｜Windows · Linux · macOS · Android｜native GUI / cor CLI · app routing · network diagnostics · Claude protection"
originalDescription: "Rust + Slint + mihomo 跨平台代理客户端｜Windows · Linux · macOS · Android｜原生 GUI / cor CLI · 应用分流 · 网络诊断 · Claude 保护"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fu021/Clash-of-Rust"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [64, 22]
topics: ["arm64", "clash", "linux", "mihomo", "proxy-client", "rust", "windows", "apple-silicon", "cross-platform", "macos"]
stars: 133
forks: 8
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-06T03:40:27Z"
lastCommitAt: "2026-11-15T08:28:49Z"
lastReleaseAt: "2026-10-08T06:07:51Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 34
maintainers: ["Fu021"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f5b2e922f04522fe1a217bd46da23034cc9e16d124166dc944986e3b441c14b/Fu021/Clash-of-Rust"
---

Native interface · command line · app routing · network diagnostics

A native proxy client built on **Rust + Slint + mihomo**, with no WebView required. A background service connects the desktop interface and the `cor` command line. Android uses a separate mobile host.

Supports **Windows (x64 / ARM64)**, **Debian/Ubuntu (amd64 / ARM64, Ubuntu minimum 20.04)**, **macOS 14+ (Intel / Apple Silicon)**, and **Android 8.0+ (ARM64 / ARMv7 / x86_64)**. For the verification scope of each Android version and vendor ROM, see the [compatibility notes](https://github.com/Fu021/Clash-of-Rust/blob/HEAD/apps/android/README.md#兼容性与验证范围).

Current source version: **0.7.2-fix.3.network-toolbox**, see [release notes](https://github.com/Fu021/Clash-of-Rust/blob/HEAD/docs/releases/0.7.2-fix.3.network-toolbox.md). The download table below provides the **0.7.1 stable release**.

## Feature overview

| Feature | What it does |
| --- | --- |
| 🖥️ Native interface | Light and dark themes, accent colors, grid and list views, phone and tablet layouts; page data is loaded on demand. |
| ⌨️ Command line | Runs headless on Windows, Linux, and macOS, sharing the background service and core with the window.…
