---
repo: "karappo-yu/iina-plugin-danmaku-cosmos"
name: "iina-plugin-danmaku-cosmos"
description: "niconico / bilibili / DanDanPlay 弹幕 for IINA — dual CSS & Canvas rendering, Nico & Bilibili style presets, local file & network danmaku"
readmeQualityOk: true
url: "https://github.com/karappo-yu/iina-plugin-danmaku-cosmos"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["danmaku-render-engine", "iina-plugin", "japanese-danmaku", "niconico-comment", "xml-danmaku", "bilibili", "dandanplay", "danmaku", "iina", "macos"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-12T22:14:20Z"
lastCommitAt: "2026-09-13T08:29:37Z"
lastReleaseAt: "2026-05-15T14:49:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 51
maintainers: ["karappo-yu"]
openGraphImageUrl: "https://opengraph.githubassets.com/99363cdc76a01f9b5c840f1f139c30543a69afdad2d4399bebada81fcff3a000/karappo-yu/iina-plugin-danmaku-cosmos"
---

# Danmaku Cosmos

[日本語](#日本語) / [中文](#中文) / [English](#english)

IINA 弹幕插件，基于 [niconicomments](https://github.com/xpadev-net/niconicomments)（已 fork 增强）。支持 Niconico 格式（XML / V1 JSON）、Bilibili XML、以及**弹弹play 网络弹幕**。CSS 和 Canvas 双渲染模式。

---

## 中文

### 安装

1. 安装 [IINA](https://iina.io/)（如尚未安装）
2. 从 [Releases](https://github.com/karappo-yu/iina-plugin-danmaku-cosmos/releases) 下载 `.iinaplgz` 文件
3. 打开 IINA → 设置 → 插件 → 添加插件，选择下载的 `.iinaplgz` 文件
4. 重启 IINA

### 功能特性

- **Niconico 格式完整支持**：Niconico XML、Niconico V1 JSON
- **Bilibili XML 基础支持**：普通滚动弹幕、顶部/底部固定弹幕，可通过风格预设切换 niconico 或 Bilibili 渲染风格
- **弹弹play 网络弹幕**：自动匹配视频文件，从弹弹play API 获取网络弹幕，支持缓存和手动搜索
- **繁简转换**：支持强制将繁体中文弹幕转换为简体中文，可在设置和 UI 中自由切换
- **双渲染模式**：
  - **CSS 模式**（默认）：利用 WebKit GPU 合成加速（`transform` + `will-change`），在 IINA 的 WKWebView 环境下流畅度远超 Canvas
  - **Canvas 模式**：基于魔改 niconicomments，用于需要完整 Canvas 渲染的场合
- **自动加载弹幕**：按优先级自动查找同目录下的弹幕文件
- **手动加载弹幕**：通过菜单或侧边栏手动选择弹幕文件
- **侧边栏控制面板**：实时调整弹幕开关、渲染模式、繁简转换、透明度、字体缩放、滚动速度等
- **弹幕时间偏移**：在高级设置中可手动输入偏移秒数，或按 A / D 键快速回退/前进，用于调整弹幕显示时间
- **自动设置片头偏移**：加载 Niconico V1 JSON 弹幕时，自动检测弹幕源时长与当前视频时长的差异。当片源开头包含 Aniplex 等供应商片头导致视频比原始弹幕源更长时，自动设置偏移量跳过片头。差值小于 1…
