---
repo: "yann0917/voxbox"
name: "voxbox"
description: "A speech processing toolbox supporting integration with Doubao Voice, Qwen, Xiaomi, Zhipu, MiniMax, OpenRouter and other platforms. It can also integrate local speech recognition and speech synthesis large models such as indexTTS-2.5 and QWen3-TTS."
originalDescription: "语音处理工具箱，支持豆包语音、千问、小米、智谱、minimax、OpenRouter等平台接入。也可接入 indexTTS-2.5, QWen3-TTS等本地语音识别语音合成大模型。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yann0917/voxbox"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [69, 30]
topics: ["asr", "doubao", "qwen", "tts", "tts-api", "xiaomi-mimo", "indextts2", "qwen3-tts", "minimax"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-23T16:18:36Z"
lastCommitAt: "2026-10-25T08:41:08Z"
lastReleaseAt: "2026-09-28T10:56:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 58
maintainers: ["yann0917"]
openGraphImageUrl: "https://opengraph.githubassets.com/12633168abc9e0f7fda28ea44f9fb4eb4291bcb3fda5e54baad5ef2b3854b73e/yann0917/voxbox"
---

---

## Overview

**Speech synthesis**: Six engines (Volcano / Qwen / Xiaomi / Zhipu / OpenRouter / local inference) switchable from one place, with synchronous, streaming, and long-text channels.

**Vocal separation**: Four selectable engines: Format Factory / Convert Cat (free), MVSep (120+ algorithms), and Volcano MediaKit.

## What it can do

## Quick start

### Desktop app (recommended)

Download the latest `desktop-v*` release from [Releases](https://github.com/yann0917/voxbox/releases):

| Platform | File |
|---|---|
| macOS (Apple Silicon) | `VoxBox_*_aarch64.dmg` |
| macOS (Intel) | `VoxBox_*_x64.dmg` |
| Windows | `VoxBox_*_x64-setup.exe` |

Install and open to use; no registration or login required. FFmpeg, which is needed for editing, the voice library, voice-clone synthesis, and similar features, is bundled, so it works out of the box.

> **First run on Windows**: In the SmartScreen popup, click "More info" → "Run anyway".

After opening, go to **Settings → Cloud Services** and enter the API key for each provider to use the corresponding cloud capabilities. Without any credentials, you can still use the Format Factory free channel and local inference (download engines…
