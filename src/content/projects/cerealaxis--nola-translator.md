---
repo: "CerealAxis/Nola-Translator"
name: "Nola-Translator"
description: "An open-source app and browser extension for bilingual translation."
readmeQualityOk: true
url: "https://github.com/CerealAxis/Nola-Translator"
homepage: "https://nolax.org"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [64, 25]
topics: ["bilingual-subtitles", "game-translation", "live-subtitles", "manga-translation", "ocr", "screen-translation", "speech-translation"]
stars: 353
forks: 17
openIssues: 8
closedIssues: 14
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T07:25:39Z"
lastCommitAt: "2026-11-23T13:32:04Z"
lastReleaseAt: "2026-10-15T08:54:04Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 29
maintainers: ["CerealAxis"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e91c562d79ed46a3f3832b25f361c1d8a909fa08162731c749112413b20c5dc/CerealAxis/Nola-Translator"
fundingLinks: ["GITHUB:https://github.com/CerealAxis"]
discussionCount: 0
---

Nola Translator is a cross-platform real-time translation application for Windows and browsers. It supports local inference and cloud providers including Qwen, MiniMax, OpenAI-compatible APIs, Google Translate, Microsoft Translator and Index Translate. Features include live captions, meeting interpretation and comic translation.

## Demo

> **Tip**
>
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
