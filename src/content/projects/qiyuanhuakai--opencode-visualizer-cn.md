---
repo: "qiyuanhuakai/opencode-visualizer-cn"
name: "opencode-visualizer-cn"
description: "OpenCode Visualizer.An enhanced Chinese-localized third-party webui/desktop GUI for OpenCode, based on Vis and independently maintained.   OpenCode可视化工具。OpenCode 的增强版中文本地化第三方 webui/桌面GUI，基于 Vis 并独立维护。"
readmeQualityOk: true
url: "https://github.com/qiyuanhuakai/opencode-visualizer-cn"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [58, 31]
topics: ["desktop", "opencode", "webui"]
stars: 17
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-04T14:41:06Z"
lastCommitAt: "2026-11-21T13:31:58Z"
lastReleaseAt: "2026-05-08T09:39:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 48
maintainers: ["qiyuanhuakai"]
openGraphImageUrl: "https://opengraph.githubassets.com/058b6a2455925acf2485a44e61233acd3338f8cd74d568337f887cf27831184f/qiyuanhuakai/opencode-visualizer-cn"
---

# OpenCode Visualizer CN

[English](#english) | [中文](#中文)

---

## 简介

本项目是以 [OpenCode](https://github.com/sst/opencode) 为基础、现支持 OpenCode、Codex、ACP 与 Kimi Web 的第三方 Web UI，fork 自 [vis](https://github.com/xenodrive/vis)。由于上游仓库不接受 PR，我们将其作为独立项目持续维护，并进行了大量功能改进、性能优化和本地化支持。

> **核心改进方向**：i18n 支持、字体与主题管理、会话批量操作与 Pin 功能、悬浮窗与 Dock 栏管理、性能优化、桌面应用打包。

### TL;DR：安装桌面版

1. 从 [GitHub Releases](https://github.com/qiyuanhuakai/opencode-visualizer-cn/releases) 下载并安装**两个包**：Vis Electron 桌面端（`Vis-…-Windows.exe` / `Vis-…-MacOS.dmg` / `Vis-…-Linux.deb` 或 `.AppImage`）和适用于后端所在系统的 `vis_bridge`（`VisBridge-…-Windows.exe` / `VisBridge-…-MacOS.pkg` / `VisBridge-…-Linux.deb` 或 `.rpm`）。使用安装包无需克隆仓库、安装 Node.js 或运行 `pnpm`。
2. 安装并登录想使用的后端 CLI：OpenCode、Codex、Kimi Code（用于 Kimi Web）或 ACP Agent。只需安装你要使用的后端；bridge 会探测或启动可用服务。
3. 在安装 `vis_bridge` 的系统终端运行 `vis_bridge start`。Windows 安装后先重新打开终端；如后端 CLI 位于 WSL，就在 WSL 中安装 Linux 版 bridge 并运行此命令，Windows 版 Vis Electron 可以连接该 bridge。
4. 打开 Vis，连接首屏的 Vis Bridge，默认地址为 `ws://127.0.0.1:23004/runtime`。如已配置 Bridge token，请在首屏填写。Bridge 位于其他主机或使用自定义端口时，请填写客户端能访问的 `/runtime` 地址。

---
