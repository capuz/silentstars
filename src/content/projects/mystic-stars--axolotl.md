---
repo: "Mystic-Stars/Axolotl"
name: "Axolotl"
description: "开源，跨平台的下一代启动器"
readmeQualityOk: true
url: "https://github.com/Mystic-Stars/Axolotl"
homepage: "https://www.axlmc.org"
language: "Rust"
languages: ["Rust", "Vue", "TypeScript"]
languagePcts: [40, 36, 20]
topics: ["minecraft", "minecraft-launcher", "rust", "tauri", "vue"]
stars: 152
forks: 21
openIssues: 67
closedIssues: 48
watchers: 0
contributors: 233
recentReleases: 10
createdAt: "2026-07-13T13:39:11Z"
lastCommitAt: "2026-07-29T06:14:02Z"
lastReleaseAt: "2026-07-18T05:26:25Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 86
undervaluedScore: 32
maintainers: ["cyf112233", "Mystic-Stars", "Lintern"]
openGraphImageUrl: "https://opengraph.githubassets.com/728dedd508006e6201f026a45d959ae6e256a210abb1780effc4503b34a384f5/Mystic-Stars/Axolotl"
---

# Axolotl Launcher

Axolotl Launcher 是由 Mystic Stars 开发的免费跨平台 Minecraft 启动器。

本项目基于 Modrinth 单体仓库进行下游开发，专注于桌面启动器体验。它是使用 Modrinth 公共 API 的独立非官方客户端，与 Rinth, Inc. 不存在隶属或背书关系。

> 推荐 API 服务（广告）：[FutureAPI](https://www.futureapi.cc/register?invite=8xmfivnh)

## 功能

- 支持 Windows、macOS 和 Linux
- 管理 Minecraft 实例、整合包、模组、资源包和光影
- 支持 Microsoft 正版账户与离线账户
- 支持实例截图管理、离线皮肤和服务器管理
- 可自定义主题强调色与启动器背景
- 完整的简体中文界面，并保留多语言支持
- 通过签名的 GitHub Release 更新包自动检查和安装新版本

## 下载与安装

前往 [GitHub Releases](https://github.com/Mystic-Stars/Axolotl/releases/latest) 下载适合当前系统的安装包：

| 系统              | 安装包                                |
| ----------------- | ------------------------------------- |
| Windows 10/11 x64 | NSIS `.exe`                           |
| macOS             | 通用 `.dmg`（Intel 与 Apple Silicon） |
| Linux x64         | `.AppImage`、`.deb` 或 `.rpm`         |

每次正式发布都会同时上传 Tauri 签名的更新包和 `latest.json`。已安装的正式版会从当前仓库的最新 Release 检查更新，并在验证签名后安装。

Arch Linux 用户可从 AUR 安装：

```bash
# 源码构建版
yay -S axolotl-launcher

# 预编译二进制版
yay -S axolotl-launcher-bin
```

Debian(及其分支)amd64/arm64 用户可选（APT 安装/更新）：

```bash
curl -fsSL https://ppa.axlmc.org/setup.sh | sudo bash
sudo apt install axolotl-launcher
```

## 本地开发

### 环境要求…
