---
repo: "Renakoni/Voicebox"
name: "Voicebox"
description: "The best offline voice cloning & trilingual TTS on Android (jk) — powered by GPT-SoVITS (ZH/JA/EN)."
originalDescription: "最好用的 Android 离线语音克隆与三语 TTS（误）——基于 GPT-SoVITS，支持中日英。 | The best offline voice cloning & trilingual TTS on Android (jk) — powered by GPT-SoVITS (ZH/JA/EN)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Renakoni/Voicebox"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
topics: ["android", "chinese-tts", "edge-ai", "gpt-sovits", "japanese-tts", "multilingual", "offline-ai", "on-device-ai", "onnx-runtime", "qnn"]
stars: 97
forks: 30
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-11-14T13:55:51Z"
lastCommitAt: "2026-11-18T12:07:40Z"
lastReleaseAt: "2026-11-18T11:59:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 28
maintainers: ["Renakoni"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0dcafe3b3ceea9134f994b5aad26dca8669901fc37de3c754e9107fabb625fa/Renakoni/Voicebox"
---

High-quality on-device voice cloning for Android, no cloud or external GPUs required.

  · <a href="#getting-started">Getting Started</a>
  · <a href="#performance">Performance</a>
  · <a href="#building-from-source">Build</a>
  · <a href="https://github.com/Renakoni/Voicebox/issues">Issues</a>

Clone a voice with just ~5 seconds of reference audio and its transcript.

https://github.com/user-attachments/assets/aca3f5e3-c458-4756-a44f-0a513cffe7f9

## Features

- **Fully On-Device and Offline**: Once models are downloaded, speech generation runs entirely on your phone with zero network requests or cloud dependency. Powered by WebGPU, with optional NPU hybrid acceleration on compatible Snapdragon devices.
- **Cross-Lingual Voice Cloning**: Reference audio and target generation languages are completely decoupled, enabling cross-lingual voice transfer (e.g., clone a voice from a Japanese clip and speak Chinese or English).
- **Direct GPT-SoVITS Weight Import**: Import `.ckpt` and `.pth` checkpoint files directly and convert them on-device, supporting V2 Pro, V2 Pro Plus, and V5 Turbo.
