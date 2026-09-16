---
repo: "Mai-icy/Spotify-lyrics-window"
name: "Spotify-lyrics-window"
description: "一个轻量级跨平台 Qt Spotify 歌词悬浮窗口，支持横排/竖排显示、样式自定义，以及歌词编辑与下载等功能。A lightweight cross-platform Qt floating lyrics window for Spotify, supporting horizontal/vertical layouts, style customization, as well as lyric editing and downloading."
readmeQualityOk: true
url: "https://github.com/Mai-icy/Spotify-lyrics-window"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["lyrics", "lyrics-search", "spotify", "spotify-lyrics", "python3", "lyrics-fetcher", "pyqt6", "dbus", "linux", "linux-app"]
stars: 142
forks: 8
openIssues: 2
closedIssues: 24
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2022-10-23T05:37:32Z"
lastCommitAt: "2026-09-16T08:48:06Z"
lastReleaseAt: "2025-04-04T04:41:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 38
maintainers: ["Mai-icy", "dependabot[bot]", "ddhello"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/556128159/509ac467-8407-4da5-91f4-3619a28acc6f"
---

# Spotify Lyrics Window 🎵

一个面向 Spotify 的桌面悬浮歌词窗口，支持实时滚动歌词、播放控制、本地歌词管理与样式自定义。

[English README](https://github.com/Mai-icy/Spotify-lyrics-window/blob/HEAD/README.en.md)

## 👀 项目预览

以下使用当前 UI 在 macOS 上录制，采用英文界面和自编演示歌词，不连接真实播放会话。下载演示使用离线歌词源响应，搜索、选择与本地保存走实际程序流程。可在设置中切换中文 / English，重启生效。

歌词展示：拖动窗口、拉伸与缩小（字号随尺寸变化）、长句滚动，以及按 Unicode 规则排版的横竖切换。

新版设置：侧栏导航、快捷键、字体与配色，样式调整即时反映到歌词窗口。

歌词管理：为无歌词曲目搜索并下载歌词，保存后清除状态标记；也可搜索本地曲目、编辑保存、调整偏移与查看翻译。

## 📖 项目简介

`Spotify Lyrics Window` 是一个基于 `PyQt6` 的桌面歌词工具，目标是为 Spotify 提供更自由、更接近桌面原生体验的悬浮歌词窗口。

相比只展示歌词的简单脚本，这个项目提供了更完整的桌面使用体验：

- 播放时自动切歌与滚动
- 播放控制联动
- 多歌词源匹配与下载
- 本地歌词缓存与管理
- 支持窗口样式、字体、颜色、快捷键等自定义

## ✨ 功能亮点

- Spotify 桌面悬浮歌词窗口
- 歌词自动滚动与自动切换
- 支持播放、暂停、上一首、下一首
- 多歌词来源：酷狗、网易云、Spotify
- 本地歌词缓存与歌词文件管理
- 歌词搜索、无歌词状态标记、编辑与单曲时间偏移
- 支持翻译歌词显示
- 横向 / 纵向歌词显示模式
- 竖排按 Unicode 字符方向处理混排，保留组合重音与 Emoji
- 支持字体、颜色、阴影、窗口样式自定义
- 支持全局快捷键
- 自动切歌同步修正开关、全局与单曲歌词偏移
- 侧栏式设置界面，支持简体中文 / English
- 支持 Windows、Linux 与 macOS（Spotify 桌面客户端）媒体会话

## 💡 为什么做这个项目

Spotify 在桌面端的歌词体验仍然有不少可以改进的地方，这个项目主要希望解决这些问题：

- 听歌时不需要频繁切回主播放器看歌词
- 浮窗歌词更适合边工作边听歌的桌面场景
- 多歌词源可以提高歌词匹配成功率
- 本地歌词管理可以让歌词体验更稳定、可控
- 自定义能力更适合长期使用

## 🧱 项目结构

```text
SpotifyLyricWindow/
├─ common/        # 配置、歌词逻辑、API 客户端、媒体会话、播放器
│…
