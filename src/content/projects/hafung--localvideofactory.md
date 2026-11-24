---
repo: "hafung/LocalVideoFactory"
name: "LocalVideoFactory"
description: "🎬 Local-first AI short-video studio: copywriting → storyboard → voiceover → captions → visuals → MP4. Local-first AI short-video studio: multimodal editing, voice cloning, dynamic captions, B-roll and open music. CPU inference, open source."
originalDescription: "🎬 本地 AI 短视频工厂：文案 → 分镜 → 配音 → 字幕 → 画面 → MP4。Local-first AI short-video studio: multimodal editing, voice cloning, dynamic captions, B-roll and open music. CPU inference, open source."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hafung/LocalVideoFactory"
homepage: "https://github.com/hafung/LocalVideoFactory#readme"
language: "C"
languages: ["C", "TypeScript"]
languagePcts: [40, 22]
topics: ["content-creation", "electron", "local-ai", "offline-first", "qwen3-tts", "text-to-speech", "voice-cloning", "ai-video-editor", "automatic-video-editing", "ffmpeg"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-09-04T02:50:44Z"
lastCommitAt: "2026-11-24T14:03:49Z"
lastReleaseAt: "2026-11-24T14:12:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 35
maintainers: ["hafung"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dc727e95f58c98c0e49e9cdeaf284c62add6fcec0534978d9b82f738322062d/hafung/LocalVideoFactory"
---

# LocalVideoFactory · 本地 AI 短视频工厂

### 一段文案，自动成为一条片。

**自动找素材 · 原片智能选段 · 自动剪辑 · 自然配音 · 动态字幕 · 免费配乐**

把零散的创作工具，串成你电脑里的一条短视频生产线。

[简体中文](https://github.com/hafung/LocalVideoFactory/blob/HEAD/README.md) · [English](https://github.com/hafung/LocalVideoFactory/blob/HEAD/README.en.md) · [下载 Windows 版](https://github.com/hafung/LocalVideoFactory/releases/latest) · [源码运行](https://github.com/hafung/LocalVideoFactory/blob/HEAD/docs/building.md) · [反馈建议](https://github.com/hafung/LocalVideoFactory/issues)

**LocalVideoFactory** 是一个开源的本地 AI 短视频工厂。输入文案，自动配音、对齐字幕、检索素材并剪辑成片；有原视频，就按内容挑选片段，画面不够则自动找素材补齐。支持声音克隆、动态字幕和免费音乐检索，生成后还能按分镜卡片精修。核心 AI 在本机 CPU 上运行，无需独立显卡。

桌面应用名为 **声织 VoxWeave**。仓库原名 `VoxWeave`，现改为更直观的 `LocalVideoFactory`；已有工程、音色、CLI 和安装包沿用兼容标识。

> **版本说明**　下文展示 v0.2.10 源码功能。[安装包与版本说明](https://github.com/hafung/LocalVideoFactory/releases/latest)以发布页为准，也可按[源码运行指南](https://github.com/hafung/LocalVideoFactory/blob/HEAD/docs/building.md)构建。v0.2.10 支持首次启动时下载模型或导入已有模型，AI 分镜与原片理解模型需单独准备。

## 先看品牌宣传片

这条 31 秒的 16:9 品牌宣传片介绍了 LocalVideoFactory，可直接播放并听到声音。

https://github.com/user-attachments/assets/b75c14ea-04be-4b62-9a42-a07fc2bbd6ac
