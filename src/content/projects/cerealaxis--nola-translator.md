---
repo: "CerealAxis/Nola-Translator"
name: "Nola-Translator"
description: "An open-source app and browser extension for bilingual translation."
readmeQualityOk: true
url: "https://github.com/CerealAxis/Nola-Translator"
homepage: "https://nola.xaviermc.top"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [64, 27]
topics: ["bilingual-subtitles", "game-translation", "live-subtitles", "manga-translation", "ocr", "screen-translation", "speech-translation"]
stars: 344
forks: 15
openIssues: 7
closedIssues: 14
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T07:25:39Z"
lastCommitAt: "2026-11-17T12:22:38Z"
lastReleaseAt: "2026-10-15T08:54:04Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine"]
healthScore: 93
undervaluedScore: 29
maintainers: ["CerealAxis"]
openGraphImageUrl: "https://opengraph.githubassets.com/aed88348e5c24d8f37eb44a12175ac66368dc356a8afcb4aca82f1f3ca146aa0/CerealAxis/Nola-Translator"
fundingLinks: ["GITHUB:https://github.com/CerealAxis"]
discussionCount: 0
---

Nola Translator is a cross-platform real-time translation application for Windows and browsers. It supports local inference and cloud providers including Qwen, MiniMax, OpenAI-compatible APIs, Google Translate, Microsoft Translator and Index Translate. Features include live captions, meeting interpretation and comic translation.

## Demo

> [!TIP]
> Click to experience the online demo

## How It Works

```mermaid
graph LR
    A["Audio<br/>Microphone · System audio"] --> B["Nola Translator"]
    H["Text and images<br/>Web · Screen · Games · Comics"] --> B
    B --> C{"Choose processing"}
    C -->|"Cloud"| D["Cloud recognition and translation"]
    C -->|"Local"| E["Local models<br/>Recognition · Translation · Speech synthesis"]
    D --> F["Captions · Translation · Translated speech"]
    E --> F
    F --> G["Overlay · Browser<br/>Meetings · Games · Comics"]
```

| | |
|---|---|
| **Providers** | Alibaba Cloud, MiniMax, OpenAI, Gemini, Anthropic, DeepSeek, Google Translate, Microsoft Translator, OpenAI compatible interface, Anthropic, Ollama, etc.|
| **Local Models** | 26 ASR models, 17 translation models, 16 TTS models, 3 LLM models, 17 OCR models, 5 comic detection and…
