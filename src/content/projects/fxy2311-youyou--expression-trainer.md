---
repo: "fxy2311-youyou/expression-trainer"
name: "expression-trainer"
description: "Universe Invincible Expression Training System — Real-time voice-to-text + 27000-word emotional vocabulary + AI expression analysis report. Runs offline, speak to it, and it helps you see your expression problems."
originalDescription: "宇宙无敌表达训练系统 — 实时语音转文字 + 27000词情感词库 + AI表达分析报告。离线运行，对着它说话，它帮你看见自己的表达问题。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/fxy2311-youyou/expression-trainer"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [54, 30]
stars: 80
forks: 13
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-06T10:22:32Z"
lastCommitAt: "2026-07-13T06:40:33Z"
status: "thriving"
tags: []
healthScore: 77
undervaluedScore: 4
maintainers: ["fxy2311-youyou", "Zhanwei-Liu"]
openGraphImageUrl: "https://opengraph.githubassets.com/da740a40e357a9a5378077233df8d7810b84d9d1444fc2a718e91682ccccd722/fxy2311-youyou/expression-trainer"
---

# 🚀 Universe Invincible Expression Training System - Local Desktop Version

A local desktop application that helps you train the accuracy of your spoken expression. Real-time voice recognition → vocabulary matching → AI feedback, all offline + local processing.

## Features

- 🎤 **Real-time Voice Recognition**: Based on Sherpa-ONNX, completely offline, optimized for Chinese
- 📝 **Full-screen Subtitle Display**: Black background with large text, displaying every sentence you say in real-time
- 🔍 **Vocabulary Analysis**: Automatically detects filler words, hesitation words, and vague words, providing precise alternatives
- 🤖 **AI Feedback**: Supports multiple backends including Groq/OpenAI/DeepSeek/Ollama
- 📊 **Analysis Report**: 6-dimensional in-depth analysis (logic/directness/filler words/density/vocabulary/highlights)

## Installation

### 1. Clone the project & install dependencies

```bash
cd expression-trainer
npm install
```

### 2. Download the voice recognition model

You need to download the bilingual model of Sherpa-ONNX's streaming paraformer:

```bash
cd models

# Method 1: Using wget
wget…
