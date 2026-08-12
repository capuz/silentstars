---
repo: "dabaicai001/starhub"
name: "starhub"
description: "StarHub 是一款跨平台桌面应用 (Tauri 2 + Rust 主进程 + Vue 3 前端 + Go Sidecar),把开发运维日常高频工具整合到同一个窗口。目标是减少在 Navicat、Xshell、Portainer、文件管理器和 AI 对话窗口之间来回切换的成本"
readmeQualityOk: true
url: "https://github.com/dabaicai001/starhub"
homepage: "https://starthub.waouzzz.cc/"
language: "Vue"
languages: ["Vue"]
languagePcts: [42]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-04T07:48:03Z"
lastCommitAt: "2026-08-12T05:14:45Z"
lastReleaseAt: "2026-07-21T08:11:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["dabaicai001"]
openGraphImageUrl: "https://opengraph.githubassets.com/70fed9db731dec602c02a03ffe58a830615d6fe1f2b1f7292471072034a8069b/dabaicai001/starhub"
---

# StarHub

**All-in-One DevOps Desktop Command Center**

数据库客户端 · SSH/SFTP · Docker 面板 · Excel 工具 · AI 助手 · 原生桌面应用

</div>

---

## 项目介绍

**StarHub** 是一款跨平台桌面应用 (Tauri 2 + Rust 主进程 + Vue 3 前端 + Go Sidecar),把开发运维日常高频工具整合到同一个窗口。目标是减少在 Navicat、Xshell、Portainer、文件管理器和 AI 对话窗口之间来回切换的成本。

**当前版本聚焦**:本地优先、单人高效、跨平台一致体验。

---

## 下载安装

前往 [GitHub Releases](https://github.com/dabaicai001/starhub/releases) 下载最新版本:

| 平台 | 文件格式 | 安装方式 |
|---|---|---|
| **Windows** | `.msi` | 双击安装 |
| **Linux** (Debian/Ubuntu) | `.deb` | `sudo apt install ./StarHub_0.46.6_amd64.deb` |
| **Linux** (Fedora 38+ 等 glibc 2.35+ RPM 系) | `.rpm` | `sudo dnf install ./StarHub-0.46.6-1.x86_64.rpm` |
| **Linux** (通用) | `.AppImage` | `chmod +x StarHub_0.46.6_amd64.AppImage && ./StarHub_0.46.6_amd64.AppImage` |

> Linux 同时发布 x86_64 (`amd64`) 与 ARM64 (`arm64` / `aarch64`)。产物固定在 Ubuntu 22.04 原生 runner 构建,兼容 Ubuntu 22.04+ / Debian 12+ / Fedora 38+ 等主流 glibc 桌面发行版。AppImage 已携带 WebKitGTK、GTK 和静态 Go sidecar;无 FUSE 环境可使用 `./StarHub_0.46.6_amd64.AppImage --appimage-extract-and-run`。Alpine(musl)与无 FHS 兼容层的 NixOS 不属于直接兼容范围。

---

## 功能矩阵

### 数据库客户端 (Go Sidecar 承载)
- ✅ **MySQL**:表结构、数据浏览、查询执行、DDL/索引/列管理、表数据 Excel 全量导出(分批拉取 + 进度条 +…
