---
repo: "waylyrics/waylyrics"
name: "waylyrics"
description: "the furry way to show desktop lyrics"
readmeQualityOk: true
url: "https://github.com/waylyrics/waylyrics"
homepage: "https://waylyrics.github.io/waylyrics/waylyrics"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 271
forks: 26
openIssues: 5
closedIssues: 96
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2023-04-11T12:17:23Z"
lastCommitAt: "2026-10-01T10:25:03Z"
lastReleaseAt: "2024-02-21T11:36:34Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 41
maintainers: ["mokurin000", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec7baafdd65390982d6c6f3cd03484722ca76954ae7aacefc9e8ab0b0c5d0833/waylyrics/waylyrics"
discussionCount: 14
---

# Waylyrics

  <br />
    <br />
  </div>
</div>

[简体中文](https://github.com/waylyrics/waylyrics/blob/HEAD/README.md) | [English](https://github.com/waylyrics/waylyrics/blob/HEAD/README.en.md)

- [介绍](#介绍)
- [界面预览](#界面预览)
- [构建/安装](#构建安装)
- [用法](#用法)
- [依赖](#依赖)
- [插件](#插件)
- [推荐的播放器](#推荐的播放器)
- [无法使用的播放器](#无法使用的播放器)
- [目录](#目录)
- [替代品](#替代品)
- [Credit](#credit)
- [License](#license)

> 目前 waylyrics 暂时处于不活跃开发，两位主要开发者忙于生计，暂时只进行 PR Review / 依赖更新
>
> 遇到问题请参考 [issues](https://github.com/waylyrics/waylyrics/issues) 和 [wiki](https://github.com/waylyrics/waylyrics/wiki), [discussion](https://github.com/waylyrics/waylyrics/discussions) 等

## 介绍

Waylyrics 是一款支持 Linux/Windows 的桌面歌词软件。

关键特性：
- 基于 GTK 4
- 保持最新的依赖
- 自动切换亮暗主题
- 配置文件使用 TOML 格式
- 启动时会为配置文件添加最新注释
- CSS 自定义主题，提供[多种预设主题](https://github.com/waylyrics/waylyrics/blob/HEAD/themes)
- 理论上正确接入 MPRIS/SMTC 即可兼容
- 通过社区贡献，优化了一部分音乐播放器的歌词接入

## 界面预览

### 主界面

> 边框可以隐藏（ctrl-d/托盘菜单->开关边框）



### 搜索歌词



## 构建/安装

> 注意：最低需要Rust版本为 1.78.0

详阅 [INSTALLATION.md](https://github.com/waylyrics/waylyrics/blob/HEAD/doc/INSTALLATION.md)

Ubuntu用户详阅…
