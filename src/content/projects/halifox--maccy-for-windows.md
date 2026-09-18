---
repo: "halifox/maccy_for_windows"
name: "maccy_for_windows"
description: "一个 Windows 剪贴板历史工具，受 macOS 版 Maccy 启发。"
readmeQualityOk: true
url: "https://github.com/halifox/maccy_for_windows"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-01T13:17:39Z"
lastCommitAt: "2026-09-18T08:26:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 53
maintainers: ["halifox"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cd7ac981fe6b91b138ef6e8ee280e5ac16fc06e5ff5e7e305b47f36dcec582b/halifox/maccy_for_windows"
---

# Maccy for Windows

一个 Windows 剪贴板历史工具，受 macOS 版 [Maccy](https://github.com/p0deje/Maccy) 启发。

> 本项目不是 Maccy 官方 Windows 版本，也不隶属于、代表或获得 Maccy 官方项目授权。

## 功能概览

- 通过 Windows 系统托盘和全局快捷键访问剪贴板历史；
- 保存文本、图片和文件剪贴板格式；
- 支持精确、模糊、正则和混合搜索；
- 精确搜索使用 SQLite FTS5，图片本身不参与文本搜索；
- 支持固定项目、编辑固定文本、忽略应用程序、剪贴板格式和正则内容；
- 支持 Windows 剪贴板历史记录标记，避免保存明确标记为不应进入历史的内容；
- 本地 SQLite 存储，不上传剪贴板内容。

## 与原版 Maccy 的差异

- Maccy 使用 macOS 菜单栏；本项目使用 Windows 系统托盘和全局快捷键。
- Maccy 定时检查剪贴板；本项目使用 Windows `WM_CLIPBOARDUPDATE` 事件监听。
- Maccy 主要搜索生成后的项目标题；本项目还会搜索保存的文本正文和文件路径。
- Maccy 会尝试使用 OCR 生成图片标题；本项目不进行 OCR，图片仅作为图片项目保存和预览。
- Maccy 使用 macOS Pasteboard 和 SwiftData；本项目使用 Windows 原生剪贴板格式和 SQLite BLOB。
- 本项目不包含 Universal Clipboard、iCloud 或 macOS App Intents 等 macOS 集成。

## 下载和安装

请从 [GitHub Releases](https://github.com/halifox/Clipboard/releases) 下载带有版本号的 ZIP 或 NSIS 安装包，并核对同一 Release 中的 `SHA256SUMS.txt`。本地 Debug 构建目录中的 `maccy.exe` 仅适用于开发和测试，不是正式分发包。

用户可见变化记录见 [`CHANGELOG.md`](https://github.com/halifox/maccy_for_windows/blob/HEAD/CHANGELOG.md)。

## 从源码构建

开发环境要求：

- Windows x64；
- Visual Studio C++ 工具链；
- CMake 3.25 或更高版本；
- Ninja；
- C++20 编译器。

请在 Visual Studio Developer PowerShell 中执行：

```powershell
cmake --preset…
