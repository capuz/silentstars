---
repo: "iHongRen/harmony-udid-tool"
name: "harmony-udid-tool"
description: "一个简单易用的 HarmonyOS 设备 UDID 获取工具"
readmeQualityOk: true
url: "https://github.com/iHongRen/harmony-udid-tool"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["harmony", "harmonyos", "harmonyos-next", "udid"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-15T12:19:49Z"
lastCommitAt: "2026-08-28T12:23:55Z"
lastReleaseAt: "2025-07-28T06:30:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 46
maintainers: ["iHongRen", "tonycoder-hub"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0aad359e57c1a10ba958335afdff63c8a4f1423c0378eb3b86805220e89c6f8/iHongRen/harmony-udid-tool"
---

# HarmonyOS UDID 获取工具

**一个简单易用的 HarmonyOS 设备 UDID 获取工具，帮助测试、产品等非开发者轻松获取鸿蒙设备的 UDID。**

</div>

## 📖 简介

HarmonyOS UDID 获取工具是一个跨平台的图形界面应用程序，专门用于获取 HarmonyOS 设备的 UDID。该工具基于华为官方的 HDC命令行工具，提供了友好的图形界面。

## 📁 项目结构

- `src/harmony_udid_tool/` - 应用程序源码
- `resources/` - HDC、图标和动态库等运行资源
- `scripts/` - 构建脚本
- `packaging/` - PyInstaller 配置
- `tests/` - 自动化测试

## ✨ 功能特性

-  **跨平台支持** - 支持 Windows、macOS 和 Linux 系统
-  **自动设备检测** - 自动扫描并列出连接的 HarmonyOS 设备
-  **一键复制** - 支持一键复制 UDID 到剪贴板
-  **实时刷新** - 支持实时刷新设备列表
-  **多设备支持** - 同时管理多个连接的设备
-  **安全可靠** - 基于华为官方 HDC 工具，安全可信

## 🚀 安装使用

### 普通用户：安装预编译版本
在 macOS 终端直接安装最新版本：

```sh
curl -fsSL https://raw.githubusercontent.com/iHongRen/harmony-udid-tool/main/install.sh | sh
```

或者：当前 [Releases](https://github.com/iHongRen/harmony-udid-tool/releases)  提供 macOS 版本，下载最新的 `.dmg` 文件，双击后将 `HarmonyOS-UDID-Tool.app` 拖入“应用程序”。

### 开发者：从源码运行

需要 Python 3.7+。在项目根目录执行：

macOS / Linux：

```sh
python3 main.py
```

Windows：

```powershell
python main.py
```

运行测试：

```sh
python3 -m pip install -r requirements-test.txt
pytest
```

Windows PowerShell：

```powershell
py -m pip install -r requirements-test.txt
py -m pytest
```

### 自行打包

先安装 PyInstaller：

```sh
python3…
