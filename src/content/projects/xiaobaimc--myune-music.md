---
repo: "xiaobaimc/myune_music"
name: "myune_music"
description: "一个使用 Flutter(Dart) 的简单音乐播放器实现 / A simple music player implemented using Flutter (Dart)."
url: "https://github.com/xiaobaimc/myune_music"
language: "Dart"
languages: ["Dart"]
languagePcts: [91]
topics: ["dart", "flutter", "flutter-app", "music-player", "rust"]
stars: 439
forks: 37
openIssues: 14
closedIssues: 67
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-06-18T06:27:47Z"
lastCommitAt: "2026-06-25T01:37:34Z"
lastReleaseAt: "2025-09-02T19:59:20Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 33
maintainers: ["xiaobaimc", "SummerRay160"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc3f438499169c27de1220f8bf76a77b0dd9550eb8c4085361a064cd2b368add/xiaobaimc/myune_music"
discussionCount: 0
---

# 🎵 Myune Music

![Rust](https://img.shields.io/badge/lang-Rust-orange)

一个基于 **Flutter (Dart)** 实现的简洁本地音乐播放器，支持 **Windows / Linux** 双端。

> 🍎 macOS 用户可使用社区移植版：[myune_music_macos](https://github.com/Lannamokia/myune_music_macos)

## ✨ 特性
* 💻 支持 **Windows / Linux** 双平台
* 🎶 歌曲管理：支持 **文件夹歌单** 与 **手动歌单**
* 🧠 自动按 **歌手** 与 **专辑** 分类
* 🎨 使用 [Material 3](https://m3.material.io/) 组件与配色
* 🎧 自动读取音频元数据，支持多种格式
* 📝 歌词支持：内嵌歌词、本地 `.lrc`、网络歌词源，支持本地逐字歌词
* 🔊 提供 **音调控制** 与 **倍速播放**
* ✨ 可自定义主题配色与字体
* 🖥️ 集成 **SMTC（系统媒体传输控制）** 与 **MPRIS（Linux）**
* 🧩 支持 **音频独占模式**（仅 Windows）
* 🔌 支持 **手动选择音频输出设备**

## 🔧关于 Linux

需要安装 `libmpv`

例如 **Ubuntu/Debian**

``` bash
sudo apt install libmpv-dev mpv 
```

## 🎶 桌面歌词
由于 [Flutter](https://flutter.dev/) 暂不支持多窗口功能，因此暂未提供桌面歌词。
可使用以下第三方工具替代：

* [Lyricify Lite](https://apps.microsoft.com/detail/9nltpsv395k2)
* [BetterLyrics](https://apps.microsoft.com/detail/9p1wcd1p597r)

> 以上软件非本人开发，请支持原作者 🙏

## 🌐 歌词

目前仅支持UTF-8编码的 **.lrc** 文件

默认情况下，将会优先读取内嵌歌词，如果没有则读取本地 `.lrc` 文件

如果上述都无歌词的话，可以在设置中启用 **从网络获取歌词**

启用后，将在未读取到**内联歌词**和本地 `.lrc` 文件自动获取歌词

软件内默认提供了三个歌词源可供选择

实现参考 [通过歌曲名获取原文+翻译歌词](https://www.showby.top/archives/624)

### 🎵 歌词解析

假设有如下格式的歌词

>[02:55.031]照らされた世界…
