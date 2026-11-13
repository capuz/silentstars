---
repo: "STARDUSTLC666/dsh-voice"
name: "dsh-voice"
description: "DSH voice tool: Edge TTS read-aloud, compatible ASR transcription, workspace file protection and concurrent output. Issues and PRs are welcome."
originalDescription: "DSH 语音工具：Edge TTS 朗读、兼容 ASR 转写、工作区文件保护与并发输出。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-voice"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [66, 34]
topics: ["deepseek-harness", "dsh-plugin", "stt", "tts", "whisper", "edge-tts"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T20:15:58Z"
lastCommitAt: "2026-11-13T18:35:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["STARDUSTLC666"]
openGraphImageUrl: "https://opengraph.githubassets.com/9534660ff9cfeb28384bdb9a1258819517e28b8a099cf36e519a5b0b3af4759b/STARDUSTLC666/dsh-voice"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-voice/blob/HEAD/README.en.md)

# Voice

**Turn text into speech, and turn recordings into text.**

**[Installation](#安装) · [Usage flow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-voice/blob/master/docs/REFERENCE.zh.md)**

## Features

- Listen to a short preview before choosing the voice and speaking rate.
- Keep audio files that can be played back and delivered directly.
- Transcription uses the compatible ASR service you configure.

## Installation

Install `dsh-voice` from the Plugins panel in the DSH desktop app. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add dsh-voice
```

For the web version, change `desktop` to `web`. After installation, restart the corresponding DSH. The host's requirement is based on the package declaring `>=0.2.2-rc.3`.

## Getting Started

1. Create a new DSH session in the workspace where you want to save audio, and ask the assistant to check whether the voice tool is available first.
2. Provide the text to read aloud, the language, the voice, and the speaking rate, for example: "Generate this text as a…
