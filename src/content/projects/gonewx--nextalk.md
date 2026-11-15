---
repo: "gonewx/nextalk"
name: "nextalk"
description: "nextalk - High-performance offline voice input for Linux 实时语音识别系统"
readmeQualityOk: true
url: "https://github.com/gonewx/nextalk"
language: "Dart"
languages: ["Dart"]
languagePcts: [85]
topics: ["offline-recognition", "ultra-low-latency", "native-wayland-support", "transparent-floating-window"]
stars: 22
forks: 5
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-05-07T08:46:50Z"
lastCommitAt: "2026-11-15T08:26:11Z"
lastReleaseAt: "2026-07-10T00:39:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 60
maintainers: ["decker502", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/daea11ef3d93465f88cd9e00c26beec415e27d67e0128b84bdebc723f3cc593f/gonewx/nextalk"
---

# Nextalk

**High-performance voice input for Linux with local and cloud recognition**

[简体中文](https://github.com/gonewx/nextalk/blob/HEAD/README_zh.md) | English

Convert speech to text in real-time, input to any application via the Fcitx5 input method framework. Local models run offline by default. Optionally configure DeepSeek cloud recognition, which uploads audio after recording stops.

## Features

- **Offline Recognition** - Three ASR engines based on Sherpa-onnx: Qwen3-ASR 0.6B offline engine (default, recommended — best accuracy, multilingual plus Chinese dialects, hotwords), SenseVoice offline engine (lightweight, auto punctuation) and Zipformer streaming engine (real-time, character by character); data never leaves your device
- **Low Latency** - Zipformer streaming engine transcribes as you speak; offline engines output text right after each utterance; text commit path latency < 20ms
- **Transparent Floating Window** - Borderless capsule UI with breathing animation, minimal workflow disruption
- **Native Wayland Support** - System shortcuts and text submission both support Wayland
- **Bilingual UI** - Simplified Chinese / English interface, switchable in the unified…
