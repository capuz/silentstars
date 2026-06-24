---
repo: "houleixx/PicSee"
name: "PicSee"
description: "mac端轻量级图片查看器"
url: "https://github.com/houleixx/PicSee"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-14T08:22:31Z"
lastCommitAt: "2026-06-24T06:39:47Z"
lastReleaseAt: "2026-05-28T01:28:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 53
maintainers: ["houleixx"]
openGraphImageUrl: "https://opengraph.githubassets.com/b110e570f57821b0bbaab86517f26b5f9a597b5c70fed98135b028c16f044c26/houleixx/PicSee"
---

# PicSee

PicSee 是一个面向 macOS 的轻量级图片查看器，主打“Finder 双击即开、看完即退”。它支持滚轮缩放、键盘切图、OCR 选字复制，并同时兼容 Apple Silicon 与 Intel 芯片。

## 项目背景

macOS 自带的「预览」在快速看图时有两处常见不便：**鼠标滚轮无法缩放**，且**关闭窗口后主进程仍留在 Dock**，往往需要再手动退出一次。PicSee 正是为化解这些摩擦而做：在轻量前提下，提供 **滚轮缩放**、**`Esc` 退出**，以及**关闭窗口即结束当前应用实例**的一气呵成体验；并在此基础上集成了实用的 **OCR 文字复制**（拖选图片中的文字、`Cmd + C` 复制）。

## 功能

- Finder 双击图片直接打开
- 多窗口独立查看，关闭一个窗口只退出当前进程
- 滚轮缩放图片
- 放大后拖动图片空白区域可平移图片
- 鼠标移动到文字区域时显示 I 形光标，可拖选并复制图片中文字
- `Cmd + C` 复制当前选中的图片文字
- `← → ↑ ↓` 切换同目录图片
- `Esc` 关闭当前图片并退出应用
- 右键菜单支持“复制图片路径”

## 运行环境

- macOS 14 及以上
- Xcode Command Line Tools 或完整 Xcode
- Swift 6

## 本地开发

先运行测试：

```bash
swift test
```

本地构建应用：

```bash
Scripts/build-app.sh
```

构建完成后会得到：

- App Bundle: `build/PicSee.app`
- 本地安装副本: `~/Applications/PicSee.app`

如果只想构建，不自动安装到本机应用目录：

```bash
PICSEE_SKIP_LOCAL_INSTALL=1 Scripts/build-app.sh
```

指定版本号构建：

```bash
PICSEE_VERSION=0.2.24 PICSEE_BUILD_NUMBER=1 Scripts/build-app.sh
```

## 生成 DMG 安装包

生成 DMG：

```bash
Scripts/build-dmg.sh
```

构建完成后会得到：

- DMG: `build/dmg/PicSee-0.2.24.dmg`

同样可以指定版本号：

```bash
PICSEE_VERSION=0.2.24 Scripts/build-dmg.sh
```

## 使用方式

### 1. 从 Finder 打开

把 PicSee 设为默认图片查看器后，直接在 Finder 中双击图片即可打开。

### 2. 基本交互

-…
