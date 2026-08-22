---
repo: "ReSerendipity/TTS_MultiModel"
name: "TTS_MultiModel"
description: "多引擎语音合成平台：VoxCPM2 与 IndexTTS2 引擎，声音克隆、音色设计、LoRA 微调、多角色剧本配音、情感控制，OpenAI 兼容 API，中英日韩界面，一键安装启动 | Multi-engine TTS platform: VoxCPM2 + IndexTTS2, voice cloning, voice design, LoRA fine-tuning, multi-character dubbing, emotion control, OpenAI-compatible API, zh/en/ja/ko UI, one-click install"
readmeQualityOk: true
url: "https://github.com/ReSerendipity/TTS_MultiModel"
language: "Python"
languages: ["Python"]
languagePcts: [70]
topics: ["audio-generation", "chinese-tts", "deep-learning", "fastapi", "fine-tuning", "indextts", "lora", "multi-model", "pytorch", "speech-synthesis"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-05-08T00:48:26Z"
lastCommitAt: "2026-08-22T04:06:53Z"
lastReleaseAt: "2026-08-21T10:09:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 62
maintainers: ["ReSerendipity"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b0ee94396e019521a129577b253db776a7ccb9928c71a81ac757137b918885b/ReSerendipity/TTS_MultiModel"
discussionCount: 0
---

# TTS MultiModel

**多模型语音合成平台 | Multi-Model Text-to-Speech Platform**

基于 VoxCPM2 和 IndexTTS 2.5 的开源语音合成平台，支持声音克隆、声音设计、LoRA 微调与多角色剧本配音

A powerful open-source multi-model Text-to-Speech platform with voice cloning, voice design, LoRA fine-tuning, and multi-character script dubbing

[English](#english) · [中文](#中文) · [Features](#-features) · [Quick Start](#-quick-start) · [Documentation](#-documentation) · [API](#-api-endpoints) · [Contributing]

## 🧪 在线模拟演示（GitHub Pages）

无需 GPU / 模型权重，纯前端仿真环境即可体验声音设计、声音克隆、剧本配音等完整流程（发声由浏览器内置语音引擎模拟）：

**<https://reserendipity.github.io/TTS_MultiModel/>** （由 `.github/workflows/pages-deploy.yml` 自动部署 `demo/` 目录，详见 [demo/README.md](https://github.com/ReSerendipity/TTS_MultiModel/blob/HEAD/demo/README.md)）

---

</div>

---

## Why TTS MultiModel?

| 优势 | 说明 |
|------|------|
| **一站式平台** | 集成 VoxCPM2 + IndexTTS 2.5 多引擎，声音克隆、声音设计、剧本配音、LoRA 微调，无需在多个工具间切换 |
| **极低门槛** | 内置 WinPython + 一键安装脚本，Windows 用户开箱即用；Docker 部署仅需一行命令 |
| **完整工具链** | 从数据准备到模型训练到推理部署，覆盖 TTS 全生命周期 |
| **开源透明** | 项目代码 Apache 2.0；**模型权重许可各异**（见「模型许可说明」），商用前请逐项核对 |
| **多语言界面** | 支持中文、英文、日文、韩文，国际化开箱即用 |

## Demo

| 声音设计 | 声音克隆 |
|:--------:|:--------:|
|  |  |

| 极致克隆 | 剧本配音 |…
