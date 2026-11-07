---
repo: "TiG-Kira/Termux-Ultra"
name: "Termux-Ultra"
description: "Make Termux Great Again - A versatile Termux tool platform that embodies Xiaomi's HyperOS-like aesthetics."
originalDescription: "Make Termux Great Again - A versatile Termux tool platform that embodies Xiaomi's HyperOS-like aesthetics. | 贯彻小米澎湃美学的全能 Termux 工具平台。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TiG-Kira/Termux-Ultra"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [83]
stars: 89
forks: 6
openIssues: 0
closedIssues: 26
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-14T19:00:50Z"
lastCommitAt: "2026-11-07T10:37:35Z"
lastReleaseAt: "2026-07-18T10:57:57Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 33
maintainers: ["TiG-Kira", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1300855816/c96ca148-e97e-40af-bde6-d02cd00b0789"
fundingLinks: ["CUSTOM:https://termux.dev/donate"]
---

## 分支说明

> ⚠️ 发版策略说明
当前 Release 分支为 daily 构建：当任何新功能、UI 变更需要发布或调整时，Release 都会触发构建并推送新版本，发版频率较高。
若您追求稳定，**您不需要跟进每一个 daily 版本**，仅在次版本号升级（如 `3.1.0 → 3.2.0`）或者有标注为紧急修复的更新时进行升级即可。

| 分支 | 基底 | 版本 | 状态 |
|------|------|------|------|
| **`main`** 🎯 | 上游 Termux `v0.119.0-beta.3` | 4.x.x.R12 | **正式版主线**，承接功能开发、Bug 修复、架构优化 |
| `archived/corebump/2.x` | 上游 Termux `v0.119.0-beta.3` | 2.0.0.R5 | 📂 归档快照，保留 2.x 内部开发步骤（R5-R9 均基于此版本开发） |

> ✅ **当前主线为 `4.0.4.R12`**，基于上游 Termux v0.119.0，包含 libterminal 引擎、玻璃顶栏、插件系统、Termux Agent、AgentPaw 手机操控引擎等核心功能。
> 由于上游长期未更新 Release，内部测试上游 Beta 稳定，将直接作为 0.119.0 基底。

> 注意: 原 1.x 分支开发时间较久，已删除分支且内部归档，不再放置在仓库内。

***

## 简介

**Termux Ultra** 是一款基于 [Termux](https://github.com/termux/termux-app) 二次开发的 Android 终端模拟器与 Linux 环境应用。它在保留 Termux 原生终端能力的基础上，集成了 VNC 远程桌面、SSH 连接管理、文件管理器、Linux 容器（proot）、QEMU 虚拟机、一键资源部署、AI 助手、插件系统等增强功能，并将 5 款 Termux 插件（API、Boot、Styling、Tasker、Widget）内置为可开关的集成工具，无需额外安装。UI 采用 Jetpack Compose + Miuix 设计语言打造。

> 本仓库为应用本体（用户界面、终端模拟及扩展功能）。应用内可安装的软件包请参见 [termux/termux-packages](https://github.com/termux/termux-packages)。

***

## 最近更新

### Termux Ultra 3.3.x — 🤖 Agent 深度整合（当前主线）

> 📅 **2026-10-05 ~ 2026-10-06**

- **AgentPaw 手机操控引擎**：Termux Agent 接入…
