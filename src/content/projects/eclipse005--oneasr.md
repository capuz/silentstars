---
repo: "eclipse005/OneAsr"
name: "OneAsr"
description: "Local, offline, batch audio/video → SRT / TXT subtitles. Windows / Linux / macOS."
readmeQualityOk: true
url: "https://github.com/eclipse005/OneAsr"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["asr", "offline", "qwen3", "rust", "speech-to-text", "subtitles", "transcription", "wgpu"]
stars: 84
forks: 6
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-07-23T12:05:56Z"
lastCommitAt: "2026-11-23T12:21:56Z"
lastReleaseAt: "2026-09-20T13:10:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 37
maintainers: ["eclipse005"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef9d39c7375c37a7d98d4a427cd82faf4740bd5c8e2e3668075445ce8434b173/eclipse005/OneAsr"
---

[Download](#download) · [Quick start](#quick-start) · [Screenshots](#screenshots) · [CLI](#cli) · [Release](https://github.com/eclipse005/OneAsr/releases)

  **English** · [简体中文](https://github.com/eclipse005/OneAsr/blob/HEAD/README.zh-CN.md)

## How it works

Everything runs on your machine — no cloud, no account.

| Mode | Input | Pipeline | Output |
|---|---|---|---|
| **Transcribe** | audio / video | VAD → Qwen3-ASR → word-level alignment (Qwen by default) → smart segmentation | SRT / ASS / TXT |
| **Transcript matching** | audio / video + a checked .txt / .srt | CTC alignment (recognition is skipped) | SRT / ASS |

Optional vocal separation (HTDemucs) can run before either mode.

## Download

Current version **[v1.5.1](https://github.com/eclipse005/OneAsr/releases/tag/v1.5.1)** (click a file name to download):
