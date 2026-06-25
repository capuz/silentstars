---
repo: "franvz9/Rime_vision"
name: "Rime_vision"
description: "macOS 上的 Rime 输入法可视化配置工具，基于 SwiftUI 构建。"
url: "https://github.com/franvz9/Rime_vision"
language: "Swift"
languages: ["Swift", "Rust"]
languagePcts: [63, 22]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-21T13:51:20Z"
lastCommitAt: "2026-06-25T02:07:35Z"
lastReleaseAt: "2026-06-25T02:02:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 13
maintainers: ["franvz9"]
openGraphImageUrl: "https://opengraph.githubassets.com/1760fa8e84c049221694616d0424d8d0ae9f464de8501b4db5c24f74d7fc2bc3/franvz9/Rime_vision"
---

# RimeVision

[Rime 输入法](https://rime.im/)可视化配置工具，无需手动编辑 YAML，通过直观的图形界面管理所有配置。

## 项目组成

本仓库包含两个独立的配置工具：

| 项目 | 目录 | 平台 | 技术栈 | 状态 |
|------|------|------|--------|------|
| **RimeVision** | `RimeVision/` | macOS | Swift + SwiftUI | 稳定版 |
| **WeaselVision** | `weasel_vision/` | macOS + Windows | Rust + Tauri 2.0 + Vue 3 | MVP（未真机测试） |

> **关于 WeaselVision**: 跨平台版本已完成开发并通过多轮代码审查，逻辑上支持 macOS（鼠须管）和 Windows（小狼毫）。但由于作者身边没有 Windows 设备，**尚未在 Windows 上进行真机测试**。macOS 端功能与 RimeVision 一致。

---

## RimeVision（macOS 版）

### 功能特性

- **主题编辑器** — 可视化编辑配色方案，实时预览候选窗口效果
- **方案管理** — 查看、配置输入法方案及其依赖关系
- **语言模型** — 扫描、导入、挂载/卸载 `.gram` 语言模型文件
- **快捷键编辑** — 直观配置全局按键绑定
- **通用设置** — 候选词数、标点符号等全局选项
- **配置安全** — 结构化读写 YAML，自动备份，防止配置损坏
- **一键部署** — 将配置部署到 Rime 输入法引擎

### 系统要求

- macOS 13 (Ventura) 或更高版本
- Apple Silicon (arm64)
- 已安装 [鼠须管 (Squirrel)](https://github.com/rime/squirrel)

### 安装

从 [Releases](../../releases) 下载最新的 DMG 文件，打开后将 RimeVision.app 拖入"应用程序"文件夹。

首次启动时，macOS 可能提示"无法验证开发者"，请前往**系统设置 → 隐私与安全性**点击"仍要打开"。

### 从源码构建

```bash
git clone https://github.com/franvz9/Rime_vision.git
cd Rime_vision/RimeVision
swift run RimeVision
```

运行测试：

```bash
swift run RimeVisionTestRunner
```

---

##…
