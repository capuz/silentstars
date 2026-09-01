---
repo: "xumanba/codex-meter"
name: "codex-meter"
description: "Native macOS Codex usage visualization and quota monitor with QQ-style left/right edge docking, rate-limit pacing, reset estimates, and CodexBar."
readmeQualityOk: true
url: "https://github.com/xumanba/codex-meter"
language: "C#"
languages: ["C#", "Swift"]
languagePcts: [61, 28]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-07-24T06:46:22Z"
lastCommitAt: "2026-09-01T08:51:11Z"
lastReleaseAt: "2026-08-12T12:58:43Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 27
maintainers: ["xumanba", "phieatrapreatioasgcahavdcad-sudo"]
openGraphImageUrl: "https://opengraph.githubassets.com/db49f4821f1199d36df9c2a2d1501bd2bfe2790f95e2a3335ba364b4e820e27d/xumanba/codex-meter"
---

# ✦ CodexMeter

### 原生 Windows / macOS Codex 用量可视化与额度监控浮窗

[English](https://github.com/xumanba/codex-meter/blob/HEAD/README.en.md) · 简体中文

优先面向中文用户，帮助你在工作区内查看 Codex 额度、token 使用和模型使用偏好。

<p>
</p>

</div>

> [!IMPORTANT]
> **Windows 和 macOS 都有对应版本。** Windows 当前是 v0.1.1，使用原生 WinForms 客户端和 Win-CodexBar CLI；macOS 当前是 v0.2.0，使用 SwiftUI/AppKit 客户端并内置已经验证的 CodexBar CLI。两端都不会保存账号凭证。

> [!NOTE]
> **统一主线。** `main` 现在同时包含 Windows v0.1.1 和 macOS v0.2.0 的完整源码；macOS 安装包仍可从 [v0.2.0 Release](https://github.com/xumanba/codex-meter/releases/tag/v0.2.0) 下载。

## 当前浮窗界面

| 深色界面 | 浅色界面 |
|:---:|:---:|
| <img src="assets/codexmeter-dark.png" alt="CodexMeter 深色界面" width="344"> | <img src="assets/codexmeter-light.png" alt="CodexMeter 浅色界面" width="344"> |

## 平台与版本

| 平台 | 原生界面 | 当前版本 / 安装包 | 数据来源 |
|---|---|---|---|
| Windows 10/11 | WinForms + DWM，Per-Monitor V2 DPI | [`Codex-Meter-Windows-portable-v0.1.1.zip`](https://github.com/xumanba/codex-meter/releases/download/v0.1.1/Codex-Meter-Windows-portable-v0.1.1.zip) | [Win-CodexBar](https://github.com/Finesssee/Win-CodexBar) CLI |
| macOS 14+ | SwiftUI + AppKit |…
