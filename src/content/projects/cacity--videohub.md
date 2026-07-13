---
repo: "cacity/VideoHub"
name: "VideoHub"
description: "一个集成 AI 转写与配音功能的多平台视频处理工具，支持 YouTube、TikTok/抖音、Instagram、Bilibili和Twitter /X，提供 Chrome 插件，基于 OpenAI Whisper 实现音视频转写，支持 Kokoro TTS 中文配音及 Claude Code Skills 开发辅助。"
readmeQualityOk: true
url: "https://github.com/cacity/VideoHub"
homepage: "https://videohub.my/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 85
forks: 15
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2025-09-24T03:16:08Z"
lastCommitAt: "2026-07-13T06:37:07Z"
lastReleaseAt: "2026-07-06T02:20:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 54
undervaluedScore: 33
maintainers: ["cacity"]
openGraphImageUrl: "https://opengraph.githubassets.com/afbf4ff02b3279684e8e11db52439b3f81dbc0b4c76baf15804cce758d7c9fac/cacity/VideoHub"
---

# 视频转录工具 (Video Hub)

**当前版本: v0.2.4**

简体中文  | [English](https://github.com/cacity/VideoHub/blob/HEAD/README_en.md)

这是一个功能强大的桌面应用程序，使用 PyQt6 构建现代化图形界面，支持 **YouTube、Twitter/X、抖音/TikTok、Instagram、Bilibili** 等多平台视频内容的智能处理。提供媒体导入与处理、语音转录、双语字幕生成、**AI 配音**、内容摘要等完整工作流，并配备闲时调度、批量处理、Claude Code Skills 等高级功能。

## 🆕 最新更新：MiniMax 多音色配音

VideoHub 的 AI 配音现在新增 **MiniMax TTS API** 后端。除了原来的本地 Kokoro 和 CosyVoice，用户也可以在设置中切换到 MiniMax，并从多个系统音色中选择更合适的声音。

- **多音色选择**: 支持中文男声、中文女声、新闻播音、电台主持、青年声线、成熟声线和粤语男声等预置音色
- **可试听再生成**: AI 配音页可直接试听当前音色，确认效果后再开始正式配音
- **可自定义 Voice ID**: 除预置音色外，也可以手动填写 MiniMax 控制台中的自定义 `voice_id`
- **不影响默认流程**: 未切换时仍默认使用本地 Kokoro；CosyVoice 和 MiniMax 都是手动选择的可选后端
- **适合视频解说**: 男声播音、主持类音色更适合课程、技术分享、访谈、说明类视频的中文配音
- MiniMax配音的演示视频 youtube https://youtu.be/ns-X5yUb4gE

## ✨ 加入讨论群

## ✨ 核心功能

### 🎬 多平台视频处理

- **🎥 平台支持**: YouTube、Twitter/X、抖音、Bilibili 等主流视频平台
- **智能处理**: 支持视频/音频导入与本地处理，可选择完整视频或仅音频模式
- **精准转录**: 基于 OpenAI Whisper 的高质量语音转录技术
- **多格式字幕**: 生成 .srt、.vtt、.ass 等多种格式的双语字幕文件
- **字幕嵌入**: 支持将字幕直接嵌入到视频文件中
- **AI 配音**: 默认使用 Kokoro TTS，也可手动切换到 CosyVoice SFT / Instruct 或 MiniMax API，生成更自然的中文配音版本视频
- **内容摘要**: 利用 LLM（支持 OpenAI、DeepSeek 等）智能生成文章摘要

### 🌐 Chrome浏览器扩展

- **页面集成**: 在…
